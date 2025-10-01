export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-emerald-200 border-t-emerald-600 mb-4"></div>

        {/* Loading text */}
        <h2 className="text-xl font-heading font-semibold text-navy-600">
          Loading...
        </h2>
        <p className="text-gray-600 mt-2">
          Preparing your Ireland golf experience
        </p>
      </div>
    </div>
  );
}
