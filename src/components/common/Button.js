export function Button({ handleFunction, text }) {
  return (
    <button className="button" onClick={() => handleFunction()}>
      {text}
    </button>
  );
}
