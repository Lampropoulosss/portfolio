'use client';

import styles from './Contact.module.css';
import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate form submission
        setTimeout(() => {
            setStatus('sent');
            // Optional: Reset form fields here if you want
            e.target.reset();
            // Removed the alert() for a smoother UX
        }, 1500);
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2 className={styles.sectionTitle}>Let's Connect</h2>
                    <p style={{ color: 'var(--secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                        I am currently available for freelance projects. {/* and open to full-time opportunities. */}
                        If you have a project that needs a robust solution, or just want to discuss modern web technologies, feel free to reach out.
                    </p>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>Phone</span>
                        <a href="tel:+306939379169" className={`${styles.value} ${styles.link}`}>
                            +30 693 937 9169
                        </a>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>Email</span>
                        <a href="mailto:me@ioannislampropoulos.com" className={`${styles.value} ${styles.link}`}>
                            me@ioannislampropoulos.com
                        </a>
                    </div>

                    {/* TIP: It is highly recommended to add Social Links here (LinkedIn/GitHub) */}
                    <div className={styles.infoItem}>
                        <span className={styles.label}>Socials</span>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                LinkedIn
                            </a>
                            <a href="https://github.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required placeholder="John Doe" />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required placeholder="john@example.com" />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project..."></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={status === 'sending' || status === 'sent'}>
                        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent' : 'Send Message'}
                    </button>

                    {status === 'sent' && (
                        <p style={{ color: '#4caf50', marginTop: '1rem', fontSize: '0.9rem' }}>
                            Thank you! Your message has been received.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}