export const APPLICATION_LOCATION_SET = 'APPLICATION_LOCATION_SET';
export const APPLICATION_LOCALE_SET = 'APPLICATION_LOCALE_SET';
export const APPLICATION_TRACKING_ALLOWED_SET = 'APPLICATION_TRACKING_ALLOWED_SET';
export const APPLICATION_LAUNCH_PAGE_SET = 'APPLICATION_LAUNCH_PAGE_SET';
export const APPLICATION_NEW_USER_SET = 'APPLICATION_NEW_USER_SET';

export const setLocation = (location) => (dispatch) => {
  dispatch({
    type: APPLICATION_LOCATION_SET,
    location,
  });
};

export const setLocale = (locale) => (dispatch) => {
  dispatch({
    type: APPLICATION_LOCALE_SET,
    locale,
  });
};

export const setTrackingAllowed = (trackingAllowed) => ({
  type: APPLICATION_TRACKING_ALLOWED_SET,
  trackingAllowed,
});

export const setLaunchPage = (data) => (dispatch, getState) => {
  dispatch({
    type: APPLICATION_LAUNCH_PAGE_SET,
    data,
    location: getState().application.location,
  });
};

export const setNewUser = ({ visitDate }) => (dispatch) => {
  dispatch({
    type: APPLICATION_NEW_USER_SET,
    visitDate,
  });
};
