import React from 'react';
import { ImplementationSteps } from '@/components/implementation/ImplementationSteps';

export default function ImplementationPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Implementation Workflow</h2>
        <p className="text-slate-500 mt-1">Detailed step-by-step process of building the analytics system.</p>
      </div>

      <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm">
        <ImplementationSteps />
      </div>
    </div>
  );
}
