import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import axios from 'axios';
import search from '../../images/search.png';

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
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
    </>
  );
}

export default Header;
