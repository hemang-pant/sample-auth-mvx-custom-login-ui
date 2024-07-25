import { AuthProvider } from '@arcana/auth';

const auth = new AuthProvider("xar_test_8c5089ec80affbb1c9fabc834bb51d3f1d1e5745", {
  theme: 'light',
  network: 'testnet',
  connectOptions: {
    compact: true
  }
});

const getAuth = () => {
  return auth;
};

export { getAuth };
