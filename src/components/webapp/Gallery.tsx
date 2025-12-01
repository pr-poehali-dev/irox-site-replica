const projects = [
  {
    title: 'Финансовая оптимизация',
    category: 'Финансовый консалтинг',
    image: 'https://cdn.poehali.dev/projects/13a636c4-5f3d-4edf-9067-30eddec3151c/files/e440d56c-1987-4d09-a047-0f04f6182766.jpg',
    result: '+45% рост прибыли',
  },
  {
    title: 'Трансформация бизнес-процессов',
    category: 'Организационный консалтинг',
    image: 'https://cdn.poehali.dev/projects/13a636c4-5f3d-4edf-9067-30eddec3151c/files/649b9f12-77b1-4987-aa0e-36cedddc0a05.jpg',
    result: '-30% операционных расходов',
  },
  {
    title: 'Стратегия цифровизации',
    category: 'IT-консалтинг',
    image: 'https://cdn.poehali.dev/projects/13a636c4-5f3d-4edf-9067-30eddec3151c/files/1f1f2494-750a-4d9a-b776-a54320a1de2b.jpg',
    result: '2x увеличение скорости работы',
  },
];

const Gallery = () => {
  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Портфолио
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Истории успеха
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Конкретные результаты, которых мы достигли вместе с нашими клиентами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <p className="text-xs font-bold text-accent mb-3 uppercase tracking-widest">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold mb-3 leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-accent" />
                  <p className="text-lg font-bold text-accent">
                    {project.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;