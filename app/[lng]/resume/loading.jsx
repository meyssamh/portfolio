import Skeleton from '../../../components/ui/Skeleton';

export default function ResumeLoading() {
  return (
    <main className="container mx-auto px-4 pt-28 pb-20 min-h-screen max-w-4xl text-center">
      <Skeleton className="h-16 w-64 mx-auto mb-6" />
      <Skeleton className="h-6 w-96 mx-auto mb-10" />
      <Skeleton className="h-14 w-48 mx-auto mb-16 rounded-full" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Skeleton className="h-32 rounded-2xl" />
        <Skeleton className="h-32 rounded-2xl" />
        <Skeleton className="h-32 rounded-2xl" />
      </div>
    </main>
  );
}
