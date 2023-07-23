import { useRef } from 'react';
import { useGlobalContext } from '../context';
import sublinks from '../data';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const page = sublinks.find((sublink) => sublink.pageId === pageId) || null;
  const subMenuContainer = useRef(null);

  const handleOnMouseLeave = (e) => {
    const submenu = subMenuContainer.current.getBoundingClientRect();
    const { left, right, bottom } = submenu;

    if (
      e.clientX < left - 1 ||
      e.clientX > right - 1 ||
      e.clientY > bottom - 1
    ) {
      setPageId(null);
    }
  };

  return (
    <div
      className={page ? 'submenu' : 'hide-submenu'}
      onMouseLeave={handleOnMouseLeave}
      ref={subMenuContainer}
    >
      <h5 className="page">{page?.page}</h5>
      <ul className="links">
        {page?.links?.map((link) => {
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
};

export default Submenu;
