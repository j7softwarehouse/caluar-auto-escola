const approvedStudents = [
  {
    id: 1,
    name: 'Alex',
    category: 'A',
    photo: '/images/approved/student-01.jpg'
  },
  {
    id: 2,
    name: 'Beatriz',
    category: 'B',
    photo: '/images/approved/student-02.jpg'
  },
  {
    id: 3,
    name: 'Carlos',
    category: 'AB',
    photo: '/images/approved/student-03.jpg'
  },
  {
    id: 4,
    name: 'Diana',
    category: 'D',
    photo: '/images/approved/student-04.jpg'
  },
  {
    id: 5,
    name: 'Eduardo',
    category: 'A',
    photo: '/images/approved/student-05.jpg'
  },
  {
    id: 6,
    name: 'Fátima',
    category: 'B',
    photo: '/images/approved/student-06.jpg'
  },
  {
    id: 7,
    name: 'Gabriel',
    category: 'AB',
    photo: '/images/approved/student-07.jpg'
  },
  {
    id: 8,
    name: 'Helena',
    category: 'D',
    photo: '/images/approved/student-08.jpg'
  },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  A: { bg: 'bg-blue-900', text: 'text-blue-900' },
  B: { bg: 'bg-blue-600', text: 'text-blue-600' },
  AB: { bg: 'bg-yellow-500', text: 'text-yellow-500' },
  D: { bg: 'bg-emerald-600', text: 'text-emerald-600' },
}

export default function ApprovedGallery() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-accent font-inter font-600 text-xs uppercase tracking-widest mb-3">
            Prova Social
          </div>
          <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-4 leading-tight">
            Mais de 1 mil alunos aprovados
          </h2>
          <p className="text-lg font-inter font-400 text-tx-muted max-w-2xl mx-auto">
            Veja rostos reais de quem conquistou sua CNH com a Caluar. Você é o próximo.
          </p>
        </div>

        {/* Grid of Students */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {approvedStudents.map((student) => {
            const colors = categoryColors[student.category]
            return (
              <div key={student.id} className="group cursor-pointer">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Photo */}
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className={`absolute top-3 right-3 w-10 h-10 rounded-full ${colors.bg} text-white font-manrope font-800 flex items-center justify-center text-sm shadow-lg`}>
                    {student.category}
                  </div>

                  {/* Name (Hover) */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-manrope font-700 text-sm">{student.name}</p>
                    <p className={`text-xs font-inter font-400 ${colors.text}`}>
                      Categoria {student.category}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 bg-light rounded-xl p-8 md:p-10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-manrope font-800 text-primary mb-2">
              1mil+
            </div>
            <p className="text-sm md:text-base font-inter font-400 text-tx-muted">
              Alunos aprovados
            </p>
          </div>
          <div className="text-center border-l border-r border-border">
            <div className="text-3xl md:text-4xl font-manrope font-800 text-primary mb-2">
              90%+
            </div>
            <p className="text-sm md:text-base font-inter font-400 text-tx-muted">
              Taxa de aprovação
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-manrope font-800 text-primary mb-2">
              24 anos
            </div>
            <p className="text-sm md:text-base font-inter font-400 text-tx-muted">
              De confiança
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg font-inter font-400 text-tx-muted mb-6">
            Próximo aprovado pode ser você!
          </p>
          <a
            href="https://wa.me/553135633619?text=Oi%20Caluar,%20quero%20minha%20CNH!"
            className="inline-block px-8 py-4 bg-emerald-600 text-white font-manrope font-700 rounded-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Comece agora →
          </a>
        </div>
      </div>
    </section>
  )
}
