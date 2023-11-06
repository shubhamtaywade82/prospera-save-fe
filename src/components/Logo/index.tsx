import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// project import
import Logo from './Logo';
import config from '../../config';
import { activeItem } from '../../store/reducers/menu';

// Define the type for the state object
type RootState = {
  menu: {
    defaultId: string; // Replace with the actual type of defaultId
  };
};

// ==============================|| MAIN LOGO ||============================== //

interface LogoSectionProps {
  sx?: React.CSSProperties;
  to?: string;
}

const LogoSection = ({ sx, to }: LogoSectionProps) => {
  const { defaultId } = useSelector((state: RootState) => state.menu); // Specify the type of state
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      component={Link}
      onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
      to={!to ? config.defaultPath : to}
      sx={sx}
    >
      <Logo />
    </ButtonBase>
  );
}

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string,
};

export default LogoSection;
