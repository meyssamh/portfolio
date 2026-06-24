'use client';

export default function SpotlightWrapper({ children, className }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = `${e.clientX - rect.left}px`;
    const y = `${e.clientY - rect.top}px`;

    e.currentTarget.style.setProperty('--mouse-x', x);
    e.currentTarget.style.setProperty('--mouse-y', y);
  };

  return (
    <div className={className} onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
}