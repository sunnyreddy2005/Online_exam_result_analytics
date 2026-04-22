import React from 'react';
import { Database, LineChart, LayoutDashboard, FileSpreadsheet, ArrowRight } from 'lucide-react';

const FlowNode = ({ icon: Icon, title, description, color, bg }: any) => (
  <div className={`flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm relative z-10 w-64 transition-transform duration-300 hover:-translate-y-2 group`}>
    <div className={`p-4 rounded-xl ${bg} ${color} mb-4 group-hover:scale-110 transition-transform`}>
      <Icon size={32} />
    </div>
    <h4 className="text-lg font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-sm text-slate-500 text-center">{description}</p>
  </div>
);

export const ArchitectureFlow = () => {
  const steps = [
    {
      icon: FileSpreadsheet,
      title: "Student Data",
      description: "Raw marks, attendance, subjects",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      icon: Database,
      title: "Azure SQL",
      description: "Structured cloud database",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: LineChart,
      title: "Power BI",
      description: "Data visualization and DAX processing",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      description: "Interactive KPI visualization",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ];

  const cards = [
    { title: "Azure SQL", desc: "Cloud storage for relational data mapping", color: "border-blue-200" },
    { title: "Power BI", desc: "Core engine for visual representation", color: "border-amber-200" },
    { title: "DAX", desc: "Data Analysis Expressions for KPI math", color: "border-emerald-200" },
    { title: "KPIs", desc: "Avg Marks, Pass %, Fail Count, Attendance", color: "border-indigo-200" }
  ];

  return (
    <div className="space-y-12">
      <div className="relative py-12 hide-scrollbar overflow-x-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 min-w-max px-4">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <FlowNode {...step} />
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex flex-col items-center justify-center text-slate-300">
                  <ArrowRight size={32} />
                </div>
              )}
              {idx < steps.length - 1 && (
                <div className="flex lg:hidden flex-col items-center justify-center text-slate-300 py-2">
                  <ArrowRight size={32} className="rotate-90" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className={`bg-white p-6 rounded-2xl border-l-4 ${card.color} shadow-sm hover:shadow-md transition-all`}>
            <h4 className="text-lg font-bold text-slate-800 mb-2">{card.title}</h4>
            <p className="text-slate-500 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
