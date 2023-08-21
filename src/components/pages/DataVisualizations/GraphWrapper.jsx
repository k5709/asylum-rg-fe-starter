import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CitizenshipMapAll from './Graphs/CitizenshipMapAll';
import CitizenshipMapSingleOffice from './Graphs/CitizenshipMapSingleOffice';
import TimeSeriesAll from './Graphs/TimeSeriesAll';
import OfficeHeatMap from './Graphs/OfficeHeatMap';
import TimeSeriesSingleOffice from './Graphs/TimeSeriesSingleOffice';
import YearLimitsSelect from './YearLimitsSelect';
import ViewSelect from './ViewSelect';
import axios from 'axios';
import { resetVisualizationQuery } from '../../../state/actionCreators';
import { colors } from '../../../styles/data_vis_colors';
import ScrollToTopOnMount from '../../../utils/scrollToTopOnMount';

const { background_color } = colors;

function GraphWrapper(props) {
  const { set_view, dispatch } = props;
  let { office, view } = useParams();
  if (!view) {
    set_view('time-series');
    view = 'time-series';
  }
  let map_to_render;
  if (!office) {
    switch (view) {
      case 'time-series':
        map_to_render = <TimeSeriesAll />;
        break;
      case 'office-heat-map':
        map_to_render = <OfficeHeatMap />;
        break;
      case 'citizenship':
        map_to_render = <CitizenshipMapAll />;
        break;
      default:
        break;
    }
  } else {
    switch (view) {
      case 'time-series':
        map_to_render = <TimeSeriesSingleOffice office={office} />;
        break;
      case 'citizenship':
        map_to_render = <CitizenshipMapSingleOffice office={office} />;
        break;
      default:
        break;
    }
  }

  function updateStateWithNewData(years, view, office, stateSettingCallback) {
    const fiscalEndpoint =
      'https://hrf-asylum-be-b.herokuapp.com/cases/fiscalSummary'; //instantiating the url to a variable for easier reading
    const citizenshipEndpoint =
      'https://hrf-asylum-be-b.herokuapp.com/cases/citizenshipSummary'; //instantiating the citizenship url to a variable for easier reading

    const params = {
      //takes cares of setting params for both `office` and `all`
      from: years[0],
      to: years[1],
      office: office || 'all',
    };

    const fiscalPromise = axios.get(fiscalEndpoint, { params }); //calling the fiscalEndpoint calling the fiscalEndpoint using the destructred params
    const citizenshipPromise = axios.get(citizenshipEndpoint, { params }); //calling the citizenshipEndpoint using the destructred params

    Promise.all([fiscalPromise, citizenshipPromise])
      .then(([fiscalCall, citizenshipCall]) => {
        //the resolved values of the promises `fiscalCall` and `citizenshipCall`
        fiscalCall.data['citizenshipResults'] = citizenshipCall.data; //setting the citizenshipCall data (response data from the API call)
        stateSettingCallback(view, office, [fiscalCall.data]); //after combining the data is called to update the state with the data
      })
      .catch(error => {
        console.log('Cannot fetch data', error); //catching and console.logging an `Cannot fetch data` error and error code
      });
  }

  const clearQuery = (view, office) => {
    dispatch(resetVisualizationQuery(view, office));
  };
  return (
    <div
      className="map-wrapper-container"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '50px',
        backgroundColor: background_color,
      }}
    >
      <ScrollToTopOnMount />
      {map_to_render}
      <div
        className="user-input-sidebar-container"
        style={{
          width: '300px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <ViewSelect set_view={set_view} />
        <YearLimitsSelect
          view={view}
          office={office}
          clearQuery={clearQuery}
          updateStateWithNewData={updateStateWithNewData}
        />
      </div>
    </div>
  );
}

export default connect()(GraphWrapper);
