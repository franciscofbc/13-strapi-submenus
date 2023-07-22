import { useGlobalContext } from '../context';
import sublinks from '../data';

const Submenu = () => {
  const { pageId } = useGlobalContext();

  // const page = sublinks.find((sublink) => sublink.pageId === pageId) || null;
  const page = sublinks.find((sublink) => sublink.pageId === pageId);

  return (
    // <div className={page ? 'submenu' : 'hide-submenu'}>
    <div className={page && 'submenu'}>
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
