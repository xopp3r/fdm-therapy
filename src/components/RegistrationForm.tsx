import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";
import { CheckCircle, Phone, Mail, CreditCard } from "lucide-react";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    experience: "",
    format: "",
    comments: "",
    agreement: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast.error("Необходимо согласие на обработку персональных данных");
      return;
    }

    // Simulate form submission
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-12">
                <CheckCircle className="mx-auto mb-6 text-green-500" size={64} />
                <h3 className="text-2xl font-bold mb-4">Заявка отправлена!</h3>
                <p className="text-muted-foreground mb-6">
                  Спасибо за интерес к нашему курсу. В ближайшее время мы свяжемся с вами 
                  для подтверждения регистрации и отправки реквизитов для оплаты.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Отправить ещё одну заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Регистрация на курс
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Заполните форму, и мы свяжемся с вами для подтверждения участия
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Форма регистрации</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Имя *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Фамилия *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comments">Комментарии</Label>
                      <Textarea
                        id="comments"
                        placeholder="Дополнительные вопросы или пожелания..."
                        value={formData.comments}
                        onChange={(e) => handleInputChange("comments", e.target.value)}
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreement"
                        checked={formData.agreement}
                        onCheckedChange={(checked) => handleInputChange("agreement", !!checked)}
                      />
                      <Label htmlFor="agreement" className="text-sm leading-relaxed">
                        Я согласен(на) на обработку персональных данных и принимаю условия 
                        участия в курсе. Подтверждаю, что ознакомлен(а) с программой курса.
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Отправить заявку на участие
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Course Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Стоимость участия</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                    <span>Очное участие</span>
                    <span className="font-semibold">45 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                    <span>Онлайн участие</span>
                    <span className="font-semibold">25 000 ₽</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    * Ранняя регистрация до 1 марта — скидка 15%
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard size={20} />
                    <span>Способы оплаты</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    • Банковский перевод<br />
                    • Оплата картой<br />
                    • Безналичный расчёт для организаций<br />
                    • Рассрочка (уточните у менеджера)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-muted-foreground" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-muted-foreground" />
                    <span>info@fdm-course.ru</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}