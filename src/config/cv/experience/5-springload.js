export default `import React, { Component, Fragment } from 'react';
import type { Props } from './springload.flow.js';

class Springload extends Component<Props, *> {
  constructor(props: Props) {
    const { setStartDate, setWorkLocation } = props;
    setStartDate('October 2015');
    setWorkLocation('Wellington, New Zealand / Full Remote');
  }

  componentDidMount() {
    const { setSkills, setContacts } = this.props;
    setSkills([
      'Javascript',
      'ReactJS',
      'Redux',
      'Node.js',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Python',
      'Wagtail',
    ]);
    setContacts([
      {
        name: 'Thibaud Colas',
        role: 'front end director',
        email: 'thibaudcolas@gmail.com',
      },
      {
        name: 'Loic Teixeira',
        role: 'back-end developer',
        email: 'hello@lta.me',
      },
    ]);
  }

  componentWillUnmount() {
    const { setEndDate } = this.props;
    setEndDate('June 2018');
  }

  render() {
    return (
      <Fragment>
        <p>
          Front-end developer specialised in Javascript / React / Redux. I have
          been working on many different projects from nationwide banks to small
          web apps to help people to vote.
        </p>

        <div className="accomplishments">
          <ul>
            <li>
              https://www.votelocal.nz/ - Awesome React app to help democracy in
              New Zealand. Award winning app.
            </li>
            <li>
              http://www.onthefence.co.nz/ - revamp of VoteLocal for the General
              Elections. Big national success on the target population.
            </li>
            <li>
              https://www.kiwibank.com/ - Redesigning of few calculators using
              React/Redux
            </li>
            <li>
              Kiwibank Kiwi Wealth, Wellington Airport, NZ Festival,
              Inquisitive.com, etc.{' '}
            </li>
            <li>
              Also contributed a lot to open source community through Wagtail
              CMS (Python/Django based) and small projects like
              https://github.com/springload/react-accessible-accordion
              https://github.com/springload/springtunes
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Springload;
`;
