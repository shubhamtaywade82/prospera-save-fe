import PropTypes from 'prop-types';
import { ReactNode } from "react";

// third-party
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// ==============================|| CODE HIGHLIGHTER ||============================== //
interface SyntaxHighlightProps {
  children: ReactNode;
}
export default function SyntaxHighlight({ children, ...others }: SyntaxHighlightProps) {
  return (
    <SyntaxHighlighter language="javascript" showLineNumbers style={a11yDark} {...others}>
      {children}
    </SyntaxHighlighter>
  );
}

SyntaxHighlight.propTypes = {
  children: PropTypes.node
};
