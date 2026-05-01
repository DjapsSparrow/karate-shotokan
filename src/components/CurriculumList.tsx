import React, { useState } from 'react';

interface Lesson {
  name: string;
  duration: string;
}

interface Module {
  title: string;
  stats: string;
  lessons: Lesson[];
}

interface Props {
  modules: Module[];
  color?: string;
}

const CurriculumList: React.FC<Props> = ({ modules, color = "martial-red" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  return (
    <div className="space-y-6">
      {modules.map((module, idx) => {
        const isOpen = openIndex === idx;
        
        return (
          <div key={idx} className="bg-white dark:bg-black/20 border border-gray-100 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-sm">
            <button 
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full px-8 py-6 bg-martial-gray dark:bg-white/5 border-b border-gray-100 dark:border-white/10 flex items-center justify-between text-left transition-colors hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <div>
                <h2 className="font-black text-lg uppercase tracking-tight text-martial-black dark:text-white">{module.title}</h2>
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">{module.stats}</p>
              </div>
              <div className={`w-8 h-8 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </button>
            
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="p-4">
                <ul className="space-y-1">
                  {module.lessons.map((lesson, lIdx) => (
                    <li key={lIdx} className="flex items-center justify-between p-4 rounded-xl hover:bg-martial-gray dark:hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 bg-gray-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:bg-${color} group-hover:text-white transition-colors`}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-martial-black dark:group-hover:text-white transition-colors">{lesson.name}</span>
                      </div>
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-500 font-mono">{lesson.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurriculumList;
