// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import Helmet from 'react-helmet';

import '../services/i18n';
import { store, persistor } from '../store';
import NoMatchComponent from '../components/NoMatch';
import { theme } from '../styles/theme';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/common/LoadingSpinner';
import GlobalStyle from '../styles/globalStyle';
import history from '../services/RoutingService';
// import LoadableComponent from '../components/LoadableComponent';

const NasaApp = () => (
  <Provider store={store}>
    <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <ErrorBoundary>
              <Helmet
                defer={false}
                htmlAttributes={{ lang: 'en' }}
                encodeSpecialCharacters
                defaultTitle="Nasa APP"
                titleTemplate="Nasa APP"
                titleAttributes={{ itemprop: 'nasa', lang: 'en' }}
              />
              <Switch>
                <Route component={NoMatchComponent} />
              </Switch>
              <GlobalStyle />
            </ErrorBoundary>
          </React.Fragment>
        </ThemeProvider>
      </Router>
    </PersistGate>
  </Provider>
);

export default NasaApp;
