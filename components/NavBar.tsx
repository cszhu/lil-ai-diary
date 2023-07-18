import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logoFont}>
          <span style={styles.icon} className="material-symbols-outlined">
            edit_note
          </span>
          Personal AI Diary
        </h1>
      </div>
      <div style={styles.linkContainer}>
        <a
          style={styles.link}
          href="https://github.com/stytchauth/stytch-nextjs-integration"
          rel="noopener noreferrer"
          target="_blank"
        >
          View on Github
        </a>
        <a style={styles.link} href="https://stytch.com/docs" rel="noopener noreferrer" target="_blank">
          Stytch Docs
        </a>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#89CFF0',
    top: 0,
    justifyContent: 'space-between',
    padding: '16px 16px',
    color: 'white',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '1.5em',
    marginRight: '10px',
    color: 'black',
  },
  logoFont: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    marginLeft: '20px',
    padding: '10px 10px 10px 0px',
    fontSize: '30px',
  },
  linkContainer: {
    display: 'flex',
    gap: '16px',
  },
  link: {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '30px',
    color: 'white',
    textDecoration: 'none',
  },
};

export default NavBar;
