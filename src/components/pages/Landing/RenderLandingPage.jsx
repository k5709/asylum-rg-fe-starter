import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button, Pagination } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      <div className="graphs-section">
        <div className="graph-container">
          <img
            src={GrantRatesByOfficeImg}
            alt="Office Graph"
            className="graph-img"
          />
          <p className="graph-descriptions">Search Grant Rates By Office</p>
          {/* The idea here was to have the image and the description which is represented as a p tag in the same div with the classname="graphs-container".
              Reason being, this would allow for me to easily format the div in column fashion using display:flex; && flex-direction: column;
              Since these graph-container divs are all nested within the div with classname="graphs-section", all three column divs are then put into a row of columns */}
        </div>

        <div className="graph-container">
          <img
            src={GrantRatesByNationalityImg}
            alt="Nationality Graph"
            className="graph-img"
          />
          <p className="graph-descriptions">
            Search Grant Rates By Nationality
          </p>
        </div>

        <div className="graph-container">
          <img
            src={GrantRatesOverTimeImg}
            alt="Over Time Graph"
            className="graph-img"
          />
          <p className="graph-descriptions">Search Grant Rates Over Time</p>
        </div>
      </div>

      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
          className="data-buttons"
        >
          View the Data
        </Button>

        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
          className="data-buttons"
        >
          Download the Data
        </Button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}

        {/* Idea before implementing was to have 3 divs with the same classname for reusable code and easy styling. Similar to the implementation above,
            There is a h1 which represents the percentage, while the p tag represents the description.*/}
        <div className="bottom-section">
          <h1>Systemic Disparity Insights</h1>

          <div className="percentage-container">
            <div className="percentages-row">
              <h1>36%</h1>
              <p>
                By the end of the Trump administration, the average asylum
                office grant rate had fallen 36 percent from an average of 44
                percent in fiscar year 2016 to 28 percent in fiscal year 2020.
              </p>
            </div>

            <div className="percentages-row">
              <h1>5%</h1>
              <p>
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020.
              </p>
            </div>

            <div className="percentages-row">
              <h1>6x lower</h1>
              <p>
                Between fiscal year 2017 and 2020, the New York asylum office's
                average grant rate was six times lower than the San Francisco
                asylum office.
              </p>
            </div>
          </div>
        </div>
        <div className="read-more-button-container">
          <button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            className="readmore-button"
          >
            Read More
          </button>
        </div>

        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
