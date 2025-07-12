import React from 'react';

const ThirdPost: React.FC = () => {
  return (
    <article className="space-y-4">
      {/* 
        TODO: Your development checklist for this post!
        
        [ ] 1. Write your blog post content below. You can use any JSX or React components you want.
        
        [ ] 2. Go to 'src/blog/post-metadata.ts' and update the 'summary' for this post.
        
        The script has already handled adding the metadata entry and updating the component map.
        You're all set to start writing!
      */}

      <p>
        This is the beginning of your new post: "Third Post".
        Start writing your content here.
      </p>

      <h3 className="text-xl font-bold pt-4">A Section Heading</h3>
      <p>
        You can structure your content with standard HTML tags. The 'prose' class on the parent page
        will style it nicely.
      </p>

    </article>
  );
};

export default ThirdPost;
