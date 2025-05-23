import React from "react";
import FilterSelector from "./filter-selector";
import CodeSnippetCard from "./code-snippet-card";
import CodeSnippetEditor from "./code-snippet-editor";
import InteractiveKeyboard from "./interactive-keyboard";

const MainContent = () => {
  return (
    <main className="h-screen w-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="flex h-full w-full justify-center items-center">
        <div className="flex flex-col">
          <FilterSelector />
          <div className="flex gap-5 mt-5">
            <CodeSnippetEditor />
            <CodeSnippetCard />
          </div>
          <InteractiveKeyboard/>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
