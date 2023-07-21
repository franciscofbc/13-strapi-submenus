import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import sublinks from '../data';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className="navbar">
      <h3 className="logo">strapi</h3>
      <ul className="navlinks hide-navlinks">
        {sublinks.map((sublink) => {
          const { pageId, page, links } = sublink;
          return <li key={pageId}>{page}</li>;
        })}
      </ul>
      <button
        type="button"
        className="btn-open-sidebar hide-btn-open-sidebar"
        onClick={openSidebar}
      >
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
