export default `import React, { Component } from 'react';
import type { Props } from './home.flow.js';

class Home extends Component<Props, *> {
  constructor(props: Props) {
    super(props);
    const { setBirthdayDate, setBirthdayLocation } = props;
    setBirthdayDate('5 may 1989');
    setBirthdayLocation('Athis-mons, France');
  }

  componentDidMount() {
    const {
      setLocation,
      setPhoneNumber,
      setEmail,
      setLinkedInProfile,
    } = this.props;
    setLocation('Bonneville, France');
    setPhoneNumber('+33 7 72 41 88 58');
    setEmail('vincent@vatweb.fr');
    setLinkedInProfile('https://www.linkedin.com/in/vincentaudebert/');
    setGitHubProfile('https://github.com/vincentaudebert');
  }

  componentWillUnmount() {
    const { useOneLife, transformInto } = this.props;
    useOneLife();
    transformInto('eagle');
  }

  render() {
    return (
      <div className="summary">
        <p>
          I'm a front-end developer with more than 6 years of work experience in
          web development.
        </p>
        <p>
          I have worked in several projects as a web developer but also as an
          assistant project manager. This gives me a good knowledge of every
          aspect of a project and of what can make it a success.
        </p>
        <p>
          I have a strong passion to create cutting-edge and high quality
          websites, and the technical web development experience required to
          make it happen.
        </p>
        <p>I am working fully remotely since June 2017.</p>
      </div>
    );
  }
}

export default Home;`;
