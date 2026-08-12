'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Socials from '../socials/Socials';

export default function ContactClient({
  lng,
  contactTitle,
  workText,
  togetherText,
  formName,
  formEmail,
  formMessage,
  formSubmit,
  formSending,
  formSuccess,
  formError,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [status, setStatus] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    // Add your Web3Forms Access Key here
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        formRef.current.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto" ref={ref}>
      {/* Small, elegant label at the top */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-8"
        style={{ color: 'var(--accent-color)' }}
      >
        {contactTitle}
      </motion.p>

      {/* Massive Headline */}
      <div className="overflow-hidden w-full mb-16">
        <motion.h2
          initial={{ y: '110%' }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-[2.6rem] sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.1] sm:leading-[0.9] text-[var(--text-color)] w-full break-words"
        >
          {workText}
        </motion.h2>
      </div>

      <div className="overflow-hidden w-full mt-2 md:mt-4 mb-20">
        <motion.h2
          initial={{ y: '110%' }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-[2.6rem] sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.1] sm:leading-[0.9] w-full break-words"
        >
          <span className="italic font-light" style={{ color: 'var(--accent-color)' }}>
            {togetherText}
          </span>
        </motion.h2>
      </div>

      {/* --- THE CONTACT FORM --- */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-6 mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              className="peer w-full bg-transparent border-b-2 border-zinc-300 dark:border-zinc-700 py-3 text-[var(--text-color)] focus:outline-none focus:border-[var(--accent-color)] transition-colors duration-300 placeholder-transparent"
              placeholder={formName}
            />
            <label className="absolute left-0 -top-3.5 text-sm text-zinc-500 dark:text-zinc-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[var(--accent-color)]">
              {formName}
            </label>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full bg-transparent border-b-2 border-zinc-300 dark:border-zinc-700 py-3 text-[var(--text-color)] focus:outline-none focus:border-[var(--accent-color)] transition-colors duration-300 placeholder-transparent"
              placeholder={formEmail}
            />
            <label className="absolute left-0 -top-3.5 text-sm text-zinc-500 dark:text-zinc-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[var(--accent-color)]">
              {formEmail}
            </label>
          </div>
        </div>

        {/* Message Textarea */}
        <div className="relative">
          <textarea
            name="message"
            rows="4"
            required
            className="peer w-full bg-transparent border-b-2 border-zinc-300 dark:border-zinc-700 py-3 text-[var(--text-color)] focus:outline-none focus:border-[var(--accent-color)] transition-colors duration-300 placeholder-transparent resize-none"
            placeholder={formMessage}
          ></textarea>
          <label className="absolute left-0 -top-3.5 text-sm text-zinc-500 dark:text-zinc-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[var(--accent-color)]">
            {formMessage}
          </label>
        </div>

        {/* Submit Button & Status */}
        <div className="flex flex-col items-start gap-4 pt-4">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="group inline-flex items-center gap-2 bg-[var(--accent-color)] text-white dark:text-zinc-900 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
          >
            {status === 'loading' ? formSending : formSubmit}
          </button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-green-600 dark:text-green-400"
            >
              {formSuccess}
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-red-600 dark:text-red-400"
            >
              {formError}
            </motion.p>
          )}
        </div>
      </motion.form>

      {/* Social Links fade in at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 md:mt-24"
      >
        <Socials lng={lng} />
      </motion.div>
    </section>
  );
}
