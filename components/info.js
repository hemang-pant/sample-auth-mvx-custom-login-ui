import styles from './info.module.css';
import Image from 'next/image';
import { useState } from 'react';

export function Info({ info }) {
  const [showInfo, setShowInfo] = useState(false);
  const [showToken, setShowToken] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const publicKey = "-----BEGIN PUBLIC KEY----- MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEZzNO8TuiMqLUNgYXKk4r0BioQto3 3eATP/msl1Uy5AQwb5XzapVFVcUQLm5iqdPMabk4kI6ijxxRJ6QLg6Yk5g== -----END PUBLIC KEY-----  ";
  const jwt = require('jsonwebtoken');



  if (info) {
    return (
      <div className={styles.Info}>
        <>
          <Image
            className={styles.InfoImg}
            src={info['picture']}
            alt="pp"
            width="75"
            height="75"
          />
        </>
        <>
          <h3 className={styles.Heading}>Name</h3>
          <p className={styles.HeadingValue}>{info['name']}</p>
        </>
        <>
          <h3 className={styles.Heading}>Email</h3>
          <p className={styles.HeadingValue}>{info['email']}</p>
        </>
        <>
          <button className={styles.Btn} onClick={
            () => {
              setShowToken(!showToken);}
          }>
            Get JWT Token
          </button>
          <button className={styles.Btn} onClick={
            () => {
              setShowVerify(!showVerify);
              if(showVerify){
                let decodedToken = null;
                let token = info['loginToken'];
                decodedToken = jwt.verify(token, publicKey, { algorithms: ['ES256'] }, (err, decoded) => {
                  console.log("token: ", token);
                  console.log("publicKey: ", publicKey);
                  console.log("decoded: ", decoded);
                  if (err) {
                    console.log(err);
                    info['verify'] = "Invalid Token";
                  } else {
                    info['verify'] = "Valid Token";
                  }
                });
              }
            }
          }>
            Verify Token
          </button>
          <button className={styles.Btn} onClick={
            () => {
              setShowInfo(!showInfo);}
          }>
            Get User Info
          </button>
        </>
        
        {showInfo ? (
          <>
            <h3 className={styles.Heading}>User Info</h3>
            <p className={styles.HeadingValue}>
              {JSON.stringify(info, null, 2)}
            </p>
          </>
        ) : (
          <></>
        )}
        {showToken ? (
          <>
            <h3 className={styles.Heading}>JWT Token</h3>
            <p className={styles.HeadingValue}>{info['loginToken']}</p>
          </>
        ) : (
          <></>
        )}
        {!showVerify ? (
          <>
            <h3 className={styles.Heading}>Token Verification</h3>
            <p className={styles.HeadingValue}>{info['verify']}</p>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
