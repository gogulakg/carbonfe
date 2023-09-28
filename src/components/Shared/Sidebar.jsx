import React, { useState } from 'react';
import './Sidebar.css';
import { Link, useParams } from 'react-router-dom';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const { adminId } = useParams();

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="sidenav">
      <ul>
        <li>
		<Link to={``}>
          <button
            className={`menu ${activeMenu === '' ? 'active' : ''}`}
            onClick={() => handleMenuClick('')}
          >
			Home 
          </button>
		  </Link>
        </li>
        <li>
          <button
            className={`menu ${activeMenu === 'products' ? 'active' : ''}`}
            onClick={() => handleMenuClick('products')}
          >
            My building Suppliers
          </button>
          {activeMenu === 'products' && (
            <ul className="submenu">
              <li>
                <Link to={`/dashboard/products`} >New Project</Link>
              </li>
              <li>
                <Link to={`/dashboard/existingprojects`}>Existing Projects</Link>
              </li>
            
            </ul>
          )}
        </li>
        <li>
		<Link to="/dashboard/materialspec">
          <button
            className={`menu ${activeMenu === 'materialspec' ? 'active' : ''}`}
            onClick={() => handleMenuClick('materialspec')}
          >
			Material Specifications
            
          </button>
		  </Link>
        </li>
		<li>
		<Link to="/dashboard/carboncalc">
          <button
            className={`menu ${activeMenu === 'manage' ? 'active' : ''}`}
            onClick={() => handleMenuClick('manage')}
          >
			Carbon Calculations
            
          </button>
		  </Link>
        </li>
        {/* <li>
		<Link to="/dashboard/carboncalc">
          <button
            className={`menu ${activeMenu === 'manage' ? 'active' : ''}`}
            onClick={() => handleMenuClick('manage')}
          >
			Carbon Offsetting
            
          </button>
		  </Link>
        </li> */}
        {/* <li>
		<Link to="/dashboard/carboncalc">
          <button
            className={`menu ${activeMenu === 'manage' ? 'active' : ''}`}
            onClick={() => handleMenuClick('manage')}
          >
			Carbon Reporting
            
          </button>
		  </Link>
        </li>
        <li>
		<Link to="/dashboard/carboncalc">
          <button
            className={`menu ${activeMenu === 'manage' ? 'active' : ''}`}
            onClick={() => handleMenuClick('manage')}
          >
			ESG Scope 1 & 2 Emissions
          </button>
		  </Link>
        </li>
        <li>
		<Link to="/dashboard/carboncalc">
          <button
            className={`menu ${activeMenu === 'manage' ? 'active' : ''}`}
            onClick={() => handleMenuClick('manage')}
          >
			Contractor Benchmarking
            
          </button>
		  </Link>
        </li>
        <li>
		<Link to="/dashboard/carboncalc">
          <button
            className={`menu ${activeMenu === 'manage' ? 'active' : ''}`}
            onClick={() => handleMenuClick('manage')}
          >
			Smart Contractors
            
          </button>
		  </Link>
        </li>
        <li>
		<Link to="/dashboard/carboncalc">
          <button
            className={`menu ${activeMenu === 'manage' ? 'active' : ''}`}
            onClick={() => handleMenuClick('manage')}
          >
			Alerts & Notifications
            
          </button>
		  </Link>
        </li> */}
		{/* <li>
		<Link to="/location">
          <button
            className={`menu ${activeMenu === 't&t' ? 'active' : ''}`}
            onClick={() => handleMenuClick('t&t')}
          >
			Admin
            
          </button>
		  </Link>
        </li> */}
		{/* <li>
		<Link to="/admin">
          <button
            className={`menu ${activeMenu === 'admin' ? 'active' : ''}`}
            onClick={() => handleMenuClick('admin')}
          >
			Admin
            
          </button>
		  </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
