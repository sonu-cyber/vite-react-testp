type ErrorFallbackProps = {
  error: unknown;
  resetErrorBoundary: () => void;
};
export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div>
      <p>{error instanceof Error ? error.message : "Something went wrong"}</p>

      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}
