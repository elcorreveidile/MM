-- Tabla de contenidos editables
create table if not exists contenido (
  id bigint generated always as identity primary key,
  clave text not null unique,
  valor text not null,
  updated_at timestamptz default now()
);

alter table contenido enable row level security;

create policy "Admins pueden leer contenido"
  on contenido for select to authenticated using (true);

create policy "Admins pueden actualizar contenido"
  on contenido for update to authenticated using (true);

create policy "Admins pueden insertar contenido"
  on contenido for insert to authenticated with check (true);

-- Función para actualizar updated_at automáticamente
create or replace function update_updated_at()
returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;

create trigger contenido_updated_at
  before update on contenido
  for each row execute function update_updated_at();

-- Disciplinas: descripciones
insert into contenido (clave, valor) values
('disciplina_literatura',
'La literatura fue el territorio central de la curiosidad intelectual de Mariano Maresca. Su biblioteca reúne más de 800 títulos literarios distribuidos en siete tradiciones: la española —con la poesía del último cuarto del siglo XX, la llamada «otra sentimentalidad» con García Montero, Álvaro Salvador y Javier Egea, como sección más densa y personal de la biblioteca, y nombres como Antonio Muñoz Molina o Federico García Lorca—, la anglosajona (Hemingway, Fitzgerald, Carver, Dickens), la alemana y centroeuropea (Brecht, Kafka, Canetti, Hölderlin), la italiana —donde Pasolini ocupa un lugar central—, la francesa (Camus, Rimbaud, Proust, Gide), la hispanoamericana (Borges, García Márquez, Bioy Casares, Rulfo) y la rusa (Chéjov, Dostoievski, Tolstói). Entre los libros con dedicatoria autógrafa se encuentran todos los títulos de Luis García Montero (desde la primera edición de El jardín extranjero), y ejemplares de Ángel González, Juan Marsé, Antonio Muñoz Molina, Rafael Alberti, Javier Egea o Luis Antonio de Villena.'),

('disciplina_filosofia',
'Catedrático de Filosofía del Derecho en la Universidad de Granada, Maresca dedicó su vida académica a la reflexión filosófica sobre el poder, el derecho y la sociedad. Su biblioteca filosófica, de más de 300 títulos, refleja un pensamiento marcado por la tradición marxista y el materialismo histórico —Gramsci, Negri, Althusser, Foucault— junto a los clásicos del empirismo y la filosofía analítica anglosajona: Hume, A.J. Ayer. La sección jurídico-filosófica incluye a Beccaria, Hobbes, Adam Smith, Bobbio y Ferrajoli. El derecho no como técnica, sino como campo de disputa política y filosófica. Entre los títulos señalados: sus propios trabajos —Hipótesis sobre Clarín (1982-1985), Argumentos morales (2004, La Isleta del Moro)— y los apuntes y anotaciones manuscritas que conservaba sobre Marcuse, Alfred von Martin y Clarín. También destacan los estudios sobre feminismo y teoría crítica: Alicia H. Puleo, Simone de Beauvoir, y los debates sobre autonomía y soberanía.'),

('disciplina_pensamiento-politico',
'El compromiso político de Maresca estuvo siempre fundado en el rigor histórico y filosófico. Su biblioteca de historia y política —donde conviven Hobsbawm, Josep Fontana, Kapuscinski, Gramsci y Pannekoek— refleja un pensamiento de izquierdas crítico, atento a las tradiciones obreras y a la historia desde abajo. Columnista en El País Andalucía con la sección «La nuestra» y editor de Olvidos de Granada, ejerció como intelectual público durante más de cuatro décadas. La memoria —la memoria de los vencidos, la memoria cultural— fue su arma teórica y política constante. Su biblioteca incluye también clásicos del anarquismo (Bakunin, Kropotkin) y del movimiento obrero internacional, junto a estudios sobre la Transición española y la política andaluza.'),

('disciplina_cine',
'El cine fue para Maresca una forma de pensamiento que vivió con intensidad compartida: en las salas, en las proyecciones del cine-club universitario, en su propia casa —donde no era raro que se reunieran dos o tres amigos a ver una película—, o en festivales como el Festival de Cine del Sur —creación de José Sánchez-Montes, con quien le unía una larga y honda amistad, y a quien animó a sacarlo adelante cuando el proyecto aún era solo una idea—. Publicó crítica cinematográfica en Olvidos de Granada. La biblioteca de cine —en torno a 50 títulos, más una extensa colección de DVDs agrupados en varias cajas— refleja una cinefilia de gran amplitud y profundidad. Pasolini ocupa un lugar central y tiene su propia caja dedicada: decenas de libros, revistas y documentos de trabajo, entre ellos el catálogo de sus pinturas y los materiales de producción de Saló: el infierno según Pasolini (Filmoteca Andalucía, 1993), que Maresca coeditó con Juan Ignacio Mendiguchía. Fritz Lang tiene asimismo una caja entera: más de quince monografías y dos colecciones de DVDs sobre su obra completa. A estos núcleos se añaden Fassbinder, Visconti, Truffaut, Bergman, Kubrick, Orson Welles, Buñuel, Coppola, Clint Eastwood, Almodóvar y Woody Allen.'),

('disciplina_fotografia',
'La fotografía interesó a Maresca como instrumento de memoria histórica y de combate político. Su biblioteca fotográfica es más rica de lo que aparenta: junto al célebre El fotógrafo de Mauthausen —sobre Francisco Boix, el republicano catalán cuyas imágenes fueron la única prueba visual en los juicios de Núremberg—, la colección incluye una sección extensa dedicada a Manuel Falces, fotógrafo granadino con quien Maresca colaboró estrechamente en Olvidos de Granada y en múltiples proyectos culturales. Joan Fontcuberta tiene varios títulos, incluido Contranatura. También aparecen Susan Sontag (Sobre la fotografía), Henri Cartier-Bresson, Sebastião Salgado, Lewis Hine y Carlos Pérez Siquier. Maresca impulsó el Archivo de Fotografía Granadina y organizó exposiciones fotográficas que documentaron la vida cultural de la ciudad.'),

('disciplina_arquitectura',
'La ciudad fue para Maresca un objeto de reflexión constante. Sus escritos en Olvidos de Granada abordaron las grandes transformaciones urbanísticas de Granada con la misma exigencia con que leía una novela. La biblioteca de arquitectura incluye desde los utópicos ilustrados —Ledoux, La ciudad ideal— hasta la modernidad radical de Le Corbusier, Mies van der Rohe y la Bauhaus. Richard Sennett (Carne y piedra) aporta la dimensión sociológica. La iconografía de la Alhambra y el libro específico sobre La Gran Vía de Granada —esa cicatriz urbana que fascina y escandaliza a partes iguales— anclan la reflexión en el territorio concreto. Las Escenografías de Adolphe Appia y las vistas de Canaletto añaden la dimensión estética: la ciudad como texto político y como imagen.'),

('disciplina_diseno',
'La biblioteca de arte y diseño de Maresca —Matisse, Francis Bacon, Paul Cézanne, Caravaggio, Andy Warhol— revela un ojo educado en la modernidad del siglo XX. Matisse está especialmente presente: Matisse in Morocco, Matisse: Gouaches découpées, el libro sobre su estudio. La colección incluye también José Guerrero (varios catálogos), Juan Vida (múltiples catálogos de exposición), el Francisco Bores Para un Lorca, los Carteles constructivistas rusos de Rodchenko y el Equipo Crónica. Un volumen sobre la tipografía de Giambattista Bodoni completa la dimensión tipográfica. La Fábrica del Sur nº1 (1989) —la revista que dirigió— encarna ese ideal donde diseño y contenido eran inseparables. El cuidado formal de Olvidos de Granada, que dirigió durante décadas, fue heredero directo de esa convicción.'),

('disciplina_comic',
'Maresca fue uno de los primeros en tratar el cómic como forma artística legítima en Granada. Su biblioteca en este campo es más amplia de lo que parece: junto a la revista Boronia —la publicación de historieta que incluye un número con Enrique Morente en portada—, aparecen Hola soy Gaudeamus de Andrés Sopeña (con dibujo dedicado a Mariano), Los tebeos de Granada, La Granada de papel, y números de Hermano Lobo. También Perfidia moruna de Pamies, con un dibujo original dedicado a Mariano. Su trabajo de divulgación y crítica contribuyó a que la historieta fuera reconocida como parte del patrimonio cultural de la ciudad, y publicó artículos en Olvidos de Granada que exploraban el lenguaje del cómic y reivindicaban a sus autores como artistas de pleno derecho.'),

('disciplina_musica',
'La música atravesó toda la vida cultural de Maresca. Publicó crítica musical en Olvidos de Granada y siguió de cerca la música flamenca —el célebre disco Omega de Enrique Morente tiene un lugar destacado en su biblioteca—. El tango le interesó como fenómeno cultural y político: redactó las bases del concurso de letras que dio lugar al libro colectivo Granada Tango (1982), editado por La Tertulia, y presentó el libro junto a Horacio Rébora y Juan Carlos Rodríguez en el Ayuntamiento de Granada. Su biblioteca musical —una de las más reveladoras de su carácter— incluye monografías sobre Wagner (dos biografías), Mozart, Mahler, Debussy, Beethoven, Verdi, Stravinsky, Bach, Glenn Gould y Chet Baker, junto al CD de Omega y el libro Universo Morente.')

on conflict (clave) do nothing;
