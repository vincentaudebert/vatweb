export default `import React, { Component, Fragment } from 'react';
import type { Props } from './pikpok.flow.js';

class PikPok extends Component<Props, *> {
  constructor(props: Props) {
    const { setStartDate, setWorkLocation } = props;
    setStartDate('July 2014');
    setWorkLocation('Wellington, New Zealand');
  }

  componentDidMount() {
    const { setSkills, setContacts } = this.props;
    setSkills([
      'Javascript',
      'AngularJS',
      'Python',
      'Pyramid',
      'Sql Alchemy',
      'Unit tests',
      'Google Analytics API',
    ]);
    setContacts([
      {
        name: 'Jeremy Burgess',
        role: 'manager',
        email: 'jeremy@pikpok.com',
      },
    ]);
  }

  componentWillUnmount() {
    const { setEndDate } = this.props;
    setEndDate('October 2015');
  }

  render() {
    return (
      <Fragment>
        <p>
          I was in charge of the web development for an internal backoffice app
          to manage games, users, leaderboards, etc.
        </p>

        <div className="accomplishments">
          <ul>
            <li>
              Understand the needs from game developers and game managers.
            </li>
            <li>
              Migrate existing system to a newer version while improving the
              UI/UX.
            </li>
            <li>Use RESTful API to access some data</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default PikPok;
`;
