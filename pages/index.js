import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React, { useState, useEffect } from 'react';
import { Nav } from './components/Nav';

const Home = ({ posts }) => {
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className='container m-auto'>
      <Nav />
      <div className='profile'>
        <Image
          src='/images/portfolio-pic-demo.jpg'
          height={200}
          width={200}
          alt='Portfolio Picture'
          style={{ borderRadius: '50%' }}
        />
        <div className='intro'>
          <h1>I am SayedRahim</h1>
          <p>Software Engineer and UI Developer</p>
        </div>
      </div>
      <div className='mt-1'>
        {/*Map through all the projects and display them*/}
        {posts.map((post, index) => (
          <Link href={'/blog/' + post.slug} passHref key={index}>
            <div
              className='card mb-3 pointer shadow'
              style={{ flexWrap: 'wrap', width: '60%', margin: 'auto' }}
            >
              <div className='row g-0'>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h5 className='card-title'>{post.frontMatter.title}</h5>
                    <p className='card-text'>{post.frontMatter.description}</p>
                    <p className='card-text'>
                      <small className='text-muted'>
                        {post.frontMatter.date}
                      </small>
                    </p>
                  </div>
                </div>
                <div className='col-md-4 m-auto'>
                  <Image
                    src={post.frontMatter.thumbnailUrl}
                    className='mt-1 rounded-start img-fluid'
                    alt='Post thumbnail'
                    width={500}
                    height={400}
                    objectFit='cover'
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  //get all of our files by filename
  const files = fs.readdirSync(path.join('posts'));
  //get all of our posts and data from within those posts
  const posts = files.map((file) => {
    const markdownWithMetadata = fs.readFileSync(
      path.join('posts', file),
      'utf8'
    );
    const { data: frontMatter } = matter(markdownWithMetadata);

    return {
      frontMatter,
      slug: file.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
