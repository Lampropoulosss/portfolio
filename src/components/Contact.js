'use client';

import styles from './Contact.module.css';
import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('sent');
                setTimeout(() => {
                    setStatus('');
                    e.target.reset();
                }, 3000); // Clear success message after 3 seconds
            } else {
                setStatus('error');
                console.error('Submission failed');
            }
        } catch (error) {
            setStatus('error');
            console.error('An error occurred', error);
        }
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
                        <a href="mailto:contact@ioannislampropoulos.com" className={`${styles.value} ${styles.link}`}>
                            contact@ioannislampropoulos.com
                        </a>
                    </div>

                    {/* TIP: It is highly recommended to add Social Links here (LinkedIn/GitHub) */}
                    <div className={styles.infoItem}>
                        <span className={styles.label}>Socials</span>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://github.com/Lampropoulosss" target="_blank" rel="noopener noreferrer" className={styles.link}>
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
                    {status === 'error' && (
                        <p style={{ color: '#f44336', marginTop: '1rem', fontSize: '0.9rem' }}>
                            Something went wrong. Please try again later.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}