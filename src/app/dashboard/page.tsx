import React from 'react';
import { KPICard } from '@/components/dashboard/KPICard';
import { PowerBIEmbed } from '@/components/dashboard/PowerBIEmbed';
import { Users, FileText, BarChart3, TrendingUp, TrendingDown } from 'lucide-react';

export default function Dashboard() {
  const kpis = [
    {
      title: "Total Students",
      value: "1,248",
      icon: Users,
      trend: "5.2%",
      trendUp: true,
      colorClass: "text-blue-600",
      bgClass: "bg-blue-50"
    },
    {
      title: "Total Exams",
      value: "45",
      icon: FileText,
      trend: "12",
      trendUp: true,
      colorClass: "text-indigo-600",
      bgClass: "bg-indigo-50"
    },
    {
      title: "Average Marks",
      value: "76.4%",
      icon: BarChart3,
      trend: "2.1%",
      trendUp: true,
      colorClass: "text-emerald-600",
      bgClass: "bg-emerald-50"
    },
    {
      title: "Highest Marks",
      value: "98%",
      icon: TrendingUp,
      colorClass: "text-violet-600",
      bgClass: "bg-violet-50"
    },
    {
      title: "Lowest Marks",
      value: "34%",
      icon: TrendingDown,
      trend: "4%",
      trendUp: false,
      colorClass: "text-rose-600",
      bgClass: "bg-rose-50"
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Overview Dashboard</h2>
        <p className="text-slate-500 mt-1">Real-time insights and analytics for student performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {kpis.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 h-[600px]">
        <PowerBIEmbed 
          title="Student Performance Analytics" 
          embedUrl="https://app.powerbi.com/view?r=eyJrIjoiNTA3YTRkMGYtZjIxOC00MDBhLWE1MzEtOWE0YmViZWIwYTMzIiwidCI6IjgwOGNjODNlLWE1NDYtNDdlNy1hMDNmLTczYTFlYmJhMjRmMyIsImMiOjEwfQ%3D%3D" 
        />
      </div>
    </div>
  );
}
