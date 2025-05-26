import React from 'react';
import { Search, Bell, User, Plus } from 'lucide-react';
import userAvatar from '../assets/user.png';

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center">
        
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-80">
            <Search size={18} className="text-gray-500 mr-2" />
            <input type="text" placeholder="Search" className="bg-transparent outline-none text-sm text-gray-700 w-full" />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Bell size={20} className="text-gray-700 cursor-pointer" />
          <div className="flex items-center gap-2">
            
             
            <img src={userAvatar} alt="User Avatar" className="w-9 h-9 rounded-full object-cover" />
             
            
          </div>
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer flex-shrink-0">
            <Plus size={20} />
          </div>
        </div>
      </header>
    );
  }

  export default Header;
