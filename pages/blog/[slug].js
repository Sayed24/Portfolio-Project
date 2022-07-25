import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Button } from '../components/Button';
import { Nav } from '../components/Nav';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';

const components = { Button, SyntaxHighlighter };

const Blog = ({ mdxSource, frontMatter: { title, date } }) => {
  return (
    <>
      <div className='mt-0 container'>
        <Nav />
        <div className='mt-5'>
          <h1>{title}</h1>
          <p className='text-muted'>{date}</p>
          <div className='container border rounded p-5 mt-4'>
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace('.mdx', ''),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf8'
  );
  const { data: frontMatter, content } = matter(markdownWithMetadata);
  const mdxSource = await serialize(content);

  return {
    props: {
      slug,
      frontMatter,
      mdxSource,
    },
  };
};

export default Blog;
