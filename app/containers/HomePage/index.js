/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import Form from './Form';
import Input from './Input';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Banner from '../Banner';
import Card from '../../components/Card';
import tree from '../../images/tree.jpg';
const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };
  const [carddetails, setCarddetails] = useState([
    { img: tree, content: 'data', alt: 'bg-img' },
    { img: tree, content: 'data2', alt: 'bg-img' },
    { img: tree, content: 'data3', alt: 'bg-img' },
    { img: tree, content: 'data2', alt: 'bg-img' },
    { img: tree, content: 'data3', alt: 'bg-img' },
  ]);

  const [latestarticles, setLatestarticles] = useState([
    { img: tree, content: 'data', alt: 'bg-img' },
    { img: tree, content: 'data2', alt: 'bg-img' },
    { img: tree, content: 'data3', alt: 'bg-img' },
  ]);

  const [classarticles, setClassarticles] = useState([
    { img: tree, content: 'data', alt: 'bg-img' },
    { img: tree, content: 'data2', alt: 'bg-img' },
  ]);

  console.log(carddetails);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Academics application homepage" />
      </Helmet>
      {/* <div> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 banner-img">
            <Banner />
          </div>
          <div className="col-4 mt-2 trend">
            <h3>Trending</h3>
            {carddetails.length > 0
              ? carddetails.map(each => {
                  console.log(each);
                  return (
                    <>
                      <Card
                        img={each.img}
                        alt={each.alt}
                        content={each.content}
                        style={'none'}
                      />
                    </>
                  );
                })
              : 'please add something'}
          </div>
        </div>
        <div className="row latest">
          <div className="col-8">
            <h3>class XII</h3>
            {latestarticles.length > 0
              ? latestarticles.map(each => {
                  console.log(each);
                  return (
                    <>
                      <Card
                        img={each.img}
                        alt={each.alt}
                        content={each.content}
                        style={'none'}
                      />
                    </>
                  );
                })
              : 'please add something'}
          </div>
          <div className="col-4">ad space</div>
        </div>
        <div className="row latest" style={{ height: '300px' }}>
          <div className="col-8">
            <h3>class X</h3>
            {classarticles.length > 0
              ? classarticles.map(each => {
                  console.log(each);
                  return (
                    <>
                      <Card
                        img={each.img}
                        alt={each.alt}
                        content={each.content}
                        style={'none'}
                      />
                    </>
                  );
                })
              : 'please add something'}
          </div>
          <div className="col-4">ad space</div>
        </div>
        {/* <Form onSubmit={onSubmitForm}>
          <label htmlFor="username">
            <FormattedMessage {...messages.trymeMessage} />

            <Input
              id="username"
              type="text"
              placeholder="mxstbr"
              value={username}
              onChange={onChangeUsername}
            />
          </label>
        </Form> */}
      </div>
    </>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
