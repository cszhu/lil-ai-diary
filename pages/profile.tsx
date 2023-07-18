import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStytchUser, useStytch, useStytchSession } from '@stytch/nextjs';
import CodeBlock from '../components/common/CodeBlock';
import SessionDemo from '../components/SessionDemo';

const Profile = () => {
  const { user, isInitialized } = useStytchUser();
  const { session } = useStytchSession();
  const stytch = useStytch();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && !user) {
      router.replace('/');
    }
  }, [user, isInitialized, router]);

  const signOut = async () => {
    await stytch.session.revoke();
  };

  return (
    <div style={styles.container}>
      <div style={styles.details}>
        <h2>Welcome to your AI Diary!</h2>
        <p>
          Welcome to your Personal AI Diary, where traditional journaling meets artificial intelligence. Here, you can
          capture your daily musings, intriguing ideas, and profound thoughts.
        </p>
        <p>
          Our friendly AI (thanks to OpenAI's GPT-3) is here to lend an ear, or rather an algorithm, offering insights
          inspired by a plethora of internet text. Rest assured, it respects your privacy and knows no specific personal
          details about you.{' '}
        </p>
        <p>Think of it as having a comforting conversation with a calming entity.</p>
        <p>
          To converse with your AI friend, simply pour your thoughts into the diary entry box and click 'Submit'. Watch
          as your AI buddy dissects and interprets your words, displaying its analysis in the adjacent column. Embrace
          self-discovery with a hint of AI magic. Welcome to your personal AI Diary journey!
        </p>
        <button className="mt2" onClick={signOut}>
          Sign out
        </button>
      </div>
      <div style={styles.diary}>
        <SessionDemo />
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    margin: '24px 24px',
    justifyContent: 'center',
    gap: '48px',
    flexWrap: 'wrap',
  },
  details: {
    backgroundColor: '#FFF',
    padding: '24px',
    flexBasis: '450px',
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: '500px',
  },
  diary: {
    backgroundColor: '#FFF',
    padding: '24px',
    flexBasis: '450px',
    maxWidth: '100%',
    width: '100%',
    flexGrow: 1,
    flexShrink: 1,
  },
};

export default Profile;
