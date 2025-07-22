import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { posts } from '../../blog/post-metadata';
import { formatDate } from '../../utils/formatDate';
import ScrollProgressBar from '../../components/ScrollProgressBar/ScrollProgressBar';

// Blog posts
import VerifyingDataIngestioninMicrosoftSentinel from '../../blog/posts/VerifyingDataIngestioninMicrosoftSentinel';
import ShiftingLeftIntegratingVulnerabilityScanningIntoYourCICDPipeline from '../../blog/posts/ShiftingLeftIntegratingVulnerabilityScanningIntoYourCICDPipeline';


const postContentComponents: { [key: string]: React.ComponentType } = {
  'verifying-data-ingestion-in-microsoft-sentinel': VerifyingDataIngestioninMicrosoftSentinel,
  // DEV to hide unfinished post
  'DEV_shfting-left-integrating-vulnerability-scanning-into-your-cicd-pipeline': ShiftingLeftIntegratingVulnerabilityScanningIntoYourCICDPipeline,
};

const BlogPostPage: React.FC = () => {
  // Get the slug from the URL
  const { slug } = useParams<{ slug: string }>();

  // Find the metadata for the current post
  const postMeta = useMemo(() => posts.find(p => p.slug === slug), [slug]);

  // Find the content component for the current post
  const PostContent = slug ? postContentComponents[slug] : null;

  // Handle the case where the post is not found
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

  // Render the post
  return (
    <div>
      <ScrollProgressBar />
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 group"
      >
        <IoArrowBack className="transition-transform group-hover:-translate-x-1" />
        <span className="group-hover:underline">Back to all posts</span>
      </Link>

      <div className="prose lg:prose-xl max-w-none">
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