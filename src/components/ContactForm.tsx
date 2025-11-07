'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 gap-3">
        <input required placeholder="Name" value={form.name} onChange={e => setForm(s => ({ ...s, name: e.target.value }))} className="px-3 py-2 border rounded" />
        <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm(s => ({ ...s, email: e.target.value }))} className="px-3 py-2 border rounded" />
        <textarea required placeholder="Message" rows={6} value={form.message} onChange={e => setForm(s => ({ ...s, message: e.target.value }))} className="px-3 py-2 border rounded" />
        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 bg-accent text-white rounded" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
          {status === 'success' && <span className="text-green-600">Message sent (mock)</span>}
          {status === 'error' && <span className="text-red-600">Failed to send</span>}
        </div>
      </div>
    </form>
  );
}
