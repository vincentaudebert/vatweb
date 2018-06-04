// @flow
const getGaId = (): string => {
  let gaId = 'UA-XXXXXXX-X';
  if (process.env.GOOGLE_ANALYTICS_ID) {
    gaId = process.env.GOOGLE_ANALYTICS_ID;
  }
  return gaId;
};

export default getGaId;
