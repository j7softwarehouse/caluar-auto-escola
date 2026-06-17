export default function CoursesSpecialized() {
  const courses = [
    { title: 'MOPP', desc: 'Transporte de Produtos Perigosos' },
    { title: 'TCP', desc: 'Transporte Coletivo de Passageiros' },
    { title: 'Transporte Escolar', desc: 'Modalidade especializada' },
    { title: 'Emergência', desc: 'Veículos de Emergência' },
    { title: 'Carga Indivisível', desc: 'Especialização profissional' },
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <div className="text-accent font-inter font-600 text-xs uppercase tracking-widest mb-4">
            Cursos Especializados
          </div>
          <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-6 leading-tight">
            Qualificação para motoristas profissionais
          </h2>
          <p className="text-lg font-inter font-400 text-tx-muted max-w-2xl">
            Cursos EAD e presenciais para especialização profissional e crescimento na carreira.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-light border border-border rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-manrope font-700 text-primary mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-tx-muted font-inter font-300">
                {course.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
