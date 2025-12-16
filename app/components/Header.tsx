"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "../data/siteData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = siteData.navigation.items;
  const { bookDemo } = siteData.navigation.ctaButtons;

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      // If on home page, scroll to section
      if (pathname === "/") {
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Navigate to home page with hash
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">{siteData.company.shortName}</span>
              </div>
              <span className="text-xl font-bold gradient-text">{siteData.company.name}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => {
              const href = (item as any).href || "#";
              if (href.startsWith("#")) {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(href)}
                    className="relative text-gray-700 hover:text-primary-teal transition-colors font-medium text-sm group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                  </button>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={href}
                  className="relative text-gray-700 hover:text-primary-teal transition-colors font-medium text-sm group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-6 py-2.5 bg-gradient-primary text-white rounded-xl hover:shadow-glow transition-all duration-300 font-semibold text-sm transform hover:scale-105"
            >
              {bookDemo}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200/50">
            {navItems.map((item) => {
              const href = (item as any).href || "#";
              if (href.startsWith("#")) {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(href)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50/50 rounded-lg font-medium transition-colors"
                  >
                    {item.name}
                  </button>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={href}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50/50 rounded-lg font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="px-4 py-2">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full px-4 py-3 bg-gradient-primary text-white rounded-xl hover:shadow-glow transition-all font-semibold"
              >
                {bookDemo}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

