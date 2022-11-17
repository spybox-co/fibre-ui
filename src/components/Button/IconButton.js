import Button from './Button';

export const IconButton = props => {
    const { 
       renderIcon,
       ...other 
    } = props

    return (
      <Button
        hasOnlyIcon
        renderIcon={renderIcon}
        {...other}
      />
    );
}

