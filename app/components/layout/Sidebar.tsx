// components/layout/Sidebar.tsx
'use client';
import Link from 'next/link';
import { LayoutDashboard, BarChart2, FileText } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { id: 'analytics', label: 'Analytics', icon: BarChart2, href: '/analytics' },
  { id: 'content', label: 'Content', icon: FileText, href: '/content' }
];

export default function Sidebar({ currentPath }: { currentPath: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-20 p-2 rounded-lg bg-dark-paper text-dark-text"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`
        fixed md:relative
        inset-y-0 left-0
        transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        transition duration-200 ease-in-out
        w-64 bg-dark-paper border-r border-gray-800
        z-10
      `}>
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold text-dark-text">Dashboard</h1>
        </div>
        <nav className="flex-1 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  w-full flex items-center space-x-2 px-4 py-2 rounded-lg mb-2
                  ${currentPath === item.href 
                    ? 'bg-dark-primary bg-opacity-20 text-dark-primary' 
                    : 'hover:bg-dark-paper hover:bg-opacity-50'}
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-0"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}