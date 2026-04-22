import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Network, Code2, FileBarChart2, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Architecture', href: '/dashboard/architecture', icon: Network },
  { name: 'Implementation', href: '/dashboard/implementation', icon: Code2 },
  { name: 'Reports', href: '/dashboard/reports', icon: FileBarChart2 },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const pathname = usePathname();

  return (
    <>
      <div 
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeSidebar}
      />
      
      <aside 
        className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-[#0f172a] border-r border-blue-100 dark:border-slate-800 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-[calc(100vh-4rem)] flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-16 flex items-center justify-between px-4 lg:hidden border-b border-blue-50 dark:border-slate-800">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">Menu</span>
          <button onClick={closeSidebar} className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 mt-2 px-3">
              Navigation
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    if (window.innerWidth < 1024) closeSidebar();
                  }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                    isActive 
                      ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 font-medium' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <Icon 
                    size={18} 
                    className={`${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`} 
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="p-4 m-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-blue-100 dark:border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="relative z-10">
            <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">System Status</h4>
            <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              All services operational
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
