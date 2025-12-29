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
            alert("Message sent! (Simulation)");
        }, 1500);
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2 className={styles.sectionTitle}>Get In Touch</h2>
                    <p style={{ color: 'var(--secondary)', lineHeight: 1.6 }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>Phone</span>
                        <span className={styles.value}>+30 6939379169</span>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>Email</span>
                        <a href="mailto:ioannis.lampropoulos05@gmail.com" className={`${styles.value} ${styles.link}`}>
                            ioannis.lampropoulos05@gmail.com
                        </a>
                    </div>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" required></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'sent' && <p style={{ color: 'green', marginTop: '1rem' }}>Message sent successfully!</p>}
                </form>
            </div>
        </section>
    );
}
