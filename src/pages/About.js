export function About() {
  return (
    <div className="flex flex-col">
      <span>About</span>
      <span className="font-normal py-2">
        This project for booking airline tickets is a test task for{" "}
        <span className="font-semibold">ProCorp</span>. The project was made by{" "}
        <span className="font-semibold">Vladislav Lesovoy</span>
      </span>
      <a
        className="font-bold	underline text-sky-600"
        href="https://github.com/babub22"
      >
        My Github
      </a>
    </div>
  );
}
