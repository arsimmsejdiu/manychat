import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center font-bold">
          li
        </div>
        <span className="text-xl font-semibold text-primary-foreground">
          Slide
        </span>
      </div>
      <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
        <Link href="#features">Features</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#about">About</Link>
      </nav>
      <Button className="bg-white text-primary hover:bg-gray-600 hover:text-white">
        <Link href="/dashboard">Login</Link>
      </Button>
    </div>
  );
};

export default Header;