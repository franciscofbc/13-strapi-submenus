import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import sublinks from '../data';

const Submenu = () => {
  const { pageId } = useGlobalContext();
  const [page, setPage] = useState(null);

  useEffect(() => {
    pageId
      ? setPage(sublinks.find((sublink) => sublink.pageId === pageId))
      : setPage(null);
  }, [pageId]);

  return (
    <div className={page ? 'submenu' : 'hide-submenu'}>
      <h5 className="page">{page?.page}</h5>
      <ul className="links">
        {page?.links.map((link) => {
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
