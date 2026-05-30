import Link from "next/link";
import { navItems } from "@/data/site";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="flex max-w-[calc(100vw-2rem)] items-center gap-0.5 overflow-x-auto rounded-full border border-surface-border bg-surface/90 p-1 backdrop-blur-md shadow-lg shadow-black/20 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Main"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              item.href === "#contact"
                ? "nav-item shrink-0 bg-accent text-white hover:bg-purple-500 hover:text-white font-semibold"
                : "nav-item shrink-0"
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
