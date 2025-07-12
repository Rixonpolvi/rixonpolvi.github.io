import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5'; 
import { posts } from '../../blog/post-metadata';
import { formatDate } from '../../utils/formatDate';

// 1. Import all your post components
import FirstPost from '../../blog/posts/FirstPost';

// 2. Create a mapping from slug to component
import POST_2NDPost from '../../blog/posts/2NDPost';

import ThirdPost from '../../blog/posts/ThirdPost';

const postContentComponents: { [key: string]: React.ComponentType } = {
  'third-post': ThirdPost,
  '2nd-post': POST_2NDPost,
  'first-post': FirstPost,
};

const BlogPostPage: React.FC = () => {
  // 3. Get the slug from the URL
  const { slug } = useParams<{ slug: string }>();

  // 4. Find the metadata for the current post
  const postMeta = useMemo(() => posts.find(p => p.slug === slug), [slug]);
  
  // 5. Find the content component for the current post
  const PostContent = slug ? postContentComponents[slug] : null;

  // 6. Handle the case where the post is not found
  if (!postMeta || !PostContent) {
    return (
      <div>
        <h1 className="text-4xl font-bold">Post not found</h1>
        <p className="mt-4">
          Sorry, we couldn't find the post you were looking for.
          <Link to="/blog" className="text-blue-600 hover:underline ml-2">
            Back to blog
          </Link>
        </p>
      </div>
    );
  }

  // 7. Render the post
  return (
    <div>
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 group"
      >
        <IoArrowBack className="transition-transform group-hover:-translate-x-1" />
        <span className="group-hover:underline">Back to all posts</span>
      </Link>

      {/* The rest of the post content, now wrapped in a div */}    
    <div className="prose lg:prose-xl max-w-none"> {/* 'prose' gives nice typography */}
      <h1 className="font-bold">{postMeta.title}</h1>
      <p className="text-base text-gray-500 !-mt-4 mb-8">
        Published on {formatDate(postMeta.date)}
      </p>
      <PostContent />
    </div>
  </div>
  );
};

export default BlogPostPage;