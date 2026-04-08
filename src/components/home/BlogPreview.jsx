import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../../lib/api';
import { formatDate } from '../../lib/utils';

const FEATURED_SLUGS = [
  'cheapest-flights-london-summer-2026',
  'best-time-book-flights-uk',
  'car-hire-tips-uk-travellers',
];

export default function BlogPreview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then(all => {
      const featured = FEATURED_SLUGS
        .map(slug => all.find(p => p.slug === slug))
        .filter(Boolean);
      setPosts(featured.length ? featured : all.slice(0, 3));
    });
  }, []);

  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-2">
              Travel Tips & Guides
            </h2>
            <p className="text-text-mid text-sm">Expert advice to help you travel smarter and save more.</p>
          </div>
          <Link
            to="/blog"
            className="text-brand-purple text-sm font-semibold hover:underline shrink-0"
          >
            View all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-border card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-semibold text-brand-coral bg-brand-coral/10 px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="font-bold text-text-dark text-base mb-2 group-hover:text-brand-purple transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text-mid text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="text-brand-purple text-sm font-semibold group-hover:underline">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
