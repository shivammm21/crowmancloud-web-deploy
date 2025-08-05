import React from 'react';
import './Blog.css';

const Blog = ({ onNavigate }) => {
  const blogPosts = [
    {
      id: 1,
      title: "The Journey of CrowmanCloud",
      excerpt: "Discover the story behind CrowmanCloud and how we're revolutionizing the pre-deployment process for developers worldwide. From concept to reality, learn about our mission to secure cloud deployments.",
      date: "December 2024",
      readTime: "5 min read",
      url: "https://medium.com/@crowmancloudd/the-journey-of-crowmancloud-8e3f5e533d4c",
      category: "Company Story",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "5-Point Pre-Deployment Checklist",
      excerpt: "A comprehensive checklist to ensure your applications are cloud-ready before deployment. Essential steps every developer should follow to avoid common pitfalls and security issues.",
      date: "December 2024",
      readTime: "7 min read",
      url: "https://medium.com/@crowmancloudd/5-point-pre-deployment-checklist-82a0c7b3b14d",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Introduction to CrowmanCloud",
      excerpt: "Get started with CrowmanCloud and learn how our local-first approach keeps your code secure while providing enterprise-grade analysis. Perfect for developers new to our platform.",
      date: "December 2024",
      readTime: "6 min read",
      url: "https://medium.com/@crowmancloudd/introduction-to-crowmancloud-12e824a53247",
      category: "Getting Started",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <div className="blog-header-content">
          <h1>Blog</h1>
          <p>Insights, tutorials, and best practices for cloud deployment</p>
        </div>
      </div>

      <div className="blog-content">
        <div className="blog-posts-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-post-card">
              <div className="post-image">
                <img src={post.image} alt={post.title} />
                <div className="post-category">{post.category}</div>
              </div>
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                <p className="post-excerpt">{post.excerpt}</p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-btn"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="blog-cta">
        <div className="cta-content">
          <h2>Ready to try CrowmanCloud?</h2>
          <p>Start analyzing your projects with our secure, local-first approach</p>
          <button
            onClick={() => onNavigate('download')}
            className="btn btn-primary"
          >
            Download for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;