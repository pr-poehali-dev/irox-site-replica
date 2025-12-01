import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-heading">
              Консалтинг Эксперт
            </h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Профессиональные консалтинговые услуги для вашего бизнеса. 
              Мы помогаем компаниям достигать новых высот через стратегическое планирование и экспертные решения.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Icon name="Linkedin" size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-heading">Услуги</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Стратегический консалтинг</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Финансовый консалтинг</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">IT-консалтинг</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">HR-консалтинг</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-heading">Компания</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Команда</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Карьера</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Консалтинг Эксперт. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-accent transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
