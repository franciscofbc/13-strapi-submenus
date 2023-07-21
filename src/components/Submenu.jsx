import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import sublinks from '../data';

const Submenu = () => {
  const { pageId } = useGlobalContext();
  const [page, setPage] = useState({});

  useEffect(() => {
    pageId !== undefined
      ? setPage(sublinks.find((sublink) => sublink.pageId === pageId))
      : setPage({});
  }, [pageId]);

  return (
    <div className={page ? 'submenu' : 'hide-submenu'}>
      {/* <h5>{page.page}</h5> */}
      {console.log(pageId)}
    </div>
  );
};

export default Submenu;
