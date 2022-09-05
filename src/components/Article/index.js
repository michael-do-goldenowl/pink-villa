import { memo } from 'react';
import './styles.scss';

function Article({ title, dateTime, thumbnail }) {
  return (
    <article className='article-container'>
      <img
        src={thumbnail}
        alt={title}
        className='thumbnail'
        loading='lazy'
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
  )
}

export default memo(Article);
