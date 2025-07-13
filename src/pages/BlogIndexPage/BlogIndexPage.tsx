import { Link } from 'react-router-dom';
import { posts } from '../../blog/post-metadata'; // Import our metadata
import { formatDate } from '../../utils/formatDate'; // Assuming you have this helper

const BlogIndexPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <div className="space-y-8">
                {posts.map((post) => (
                    <article key={post.slug}>
                        <Link to={`/blog/${post.slug}`}>
                            <h2 className="text-2xl font-bold text-grey-500 hover:underline">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">{formatDate(post.date)}</p>
                        <p className="mt-2 text-gray-700">{post.summary}</p>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default BlogIndexPage;