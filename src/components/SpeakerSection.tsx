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
              Эксперт в области FDM-терапии с многолетним опытом практики и преподавания и <br/>президент Европейской Ассоциации FDM
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <ImageWithFallback
                    src="/speaker2.webp"
                    alt="Евгений Хаимов"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">
                    Евгений Хаимов
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Сертифицированный специалист FDM
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Остеопатия</Badge>
                    <Badge variant="secondary">FDM-терапия</Badge>
                    <Badge variant="secondary">Мануальная терапия</Badge>
                    <Badge variant="secondary">Физиотерапия</Badge>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Опыт:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Президент европейской FDM-Ассоциации EFDMA</li>
                        <li>• Директор FDM-Academy Russia</li>
                        <li>• Основатель и владелец частной медицинской клиники "ETAMED" в г. Ганновер, Германия</li>
                        <li>• Основатель российской FDM-академии (FDM Academy Russia), совместно с Thorsten Fischer.</li>
                      </ul>
                    </div>
                  </div>

                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Образование и сертификации:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Сертифицированный инструктор Европейской FDM-Ассоциации (FDM instructor of the EFDMA)</li>
                        <li>• С 2012 года является сертифицированным международным FDM-терапевтом Европейской FDM-Ассоциации (FDM IC of the European FDM Asscoiation (EFDMA)</li>
                        <li>• В 2007 году окончил учебу по специальности "Physiotherapists" в г.Ганновер, Германия</li>
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
                  "Дорогие мои, еще раз выражаю вам свою благодарность за курсы! Все знания и техники, данные вами, работают великолепно! Я получила от курса намного больше, чем просто знания о массаже и СПА процедурах — я получила возможность изучать саму себя и использовать эти знания для дальнейшего самосовершенствования. Единственный и неповторимый. УДАЧИ ВАМ!!! С уважением, Галина Степановна."
                </p>
                <cite className="font-semibold">— Галина Степановна</cite>
              </blockquote>
              <blockquote className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-muted-foreground mb-4">
                  "Большое спасибо Академии за очень глубокий и интересный курс базового оздоровительного массажа! Евгению Владимировичу — замечательный преподаватель во всех отношениях — просто чудо! Спасибо Академии за трудоустройство! Мне все очень понравилось! Надеюсь, в скором времени посетить еще и курсы повышения квалификации — массажи лица и антицеллюлитные программы!"
                </p>
                <cite className="font-semibold">— Ольга, массажист</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}