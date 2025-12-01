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
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Что говорят о нашей работе руководители компаний
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-none bg-card hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Avatar className="w-12 h-12 bg-accent/10">
                    <AvatarFallback className="text-accent font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-card-foreground font-heading">
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
