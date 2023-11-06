// ==============================|| OVERRIDES - TAB ||============================== //

import { SxProps, Theme } from '@mui/system';

type TabStyleOverrides = (theme: Theme) => {
  MuiTab: SxProps<Theme>;
};

const Tab: TabStyleOverrides = (theme) => ({
  MuiTab: {
    styleOverrides: {
      root: {
        minHeight: 46,
        color: theme.palette.text.primary
      }
    }
  }
});

export default Tab;
