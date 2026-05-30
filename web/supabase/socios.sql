-- Tabla de socios y amigos
create table if not exists socios (
  id bigint generated always as identity primary key,
  nombre text not null,
  email text not null unique,
  tipo text not null default 'amigo' check (tipo in ('socio', 'amigo')), -- socio = Socio de Olvidos, amigo = Amigo de Olvidos
  notas text,
  created_at timestamptz default now()
);

-- Row Level Security: solo usuarios autenticados pueden leer y escribir
alter table socios enable row level security;

create policy "Admins pueden leer socios"
  on socios for select
  to authenticated
  using (true);

create policy "Admins pueden insertar socios"
  on socios for insert
  to authenticated
  with check (true);

create policy "Admins pueden actualizar socios"
  on socios for update
  to authenticated
  using (true);

create policy "Admins pueden eliminar socios"
  on socios for delete
  to authenticated
  using (true);

-- Datos iniciales
insert into socios (nombre, email, tipo) values
  ('Fran G. Matute', 'frangmatute@gmail.com', 'amigo'),
  ('Rubén Pérez Trujillano', 'pereztrujillano@gmail.com', 'amigo'),
  ('Gracia Morales', 'graciam@ugr.es', 'amigo'),
  ('José Sánchez-Montes', 'jose@siestaproducciones.com', 'amigo'),
  ('Juan Ignacio Varela-Portas Orduña', 'jivarelaportas@filol.ucm.es', 'amigo'),
  ('Pablo Carriedo Castro', 'pablo.carriedo@gmail.com', 'amigo'),
  ('Pepa Merlo', 'pepa.merlo@gmail.com', 'amigo'),
  ('Horacio Rébora', 'horacio.rebora@gmail.com', 'amigo'),
  ('Juan Vida', 'vida.juan@gmail.com', 'amigo'),
  ('Rosa Alonso', 'rosalonsoraya@hotmail.com', 'amigo'),
  ('Javier Benítez Láinez', 'javier.benitez.lainez@gmail.com', 'socio'),
  ('José Luis Chacón', 'jlchacon4@gmail.com', 'amigo'),
  ('Ignacio Mendiguchía', 'IMENDIGUCHIA@telefonica.net', 'amigo'),
  ('Daniel García', 'danieljgl@ugr.es', 'amigo'),
  ('Jairo García Jaramillo', 'jairo.garcia.jaramillo@gmail.com', 'amigo'),
  ('Luis Jarillo', 'luis@manigua.es', 'amigo'),
  ('Roete Rojo', 'roeterojo@gmail.com', 'amigo'),
  ('Candilejo', 'candilejo@gmail.com', 'amigo'),
  ('Guillermo Portilla', 'portilla@ujaen.es', 'amigo'),
  ('Pablo Alcázar', 'coleraquiles@gmail.com', 'amigo'),
  ('Enrique Gámez', 'enrique.gamez@gmail.com', 'amigo'),
  ('Gabriel Cabello', 'gcabello@ugr.es', 'amigo'),
  ('Ernesto Pérez Zúñiga', 'ernestoperezzuniga@me.com', 'amigo'),
  ('Pedro Mercado', 'pmercado@ugr.es', 'amigo'),
  ('Teresa Gómez', 'trsgmz@gmail.com', 'amigo'),
  ('Álvaro López Osuna', 'alvak7@gmail.com', 'amigo'),
  ('David Ferrez Gutiérrez', 'davidfg95@hotmail.com', 'amigo'),
  ('Luis García Montero', 'lgmontero1958@gmail.com', 'amigo'),
  ('García', 'garciaga@ugr.es', 'amigo'),
  ('Andrés Soria', 'asoria@ugr.es', 'amigo'),
  ('Ramón Repiso', 'ramonrepiso@gmail.com', 'socio'),
  ('Sergio Hinojosa', 'sergiohhinojosa@gmail.com', 'amigo'),
  ('Carmen Canet', 'ccanetr@hotmail.com', 'amigo'),
  ('Tatá Maresca', 'tata1967.marm@gmail.com', 'amigo'),
  ('Manuel Valero Gómez', 'manuelvalerogomez@gmail.com', 'amigo'),
  ('ArtDrive', 'jamurciano@gmail.com', 'amigo'),
  ('Manuel García', 'info@hiperion.com', 'amigo'),
  ('Valeriano Alcantud', 'valcantud@free.fr', 'amigo'),
  ('Molina Flores', 'molinaflores@us.es', 'amigo'),
  ('Juan Manuel Azpitarte', 'azpitartej@gmail.com', 'amigo'),
  ('Ángeles Mora', 'angelesmora_fr@hotmail.com', 'amigo'),
  ('Antonio Ramón Molina', 'antonioramonm@gmail.com', 'amigo'),
  ('Guillermo Busutil', 'gbusutil@gmail.com', 'amigo'),
  ('Carlos Peña Aguilera', 'carpeag@gmail.com', 'amigo'),
  ('Margarita García Candeira', 'margarita.garcia@dfesp.uhu.es', 'amigo'),
  ('Ateneo de Granada', 'ateneodegranada.presidente@gmail.com', 'amigo'),
  ('Rafael Goicoechea', 'rafagoico@gmail.com', 'amigo'),
  ('Juan Mata', 'jmata@ugr.es', 'amigo'),
  ('Juan Luis Fuentes Osorio', 'jfuentes@ujaen.es', 'amigo'),
  ('Jose Carlos R. Escribano', 'josecarlosescribano@hotmail.com', 'amigo'),
  ('Luismi Aguilera', 'luismi.aguilera@gmail.com', 'amigo'),
  ('Álvaro Salvador', 'alvaro@alvarosalvador.com', 'amigo'),
  ('Manuel Rodríguez Alcázar', 'rodalcazar@gmail.com', 'amigo'),
  ('José Miguel Molero', 'jmmb@coagranada.org', 'amigo'),
  ('Juan Ignacio Varela', 'jivarela@ucm.es', 'amigo'),
  ('Erika Martínez', 'erikamartinez79@gmail.com', 'amigo'),
  ('Laura García Lorca', 'lgl@garcia-lorca.org', 'amigo'),
  ('Federico Fernández Crehuet', 'crehuetk@gmail.com', 'amigo'),
  ('Sara Nogales', 'saranogalessainz@hotmail.com', 'amigo'),
  ('Juan Cañavate', 'Jncvt2008@gmail.com', 'amigo'),
  ('María José Olmedo', 'mariajoseolmedo@gmail.com', 'amigo'),
  ('Roque Hidalgo Álvarez', 'rhidalgo@ugr.es', 'amigo'),
  ('Jesús Ambel', 'ateneodegranada@gmail.com', 'amigo')
on conflict (email) do nothing;
