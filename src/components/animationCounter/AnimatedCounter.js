import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import "./style.css";

const Counter = ({ icon, target, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const speed = 500; 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = counterRef.current; 

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [counterRef]); 

  useEffect(() => {
    if (isVisible) {
      const updateCount = () => {
        const increment = target / speed;
        setCount(prevCount => {
          if (prevCount < target) {
            return prevCount + increment;
          } else {
            clearInterval(interval);
            return target;
          }
        });
      };

      const interval = setInterval(updateCount, 1);

      return () => clearInterval(interval);
    }
  }, [isVisible, target]);

  return (
    <div className="counter-wrapper" ref={counterRef}>
      <div className="counter-value">{Math.floor(count)}</div>
      <h3 className="counter-label">{label}</h3>
    </div>
  );
};

const AnimatedCounter = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="counters-section">
      <h2 className="title-2">{t('homep.counter_title')}</h2>
        <div className="counters-container">
          <Counter target={15312} label={t('counters.rated_us')} />
          <Counter target={14267} label={t('counters.repaired')} />
          <Counter target={13415} label={t('counters.liked_us')} />
        </div>
      </section>
    </div>
  );
};

export default AnimatedCounter;
