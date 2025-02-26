"use client";

import { useState, useEffect, useRef } from 'react';

interface ScrollingCounterProps {
  label: string;
  endValue: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  backgroundColor?: string;
  textColor?: string;
}

export default function ScrollingCounter({
  label,
  endValue,
  prefix = '',
  suffix = '',
  duration = 2000,
  backgroundColor = 'bg-green-600',
  textColor = 'text-white'
}: ScrollingCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up intersection observer to start animation when component is visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    // Store the current ref value to avoid the cleanup warning
    const currentRef = counterRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the stored ref value in the cleanup function
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Animate the counter
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * endValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [endValue, duration, isVisible]);

  // Format large numbers for display
  const formatLargeNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
      return num.toString();
    }
  };

  // Choose format based on size and whether there's a suffix
  const displayValue = (suffix && endValue > 1000000) 
    ? formatLargeNumber(count) 
    : count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Determine text size class based on content length
  const totalLength = (prefix + displayValue + suffix).length;
  const textSizeClass = totalLength > 12 
    ? 'text-xl md:text-2xl' 
    : totalLength > 8 
      ? 'text-2xl md:text-3xl' 
      : 'text-3xl md:text-4xl';

  return (
    <div 
      ref={counterRef}
      className={`${backgroundColor} ${textColor} h-full rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg flex items-center justify-center`}
    >
      <div className="text-center">
        <div className={`${textSizeClass} font-bold mb-1 flex flex-wrap justify-center items-center`}>
          {prefix && <span className="mx-0.5">{prefix}</span>}
          <span className="tabular-nums mx-0.5">{displayValue}</span>
          {suffix && <span className="mx-0.5">{suffix}</span>}
        </div>
        <div className="text-sm md:text-base opacity-90">{label}</div>
      </div>
    </div>
  );
} 