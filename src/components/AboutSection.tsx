import { Card, CardContent } from "./ui/card";
import { Users, Target, Award, BookOpen } from "lucide-react";

export function AboutSection() {
  const benefits = [
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Для практикующих специалистов",
      description: "Врачи, физиотерапевты, массажисты, остеопаты и мануальные терапевты"
    },
    {
      icon: <Target className="text-primary" size={32} />,
      title: "Практические навыки",
      description: "Освоение конкретных техник диагностики и лечения фасциальных дисторсий"
    },
    {
      icon: <Award className="text-primary" size={32} />,
      title: "Сертификация",
      description: "Получение сертификата о прохождении курса FDM-терапии"
    },
    {
      icon: <BookOpen className="text-primary" size={32} />,
      title: "Научный подход",
      description: "Клинико-физиологическое обоснование методов лечения"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Кому полезен этот курс?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              FDM-терапия (Fascial Distortion Model) — это инновационный подход к диагностике и лечению 
              фасциальных нарушений, основанный на понимании анатомии и физиологии фасциальной системы.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Что вы получите после курса:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Понимание анатомии и физиологии фасциальной системы</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Навыки диагностики различных типов фасциальных дисторсий</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Практические техники коррекции нарушений</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Клинические протоколы применения FDM</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Сертификат международного образца</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Методические материалы и доступ к записям</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}