export function ErrorForm({ children, name, validationErrors }) {
  if (!validationErrors) {
    return <>{children}</>;
  }

  const errorProps = validationErrors.filter((err) => err.type === name)[0];

  if (!errorProps) {
    return <>{children}</>;
  }

  const { text } = errorProps;

  return (
    <div>
      <div className="border border-red-500">{children} </div>
      <span className="text-red-500 font-bold">{text}</span>
    </div>
  );
}
