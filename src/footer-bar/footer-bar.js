import React from 'react';
import GoInfo from 'react-icons/lib/go/info';
import GoGitBranch from 'react-icons/lib/go/git-branch';
import GoCloudUpload from 'react-icons/lib/go/cloud-upload';
import GoCheck from 'react-icons/lib/go/check';
import MdWarning from 'react-icons/lib/md/warning';
import FaSmile from 'react-icons/lib/fa/smile-o';
import FaBell from 'react-icons/lib/fa/bell';
import TiDelete from 'react-icons/lib/ti/delete';
import './footer-bar.css';

const FooterBar = () => (
  <div className="footer-bar row">
    <div className="d-inline-block left footer-bar__left">
      <a
        href="https://github.com/vincentaudebert/vatweb"
        target="_blank"
        className="reset-link footer-bar__info"
        title="Download my CV"
        rel="noopener noreferrer"
      >
        <GoGitBranch className="icon--footer" /> master (joke)
      </a>
      <span className="footer-bar__info--lg">
        <GoCloudUpload className="icon--footer" />
      </span>
      <span className="footer-bar__info--lg" title="Active Linters">
        <GoInfo className="icon--footer" /> ESLint, Standard
      </span>
      <span className="footer-bar__info--lg" title="0 Warning">
        <TiDelete className="icon--footer-big" /> 0{' '}
        <MdWarning className="icon--footer-small" /> 0
      </span>
    </div>
    <div className="d-inline-block right footer-bar__right">
      <span className="footer-bar__info--lg">Spaces: 2</span>
      <span className="footer-bar__info--lg">UTF-8</span>
      <span className="footer-bar__info--lg">LF</span>
      <span className="footer-bar__info">JavaScript</span>
      <span className="footer-bar__info">
        Prettier:<GoCheck className="icon--footer" />
      </span>
      <a
        href="/assets/Vincent_Audebert_CV.pdf"
        target="_blank"
        className="reset-link footer-bar__info"
        title="Download my CV"
        rel="noopener noreferrer"
      >
        <FaSmile className="icon--footer" />
      </a>
      <span className="footer-bar__info--lg" role="img" aria-label="Bell">
        <FaBell className="icon--footer-small" />
      </span>
    </div>
  </div>
);

export default FooterBar;
