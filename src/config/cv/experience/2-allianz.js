export default `import React, { Component, Fragment } from 'react';
import type { Props } from './allianz.flow.js';

class Allianz extends Component<Props, *> {
  constructor(props: Props) {
    const { setStartDate, setWorkLocation } = this.props;
    setStartDate('September 2010');
    setWorkLocation('Paris, France');
  }

  componentDidMount() {
    const { setSkills } = this.props;
    setSkills([
      'Project Management',
      'Testing',
      'Quality Control',
      'Monitoring',
      'Documentation',
      'Proof of concept',
    ]);
  }

  componentWillUnmount() {
    const { setEndDate } = this.props;
    setEndDate('September 2012');
  }

  render() {
    return (
      <Fragment>
        <p>
          During this tenure, I was an apprentice, working primarily as an
          assistant project manager on Allianz.fr website.
        </p>

        <div className="accomplishments">
          <ul>
            <li>
              <h3>Project management</h3>
              <p>Preparation of technical specifications</p>
              <p>Quality control of new versions of Allianz.fr</p>
              <p>Development of monitoring tools</p>
            </li>
            <li>
              <h3>Development of a proof of concept</h3>
              <p>Mobile website for Allianz</p>
            </li>
            <li>
              <h3>Intranet website mapping</h3>
              <p>Contacting people involved in the project</p>
              <p>
                Preparation of system scheme and links between system
                applications
              </p>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Allianz;
`;
