import Skeleton from '../../../components/ui/Skeleton';

export default function AboutLoading() {
  return (
    <main className="container mx-auto px-4 pt-28 pb-20 min-h-screen max-w-4xl">
      <Skeleton className="h-4 w-32 mb-8" />
      <Skeleton className="h-10 w-3/4 mb-6" />
      <div className="space-y-4 mb-24">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
      </div>

      {/* Timeline Skeleton */}
      <Skeleton className="h-8 w-48 mb-8" />
      <div className="space-y-12">
        <Skeleton className="h-48 w-full rounded-2xl" />
        <Skeleton className="h-48 w-full rounded-2xl" />
      </div>
    </main>
  );
}
