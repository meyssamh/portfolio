import Skeleton from '../../../components/ui/Skeleton';

export default function ProjectsLoading() {
  return (
    <main className="container mx-auto px-4 pt-28 pb-20 min-h-screen max-w-7xl">
      {/* Skeleton for the Section Title */}
      <Skeleton className="h-4 w-48 mb-12" />

      {/* Skeleton for the Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skeleton Card 1 */}
        <div className="card p-8 rounded-2xl h-80 flex flex-col">
          <Skeleton className="h-8 w-3/4 mb-6" />
          <div className="flex gap-2 mb-6">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
          <Skeleton className="h-4 w-full mb-3" />
          <Skeleton className="h-4 w-5/6 mb-3" />
          <Skeleton className="h-4 w-4/6 mb-6" />

          <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-700 flex gap-4">
            <Skeleton className="h-10 w-32 rounded-full" />
            <Skeleton className="h-10 w-32 rounded-full" />
          </div>
        </div>

        {/* Skeleton Card 2 */}
        <div className="card p-8 rounded-2xl h-80 flex flex-col">
          <Skeleton className="h-8 w-2/3 mb-6" />
          <div className="flex gap-2 mb-6">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
          <Skeleton className="h-4 w-full mb-3" />
          <Skeleton className="h-4 w-5/6 mb-3" />
          <Skeleton className="h-4 w-3/4 mb-6" />

          <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-700 flex gap-4">
            <Skeleton className="h-10 w-32 rounded-full" />
            <Skeleton className="h-10 w-32 rounded-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
