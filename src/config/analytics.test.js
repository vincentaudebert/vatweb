import getGaId from './analytics';

const env = Object.assign({}, process.env);

describe('Analytics', () => {
  it('without env GA ID', () => {
    expect(getGaId()).toBe('UA-XXXXXXX-X');
  });

  it('with env GA ID', () => {
    const CUSTOM_ID = 'CUSTOM_ID';
    process.env.REACT_APP_GOOGLE_ANALYTICS_ID = CUSTOM_ID;
    expect(getGaId()).toBe(CUSTOM_ID);
  });

  afterEach(() => {
    process.env = env;
  });
});
