import APOCOPE from './cv/experience/1-apocope';
import ALLIANZ from './cv/experience/2-allianz';
import SHOWCASE_WORKSHOP from './cv/experience/3-showcase-workshop';
import PIKPOK from './cv/experience/4-pikpok';
import SPRINGLOAD from './cv/experience/5-springload';
import SMOOTHCODE from './cv/experience/6-smooth-code';
import EDUCATION from './cv/education';
import HOBBIES from './cv/hobbies';
import ME from './cv/me';
import WELCOME from './cv/welcome';

export default [
  {
    name: 'experience',
    type: 'folder',
  },
  {
    name: '1-apocope.js',
    content: APOCOPE,
    type: 'file',
    language: 'react',
    inFolder: true,
  },
  {
    name: '2-allianz.js',
    content: ALLIANZ,
    type: 'file',
    language: 'react',
    inFolder: true,
  },
  {
    name: '3-showcase-workshop.js',
    content: SHOWCASE_WORKSHOP,
    type: 'file',
    language: 'react',
    inFolder: true,
  },
  {
    name: '4-pikpok.js',
    content: PIKPOK,
    type: 'file',
    language: 'react',
    inFolder: true,
  },
  {
    name: '5-springload.js',
    content: SPRINGLOAD,
    type: 'file',
    language: 'react',
    inFolder: true,
  },
  {
    name: '6-smooth-code.js',
    content: SMOOTHCODE,
    type: 'file',
    language: 'react',
    inFolder: true,
  },
  {
    name: 'education.js',
    content: EDUCATION,
    type: 'file',
    language: 'react',
    inFolder: false,
  },
  {
    name: 'hobbies.js',
    content: HOBBIES,
    type: 'file',
    language: 'react',
    inFolder: false,
  },
  {
    name: 'me.js',
    content: ME,
    type: 'file',
    language: 'react',
    inFolder: false,
  },
  {
    name: 'welcome.json',
    content: WELCOME,
    type: 'file',
    language: 'json',
    inFolder: false,
  },
];
