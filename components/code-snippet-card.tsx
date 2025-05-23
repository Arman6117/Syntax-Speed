import React from "react";
import { Card, CardContent } from "./ui/card";

import { easy, hacker, hard } from "@/lib/static";
const CodeSnippetCard = () => {
  const easySnip = easy[0];
  const hardSnip = hard[0];
  const hackerSnip = hacker[0];
  return (
    <Card className="bg-gray-950 border-2 border-gray-800 resize" >
      <CardContent className="flex flex-col p-5 h-72 w-auto max-w-md">
        <div className="flex gap-5">
          <div className="rounded-full bg-rose-600 size-4"></div>
          <div className="rounded-full bg-yellow-600 size-4"></div>
          <div className="rounded-full bg-green-600 size-4"></div>
        </div>
        <pre className="flex-1 mt-5 overflow-auto rounded-md bg-gray-900 p-3 text-sm text-white whitespace-pre-wrap break-words">
          <code>{hardSnip}</code>
        </pre>
      </CardContent>
    </Card>
  );
};

export default CodeSnippetCard;
