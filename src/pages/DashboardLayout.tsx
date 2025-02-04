import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Upload, Building2, FileText, 
  Briefcase, Settings, LogOut 
} from 'lucide-react';

const sidebarLinks = [
  { 
    icon: LayoutDashboard, 
    label: 'Dashboard', 
    path: '/dashboard' 
  },
  { 
    icon: Upload, 
    label: 'Upload Centre', 
    path: '/dashboard/upload' 
  },
  { 
    icon: Building2, 
    label: 'Universities', 
    path: '/dashboard/universities' 
  },
  { 
    icon: FileText, 
    label: 'Documents Status', 
    path: '/dashboard/documents' 
  },
  { 
    icon: Briefcase, 
    label: 'Other Services', 
    path: '/dashboard/services' 
  },
  { 
    icon: Settings, 
    label: 'Settings', 
    path: '/dashboard/settings' 
  },
  { 
    icon: LogOut, 
    label: 'Logout', 
    path: '/logout' 
  }
];

export function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-[#0A1628] pt-16">
      {/* Left Sidebar */}
      <div className="fixed left-0 w-64 h-[calc(100vh-64px)] bg-[#0A1628] top-16">
        <div className="flex flex-col h-full py-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-3 px-6 py-3 transition-colors ${
                location.pathname === link.path
                  ? 'bg-blue-500/10 text-blue-400'
                  : 'text-gray-400 hover:bg-gray-800/50'
              }`}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 p-6">
        <Outlet />
      </div>
    </div>
  );
} 