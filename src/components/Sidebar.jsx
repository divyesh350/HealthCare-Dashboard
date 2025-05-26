import React from 'react';
import { Home, Clock, Calendar, Heart, BarChart2, FlaskConical, MessageSquare, LifeBuoy, Settings } from 'lucide-react';
import { sidebarNavigation, settingLink } from '../data/navLinks';

const iconComponents = {
  Home,
  Clock,
  Calendar,
  Heart,
  BarChart2,
  FlaskConical,
  MessageSquare,
  LifeBuoy,
  Settings,
};

function Sidebar() {
  const renderLinks = (links) => (
    <ul className="space-y-3">
      {links.map((link) => {
        const Icon = iconComponents[link.icon];
        return (
          <li key={link.name} className="flex items-center gap-3 text-gray-600 hover:text-primary cursor-pointer transition-colors duration-200 px-2 py-2 rounded-md">
            {Icon && <Icon size={18} />}
            <span className="text-sm font-medium">{link.name}</span>
          </li>
        );
      })}
    </ul>
  );

  const SettingIcon = iconComponents[settingLink.icon];

  return (
    <aside className="bg-white w-60 min-h-screen px-4 py-8 shadow-sm hidden md:flex flex-col justify-between rounded-tl-2xl rounded-bl-2xl">
      <div>
        <div className="mb-10 px-2">
    
           <h1 className="text-2xl font-bold"><span className='text-cyan-400'>Health</span><span className='text-blue-800'>care.</span></h1>
        </div>

        {sidebarNavigation.map(sectionData => (
          <div key={sectionData.section} className="mb-6">
            <h3 className="text-gray-400 text-xs font-semibold mb-4 uppercase px-2">{sectionData.section}</h3>
            {renderLinks(sectionData.links)}
          </div>
        ))}
      </div>

    
      <div className="px-2">
        <div className="flex items-center gap-3 text-gray-600 hover:text-primary cursor-pointer transition-colors duration-200 px-2 py-2 rounded-md">
          {SettingIcon && <SettingIcon size={18} />}
          <span className="text-sm font-medium">{settingLink.name}</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
