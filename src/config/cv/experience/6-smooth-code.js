export default `import React, { Component, Fragment } from 'react';
import type { Props } from './smooth-code.flow.js';

class SmoothCode extends Component<Props, *> {
  constructor(props: Props) {
    const { setStartDate, setWorkLocation } = props;
    setStartDate('September 2018');
    setWorkLocation('Bonneville, France / Full Remote');
  }

  componentDidMount() {
    const { setSkills, setContacts } = this.props;
    setSkills([
      'Javascript',
      'ReactJS',
      'Styled components',
      'HTML5',
      'CSS3',
      'Wordpress with Smooth.js',
    ]);
    setContacts([
      {
        name: 'Jérémy Sfez',
        role: 'Co-founder & manager',
        tel: '+33 (six) 28 92 63 4(two)',
      },
    ]);
  }

  componentWillUnmount() {
    const { setEndDate } = this.props;
    setEndDate('Still going');
  }

  render() {
    return (
      <Fragment>
        <p>
          Senior front-end developer specialised in Javascript / React.
          I have been mainly working for 10 months on a project for
          Scaleway as a detached front end developer, also helping them
          to structure their project and their team. I use cutting edge open
          source projects from Smooth Code.
        </p>

        <div className="accomplishments">
          <ul>
            <li>
              https://console.scaleway.com/login - Release the new
              web console to manage all the Scaleway services. Fully
              made in React technology and using various internal
              APIs from different services. It was a very challenging
              project.
            </li>
            <li>
              https://www.scaleway.com/ - Update their previous
              website to use Smooth JS - React for Wordpress.
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default SmoothCode;
`;
