import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPost, getBlogPosts } from '../lib/api';
import { formatDate } from '../lib/utils';
import { FaXTwitter, FaFacebook, FaWhatsapp, FaLink } from 'react-icons/fa6';
import AppDownloadBanner from '../components/shared/AppDownloadBanner';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getBlogPost(slug).then(p => {
      setPost(p);
      setLoading(false);
      if (p) {
        getBlogPosts(p.category).then(all => {
          setRelated(all.filter(a => a.slug !== slug).slice(0, 3));
        });
      }
    });
  }, [slug]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied!');
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-surface-offwhite">
        <div className="max-w-3xl mx-auto px-4 py-12 animate-pulse space-y-6">
          <div className="h-6 bg-gray-200 rounded w-1/4" />
          <div className="h-10 bg-gray-200 rounded w-3/4" />
          <div className="h-64 bg-gray-200 rounded-2xl" />
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => <div key={i} className="h-4 bg-gray-200 rounded" />)}
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-surface-offwhite flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-dark text-2xl font-bold mb-2">Article not found</p>
          <Link to="/blog" className="text-brand-purple font-semibold hover:underline">← Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-brand-coral bg-brand-coral/10 px-3 py-1 rounded-full">{post.category}</span>
          <span className="text-text-light text-xs">{formatDate(post.publishedAt)}</span>
          <span className="text-text-light text-xs">·</span>
          <span className="text-text-light text-xs">{post.readTime} min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-4 leading-tight">{post.title}</h1>
        <p className="text-text-mid text-sm mb-6">By {post.author}</p>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img src={post.featuredImage} alt={post.title} className="w-full h-64 sm:h-96 object-cover" />
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-text-light text-xs font-medium">Share:</span>
          <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-surface-light flex items-center justify-center text-text-mid hover:bg-brand-purple hover:text-white transition-all">
            <FaXTwitter size={14} />
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-surface-light flex items-center justify-center text-text-mid hover:bg-brand-purple hover:text-white transition-all">
            <FaFacebook size={14} />
          </a>
          <a href={`https://wa.me/?text=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-surface-light flex items-center justify-center text-text-mid hover:bg-brand-purple hover:text-white transition-all">
            <FaWhatsapp size={14} />
          </a>
          <button onClick={copyLink} className="w-8 h-8 rounded-full bg-surface-light flex items-center justify-center text-text-mid hover:bg-brand-purple hover:text-white transition-all">
            <FaLink size={14} />
          </button>
        </div>

        {/* Content */}
        <div
          className="prose prose-sm max-w-none text-text-mid leading-relaxed
            [&_h2]:text-text-dark [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4
            [&_h3]:text-text-dark [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
            [&_p]:mb-4 [&_p]:text-sm [&_p]:leading-relaxed
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:text-sm
            [&_li]:mb-2 [&_li]:text-sm
            [&_a]:text-brand-purple [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* App Download Banner */}
        <div className="my-12">
          <AppDownloadBanner />
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-text-dark mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(r => (
                <Link key={r.id} to={`/blog/${r.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-border card-hover">
                  <div className="h-36 overflow-hidden">
                    <img src={r.featuredImage} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-text-dark text-sm group-hover:text-brand-purple transition-colors line-clamp-2">{r.title}</h3>
                    <p className="text-text-light text-xs mt-2">{r.readTime} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
