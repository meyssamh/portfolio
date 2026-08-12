export default function Skeleton({ className = '' }) {
  return (
    <div
      className={`rounded-lg bg-zinc-200 dark:bg-zinc-800 skeleton-shimmer ${className}`}
      aria-hidden="true"
    />
  );
}
