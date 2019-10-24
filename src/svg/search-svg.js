// @flow
import React from 'react';

type SvgProps = {
  className: string,
};

const SvgComponent = ({ className }: SvgProps) => (
  <svg viewBox="0 0 32 32" className={className}>
    <path d="M19.23 4.095c-4.842 0-8.769 3.928-8.769 8.771 0 1.781.539 3.43 1.449 4.815 0 0-5.482 5.455-7.102 7.102-1.621 1.646 1.001 4.071 2.602 2.409 1.602-1.659 7.006-7.005 7.006-7.005a8.726 8.726 0 0 0 4.814 1.45 8.773 8.773 0 0 0 8.772-8.771c.001-4.844-3.927-8.771-8.772-8.771zm0 15.035a6.265 6.265 0 1 1 0-12.529 6.264 6.264 0 1 1 0 12.529z" />
  </svg>
);

export default SvgComponent;
