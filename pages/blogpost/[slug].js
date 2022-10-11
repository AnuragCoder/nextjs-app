import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return (
    <div className={styles.main}>
      <main>
        <h1> Title of the page {slug}</h1>
        <hr />
        <div>Hello {slug} , I just want to get hands dirty with you</div>
      </main>
    </div>
  );
};

export default Slug;

// Error: Objects are not valid as a React child (found: object with keys {slug}). If you meant to render a collection of children, use an array instead.
