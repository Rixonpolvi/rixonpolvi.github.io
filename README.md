# GitHub Pages Site

A simple static website hosted on GitHub Pages.

## Getting Started with GitHub Pages

### 1. Create a GitHub Repository
- Go to GitHub and create a new repository
- Name it `username.github.io` (replace `username` with your GitHub username) for a user site
- Or use any name for a project site

### 2. Push Your Code
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repository-name.git
git push -u origin main
```

### 3. Enable GitHub Pages
- Go to your repository settings
- Scroll down to "Pages" section
- Under "Source", select "Deploy from a branch"
- Choose "main" branch and "/ (root)" folder
- Click "Save"

### 4. Access Your Site
- Your site will be available at:
  - User site: `https://username.github.io`
  - Project site: `https://username.github.io/repository-name`

## Local Development

To preview your site locally:
1. Open `index.html` in your browser
2. Or use a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have it installed)
   npx serve .
   ```

## Customization

- Edit `index.html` to change the content
- Modify `style.css` to update the styling
- Add more pages by creating additional HTML files

## Features

- Responsive design
- Clean, modern styling
- Easy to customize
- Fast loading

## Deployment

Changes pushed to the main branch will automatically update your live site within a few minutes.