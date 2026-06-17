import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-8 py-4  bg-light-bg dark:bg-dark-bg sticky top-0 z-50">
      
      <div className="flex items-center gap-6">
        <Link href="/" className="font-serif text-2xl tracking-tight text-light-text dark:text-dark-text">
          Airix
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-light-text dark:text-dark-text">
        <Link href="/design" className="hover:opacity-70 transition-opacity">Colors</Link>
        <Link href="/design" className="hover:opacity-70 transition-opacity">Typography</Link>
        <Link href="/design" className="hover:opacity-70 transition-opacity">Components</Link>
        <Link href="/design" className="hover:opacity-70 transition-opacity">Responsive</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link 
          href="/design"
          className="bg-light-primary dark:bg-dark-primary text-white px-5 py-2 rounded-md font-medium hover:opacity-90 transition-opacity text-sm"
        >
          Try Airix
        </Link>
      </div>
      
    </nav>
  );
}
