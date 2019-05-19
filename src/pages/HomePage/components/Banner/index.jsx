import React, { Component } from 'react';

export default class Banner extends Component {
  static displayName = 'Banner';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.title}>TY Fountain</div>
          <div style={styles.desc}>Music Fountain & Make music fountain easier and professional</div>
          <a style={styles.link}>Let's start</a>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    background:
      'url(https://img.alicdn.com/tfs/TB1Q7YOdMHqK1RjSZFgXXa7JXXa-2868-912.png)',
    width: '100%',
    height: '418px',
    backgroundSize: 'cover',
  },
  content: {
    width: '1200px',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    marginBottom: '24px',
    fontWeight: '500',
    fontSize: '52px',
  },
  desc: {
    color: '#ffffff',
    marginBottom: '24px',
    fontSize: '28px',
  },
  link: {
    border: '1px solid #fff',
    fontSize: '14px',
    width: '124px',
    height: '40px',
    lineHeight: '40px',
    color: 'rgba(31,56,88,0.6)',
    borderRadius: '18px',
    padding: '0 16px',
    backgroundColor: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};
