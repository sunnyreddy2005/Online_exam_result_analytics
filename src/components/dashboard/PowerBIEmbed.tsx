"use client";

import React, { useState } from 'react';
import { Loader2, Maximize2 } from 'lucide-react';

interface PowerBIEmbedProps {
  embedUrl: string;
  title: string;
}

export const PowerBIEmbed: React.FC<PowerBIEmbedProps> = ({ embedUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full min-h-[500px]">
      <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="font-semibold text-slate-800">{title}</h3>
        <button className="text-slate-400 hover:text-blue-600 transition-colors p-1 rounded-md hover:bg-blue-50">
          <Maximize2 size={18} />
        </button>
      </div>
      
      <div className="relative flex-1 bg-slate-50 min-h-[400px]">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10">
            <Loader2 className="h-10 w-10 text-blue-500 animate-spin mb-4" />
            <p className="text-sm font-medium text-slate-500 animate-pulse">Loading Analytics Dashboard...</p>
          </div>
        )}
        <iframe
          title={title}
          width="100%"
          height="100%"
          src={embedUrl}
          frameBorder="0"
          allowFullScreen={true}
          onLoad={() => setIsLoading(false)}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        ></iframe>
      </div>
    </div>
  );
};
