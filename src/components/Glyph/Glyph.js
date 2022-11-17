import React from 'react';
import './Glyph.scss';

const unicodeToStr = (glyph) => {
  return glyph.codePointAt(0).toString(16);
};



export const Glyph = ({ type = '\u2661', className }) => {




  // const id = `glyph-${unicodeToStr(glyph)}`;
  // const symbol = `${unicodeToStr(glyph)}`;


  const classes = [
    className ? className : null,
    'fbr--glyph',
  ].join(' ').trim();


  return (
      <span className={classes}>
        {type}
      </span>
  );

};