import PlaceholderLoading from 'react-placeholder-loading';

import './styles.scss';

export default function Placeholder() {
  return (
    <div className='placeholder-list'>
      {[1, 2, 3].map(ele => (
        <div key={ele} className='placeholder-item' >
          <PlaceholderLoading shape='rect' width={100} height={80} />
          <div className='group-left'>
            {[1, 2, 3, 4].map(ele => (
              <div key={ele}>
                <PlaceholderLoading shape='rect' width={200} height={10} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
