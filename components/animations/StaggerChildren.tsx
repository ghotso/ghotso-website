'use client';

import { useEffect, useRef, useState, Children } from 'react';

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export default function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className = '',
}: StaggerChildrenProps) {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const childElements = containerRef.current?.children;
          if (childElements) {
            Array.from(childElements).forEach((_, index) => {
              setTimeout(() => {
                setVisibleIndices((prev) => new Set(prev).add(index));
              }, index * staggerDelay * 1000);
            });
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [staggerDelay]);

  const childrenArray = Children.toArray(children);

  return (
    <div ref={containerRef} className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: visibleIndices.has(index) ? 1 : 0,
            transform: visibleIndices.has(index)
              ? 'translateY(0)'
              : 'translateY(20px)',
            transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

