import React from 'react';
import { SWMIcon } from 'react-swm-icon-pack';

export const Icon = ({ type, className, size = 16, color, set, stroke }) => {
  const classes = [className && className, "fbr--icon"].join(' ').trim();
  return (
    <span className={classes}>
      <SWMIcon
        name={type || "Circle"}
        color={color || "currentColor"}
        set={set || "oultine"}
        size={size || 16}
        strokeWidth={stroke || 2}
      />
    </span>
  );
}