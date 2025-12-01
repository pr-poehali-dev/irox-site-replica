import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-8 backdrop-blur-sm border border-accent/20">
              <Icon name="Award" size={18} className="text-accent" />
              <span className="text-sm font-medium text-accent">
                Премиальный консалтинг с 2008 года
              </span>
            </div>
          </div>

          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Трансформируем
            <br />
            <span className="text-accent">ваш бизнес</span>
          </h1>

          <p 
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Стратегический консалтинг мирового уровня для компаний, 
            которые стремятся к исключительным результатам
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              Начать сотрудничество
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-10 py-7 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Наши услуги
              <Icon name="ChevronDown" className="ml-2" size={20} />
            </Button>
          </div>

          <div 
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-5xl font-bold text-accent">250+</div>
              <div className="text-sm uppercase tracking-wider text-white/70">Успешных проектов</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-5xl font-bold text-accent">15+</div>
              <div className="text-sm uppercase tracking-wider text-white/70">Лет опыта</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-5xl font-bold text-accent">98%</div>
              <div className="text-sm uppercase tracking-wider text-white/70">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/40" />
      </div>
    </section>
  );
};

export default Hero;