export function Header() {
  return (
    <div className="mb-7 relative flex w-full items-center justify-between py-2 text-neutral-900 bg-white">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="mr-auto flex flex-row">
          <a className="px-2 block" href="/">
            Home
          </a>
          <a className="px-2 block" href="/about">
            About
          </a>
        </div>
      </div>
    </div>
  );
}
