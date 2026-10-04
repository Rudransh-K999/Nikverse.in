import React from 'react';
import { motion } from 'motion/react';

export interface SceneMeta {
  id: string;
  name: string;
  num: string;
}

export const SCENES_META: SceneMeta[] = [
  { id: 'home', name: 'HOME', num: '01' },
  { id: 'story', name: 'ABOUT', num: '02' },
  { id: 'uploads', name: 'UPLOADS', num: '03' }
];

interface ScenePagerIndicatorProps {
  activeIndex: number;
  onSelectScene: (index: number) => void;
}

export const ScenePagerIndicator: React.FC<ScenePagerIndicatorProps> = ({
  activeIndex,
  onSelectScene
}) => {
  return (
    <nav
      aria-label="Scene Pagination"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3.5 select-none pointer-events-auto"
    >
      {SCENES_META.map((scene, idx) => {
        const isActive = activeIndex === idx;

        return (
          <button
            key={scene.id}
            onClick={() => onSelectScene(idx)}
            className="group flex items-center gap-3 py-1 cursor-pointer focus:outline-none"
            aria-label={`Jump to ${scene.name}`}
          >
            {/* Hover Tooltip / Label */}
            <span
              className={`text-[11px] font-mono font-black tracking-widest transition-all duration-300 ${
                isActive
                  ? 'text-amber-400 opacity-100 translate-x-0 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                  : 'text-zinc-500 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
              }`}
            >
              {scene.num} {scene.name}
            </span>

            {/* Indicator Indicator Bar / Dot */}
            <div className="relative flex items-center justify-center w-5 h-5">
              {isActive ? (
                <motion.div
                  layoutId="active-scene-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-[0_0_14px_rgba(245,158,11,0.9)] border border-amber-300 flex items-center justify-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                </motion.div>
              ) : (
                <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-amber-400/80 group-hover:scale-125 transition-all duration-200" />
              )}
            </div>
          </button>
        );
      })}
    </nav>
  );
};
