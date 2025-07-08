import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* This nav is the sticky header that stays at the top of the viewport */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-medium text-gray-900">Rixon Polvi</h1>
            <ul className="flex items-center gap-x-8 list-none">
              {/* Using NavLink to style the active link */}
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900 transition-colors'}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900 transition-colors'}>
                  Timeline
                </NavLink>
              </li>
              <li>
                <NavLink to="/cv" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900 transition-colors'}>
                  CV
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900 transition-colors'}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* This div acts as a spacer to push down the main content */}
      <div className="h-16" /> 
    </header>
  );
};

export default Header;