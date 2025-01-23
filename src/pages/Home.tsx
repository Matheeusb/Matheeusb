import { ArrowRight, BookOpen, Github, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const Home = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language as 'pt-BR' | 'en-US';

  // Ordenar os posts por data, do mais recente para o mais antigo
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Selecionar os três primeiros posts
  const recentPosts = sortedPosts.slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 py-12">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <img
              src="./profile.jpeg"
              alt="Matheus Bereta"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">Matheus Bereta</h1>
            <p className="text-xl text-gray-400 mb-6">{t('home.title')}</p>
            <p className="text-gray-300 mb-8 max-w-2xl">
              {t('home.description')}
            </p>
            <div className="flex gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
              >
                {t('home.cta.readBlog')}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/profile"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                {t('home.cta.viewProfile')}
              </Link>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/matheeeusb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/matheus-bereta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Matheeusb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://medium.com/@matheus.bereta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Medium"
                >
                  <BookOpen size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="py-12">
          <h2 className="text-2xl font-bold mb-6">{t('home.recentPosts')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{post.title[language]}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt[language]}</p>
                <Link to={`/blog/${post.id}`} className="text-cyan-400 hover:text-cyan-300">{t('blog.readMore')} →</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;