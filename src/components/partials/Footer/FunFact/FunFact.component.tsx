'use client';

import React, { useEffect, useState } from 'react';

import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';

import { Icons } from '@data';

const funFacts = [
  "☕ I've probably consumed enough coffee to power a small server farm",
  '🌙 I do my best coding between 10 PM and 2 AM - call it the magic hours',
  "🐛 I once spent 6 hours debugging, only to find a missing semicolon... we've all been there",
  "🎯 I can type 'git status' faster than I can say it out loud",
  '🔥 My code editor theme changes with my mood - currently vibing with dark mode',
  "🚀 I believe the best code is the code you don't have to write",
  "📚 I have 47 programming books and I've read... most of the first chapters",
  '🎮 I learned programming to create games, stayed for the web development',
  "🌍 I've debugged code in 3 different time zones in the same day",
  "💡 'Hello World' was my first program, but definitely not my last debugging session",
];

export const FunFact: React.FC = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 5000); // Change fact every 5 seconds

    return () => clearInterval(interval);
  }, [funFacts.length]);
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-muted/20 rounded-full border border-border/30">
      <Icons.Lightbulb className="h-3 w-3 text-primary shrink-0" />
      <div className="relative h-3.5 flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentFactIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-muted-foreground whitespace-nowrap max-w-xs sm:max-w-md md:max-w-lg truncate"
          >
            {funFacts[currentFactIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
