export function Layout({ children }) {
  return (
    <div className="flex justify-center mx-4">
      <div className="max-w-screen-lg w-full">{children}</div>
    </div>
  );
}
