export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-600 border-t-secondary-200">
          {' '}
        </div>
        <p className="text-lg text-secondary-500"> Loading ... </p>
      </div>
    </div>
  );
}
