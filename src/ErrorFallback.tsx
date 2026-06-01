type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};
export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div style={{ padding: "20px", background: "#fee2e2", color: "#991b1b" }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      {/* This button will trigger a refetch in TanStack Query */}
      <button onClick={resetErrorBoundary} style={{ marginTop: "10px" }}>
        Try Again
      </button>
    </div>
  );
}
