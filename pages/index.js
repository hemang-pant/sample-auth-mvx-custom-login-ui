'use client';

import { React, useState } from 'react';
import { useAuth } from '@arcana/auth-react';
import Loader from '../components/loader';
import { Info } from '../components/info';
import styles from './index.module.css';
import jwt from 'jsonwebtoken';
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
      
    </div>
  );
}

export default function IndexPage() {
  const { user, connect, isLoggedIn, loading, loginWithSocial, provider } =
    useAuth();

  const onConnectClick = async () => {
    try {
      await connect();
    } catch (e) {
      console.log(e);
    }
  };

  const onConnect = () => {
    console.log('connected');

    React.useEffect(() => {
      provider.on('connect', onConnect);
      return () => {
        provider.removeListener('connect', onConnect);
      };
    }, [provider]);
  };

  if (loading) {
    return (
      <>
        <Header title="Arcana Auth MVX Sample App" />
        <Loader secondaryColor="#101010" strokeColor="#101010" />
      </>
    );
  }

  if (!isLoggedIn) {
    return (
      <>
        <Header title="Arcana Auth MVX Sample App" />
        <button className={styles.Btn} onClick={onConnectClick}>
          Connect
        </button>
      </>
    );
  }

  
  return <Info info={user} />;
}
