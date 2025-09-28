import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-semibold text-primary">
            FDM-терапия
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              О курсе
            </button>
            <button 
              onClick={() => scrollToSection('speaker')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Спикер
            </button>
            <button 
              onClick={() => scrollToSection('program')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Программа
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
            <Button onClick={() => scrollToSection('registration')}>
              Регистрация
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                О курсе
              </button>
              <button 
                onClick={() => scrollToSection('speaker')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Спикер
              </button>
              <button 
                onClick={() => scrollToSection('program')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Программа
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Контакты
              </button>
              <Button onClick={() => scrollToSection('registration')} className="self-start">
                Регистрация
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}