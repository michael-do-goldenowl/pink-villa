import { memo } from 'react';
import './styles.scss';

function Article({ nid, title, dateTime, thumbnail, path, handleRemoveItem }) {
  return (
    <a href={path} target='_blank' rel='noopener noreferrer' >
      <article className='article-container'>
        <img
          src={thumbnail}
          alt={title}
          className='thumbnail'
          loading='lazy'
        />

        <div className='info'>
          <button onClick={(e) => handleRemoveItem(e, nid)}>X</button>
          <h2 className='title'>{title}</h2>
          <p className='datetime'>
            <time dateTime={dateTime} >
              {dateTime}
            </time>
          </p>
        </div>
      </article>
    </a>
  );
}

export default memo(Article);
