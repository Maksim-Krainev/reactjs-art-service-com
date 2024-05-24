import React, { useEffect, useState, useRef } from 'react';
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
  return (
    <div>
      <section className="counters-section">
        <div className="counters-container">
          <Counter  target={1000} label="Нас оцінили" />
          <Counter  target={10000} label="Ми поремонтували" />
          <Counter  target={5000} label="Ми сподобались" />
        </div>
      </section>
    </div>
  );
};

export default AnimatedCounter;
