import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function SpeakerSection() {
  return (
    <section id="speaker" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ведущий курса
            </h2>
            <p className="text-xl text-muted-foreground">
              Эксперт в области FDM-терапии с многолетним опытом практики и преподавания
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg5NDMzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Доктор Александр Иванов"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">
                    Доктор Александр Иванов
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Врач-остеопат, сертифицированный специалист FDM
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Остеопатия</Badge>
                    <Badge variant="secondary">FDM-терапия</Badge>
                    <Badge variant="secondary">Мануальная терапия</Badge>
                    <Badge variant="secondary">Физиотерапия</Badge>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Образование и сертификации:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Московский медицинский университет</li>
                        <li>• Европейская школа остеопатии (ESO)</li>
                        <li>• Сертификат FDM Institute (США)</li>
                        <li>• Повышение квалификации в Германии</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Опыт:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 15+ лет практики в области остеопатии</li>
                        <li>• 8+ лет преподавания FDM-терапии</li>
                        <li>• 500+ учеников по всему миру</li>
                        <li>• Автор 20+ научных публикаций</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 bg-muted/50 rounded-lg p-8">
            <h4 className="text-xl font-semibold mb-4 text-center">
              Отзывы участников предыдущих курсов:
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <blockquote className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-muted-foreground mb-4">
                  "Александр Иванов — превосходный преподаватель! Сложные концепции FDM объясняет 
                  простым и понятным языком. Практические занятия очень структурированы."
                </p>
                <cite className="font-semibold">— Елена Смирнова, врач-невролог</cite>
              </blockquote>
              <blockquote className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-muted-foreground mb-4">
                  "После курса моя практика кардинально изменилась. Теперь могу эффективно помогать 
                  пациентам с различными фасциальными нарушениями."
                </p>
                <cite className="font-semibold">— Михаил Петров, массажист</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}