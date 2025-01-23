import { Calendar, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../data/posts';
import { Post } from '../types/Post';

const Blog = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as 'pt-BR' | 'en-US';
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const loadedPosts = await getAllPosts();
      setPosts(loadedPosts);
      setLoading(false);
    }

    loadPosts();
  }, [currentLanguage]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <h1 className="text-4xl font-bold mb-8">{t('blog.title')}</h1>
            <div className="grid gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-8 bg-gray-800 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-800 rounded w-1/4 mb-4"></div>
                  <div className="h-4 bg-gray-800 rounded w-full mb-4"></div>
                  <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8">{t('blog.title')}</h1>

          <div className="grid gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold mb-4 hover:text-cyan-400 transition-colors">
                    {post.title[currentLanguage]}
                  </h2>
                </Link>
                <div className="flex items-center gap-6 text-gray-400 mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString(currentLanguage)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {t('blog.readTime', { time: post.readTime })}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">
                  {post.excerpt[currentLanguage]}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2"
                >
                  {t('blog.readMore')} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;