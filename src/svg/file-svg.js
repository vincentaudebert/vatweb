// @flow
import React from 'react';

type SvgProps = {
  className: string,
};

const SvgComponent = ({ className }: SvgProps) => (
  <svg viewBox="0 0 32 32" className={className}>
    <path d="M20.938 4.031H7v23.938h10v-2H9V6.031h10v3h4v11h2V7.969l-4.062-3.938zm2.062 18h-2v2h-2v2h2v1.938h2v-2h2v-1.938h-2v-2z" />
  </svg>
);

export default SvgComponent;
