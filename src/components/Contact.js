'use client';

import styles from './Contact.module.css';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Turnstile } from '@marsidev/react-turnstile';

export default function Contact() {
    const t = useTranslations('Contact');
    const [status, setStatus] = useState('');
    const [token, setToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
            token,
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
                    <h2 className={styles.sectionTitle}>{t('title')}</h2>
                    <p style={{ color: 'var(--secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                        {t('description')}
                    </p>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>{t('phone')}</span>
                        <a href="tel:+306939379169" className={`${styles.value} ${styles.link}`}>
                            +30 693 937 9169
                        </a>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>{t('email')}</span>
                        <a href="mailto:contact@ioannislampropoulos.com" className={`${styles.value} ${styles.link}`}>
                            contact@ioannislampropoulos.com
                        </a>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>{t('socials')}</span>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://github.com/Lampropoulosss" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">{t('form.nameLabel')}</label>
                        <input type="text" id="name" name="name" required placeholder={t('form.namePlaceholder')} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">{t('form.emailLabel')}</label>
                        <input type="email" id="email" name="email" required placeholder={t('form.emailPlaceholder')} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">{t('form.messageLabel')}</label>
                        <textarea id="message" name="message" rows="5" required placeholder={t('form.messagePlaceholder')}></textarea>
                    </div>

                    <div className={styles.formGroup} style={{ marginBottom: '1rem' }}>
                        <Turnstile
                            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                            onSuccess={setToken}
                            options={{ theme: 'light' }}
                        />
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={status === 'sending' || status === 'sent' || !token}>
                        {status === 'sending' ? t('form.sending') : status === 'sent' ? t('form.sent') : t('form.send')}
                    </button>

                    {status === 'sent' && (
                        <p style={{ color: '#4caf50', marginTop: '1rem', fontSize: '0.9rem' }}>
                            {t('form.successMessage')}
                        </p>
                    )}
                    {status === 'error' && (
                        <p style={{ color: '#f44336', marginTop: '1rem', fontSize: '0.9rem' }}>
                            {t('form.errorMessage')}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}