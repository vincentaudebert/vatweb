import React from 'react';
import './footer-bar.css';
import GoInfo from 'react-icons/lib/go/info';
import GoGitBranch from 'react-icons/lib/go/git-branch';
import GoCloudUpload from 'react-icons/lib/go/cloud-upload';
import GoCheck from 'react-icons/lib/go/check';
import GoAlert from 'react-icons/lib/go/alert';
import FaSmile from 'react-icons/lib/fa/smile-o';
import FaBell from 'react-icons/lib/fa/bell';
import TiDelete from 'react-icons/lib/ti/delete';

const FooterBar = props => {
  return (
    <div className="footer-bar row">
      <div className="col-4-sm left footer-bar--left">
        <a
          href="https://github.com/vincentaudebert/vatweb"
          target="_blank"
          className="reset-link footer-bar__info"
          title="Download my CV"
          rel="noopener noreferrer"
        >
          <GoGitBranch /> master (joke)
        </a>
        <span className="footer-bar__info">
          <GoCloudUpload />
        </span>
        <span className="footer-bar__info" title="Active Linters">
          <GoInfo /> ESLint, Standard
        </span>
        <span className="footer-bar__info" title="0 Warning">
          <TiDelete /> 0 <GoAlert /> 0
        </span>
      </div>
      <div className="col-4-sm" />
      <div className="col-4-sm right footer-bar--right">
        <span className="footer-bar__info">Spaces: 2</span>
        <span className="footer-bar__info">UTF-8</span>
        <span className="footer-bar__info">LF</span>
        <span className="footer-bar__info">JavaScript</span>
        <span className="footer-bar__info">
          Prettier:<GoCheck />
        </span>
        <a
          href="/assets/Vincent_Audebert_CV.pdf"
          target="_blank"
          className="reset-link footer-bar__info"
          title="Download my CV"
          rel="noopener noreferrer"
        >
          <FaSmile />
        </a>
        <span className="footer-bar__info" role="img" aria-label="Bell">
          <FaBell />
        </span>
      </div>
    </div>
  );
};

export default FooterBar;
