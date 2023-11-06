import { Suspense, ReactElement } from 'react';

// project import
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

type LoadableProps = {
  [key: string]: any;
};

type LoadableComponent = (props: LoadableProps) => ReactElement;

const Loadable = (Component: LoadableComponent) => (props: LoadableProps) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
