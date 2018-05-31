export default `import React, { Component, Fragment } from 'react';
import type { Props } from './showcase-workshop.flow.js';

class ShowcaseWorkshop extends Component<Props, *> {
  constructor(props: Props) {
    const { setStartDate, setWorkLocation } = this.props;
    setStartDate('January 2013');
    setWorkLocation('Wellington, New Zealand');
  }

  componentDidMount() {
    const { setSkills, setContacts } = this.props;
    setSkills([
      'Javascript',
      'Backbone',
      'Python',
      'Web2Py',
      'RESTful API',
      'Unit tests',
      'Google Analytics API',
    ]);
    setContacts([
      {
        name: 'Paul Tuckey',
        role: 'manager',
        email: 'paul@tuckey.co.nz',
      },
      {
        name: 'Scott Kinnear',
        role: 'tester',
        email: 'kinnear.scott@gmail.com',
      },
    ]);
  }

  componentWillUnmount() {
    const { setEndDate } = this.props;
    setEndDate('July 2014');
  }

  render() {
    return (
      <Fragment>
        <p>
          During my tenure here, I have been a full-time employee, working
          primarily as a web developer on the Showcase Workshop back-office.
        </p>

        <div className="accomplishments">
          <ul>
            <li>
              <h3>Back-office developments</h3>
              <p>New features like user management, analytics, etc.</p>
              <p>User interface improvements</p>
              <p>Web services for applications</p>
              <p>Google Analytics API</p>
              <p>RESTful API to access some data</p>
            </li>
            <li>
              <h3>Research and Development on the company platform</h3>
              <p>
                Development of a geolocalization module based on Google Maps
              </p>
              <p>Integration of Zend to the company platform</p>
              <p>Study of HTML5</p>
            </li>
            <li>Documentation improvements</li>
            <li>Unit tests</li>
            <li>Testing for Android app</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default ShowcaseWorkshop;
`;
