import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../lib/api';
import { formatDate } from '../lib/utils';

const CATEGORIES = ['All', 'Destinations', 'Deals & Tips', 'Guides', 'How-To', 'News'];

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setLoading(true);
    getBlogPosts(activeCategory).then(p => { setPosts(p); setLoading(false); });
  }, [activeCategory]);

  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      <div className="bg-hero-gradient py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Travel Blog</h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto">Expert tips, destination guides, and the latest deals to help you travel smarter.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Category Tabs */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat ? 'brand-gradient-bg text-white' : 'bg-white text-text-mid border border-border hover:bg-surface-light'}`}>
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse border border-border">
                <div className="h-48 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/4" />
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-border card-hover">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-brand-coral bg-brand-coral/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-text-light text-xs">{formatDate(post.publishedAt)}</span>
                  </div>
                  <h3 className="font-bold text-text-dark text-base mb-2 group-hover:text-brand-purple transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-mid text-sm leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-text-light text-xs">{post.readTime} min read</span>
                    <span className="text-brand-purple text-sm font-semibold group-hover:underline">Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-mid text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
