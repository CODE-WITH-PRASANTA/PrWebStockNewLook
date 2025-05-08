import React, { useState } from 'react';
import './SideBar.css';
import {
  Menu,
  X,
  LogOut,
  LayoutDashboard,
  PenLine,
  Trash2,
  FilePlus2,
  FileEdit,
  Settings2,
  PackageCheck,
  Wrench,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PrWebstockLogo from '../../../../Frontend/src/assets/Company-Logo.webp';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Post Blog', icon: <PenLine size={18} /> },
    { name: 'Delete Blog', icon: <Trash2 size={18} /> },
    { name: 'Create Jobs', icon: <FilePlus2 size={18} /> },
    { name: 'Edit Jobs', icon: <FileEdit size={18} /> },
    { name: 'Manage Projects', icon: <Settings2 size={18} /> },
    { name: 'Manage Products', icon: <PackageCheck size={18} /> },
    { name: 'Edit Service', icon: <Wrench size={18} /> },
  ];

  const handleNavigation = (item) => {
    setIsOpen(false); // Close sidebar on navigation
    const route = item.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${route}`);
  };

  return (
    <>
      <nav className="Admin-Slider-Navbar">
        <img src={PrWebstockLogo} alt="PR-WEBSTOCK" className="Admin-Slider-Logo" />
        <div className="Admin-Slider-MenuIcon" onClick={toggleSidebar}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      <div className={`Admin-Slider-Wrapper ${isOpen ? 'slide' : ''}`}>
        <aside className={`Admin-Slider-Sidebar ${isOpen ? 'open' : ''}`}>
          <div className="Admin-Slider-Top">
            <h1 className="Prwebstock-brand-name">PR WEBSTOCK</h1>
          </div>
          <ul className="Admin-Slider-List">
            {navItems.map((item, index) => (
              <li key={index} className="Admin-Slider-Item" onClick={() => handleNavigation(item.name)}>
                {item.icon}
                <span style={{ marginLeft: '8px' }}>{item.name}</span>
              </li>
            ))}
          </ul>
          <div className="Admin-Slider-Logout" onClick={() => alert('Logging out...')}>
            <LogOut size={20} />
            <span style={{ marginLeft: '8px' }}>Logout</span>
          </div>
        </aside>
      </div>

      {isOpen && <div className="Admin-Slider-Overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default SideBar;
