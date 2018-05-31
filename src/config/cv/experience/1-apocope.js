export default `import React, { Component, Fragment } from 'react';
import type { Props } from './apocope.flow.js';

class Apocope extends Component<Props, *> {
  constructor(props: Props) {
    const { setStartDate, setWorkLocation } = this.props;
    setStartDate('September 2008');
    setWorkLocation('Paris, France');
  }

  componentDidMount() {
    const { setSkills } = this.props;
    setSkills([
      'PHP',
      'Zend Framework',
      'Responsive design',
      'HTML5',
      'Unit tests',
      'R&D',
      'Geolocation',
    ]);
  }

  componentWillUnmount() {
    const { setEndDate } = this.props;
    setEndDate('September 2010');
  }

  render() {
    return (
      <Fragment>
        <p>
          During this tenure, I was an apprentice, working primarily as a web
          developer on many mobile website projects.
        </p>

        <div className="accomplishments">
          <ul>
            <li>
              <h3>Conception of mobile internet websites</h3>
              <p>Nespresso</p>
              <p>Carrefour</p>
              <p>Decathlon</p>
              <p>Nespresso</p>
            </li>
            <li>
              <h3>Research and Development on the company platform</h3>
              <p>
                Development of a geolocalization module based on Google Maps
              </p>
              <p>Integration of Zend to the company platform</p>
              <p>Study of HTML5</p>
            </li>
            <li>Unit tests</li>
            <li>Preparation of technical specifications</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Apocope;
`;
