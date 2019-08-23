import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import WidgetsChartsBoxes from './ChartBoxes';

const Widgets = ({ match }) => (
  <Fragment>
    <AppHeader />

    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route
            path={`${match.url}/dashboard-boxes`}
            component={WidgetsChartsBoxes}
          />
        </div>

        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Widgets;
