import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { getPostBySlug } from '../data/posts';
import { Post } from '../types/Post';

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      if (id) {
        const loadedPost = await getPostBySlug(id);
        setPost(loadedPost);
        setLoading(false);
      }
    }

    loadPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-[30vh] bg-gray-800 rounded-xl mb-8"></div>
            <div className="h-8 bg-gray-800 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-1/4 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-800 rounded w-full"></div>
              <div className="h-4 bg-gray-800 rounded w-full"></div>
              <div className="h-4 bg-gray-800 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogPost post={post} />
      </div>
    </div>
  );
};

export default BlogPostPage;