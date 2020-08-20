import { combineReducers } from 'redux';
import {
  APPLICATION_LOCATION_SET,
  APPLICATION_TRACKING_ALLOWED_SET,
  APPLICATION_LAUNCH_PAGE_SET,
  APPLICATION_LOCALE_SET,
} from './action';

const initialState = {
  endpoints: {
    api: process.env.BUILD_WED_API,
    frontGateway: process.env.BUILD_FRONT_GATEWAY,
  },
  desktopURLs: {
    giftcards: process.env.BUILD_DESKTOP_URL_GIFTCARDS,
    reviews: process.env.BUILD_DESKTOP_URL_REVIEWS,
    vouchers: process.env.BUILD_DESKTOP_URL_VOUCHERS,
    minisites: process.env.BUILD_DESKTOP_URL_MINISITES,
  },
  dalenys: {
    scriptURL: process.env.BUILD_DALENYS_SCRIPT_URL,
    id: process.env.BUILD_DALENYS_API_KEY_ID,
    value: process.env.BUILD_DALENYS_API_KEY_VALUE,
  },
  flagship: {
    accountId: process.env.BUILD_FLAGSHIP_ACCOUNT_ID,
  },
  google: {
    apiKey: process.env.BUILD_GOOGLE_API_KEY,
    apiSecret: process.env.BUILD_GOOGLE_API_SECRET,
    gtm: process.env.BUILD_GOOGLE_GTM,
  },
  allVariations: false,
  origin: 'http://localhost:8080',
  locale: 'fr_FR',
  location: 'HOME',
  trackingAllowed: false,
  testName: '0',
  testVersion: '0',
  screenType: 'Mobile',
  clientIP: '127.0.0.1',
  pwa: false,
  environment: 'WEB',
};

const application = (state = initialState, action) => {
  switch (action.type) {
    case APPLICATION_LOCATION_SET:
      return {
        ...state,
        location: action.location,
      };
    case APPLICATION_LOCALE_SET:
      return {
        ...state,
        locale: action.locale
      }
    case APPLICATION_TRACKING_ALLOWED_SET:
      return {
        ...state,
        trackingAllowed: action.trackingAllowed,
      };
    case APPLICATION_LAUNCH_PAGE_SET:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default combineReducers({
  application,
});
