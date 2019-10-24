// @flow
import React from 'react';

type SvgProps = {
  className: string,
};

const SvgComponent = ({ className }: SvgProps) => (
  <svg viewBox="0 0 32 32" className={className}>
    <path d="M17.705 8H9s-2 .078-2 2v15s0 2 2 2l11-.004C22 27 22 25 22 25V13.509L17.705 8zM16 10v5h4v10H9V10h7zm5.509-6h-8.493S11 4.016 10.985 6H19v.454L22.931 11H24v12c2 0 2-1.995 2-1.995V9.648L21.509 4z" />
  </svg>
);

export default SvgComponent;
