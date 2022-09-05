import { Fragment } from 'react';
import { truncateText } from './utils';

import Article from './components/Article';
import './App.scss';

function App() {
  return (
    <div className="home-container">
      {[1, 2, 3].map(ele => (
        <Fragment key={ele}>
          <Article
            thumbnail='https://www.pinkvilla.com/imageresize/shanaya_ananya_suhana_.jpg?width=270&t=pvorg&cropTop=true'
            title={truncateText('Fabulous Lives of Bollywood Wives 2: Shanaya Kapoor feels Ananya Panday, Suhana Khan will get married first')}
            dateTime='Sep 04, 2022 04:54 PM IST'
          />
          <div className='separator' />
        </Fragment>
      ))}
    </div>
  );
}

export default App;
