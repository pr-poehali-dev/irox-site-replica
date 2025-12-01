const projects = [
  {
    title: 'Финансовая оптимизация',
    category: 'Финансовый консалтинг',
    image: 'https://cdn.poehali.dev/projects/13a636c4-5f3d-4edf-9067-30eddec3151c/files/7615cff6-871e-4f5f-a7dc-2af3f76f57d0.jpg',
    result: '+45% рост прибыли',
  },
  {
    title: 'Трансформация бизнес-процессов',
    category: 'Организационный консалтинг',
    image: 'https://cdn.poehali.dev/projects/13a636c4-5f3d-4edf-9067-30eddec3151c/files/a6d170e5-2de2-419d-840f-8bc23363ed73.jpg',
    result: '-30% операционных расходов',
  },
  {
    title: 'Стратегия цифровизации',
    category: 'IT-консалтинг',
    image: 'https://cdn.poehali.dev/projects/13a636c4-5f3d-4edf-9067-30eddec3151c/files/101a5055-1600-439c-84d4-f3e946daf440.jpg',
    result: '2x увеличение скорости работы',
  },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Наши кейсы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные результаты работы с нашими клиентами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <p className="text-sm font-semibold text-accent mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mb-2 font-heading">
                  {project.title}
                </h3>
                <p className="text-lg font-semibold">
                  {project.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
