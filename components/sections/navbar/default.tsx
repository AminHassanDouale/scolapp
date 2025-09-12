"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Statistiques', href: '#stats' },
    { name: 'Fonctionnalités', href: '#features' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '/contact' }
  ];

  // Smooth scroll function for anchor links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      setIsOpen(false); // Close mobile menu
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="p-2 transition-transform rounded-xl group-hover:scale-105">
              <Image 
                src="/tete_logo_1.png" 
                alt="Your App logo" 
                width={70} 
                height={70}
                className="rounded-lg"
                priority
              />
            </div>
            <span className="ml-3 text-xl font-bold text-transparent transition-all bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600">
              ScolApp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 rounded-lg cursor-pointer hover:text-blue-600 hover:bg-blue-50"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 rounded-lg hover:text-blue-600 hover:bg-blue-50"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Essai Gratuit
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="p-4 mt-2 border shadow-xl md:hidden bg-white/95 backdrop-blur-md rounded-2xl border-gray-200/50">
            <div className="space-y-2">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="block px-4 py-3 font-medium text-gray-700 transition-all duration-200 cursor-pointer hover:text-blue-600 hover:bg-blue-50 rounded-xl"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 font-medium text-gray-700 transition-all duration-200 hover:text-blue-600 hover:bg-blue-50 rounded-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link href="/contact">
                <button 
                  className="w-full px-6 py-3 mt-4 font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Essai Gratuit
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;