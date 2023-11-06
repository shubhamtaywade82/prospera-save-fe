import { forwardRef, ReactNode } from 'react';
import { Box, Grow, Fade } from '@mui/material';

interface TransitionsProps {
  children: ReactNode;
  type: 'grow' | 'fade' | 'collapse' | 'slide' | 'zoom';
  position: 'top-left' | 'top-right' | 'top' | 'bottom-left' | 'bottom-right' | 'bottom';
}

const Transitions = forwardRef((props: TransitionsProps, ref) => {
  const { children, position, type, ...others } = props;

  // Validate type and position
  if (!['grow', 'fade', 'collapse', 'slide', 'zoom'].includes(type)) {
    throw new Error('Invalid type prop');
  }

  if (!['top-left', 'top-right', 'top', 'bottom-left', 'bottom-right', 'bottom'].includes(position)) {
    throw new Error('Invalid position prop');
  }

  let positionSX = {
    transformOrigin: '0 0 0',
  };

  switch (position) {
    case 'top-right':
    case 'top':
    case 'bottom-left':
    case 'bottom-right':
    case 'bottom':
    case 'top-left':
    default:
      positionSX = {
        transformOrigin: '0 0 0',
      };
      break;
  }

  return (
    <Box ref={ref}>
      {type === 'grow' && (
        <Grow {...(others as any)}>
          <Box sx={positionSX}>{children}</Box>
        </Grow>
      )}
      {type === 'fade' && (
        <Fade
          {...(others as any)}
          timeout={{
            appear: 0,
            enter: 300,
            exit: 150,
          }}
        >
          <Box sx={positionSX}>{children}</Box>
        </Fade>
      )}
    </Box>
  );
});

export default Transitions;
