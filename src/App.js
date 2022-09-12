import { Fragment, useCallback, useEffect, useRef } from 'react';

import useMergeState from './hooks/useMergeState';

import Article from './components/Article';
import Placeholder from './components/Placeholder';

import API from './services/API';
import { truncateText, formatTime } from './utils';

import './App.scss';

function App() {
  const listRef = useRef();

  const [data, setData] = useMergeState({
    articles: [],
    loading: false,
    currentPage: 1,
    isEndOfList: false,
  });

  const { articles, loading, isEndOfList, currentPage } = data;

  useEffect(() => {
    fetchData();
  }, []);

  const onScroll = () => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      const isReachEnd = Math.round(scrollTop) + clientHeight === scrollHeight;

      if (isReachEnd && !loading && !isEndOfList) {
        fetchData(currentPage + 1);
      }
    }
  };

  const fetchData = async (page = 1) => {
    try {
      setData({ loading: true });

      const endpoint = process.env.REACT_APP_API_URL.concat(`/photo-gallery-feed-page/page/${page}`);
      const { data: { nodes } } = await API.get(endpoint);
      if (!nodes.length) {
        return setData({ isEndOfList: true });
      }

      setData({
        articles: articles.concat(nodes),
        currentPage: page,
        isEndOfList: false,
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setData({ loading: false });
    }
  }

  const renderArticle = useCallback((item) => {
    const {
      node: {
        title,
        field_photo_image_section: thumbnail,
        path,
        last_update: lastUpdate,
      }
    } = item;
    return (
      <Article
        thumbnail={thumbnail}
        title={truncateText(title)}
        dateTime={formatTime(lastUpdate)}
        path={process.env.REACT_APP_BASE_SERVER_DOMAIN.concat(path)}
      />
    );
  }, []);

  return (
    <div
      ref={listRef}
      onScroll={onScroll}
      className='home-container'
    >
      {articles.map(item => (
        <Fragment key={item.node.nid}>
          {renderArticle(item)}
          <div className='separator' />
        </Fragment>
      ))}

      {loading && <Placeholder />}
    </div>
  );
}

export default App;
