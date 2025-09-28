import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function ContactsSection() {
  return (
    <section id="contacts" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Контакты и информация
            </h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone size={20} />
                  <span>Контактная информация</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">

                {/* <div className="flex items-start space-x-4">
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@fdm-course.ru</p>
                  <p className="text-sm text-muted-foreground">Отвечаем в течение 24 часов</p>
                  </div>
                  </div> */}

                <div className="flex items-start space-x-4">
                  <MessageCircle className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Telegram</h4>
                    <p className="text-muted-foreground">@*******</p>
                    <p className="text-sm text-muted-foreground">+7 (***) **-**-**</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (***) ***-**-**</p>
                    <p className="text-sm text-muted-foreground">Звонки принимаем ежедневно с 9:00 до 20:00</p>
                  </div>
                </div>

                {/* <div className="pt-4">
                  <Button className="w-full">
                    Связаться с нами
                  </Button>
                </div> */}
              </CardContent>
            </Card>

            {/* Location Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin size={20} />
                  <span>Место проведения</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Очные занятия</h4>
                  <p className="text-muted-foreground mb-2">
                    ????????????<br />
                    г. Ижевск, ул. ??????, д. ??
                  </p>
                  {/* <p className="text-sm text-muted-foreground">
                    5 минут пешком от м. Тверская или Пушкинская
                  </p> */}
                </div>

                {/* <div>
                  <h4 className="font-semibold mb-2">Онлайн занятия</h4>
                  <p className="text-muted-foreground mb-2">
                    Платформа: Zoom<br />
                    Ссылка для подключения высылается за день до начала курса
                  </p>
                </div> */}

                <div className="flex items-start space-x-4">
                  <Clock className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Время проведения</h4>
                    <p className="text-muted-foreground">28-29 октября 2025</p>
                    <p className="text-muted-foreground">??:00 - ??:00 (оба дня)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Часто задаваемые вопросы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Нужен ли опыт работы с FDM?</h4>
                    <p className="text-muted-foreground text-sm">
                      Нет, курс подходит как для начинающих, так и для опытных специалистов. 
                      Главное — базовые знания анатомии и опыт работы с телом.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Выдается ли сертификат?</h4>
                    <p className="text-muted-foreground text-sm">
                      Да, все участники получают сертификат о прохождении курса, 
                      признаваемый профессиональным сообществом.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Можно ли получить запись?</h4>
                    <p className="text-muted-foreground text-sm">
                      Да, все участники получают доступ к записям лекций на 30 дней 
                      для повторного изучения материала.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Есть ли рассрочка оплаты?</h4>
                    <p className="text-muted-foreground text-sm">
                      Да, возможна рассрочка на 2-3 платежа. Подробности уточняйте 
                      у менеджера при регистрации.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Что делать, если не смогу присутствовать?</h4>
                    <p className="text-muted-foreground text-sm">
                      При уведомлении за 7 дней до начала курса — полный возврат средств. 
                      Возможен перенос на следующий поток.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Предоставляются ли материалы?</h4>
                    <p className="text-muted-foreground text-sm">
                      Да, все участники получают полный комплект методических материалов 
                      в электронном виде.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Organization Info */}
          <div className="mt-12 bg-muted/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Организатор
            </h3>
            <div className="text-center">
              <h4 className="font-semibold mb-2">
                Образовательный центр "???"
              </h4>
              <p className="text-muted-foreground mb-4">
                Лицензия на образовательную деятельность № ???? от ????
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong>ИНН:</strong> ???
                </div>
                <div>
                  <strong>ОГРН:</strong> ???
                </div>
                <div>
                  <strong>Р/с:</strong> ???
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}