export default `import React, { Component } from 'react';
import type { Props, State } from './education.flow.js';

class Education extends Component<Props, State> {
  state = {
    year: 1995,
  }

  componentDidUpdate() {
    const { getDegree } = this.props;
    const { year } = this.state;
    if (year === 2007) getDegree('A Levels, Scientific');
    if (year === 2009) getDegree('University of Paris-Sud — HND Computer Science');
    if (year === 2012) getDegree(\`University of Paris-Sud — Master's degree of Computer Science and corporate management\`);
  }

  componentWillUnmount() {
    const { travelTo } = this.props;
    travelTo('New Zealand');
  }

  incrementYear = (): void => {
    this.setState({
      year: this.state.year + 1;
    })
  }

  render() {
    return (
      <div className="student-life">
        <p>
          Attend lectures, read, write, learn, improve...
        </p>
        <button type="button" onClick={this.incrementYear}>Pass Year</button>
      </div>
    );
  }
}

export default Education;`;
