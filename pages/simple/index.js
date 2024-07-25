'use client';

import { React, useState } from 'react';
//import { useAuth } from '@arcana/auth-react';
import Loader from '../components/loader';
import { Info } from '../components/info';
import styles from './index.module.css';

const names = [
  '1. Web2-like user onboarding',
  '2. Sign blockchain transactions',
  '3. Web3 wallet operations'
];

function Header({ title }) {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h1>{title ? title : 'Default title'}</h1>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>👍 ({likes})</button>
    </div>
  );
}

export default function IndexPage() {
  const onConnect = () => {
    console.log('connected');

    React.useEffect(() => {
      provider.on('connect', onConnect);
      return () => {
        provider.removeListener('connect', onConnect);
      };
    }, [provider]);
  };

  return (
  <>
  <Header title="Arcana Auth NextJS Sample App using auth-react Auth." />
  </>
  );
}
