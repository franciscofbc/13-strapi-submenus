import { useGlobalContext } from '../context';
import sublinks from '../data';

const Navlinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <ul className="navlinks hide-navlinks">
      {sublinks.map((sublink) => {
        const { pageId, page } = sublink;
        return (
          <li
            className="navlink"
            key={pageId}
            onMouseEnter={() => {
              setPageId(pageId);
            }}
          >
            {page}
          </li>
        );
      })}
    </ul>
  );
};
export default Navlinks;
