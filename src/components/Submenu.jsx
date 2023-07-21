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

  return <div className="submenu">{page && <h5>{page.page}</h5>}</div>;
};

export default Submenu;
