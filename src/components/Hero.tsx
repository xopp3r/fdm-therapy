import { Button } from "./ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function Hero() {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1712638932314-e2b185ca0930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcmFweSUyMGhhbmRzfGVufDF8fHx8MTc1OTA1MDkzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="FDM терапия"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Интенсивный курс по FDM-терапии
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Двухдневный курс по клинико-физиологическому объяснению и клиническому применению модели фасциальных дисторсий
          </p>

          {/* Course Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Calendar className="text-accent" size={24} />
              <div className="text-left">
                <div className="font-semibold">Даты проведения</div>
                <div className="text-white/80">15-16 марта 2025</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-accent" size={24} />
              <div className="text-left">
                <div className="font-semibold">Длительность</div>
                <div className="text-white/80">2 дня, 16 часов</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <MapPin className="text-accent" size={24} />
              <div className="text-left">
                <div className="font-semibold">Формат</div>
                <div className="text-white/80">Очно</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={scrollToRegistration}
            >
              Записаться на курс
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => {
                const element = document.getElementById('program');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Программа курса
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}