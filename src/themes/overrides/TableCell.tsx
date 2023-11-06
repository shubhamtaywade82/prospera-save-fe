// ==============================|| OVERRIDES - TABLE CELL ||============================== //

import { SxProps, Theme } from '@mui/system';

type TableCellStyleOverrides = (theme: Theme) => {
  MuiTableCell: SxProps<Theme>;
};

const TableCell: TableCellStyleOverrides = (theme) => ({
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontSize: '0.875rem',
        padding: 12,
        borderColor: theme.palette.divider
      },
      head: {
        fontWeight: 600,
        paddingTop: 20,
        paddingBottom: 20
      }
    }
  }
});

export default TableCell;