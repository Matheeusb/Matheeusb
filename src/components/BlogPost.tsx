import { Calendar, Clock, Tag } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Post } from '../types/Post';

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language as 'pt-BR' | 'en-US';

  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8 rounded-xl overflow-hidden h-[30vh]">
        <img
          src={post.coverImage}
          alt={post.title[currentLanguage]}
          className="w-full h-full object-cover"
        />
      </div>

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title[currentLanguage]}</h1>
        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-4">
          <span className="flex items-center gap-2">
            <Calendar size={16} />
            {new Date(post.date).toLocaleDateString(currentLanguage)}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} />
            {t('blog.readTime', { time: post.readTime })}
          </span>
          <div className="flex items-center gap-2">
            <Tag size={16} />
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-700 px-2 py-1 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="prose prose-lg prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            img({ src, alt }) {
              return (
                <img
                  src={src}
                  alt={alt}
                  className="w-full rounded-lg shadow-lg my-8"
                />
              );
            },
          }}
        >
          {post.content[currentLanguage]}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogPost;