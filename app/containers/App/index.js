/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ClassPage from 'components/ClassPage';
import Topics from 'containers/Topics';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <>
      <Helmet titleTemplate="%s - Academics" defaultTitle="Academics">
        <meta name="description" content="Academics application" />
      </Helmet>
      <Header />
      {/* <HomePage /> */}
      <Switch>
        <Route path="/class" component={ClassPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/topics" component={Topics} />
      </Switch>
      <Footer />
      {/* <GlobalStyle /> */}
    </>
  );
}
