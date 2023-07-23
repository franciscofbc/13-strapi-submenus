import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import Navlinks from './Navlinks';

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleOnMouseOver = (e) => {
    // console.log(e.target.classList);
    if (!e.target.classList.contains('navlink')) {
      setPageId(null);
    }
  };

  return (
    <nav className="navbar" onMouseOver={handleOnMouseOver}>
      <h3 className="logo">strapi</h3>
      <Navlinks />
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
