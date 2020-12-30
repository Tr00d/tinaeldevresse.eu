import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';
import HomePage from '../components/homepage';

const lines = [
  'Developer, dreamer & tech lover.',
  'I maintain a blog about things I learn or I want to share.',
  'I love participating at dev events',
  'and I am also an open-source enthusiast.',
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.customFields.description}
      permalink='/'
    >
      <main className={styles.heroContainer}>
        <HomePage {...siteConfig} descriptionLines={lines} />
      </main>
    </Layout>
  );
}

export default Home;

