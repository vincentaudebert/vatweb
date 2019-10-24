// @flow
import React from 'react';

type SvgProps = {
  className: string,
};

const SvgComponent = ({ className }: SvgProps) => (
  <svg viewBox="-10 -10 80 80" className={className}>
    <path d="M12.9 47.1H30V60H0V0h25.7v12.9H12.9v34.2zm4.2-4.2h25.7V17.1H17.1v25.8zM30 0v12.9h8.6V8.6h12.9v12.9h-4.3V30H60V0H30zm17.1 47.1H34.3V60H60V34.3H47.1v12.8z" />
  </svg>
);

export default SvgComponent;
