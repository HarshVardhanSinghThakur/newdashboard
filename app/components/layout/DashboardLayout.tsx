// components/layout/DashboardLayout.tsx
'use client';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-dark-background">
      <Sidebar currentPath={pathname} />
      <div className="flex-1 flex flex-col">
        <header className="md:hidden bg-dark-paper border-b border-gray-800 p-4">
          <h1 className="text-xl font-bold text-dark-text">Dashboard</h1>
        </header>
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}