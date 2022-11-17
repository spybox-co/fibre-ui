import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Icon } from '../Icon';
import './SectionBumper.scss';


export const SectionBumper = ({ 
  type = 'default', 
  label,
  mode = 'light',
}) => {
  const myRef = useRef(null);
  const [hovered, setHovered] = useState();
  const scrollSettings = {
    behavior: 'smooth',
    block: 'center' // start (default), center, end, nearest
    // inline: 'nearest'
  };
  const executeScroll = () => myRef.current.scrollIntoView(scrollSettings);
  // run this function from an event handler or an effect to execute scroll
  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true);
      },
      onMouseOut() {
        setHovered(false);
      }
    }),
    []
  );
  useEffect(() => {
    if (hovered) {
      executeScroll();
    }
  }, [hovered]);

  const bumperTypeVariant =
    (type === 'primary' && 'fbr--button--primary') ||
    (type === 'default' && 'fbr--button--default') ||

    // To-Do
    (type && `fbr--button--custom ${type}`);

  const classes = {
    root: ['fbr--bumper', bumperTypeVariant, hovered && 'hover'].join(' ').trim()
  };

  return (
    <div {...eventHandlers} ref={myRef} className={classes.root}>
      <div>
        {/* <div>↓</div> Glyph */}
        <Icon type="ArrowDown" />
        <div>Load more</div>
      </div>
    </div>
  );
};