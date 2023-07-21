import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import sublinks from '../data';

const Submenu = () => {
  const { pageId } = useGlobalContext();
  const [page, setPage] = useState({});

  useEffect(() => {
    pageId !== undefined &&
      setPage(sublinks.find((sublink) => sublink.pageId === pageId));
  }, [pageId]);

  return <div className="submenu">{console.log(page)}</div>;
};

export default Submenu;
