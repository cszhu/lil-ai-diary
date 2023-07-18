import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStytchUser } from '@stytch/nextjs';
import LoginWithStytchSDKUI from '../components/LoginWithStytchSDKUI';

const App = () => {
  const { user } = useStytchUser();

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/profile');
    }
  }, [user, router]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Your Personal AI Diary</h2>
      <p style={styles.subHeading}>Please log in to start your journaling journey.</p>
      <div style={styles.loginRow}>
        <LoginWithStytchSDKUI />
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '24px',
    backgroundImage: "url('header-image.jpg')", // replace with your header image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heading: {
    fontSize: '2em',
    color: '#89CFF0', // pastel blue color
    textAlign: 'center',
  },
  subHeading: {
    fontSize: '1.2em',
    color: '#89CFF0',
    margin: '20px 0 40px 0',
    textAlign: 'center',
  },
  loginRow: {
    display: 'flex',
    marginTop: '24px',
    justifyContent: 'center',
    width: '100%',
  },
};

export default App;
