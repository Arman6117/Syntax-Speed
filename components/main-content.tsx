'use client'
import React, { useState } from "react";
import CodeSnippetCard from "./code-snippet-card";
import CodeSnippetEditor from "./code-snippet-editor";
import InteractiveKeyboard from "./interactive-keyboard";

type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'hacker';

interface ThemeConfig {
  base: string;
  gradient: string;
  orb1: string;
  orb2: string;
  orb3: string;
}

interface MainContentProps {
  initialDifficulty?: DifficultyLevel;
  onDifficultyChange?: (difficulty: DifficultyLevel) => void;
}

const MainContent: React.FC<MainContentProps> = ({ 
  
}) => {
  const [difficulty, setDifficulty] = useState<DifficultyLevel>("easy");

  const getDifficultyTheme = (level: DifficultyLevel): ThemeConfig => {
    const themes: Record<DifficultyLevel, ThemeConfig> = {
      easy: {
        base: 'bg-slate-900',
        gradient: 'from-blue-900 via-cyan-900 to-cyan-800',
        orb1: 'bg-green-500',
        orb2: 'bg-emerald-500',
        orb3: 'bg-teal-500'
      },
      medium: {
        base: 'bg-slate-900',
        gradient: 'from-yellow-900 via-orange-900 to-amber-800',
        orb1: 'bg-yellow-500',
        orb2: 'bg-orange-500',
        orb3: 'bg-amber-500'
      },
      hard: {
        base: 'bg-slate-900',
        gradient: 'from-red-900 via-rose-900 to-pink-800',
        orb1: 'bg-red-500',
        orb2: 'bg-rose-500',
        orb3: 'bg-pink-500'
      },
      hacker: {
        base: 'bg-black',
        gradient: 'from-green-900 via-teal-900 to-lime-950',
        orb1: 'bg-gray-500',
        orb2: 'bg-slate-500',
        orb3: 'bg-zinc-500'
      }
    };
    return themes[level];
  };

  const handleDifficultyChange = (newDifficulty: DifficultyLevel): void => {
    setDifficulty(newDifficulty);
    // onDifficultyChange?.(newDifficulty);
  };

  const theme: ThemeConfig = getDifficultyTheme(difficulty);
  const difficultyLevels: DifficultyLevel[] = ['easy', 'medium', 'hard', 'hacker'];

  return (
    <main className={`min-h-screen relative overflow-hidden ${theme.base}`}>
   
      <div className="absolute inset-0">
       
        <div className={`absolute inset-0 bg-gradient-to-br bg- ${theme.gradient} opacity-80`}></div>
        
      
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${theme.orb1} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse`}></div>
        <div className={`absolute top-3/4 right-1/4 w-96 h-96 ${theme.orb2} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-96 h-96 ${theme.orb3} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000`}></div>
        
       
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
    
        <div className="absolute inset-0 opacity-20 bg-noise"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen p-4">
        <div className="flex flex-col">

          <div className="mb-4 flex justify-center">
            <div className="flex gap-2 bg-black/20 backdrop-blur-sm rounded-lg p-2">
              {difficultyLevels.map((level: DifficultyLevel) => (
                <button
                  key={level}
                  onClick={() => handleDifficultyChange(level)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    difficulty === level
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/60 hover:text-white/80 hover:bg-white/10'
                  }`}
                  type="button"
                  aria-pressed={difficulty === level}
                  aria-label={`Set difficulty to ${level}`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>
          

          <div className="flex gap-5 items-center justify-center mt-5">
            <CodeSnippetEditor />
            <CodeSnippetCard />
          </div>
          <InteractiveKeyboard />
        </div>
      </div>

      {/* Additional CSS for animations */}
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
    </main>
  );
};

export default MainContent;