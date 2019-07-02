import React from 'react';
import LinkIconWrapper from './link-icon-wrapper';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterSection = (props) => {
  const gmail = {
    icon: faEnvelope,
    url: 'mailto:martin.petrla@gmail.com'
  };
  const linkedIn = {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/martin-petrla/'
  };
  const github = {
    icon: faGithub,
    url: 'https://github.com/martinptrl'
  };
  const links = [gmail, github, linkedIn];

  return (
    <div className="page-view footer-section">
      {links.map(link => <LinkIconWrapper icon={link.icon} url={link.url}/>)}
    </div>
  );
};

export default FooterSection;