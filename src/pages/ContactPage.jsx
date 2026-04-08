import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { COMPANY } from '../lib/constants';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with SendGrid or similar
    setSubmitted(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      <div className="bg-hero-gradient py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Contact Us</h1>
          <p className="text-white/60 text-sm">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-border">
              <h2 className="font-bold text-text-dark text-lg mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center shrink-0">
                    <HiMail className="text-brand-purple" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-brand-purple text-sm hover:underline">{COMPANY.email}</a>
                    <p className="text-text-light text-xs mt-1">We aim to respond within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center shrink-0">
                    <HiLocationMarker className="text-brand-purple" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Address</p>
                    <p className="text-text-mid text-sm">{COMPANY.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-text-dark text-sm mb-2">Booking Enquiries</h3>
              <p className="text-text-mid text-xs leading-relaxed">
                We're a comparison platform. For booking changes, cancellations, or refunds, please contact your booking provider directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border border-border">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full brand-gradient-bg flex items-center justify-center">
                    <HiMail className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-text-dark text-xl mb-2">Message Sent!</h3>
                  <p className="text-text-mid text-sm">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-1.5">Your Name</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-1.5">Email Address</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-1.5">Subject</label>
                    <select value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple">
                      <option value="">Select a subject</option>
                      <option>General Enquiry</option>
                      <option>Booking Help</option>
                      <option>Partnership Enquiry</option>
                      <option>Press & Media</option>
                      <option>Report a Problem</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-1.5">Message</label>
                    <textarea rows="5" required value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple resize-none" />
                  </div>
                  <button type="submit" className="w-full brand-gradient-bg text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
