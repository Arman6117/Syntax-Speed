import React from "react";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";

const CodeSnippetEditor = () => {
  return (
    <Card className="bg-gray-950 border-2 border-gray-800 resize">
      <CardContent className="flex flex-col p-0 h-72 w-[24rem]">
      <div className="flex gap-5 px-2 py-5">
          <div className="rounded-full bg-rose-600 size-4"></div>
          <div className="rounded-full bg-yellow-600 size-4"></div>
          <div className="rounded-full bg-green-600 size-4"></div>
        </div>
         <Textarea className="w-full border-none mt-1 h-full text-white"/>

      </CardContent>
    </Card>
  );
};

export default CodeSnippetEditor;
