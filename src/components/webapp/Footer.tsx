import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 font-heading text-accent">
              ConsultPro
            </h3>
            <p className="text-primary-foreground/70 mb-6 max-w-md leading-relaxed">
              Стратегический консалтинг мирового уровня для компаний, которые стремятся к исключительным результатам.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-accent border border-white/10 hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Icon name="Linkedin" size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-accent border border-white/10 hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-accent border border-white/10 hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-heading text-lg">Услуги</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">Стратегический консалтинг</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Финансовый консалтинг</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">IT-консалтинг</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">HR-консалтинг</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-heading text-lg">Компания</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Команда</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Карьера</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} ConsultPro. Все права защищены.
          </p>
          <div className="flex gap-8 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-accent transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;