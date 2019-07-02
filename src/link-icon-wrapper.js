import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkIconWrapper = ({icon, url}) => {
  const target = url.startsWith('mailto:') ? undefined : '_blank';
  return (
    <a className="icon-wrapper" href={url} target={target}>
      <FontAwesomeIcon icon={icon} size={"3x"} />
    </a>
  )
};

export default LinkIconWrapper;