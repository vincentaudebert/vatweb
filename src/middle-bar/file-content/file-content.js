// @flow
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Tabs from '../tabs/tabs.container';
import type { fullFileType } from '../../app/app.types';

type FileContentProps = {
  currentFile: fullFileType,
};

const Component = (props: FileContentProps) => {
  const { currentFile: fullActiveFile } = props;
  const codeString = fullActiveFile ? fullActiveFile.content : '';

  return (
    <div>
      <Tabs />
      <div className="file-content">
        <SyntaxHighlighter language="jsx" showLineNumbers style={atomDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Component;
