import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const benefits = [
  {
    icon: 'Target',
    title: 'Стратегическое планирование',
    description: 'Разработка долгосрочных стратегий для устойчивого роста вашего бизнеса',
  },
  {
    icon: 'TrendingUp',
    title: 'Рост эффективности',
    description: 'Оптимизация бизнес-процессов и увеличение рентабельности компании',
  },
  {
    icon: 'Users',
    title: 'Экспертная команда',
    description: 'Опытные консультанты с глубоким пониманием вашей отрасли',
  },
  {
    icon: 'LineChart',
    title: 'Анализ данных',
    description: 'Принятие решений на основе глубокого анализа и актуальных данных',
  },
  {
    icon: 'Shield',
    title: 'Управление рисками',
    description: 'Выявление и минимизация потенциальных угроз для бизнеса',
  },
  {
    icon: 'Sparkles',
    title: 'Инновационные решения',
    description: 'Внедрение передовых технологий и современных подходов',
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Наши преимущества
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к развитию вашего бизнеса с фокусом на результат
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon name={benefit.icon as any} className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
