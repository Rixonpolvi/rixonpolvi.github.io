const fs = require('fs');
const path = require('path');

// Get the title from the command line arguments
const title = process.argv[2];

if (!title) {
  console.error('❌ Please provide a title for the blog post.');
  console.log('   Example: node scripts/new-post.js "My Awesome New Post"');
  process.exit(1);
}

// --- 1. Sanitize Inputs and Create Paths ---

// Create a URL-friendly "slug" from the title
const slug = title
  .toLowerCase()
  .replace(/\s+/g, '-')      // Replace spaces with -
  .replace(/[^\w-]+/g, '');   // Remove all non-word chars

// Create a PascalCase component name from the title
const componentName = title
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join('');

// *** NEW: Sanitize the component name to ensure it's a valid JS identifier ***
if (/^[0-9]/.test(componentName)) {
  // If the name starts with a number, prepend a safe prefix.
  componentName = `Post${componentName}`;
  console.log(`⚠️  Component name started with a number. Sanitized to: ${componentName}`);
}

const date = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
const postFilePath = path.join('src', 'blog', 'posts', `${componentName}.tsx`);
const metadataFilePath = path.join('src', 'blog', 'post-metadata.ts');
const blogPagePath = path.join('src', 'pages', 'BlogPostPage', 'BlogPostPage.tsx');


// --- 2. Define File Templates ---

const postTemplate = `import React from 'react';

const ${componentName}: React.FC = () => {
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
        This is the beginning of your new post: "${title}".
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

export default ${componentName};
`;

const metadataEntry = `
  {
    slug: '${slug}',
    title: '${title}',
    date: '${date}',
    summary: 'A brief summary of this fantastic new post.',
  },`;


// --- 3. Write Files and Update Existing Ones ---

// Create the new blog post file
fs.writeFileSync(postFilePath, postTemplate);
console.log(`✅ Created post file: ${postFilePath}`);

// Update the metadata file
const metadataContent = fs.readFileSync(metadataFilePath, 'utf8');
const newMetadataContent = metadataContent.replace('export const posts: PostMeta[] = [', `export const posts: PostMeta[] = [${metadataEntry}`);
fs.writeFileSync(metadataFilePath, newMetadataContent);
console.log(`✅ Updated metadata: ${metadataFilePath}`);

// Update the BlogPostPage component map
const blogPageContent = fs.readFileSync(blogPagePath, 'utf8');
const newBlogPageContent = blogPageContent.replace(
  'const postContentComponents: { [key: string]: React.ComponentType } = {',
  `import ${componentName} from '../../blog/posts/${componentName}';\n\nconst postContentComponents: { [key: string]: React.ComponentType } = {\n  '${slug}': ${componentName},`
);
fs.writeFileSync(blogPagePath, newBlogPageContent);
console.log(`✅ Updated component map: ${blogPagePath}`);

console.log('\n🚀 New blog post created successfully! Open the new file and start writing.');