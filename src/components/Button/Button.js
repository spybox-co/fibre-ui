import { Icon } from '../Icon';
import './Button.scss';


// @See IBM inspiration
// https://github.com/carbon-design-system/carbon/blob/main/packages/react/src/components/Button/Button.js

export const Button = ({
  children,
  className,
  label,
  onClick,
  renderIcon,
  type,
  hasOnlyIcon,
  anchor,
  disabled,
  mode = 'light',
  ...other
}) => {
const buttonTypeVariant =
  (type === 'primary' && 'fbr--button--primary') ||
  (type === 'secondary' && 'fbr--button--secondary') ||
  (type === 'tertiary' && 'fbr--button--tertiary') ||
  (type === 'ghost' && 'fbr--button--ghost') ||
  (type === 'danger' && 'fbr--button--danger') ||
  (type === 'warning' && 'fbr--button--warning') ||
  (type === 'green' && 'fbr--button--green') ||
  (type === 'orange' && 'fbr--button--orange') ||
  // To-Do
  (type && `fbr--button--custom ${type}`);

const classes = [
  className ? className : null,
  'fbr--button',
  hasOnlyIcon && 'fbr--button--icon-only',
  type ? buttonTypeVariant : 'fbr--button--default',
  disabled && 'fbr--button--disabled'
].join(' ').trim();

  return(
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      data-mode={mode}
      {...other}>
      {!children && label && label}
      {!hasOnlyIcon && !label && children && children}
      {renderIcon && RenderIconComponent(renderIcon)}
    </button>
  )
}



const RenderIconComponent = (icon) => {
  if (typeof icon === 'string') {
    return (
      <Icon
        className="fbr--button__icon"
        type={icon}
        stroke={1.75}
        size={20}
      />
    );
  }
  if (typeof icon === 'function') {
    return icon;
  }
  return null;
};