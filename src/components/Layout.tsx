import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  transparentNavbar?: boolean;
}

export function Layout({ children, showFooter = true, transparentNavbar = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar transparent={transparentNavbar} />
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}
