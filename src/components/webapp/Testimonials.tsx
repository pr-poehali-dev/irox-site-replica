import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    name: 'Анна Петрова',
    position: 'CEO, TechStart',
    text: 'Благодаря профессиональной команде консультантов мы смогли выйти на новые рынки и увеличить прибыль на 60% за год.',
    rating: 5,
    initials: 'АП',
  },
  {
    name: 'Михаил Соколов',
    position: 'Директор, InnovaCorp',
    text: 'Глубокий анализ и стратегические рекомендации помогли нам оптимизировать все бизнес-процессы. Результат превзошел ожидания.',
    rating: 5,
    initials: 'МС',
  },
  {
    name: 'Елена Волкова',
    position: 'Основатель, GrowthLab',
    text: 'Работа с этой командой стала поворотным моментом для нашей компании. Профессионализм и внимание к деталям на высшем уровне.',
    rating: 5,
    initials: 'ЕВ',
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Отзывы
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Что говорят о нас
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Мнение руководителей компаний, с которыми мы работали
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border border-border bg-card hover:border-accent/50 hover:shadow-2xl transition-all duration-500 rounded-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  “{testimonial.text}”
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 bg-accent/10 border-2 border-accent/20">
                    <AvatarFallback className="text-accent font-bold text-lg">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-card-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;