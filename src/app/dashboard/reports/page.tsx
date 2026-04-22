import React from 'react';
import { DownloadCloud, FileText, Filter } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    { title: "End of Semester Results", date: "April 2026", type: "PDF" },
    { title: "Subject-wise Performance", date: "March 2026", type: "Excel" },
    { title: "Student Attendance Log", date: "Q1 2026", type: "CSV" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Generated Reports</h2>
          <p className="text-slate-500 mt-1">Download and view analytical reports.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
            <FileText size={18} />
            <span>New Report</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-5 font-semibold text-slate-600">Report Name</th>
                <th className="p-5 font-semibold text-slate-600">Period</th>
                <th className="p-5 font-semibold text-slate-600">Format</th>
                <th className="p-5 font-semibold text-slate-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reports.map((report, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <FileText size={20} />
                      </div>
                      <span className="font-medium text-slate-800">{report.title}</span>
                    </div>
                  </td>
                  <td className="p-5 text-slate-500">{report.date}</td>
                  <td className="p-5">
                    <span className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                      {report.type}
                    </span>
                  </td>
                  <td className="p-5 text-right">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <DownloadCloud size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
