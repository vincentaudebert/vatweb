export default `import React, { Component } from 'react';
import type { Props, WeatherProps, State } from './hobbies.flow.js';
import { random } from 'lodash';

class Hobbies extends Component<Props, State> {
  static MY_PASSION = 'Paragliding';
  static outdoorActivities = [
    'Hiking',
    'Skiing',
    'Wakeboarding',
    'Cycling'
  ];
  static indoorActivities = [
    'Climbing',
    'Badminton',
    'Read about Science',
    'Read about Politics',
    'Learn about History',
    'Keep developing and improving HowWindy.com'
    'Travel somewhere the weather is good',
  ];

  pickActivity(weather: WeatherProps) {
    if (weather.good) {
      if (weather.canFly) return MY_PASSION;

      return this.outdoorActivities[
        random(this.outdoorActivities.length - 1)
      ];
    }
    return this.indoorActivities[random(this.indoorActivities.length - 1)];
  }

  render() {
    const activity = this.pickActivity(this.props.weather);
    return (
      <div className="free-time">
        <p>I'm going to do {activity}</p>
      </div>
    );
  }
}

export default Hobbies;`;
