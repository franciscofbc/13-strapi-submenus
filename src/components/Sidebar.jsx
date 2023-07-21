import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import sublinks from '../data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <button
        type="button"
        className="btn-close-sidebar"
        onClick={closeSidebar}
      >
        <FaTimes />
      </button>
      {sublinks.map((sublink) => {
        const { pageId, page, links } = sublink;
        return (
          <div key={pageId} className="sublinks">
            <h5 className="page">{page}</h5>
            <ul className="links">
              {links.map((link) => {
                const { id, label, icon, url } = link;
                return (
                  <li key={id}>
                    <a className="link" href={url}>
                      {icon}
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
