import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import axios from 'axios';
import search from '../../images/search.png';
import ReactTicker from '../ReactTicker';
import SchedulerItem from '../SchedulerItem';

function Header() {
  const [response, setResponse] = useState();
  useEffect(
    () => () => {
      axios
        .get('https://community-open-weather-map.p.rapidapi.com/weather')
        .then(function(response) {
          // handle success
          console.log(response, 'yup');
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    [],
  );

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <header className="container-fluid">
            {/* TopBar Starts here */}
            <section className="top-bar row">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <p className="first">
                      {moment().format('ddd, MMM DD, YYYY')}
                    </p>
                    <p>SGT {moment().format(' h:mm a')}</p>
                    <p>
                      {/* <img src="images/sun-icon.svg" alt="icon" /> */}
                      Singapore 34°C/25°C
                    </p>
                  </div>
                  <div className="col-md-6 text-right d-flex d-md-flex login-sec align-items-center">
                    <p className="first">
                      <a href="javascript:;">Login or signup</a>
                    </p>
                    <p>
                      <a href="javascript:;">Subscribe</a>
                    </p>
                    <p className="pr-0">
                      <a href="javascript:;">Contribute With Us</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* TopBar Ends here */}
            {/* Header Menu Starts here */}
            <section className="middle-header row">
              <div className="container">
                <div className="row">
                  <div className="middle-nav">
                    <div className="col-8">
                      <span>Logo</span>
                    </div>
                    <div className="col-4 nav-page">
                      <a href="/home">Home</a>
                      <a href="/class">Class</a>
                      <a href="/topics">Topics</a>
                      <a href="#">Q&A</a>
                      <a href="#">Exam</a>
                      <a href="#">Podcasts</a>
                      <a href="#">
                        <img
                          src={search}
                          alt="search icon"
                          style={{
                            width: '15px',
                            height: '15px',
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Header Menu Ends here */}
          </header>
          <section className="flash-news row">
            <span className="exclusive">
              {/* <img src="images/star.svg" alt="icon" /> */}
              NEWS FEED
            </span>
            <div className="fl-news-item">
              <ReactTicker data={['value']} />
              {/* <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="javascript:;">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript:;">
                    Excepteur sint occaecat cupidatat non proident
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript:;">
                    Sed ut perspiciatis unde omnis iste natus error sit
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript:;">
                    Piciatis unde irure dolor in reprehenderit in voluptate
                  </a>
                </li>
              </ul>
             */}
            </div>
          </section>
        </div>
      </div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {moment().format('dddd MMM DD YYYY, h:mm a')}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Logo
            </a>
          </div>

          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  class
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Q& A
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" tabIndex={-1}>
                  Podcasts
                  <img
                    src={search}
                    alt="search icon"
                    style={{
                      width: '15px',
                      height: '15px',
                      marginLeft: '5px',
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
      {/* <div
          className="d-flex"
          style={{ overflow: 'auto', whiteSpace: 'nowrap', marginLeft: '10px' }}
        >
          <span>Exclusive1</span>&nbsp;|&nbsp;
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          &nbsp;|&nbsp;
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          &nbsp;|&nbsp;
          <span>Exclusive2</span>
        </div>
      </nav>
    */}
    </>
  );
}

export default Header;
