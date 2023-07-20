// import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className="navbar">
      <h3 className="logo">strapi</h3>
      <button type="button" className="btn-open-sidebar" onClick={openSidebar}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
