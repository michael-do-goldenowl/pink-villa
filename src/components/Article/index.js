import { memo } from 'react';
import './styles.scss';

function Article({ title, dateTime, thumbnail, path }) {
  return (
    <a href={path} target='_blank' rel='noopener noreferrer' >
      <article className='article-container'>
        <img
          src={thumbnail}
          alt={title}
          className='thumbnail'
          loading='lazy'
          crossOrigin='anonymous'
        />

        <div className='info'>
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
