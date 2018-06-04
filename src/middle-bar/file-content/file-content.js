// @flow
import React from 'react';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import prism from 'react-syntax-highlighter/styles/prism/atom-dark';
import Tabs from '../tabs/tabs.container';
import type { fullFileType } from '../../app/app.types';

type FileContentProps = {
  currentFile: fullFileType,
};

const Component = (props: FileContentProps) => {
  const fullActiveFile = props.currentFile;
  const codeString = fullActiveFile ? fullActiveFile.content : '';

  registerLanguage('jsx', jsx);
  return (
    <div>
      <Tabs />
      <div className="file-content">
        <SyntaxHighlighter showLineNumbers language="jsx" style={prism}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Component;
