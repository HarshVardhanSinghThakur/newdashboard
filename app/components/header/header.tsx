import React from "react";
import { Bell, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-md border-b border-gray-700 text-white">
      {/* Left - Company Name */}
      <h1 className="text-2xl font-bold tracking-wide">Textify</h1>

      {/* Right - Icons */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-800 transition">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 transition">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 transition">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
