-- Tabla de socios y amigos de Olvidos de Granada
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
-- SOCIOS DE OLVIDOS (22)
insert into socios (nombre, email, tipo) values
  ('Alfonso Salazar Mendías', 'alfonsosalazar.mendias@gmail.com', 'socio'),
  ('Álvaro Salvador', 'alvaro@alvarosalvador.com', 'socio'),
  ('Daniel García', 'danieljgl@ugr.es', 'socio'),
  ('Ignacio Mendiguchía', 'IMENDIGUCHIA@telefonica.net', 'socio'),
  ('Javier Benítez Láinez', 'javier.benitez.lainez@gmail.com', 'socio'),
  ('Jose Carlos R. Escribano', 'josecarlosescribano@hotmail.com', 'socio'),
  ('José Luis Chacón', 'jlchacon4@gmail.com', 'socio'),
  ('José Miguel Molero', 'jmmb@coagranada.org', 'socio'),
  ('José Sánchez-Montes', 'jose@siestaproducciones.com', 'socio'),
  ('Juan Luis Fuentes Osorio', 'jfuentes@ujaen.es', 'socio'),
  ('Juan Manuel Azpitarte', 'azpitartej@gmail.com', 'socio'),
  ('Juan Mata', 'jmata@ugr.es', 'socio'),
  ('Luis García Montero', 'lgmontero1958@gmail.com', 'socio'),
  ('Luis Jarillo', 'luis@manigua.es', 'socio'),
  ('Luismi Aguilera', 'luismi.aguilera@gmail.com', 'socio'),
  ('Manuel Rodríguez Alcázar', 'rodalcazar@gmail.com', 'socio'),
  ('Pablo Alcázar', 'coleraquiles@gmail.com', 'socio'),
  ('Pedro Mercado', 'pmercado@ugr.es', 'socio'),
  ('Rafael Goicoechea', 'rafagoico@gmail.com', 'socio'),
  ('Ramón Repiso', 'ramonrepiso@gmail.com', 'socio'),
  ('Rosa Alonso', 'rosalonsoraya@hotmail.com', 'socio'),
  ('Sergio Hinojosa', 'sergiohhinojosa@gmail.com', 'socio'),
-- AMIGOS DE OLVIDOS
  ('Fran G. Matute', 'frangmatute@gmail.com', 'amigo'),
  ('Rubén Pérez Trujillano', 'pereztrujillano@gmail.com', 'amigo'),
  ('Gracia Morales', 'graciam@ugr.es', 'amigo'),
  ('Juan Ignacio Varela-Portas Orduña', 'jivarelaportas@filol.ucm.es', 'amigo'),
  ('Pablo Carriedo Castro', 'pablo.carriedo@gmail.com', 'amigo'),
  ('Pepa Merlo', 'pepa.merlo@gmail.com', 'amigo'),
  ('Horacio Rébora', 'horacio.rebora@gmail.com', 'amigo'),
  ('Juan Vida', 'vida.juan@gmail.com', 'amigo'),
  ('Jairo García Jaramillo', 'jairo.garcia.jaramillo@gmail.com', 'amigo'),
  ('Roete Rojo', 'roeterojo@gmail.com', 'amigo'),
  ('Candilejo', 'candilejo@gmail.com', 'amigo'),
  ('Guillermo Portilla', 'portilla@ujaen.es', 'amigo'),
  ('Enrique Gámez', 'enrique.gamez@gmail.com', 'amigo'),
  ('Gabriel Cabello', 'gcabello@ugr.es', 'amigo'),
  ('Ernesto Pérez Zúñiga', 'ernestoperezzuniga@me.com', 'amigo'),
  ('Teresa Gómez', 'trsgmz@gmail.com', 'amigo'),
  ('Álvaro López Osuna', 'alvak7@gmail.com', 'amigo'),
  ('David Ferrez Gutiérrez', 'davidfg95@hotmail.com', 'amigo'),
  ('García', 'garciaga@ugr.es', 'amigo'),
  ('Andrés Soria', 'asoria@ugr.es', 'amigo'),
  ('Carmen Canet', 'ccanetr@hotmail.com', 'amigo'),
  ('Tatá Maresca', 'tata1967.marm@gmail.com', 'amigo'),
  ('Manuel Valero Gómez', 'manuelvalerogomez@gmail.com', 'amigo'),
  ('ArtDrive', 'jamurciano@gmail.com', 'amigo'),
  ('Manuel García', 'info@hiperion.com', 'amigo'),
  ('Valeriano Alcantud', 'valcantud@free.fr', 'amigo'),
  ('Molina Flores', 'molinaflores@us.es', 'amigo'),
  ('Ángeles Mora', 'angelesmora_fr@hotmail.com', 'amigo'),
  ('Antonio Ramón Molina', 'antonioramonm@gmail.com', 'amigo'),
  ('Guillermo Busutil', 'gbusutil@gmail.com', 'amigo'),
  ('Carlos Peña Aguilera', 'carpeag@gmail.com', 'amigo'),
  ('Margarita García Candeira', 'margarita.garcia@dfesp.uhu.es', 'amigo'),
  ('Ateneo de Granada', 'ateneodegranada.presidente@gmail.com', 'amigo'),
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

-- Notas adicionales
update socios set notas = 'También: alfonso.olvidos@gmail.com'
  where email = 'alfonsosalazar.mendias@gmail.com';
