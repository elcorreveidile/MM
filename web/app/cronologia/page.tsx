'use client'

import { useState } from 'react'

export default function CronologiaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const timeline = [
    {
      year: '1968',
      title: 'Inicios académicos',
      description: 'Comienza sus estudios de Filosofía del Derecho en la Universidad de Granada.',
      category: 'academic',
      icon: '📚',
    },
    {
      year: '1978',
      title: 'Primera aproximación editorial',
      description: 'Colabora en las primeras publicaciones culturales que prefiguran Olvidosdegranada.',
      category: 'olvidos',
      icon: '✍️',
    },
    {
      year: '1984',
      title: 'Nace Olvidosdegranada',
      description: 'Se publica el primer número de la revista Olvidos de Granada, convirtiéndose en su editor principal.',
      category: 'olvidos',
      icon: '📖',
    },
    {
      year: '1990',
      title: 'Primer Festival de Tango',
      description: 'Fundación y organización del primer Festival de Tango de Granada, evento que marcaría la ciudad durante décadas.',
      category: 'artistic',
      icon: '🎵',
    },
    {
      year: '1994',
      title: 'Rimado de Ciudad de TNT',
      description: 'Publicación de este proyecto poético y visual que fusionó literatura y arte urbano.',
      category: 'artistic',
      icon: '📝',
    },
    {
      year: '2000',
      title: 'Letra Clara en la Facultad',
      description: 'Serie de conferencias y encuentros literarios que marcaron una generación de estudiantes y escritores.',
      category: 'academic',
      icon: '🎓',
    },
    {
      year: '2008',
      title: 'Disco Omega de Morente',
      description: 'Contribución crítica y divulgativa en este álbum seminal del flamenco.',
      category: 'artistic',
      icon: '🎶',
    },
    {
      year: '2010',
      title: 'Archivo de Fotografía Granadina',
      description: 'Comienza el proyecto de recopilación y preservación de la historia visual de Granada.',
      category: 'artistic',
      icon: '📸',
    },
    {
      year: '2020',
      title: 'Reconocimiento institucional',
      description: 'La Universidad de Granada reconoce su contribución a la cultura granadina.',
      category: 'recognition',
      icon: '🏆',
    },
    {
      year: '2023',
      title: 'Fallecimiento',
      description: 'Mariano Maresca fallece dejando un legado cultural invaluable.',
      category: 'personal',
      icon: '🕊️',
    },
  ]

  const categories = [
    { value: 'all', label: 'Todos', color: 'bg-zinc-200 text-zinc-800' },
    { value: 'personal', label: 'Vida personal', color: 'bg-blue-100 text-blue-800' },
    { value: 'academic', label: 'Académico', color: 'bg-green-100 text-green-800' },
    { value: 'olvidos', label: 'Olvidosdegranada', color: 'bg-purple-100 text-purple-800' },
    { value: 'artistic', label: 'Proyectos artísticos', color: 'bg-orange-100 text-orange-800' },
    { value: 'recognition', label: 'Reconocimientos', color: 'bg-yellow-100 text-yellow-800' },
  ]

  const filteredTimeline = selectedCategory === 'all'
    ? timeline
    : timeline.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-crimson font-bold text-zinc-900 mb-4">
            Cronología
          </h1>
          <p className="text-xl text-zinc-600 font-libre max-w-3xl">
            Un viaje por los momentos más significativos en la vida y obra de Mariano Maresca
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-libre font-semibold transition-all ${
                selectedCategory === category.value
                  ? 'ring-2 ring-zinc-900 ring-offset-2'
                  : 'hover:shadow-md'
              } ${category.color}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {filteredTimeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon marker */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-zinc-100 z-10">
                  <span className="text-2xl">{item.icon}</span>
                </div>

                {/* Content */}
                <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3 md:justify-end">
                      <span className="text-sm font-libre font-semibold bg-zinc-900 text-white px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <span className="text-xs text-zinc-500 font-libre">
                        {categories.find(c => c.value === item.category)?.label}
                      </span>
                    </div>
                    <h3 className="text-2xl font-crimson font-bold text-zinc-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-700 font-libre leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty div for spacing */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-20 bg-zinc-900 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-crimson font-bold mb-4">
            Resumen cronológico
          </h2>
          <p className="text-zinc-300 font-libre leading-relaxed">
            A lo largo de más de 50 años, Mariano Maresca contribuyó de manera decisiva a la vida cultural de Granada.
            Desde sus inicios como estudiante de Filosofía del Derecho hasta su fallecimiento en 2023, su trabajo como editor,
            comisario y promotor cultural dejó una huella imborrable en la ciudad y en todas las personas que tuvieron la
            oportunidad de trabajar con él.
          </p>
        </div>
      </div>
    </div>
  )
}
