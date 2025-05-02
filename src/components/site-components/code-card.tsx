import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeCardProps {
  title?: string;
  language?: string;
  code: string | undefined;
  className?: string;
}

export const CodeCard: React.FC<CodeCardProps> = ({
  title,
  language = "tsx",
  code,
  className,
}) => {
  const [copied, setCopied] = useState(false);
  
  const onCopy = async () => {
    await navigator.clipboard.writeText(code || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-lg border border-gray-800 bg-gray-950 ${className} mt-5`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-gray-400" />
          <p className="text-sm font-medium text-gray-300">{title || language}</p>
        </div>
        <button
          onClick={onCopy}
          className="h-8 w-8 rounded-md p-0 flex items-center justify-center hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-gray-400" />
          )}
        </button>
      </div>
      <div className="overflow-auto h-96">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={true}
          customStyle={{
            margin: 0,
            padding: '1rem',
            backgroundColor: 'transparent',
            fontSize: '0.875rem',
            height: '100%',
          }}
          lineNumberStyle={{
            color: 'white',
            paddingRight: '1rem',
            userSelect: 'none',
          }}
        >
          {code || ""}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};