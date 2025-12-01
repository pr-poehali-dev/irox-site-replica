import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'TrendingUp',
    title: 'Стратегический консалтинг',
    description: 'Разработка долгосрочных стратегий роста, анализ рынков и определение конкурентных преимуществ вашей компании',
  },
  {
    icon: 'DollarSign',
    title: 'Финансовый консалтинг',
    description: 'Оптимизация финансовых потоков, управление рисками и увеличение рентабельности бизнеса',
  },
  {
    icon: 'Code',
    title: 'Цифровая трансформация',
    description: 'Внедрение инновационных технологий и автоматизация бизнес-процессов для повышения эффективности',
  },
  {
    icon: 'Users',
    title: 'HR-консалтинг',
    description: 'Построение эффективных команд, развитие корпоративной культуры и системы мотивации',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Наши услуги
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Комплексные решения
            <br />
            для вашего успеха
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Индивидуальный подход к каждому проекту с фокусом на измеримые результаты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon name={service.icon as any} className="text-accent" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.description}
              </p>

              <div className="mt-6 flex items-center text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm uppercase tracking-wider">Подробнее</span>
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
