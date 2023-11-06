// material-ui
import { alpha, Theme } from '@mui/material/styles';

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

// Define the type for the 'theme' parameter
type CustomShadowsTheme = Theme & {
  palette: {
    grey: {
      [key: string]: string;
    };
    // Add other properties if needed
  };
  // Add other theme properties if needed
};

const CustomShadows = (theme: CustomShadowsTheme) => ({
  button: `0 2px #0000000b`,
  text: `0 -1px 0 rgb(0 0 0 / 12%)`,
  z1: `0px 2px 8px ${alpha(theme.palette.grey[900], 0.15)}`
  // only available in paid version
});

export default CustomShadows;
