import React, { FC, useState } from 'react';
import Spinner from '@components/spinner';

import style from './style.scss';

const Home: FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={style['homepage-wrapper']}>
      <form className={style['homepage-form']}>
        <input
          type="text"
          name="group-name-field"
          placeholder="write group id here or paste a url-link"
        />
        {
          loading ? <Spinner /> : null
        }
      </form>
    </div>
  );
};

export default Home;
