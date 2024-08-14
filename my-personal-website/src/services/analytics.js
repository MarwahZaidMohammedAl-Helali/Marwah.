// src/services/analytics.js

import ReactGA from 'react-ga'; // Google Analytics library

const TRACKING_ID = 'your_tracking_id'; // Replace with your Google Analytics tracking ID

export const initializeAnalytics = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const logEvent = (category, action, label = '') => {
  ReactGA.event({
    category,
    action,
    label
  });
};
