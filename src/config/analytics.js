// @flow
const getGaId = (): string => {
  let gaId = 'UA-XXXXXXX-X';
  if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
    gaId = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
  }

  return gaId;
};

export default getGaId;
