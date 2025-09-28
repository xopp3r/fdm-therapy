import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-4">FDM-терапия</h3>
            <p className="text-white/80 text-sm">
              Профессиональное обучение модели фасциальных дисторсий 
              для практикующих специалистов
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  О курсе
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('speaker')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Спикер
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('program')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Программа
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('registration')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Регистрация
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@fdm-course.ru</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5" />
                <span>г. Москва, ул. Тверская, 15</span>
              </li>
            </ul>
          </div>

          {/* Course Info */}
          <div>
            <h4 className="font-semibold mb-4">Курс</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>15-16 марта 2025</li>
              <li>16 академических часов</li>
              <li>Очно и онлайн</li>
              <li>Сертификат включен</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <div>
              © 2025 Образовательный центр "МедПрофи". Все права защищены.
            </div>
            <div className="mt-4 md:mt-0">
              <span>Лицензия № 041234 | ИНН 7701234567</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}