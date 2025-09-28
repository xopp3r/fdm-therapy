import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Clock, Users, BookOpen, Activity } from "lucide-react";

export function ProgramSection() {
  const day1Schedule = [
    {
      time: "09:00 - 09:30",
      title: "Регистрация и приветствие",
      description: "Знакомство с участниками, обзор программы курса"
    },
    {
      time: "09:30 - 11:00",
      title: "Теоретические основы FDM",
      description: "История развития модели, основные принципы и концепции"
    },
    {
      time: "11:00 - 11:15",
      title: "Перерыв",
      description: ""
    },
    {
      time: "11:15 - 12:45",
      title: "Анатомия фасциальной системы",
      description: "Структура и функции фасций, биомеханические свойства"
    },
    {
      time: "12:45 - 13:45",
      title: "Обеденный перерыв",
      description: ""
    },
    {
      time: "13:45 - 15:15",
      title: "Типы фасциальных дисторсий",
      description: "Классификация, клинические проявления, дифференциальная диагностика"
    },
    {
      time: "15:15 - 15:30",
      title: "Перерыв",
      description: ""
    },
    {
      time: "15:30 - 17:00",
      title: "Практические занятия №1",
      description: "Базовые техники пальпации и диагностики"
    }
  ];

  const day2Schedule = [
    {
      time: "09:00 - 10:30",
      title: "Диагностические техники",
      description: "Специфические тесты и методы выявления дисторсий"
    },
    {
      time: "10:30 - 10:45",
      title: "Перерыв",
      description: ""
    },
    {
      time: "10:45 - 12:15",
      title: "Лечебные техники FDM",
      description: "Практическое освоение основных коррекционных методов"
    },
    {
      time: "12:15 - 13:15",
      title: "Обеденный перерыв",
      description: ""
    },
    {
      time: "13:15 - 14:45",
      title: "Клинические случаи",
      description: "Разбор реальных примеров из практики"
    },
    {
      time: "14:45 - 15:00",
      title: "Перерыв",
      description: ""
    },
    {
      time: "15:00 - 16:30",
      title: "Практические занятия №2",
      description: "Отработка техник в парах, супервизия"
    },
    {
      time: "16:30 - 17:00",
      title: "Подведение итогов и сертификация",
      description: "Вопросы и ответы, выдача сертификатов"
    }
  ];

  return (
    <section id="program" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Программа курса
            </h2>
            <p className="text-xl text-muted-foreground">
              Интенсивная двухдневная программа с балансом теории и практики
            </p>
          </div>

          {/* Course Highlights */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold mb-2">16 часов</h3>
                <p className="text-muted-foreground text-sm">Академических часов</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold mb-2">До 20 человек</h3>
                <p className="text-muted-foreground text-sm">В группе</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold mb-2">50/50</h3>
                <p className="text-muted-foreground text-sm">Теория/Практика</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Activity className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold mb-2">Сертификат</h3>
                <p className="text-muted-foreground text-sm">По окончании</p>
              </CardContent>
            </Card>
          </div>

          {/* Daily Schedule */}
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="day1">День 1 - Теория и основы</TabsTrigger>
              <TabsTrigger value="day2">День 2 - Практика и клиника</TabsTrigger>
            </TabsList>
            
            <TabsContent value="day1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>День 1 - 15 марта 2025</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {day1Schedule.map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex-shrink-0 w-24 text-sm font-medium text-primary">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          {item.description && (
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="day2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>День 2 - 16 марта 2025</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {day2Schedule.map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex-shrink-0 w-24 text-sm font-medium text-primary">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          {item.description && (
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Additional Info */}
          <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Дополнительная информация</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">В стоимость включено:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Методические материалы</li>
                  <li>• Сертификат о прохождении курса</li>
                  <li>• Кофе-брейки</li>
                  <li>• Доступ к записям лекций (30 дней)</li>
                  <li>• Поддержка куратора после курса</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Что взять с собой:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Удобную одежду для практики</li>
                  <li>• Блокнот для записей</li>
                  <li>• Сменную обувь</li>
                  <li>• Полотенце для практических занятий</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}