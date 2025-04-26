
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Home, User, Menu, X, Search, Heart, MessageSquare, Bell } from "lucide-react";
import { AuthModal } from './AuthModal';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLoginClick = () => {
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setAuthModalOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <Home className="h-5 w-5 text-real-estate-primary" />
            <span className="hidden font-bold text-xl text-real-estate-primary sm:inline-block">ISRES</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 ml-6">
            <a href="/properties" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
              Properties
            </a>
            <a href="/about" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
              About
            </a>
            <a href="/contact" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
              Contact
            </a>
            <a href="/donations" className="text-sm font-medium text-real-estate-accent transition-colors hover:text-foreground">
              Donations
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={handleLoginClick}>Log in</Button>
                <Button onClick={handleLoginClick}>Sign up</Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden p-4 border-t bg-background">
          <nav className="grid gap-4">
            <a href="/properties" className="text-sm font-medium hover:text-real-estate-primary">
              Properties
            </a>
            <a href="/about" className="text-sm font-medium hover:text-real-estate-primary">
              About
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-real-estate-primary">
              Contact
            </a>
            <a href="/donations" className="text-sm font-medium text-real-estate-accent hover:text-real-estate-primary">
              Donations
            </a>
            
            {!isLoggedIn && (
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button variant="outline" onClick={handleLoginClick} className="w-full">Log in</Button>
                <Button onClick={handleLoginClick} className="w-full">Sign up</Button>
              </div>
            )}

            {isLoggedIn && (
              <div className="grid grid-cols-4 gap-2 pt-2">
                <Button variant="ghost" size="icon" className="flex justify-center">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="flex justify-center">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="flex justify-center">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="flex justify-center">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} onSuccess={handleAuthSuccess} />
    </header>
  );
};

export default Navbar;
