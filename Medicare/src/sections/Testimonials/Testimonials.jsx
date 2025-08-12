import React from 'react';
import { renderStars } from '../../utils/helpers';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Kavita Sinha',
      role: 'Patient',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'MediCare made it so easy to find and book an appointment with a cardiologist. The platform is user-friendly and the doctor was excellent!'
    },
    {
      id: 2,
      name: 'Dr. Rakesh Iyer',
      role: 'Neurologist',
      avatar: 'https://images.pexels.com/photos/6301182/pexels-photo-6301182.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'As a healthcare provider, I appreciate how MediCare streamlines the appointment process. It helps me manage my schedule efficiently.'
    },
    {
      id: 3,
      name: 'Sunita Patil ',
      role: 'Mother of Two',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Finding pediatric care for my children has never been easier. The search filters and detailed doctor profiles are fantastic!'
    },
    {
      id: 4,
      name: 'Rajiv Khanna ',
      role: 'Senior Patient',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4,
      text: 'The emergency care feature gave me peace of mind. When I needed urgent care, MediCare helped me find the nearest available doctor quickly.'
    },
    {
      id: 5,
      name: 'Dr. Sanjay Reddy',
      role: 'Pediatrician',
      avatar: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'MediCare has transformed how I connect with patients. The platform is professional and makes healthcare more accessible for families.'
    },
    {
      id: 6,
      name: 'Rahul Nair ',
      role: 'IT Professional',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The mobile-friendly design is perfect for busy professionals like me. I can book appointments during my commute!'
    }
  ];

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={`${styles.testimonialsContainer} container`}>
        <div className={styles.testimonialsHeader} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>What Our Users Say</h2>
          <p className={styles.sectionSubtitle}>
            Don't just take our word for it. Here's what patients and healthcare providers 
            are saying about their experience with MediCare.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={styles.testimonialCard}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.testimonialContent}>
                <div className={styles.rating}>
                  <span className={styles.stars}>{renderStars(testimonial.rating)}</span>
                </div>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
              </div>
              
              <div className={styles.testimonialAuthor}>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className={styles.authorAvatar}
                />
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <span className={styles.authorRole}>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.trustIndicators} data-aos="fade-up" data-aos-delay="600">
          <div className={styles.trustItem}>
            <i className="fas fa-award"></i>
            <span>Healthcare Excellence Award 2024</span>
          </div>
          <div className={styles.trustItem}>
            <i className="fas fa-shield-alt"></i>
            <span>HIPAA Compliant</span>
          </div>
          <div className={styles.trustItem}>
            <i className="fas fa-certificate"></i>
            <span>ISO 27001 Certified</span>
          </div>
          <div className={styles.trustItem}>
            <i className="fas fa-users"></i>
            <span>5M+ Active Users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;