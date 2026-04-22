import React from 'react';
import { Database, Filter, PenTool, PieChart, UploadCloud, Users } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: "1. Data Collection",
    tasks: ["Import student profiles with IDs", "Gather raw marks and attendance", "Compile subject-wise datasets"],
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: Database,
    title: "2. Data Storage",
    tasks: ["Provision Azure SQL Database", "Design relational tables", "Load collected data securely"],
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    icon: Filter,
    title: "3. Data Processing",
    tasks: ["Cleanse null values and errors", "Remove duplicate records", "Prepare final dataset for analysis"],
    color: "text-violet-600",
    bg: "bg-violet-50"
  },
  {
    icon: PenTool,
    title: "4. Data Analysis",
    tasks: ["Connect Power BI to Azure SQL", "Apply DAX formulas", "Calculate Pass %, Avg Marks, Fails"],
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-50"
  },
  {
    icon: PieChart,
    title: "5. Visualization",
    tasks: ["Subject-wise bar charts", "Pass/Fail pie charts", "Trend analysis line charts", "Interactive KPI cards"],
    color: "text-rose-600",
    bg: "bg-rose-50"
  },
  {
    icon: UploadCloud,
    title: "6. Deployment",
    tasks: ["Publish to Power BI Service", "Generate embed URL", "Integrate into Next.js dashboard"],
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  }
];

export const ImplementationSteps = () => {
  return (
    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 mt-8 space-y-12">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <div key={idx} className="relative pl-8 md:pl-12 group">
            <div className={`absolute -left-[21px] top-1 h-10 w-10 rounded-full border-4 border-white ${step.bg} ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
              <Icon size={18} />
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 group-hover:border-blue-200 transition-colors">
              <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
              <ul className="space-y-3">
                {step.tasks.map((task, taskIdx) => (
                  <li key={taskIdx} className="flex items-start text-slate-600">
                    <span className={`mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-current ${step.color} opacity-70`} />
                    <span className="text-sm md:text-base">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
