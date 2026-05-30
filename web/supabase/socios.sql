-- Tabla de socios y simpatizantes
create table if not exists socios (
  id bigint generated always as identity primary key,
  nombre text not null,
  email text not null unique,
  tipo text not null default 'simpatizante' check (tipo in ('socio', 'simpatizante')),
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
  ('Fran G. Matute', 'frangmatute@gmail.com', 'simpatizante'),
  ('Rubén Pérez Trujillano', 'pereztrujillano@gmail.com', 'simpatizante'),
  ('Gracia Morales', 'graciam@ugr.es', 'simpatizante'),
  ('José Sánchez-Montes', 'jose@siestaproducciones.com', 'simpatizante'),
  ('Juan Ignacio Varela-Portas Orduña', 'jivarelaportas@filol.ucm.es', 'simpatizante'),
  ('Pablo Carriedo Castro', 'pablo.carriedo@gmail.com', 'simpatizante'),
  ('Pepa Merlo', 'pepa.merlo@gmail.com', 'simpatizante'),
  ('Horacio Rébora', 'horacio.rebora@gmail.com', 'simpatizante'),
  ('Juan Vida', 'vida.juan@gmail.com', 'simpatizante'),
  ('Rosa Alonso', 'rosalonsoraya@hotmail.com', 'simpatizante'),
  ('Javier Benítez Láinez', 'javier.benitez.lainez@gmail.com', 'socio'),
  ('José Luis Chacón', 'jlchacon4@gmail.com', 'simpatizante'),
  ('Ignacio Mendiguchía', 'IMENDIGUCHIA@telefonica.net', 'simpatizante'),
  ('Daniel García', 'danieljgl@ugr.es', 'simpatizante'),
  ('Jairo García Jaramillo', 'jairo.garcia.jaramillo@gmail.com', 'simpatizante'),
  ('Luis Jarillo', 'luis@manigua.es', 'simpatizante'),
  ('Roete Rojo', 'roeterojo@gmail.com', 'simpatizante'),
  ('Candilejo', 'candilejo@gmail.com', 'simpatizante'),
  ('Guillermo Portilla', 'portilla@ujaen.es', 'simpatizante'),
  ('Pablo Alcázar', 'coleraquiles@gmail.com', 'simpatizante'),
  ('Enrique Gámez', 'enrique.gamez@gmail.com', 'simpatizante'),
  ('Gabriel Cabello', 'gcabello@ugr.es', 'simpatizante'),
  ('Ernesto Pérez Zúñiga', 'ernestoperezzuniga@me.com', 'simpatizante'),
  ('Pedro Mercado', 'pmercado@ugr.es', 'simpatizante'),
  ('Teresa Gómez', 'trsgmz@gmail.com', 'simpatizante'),
  ('Álvaro López Osuna', 'alvak7@gmail.com', 'simpatizante'),
  ('David Ferrez Gutiérrez', 'davidfg95@hotmail.com', 'simpatizante'),
  ('Luis García Montero', 'lgmontero1958@gmail.com', 'simpatizante'),
  ('García', 'garciaga@ugr.es', 'simpatizante'),
  ('Andrés Soria', 'asoria@ugr.es', 'simpatizante'),
  ('Ramón Repiso', 'ramonrepiso@gmail.com', 'socio'),
  ('Sergio Hinojosa', 'sergiohhinojosa@gmail.com', 'simpatizante'),
  ('Carmen Canet', 'ccanetr@hotmail.com', 'simpatizante'),
  ('Tatá Maresca', 'tata1967.marm@gmail.com', 'simpatizante'),
  ('Manuel Valero Gómez', 'manuelvalerogomez@gmail.com', 'simpatizante'),
  ('ArtDrive', 'jamurciano@gmail.com', 'simpatizante'),
  ('Manuel García', 'info@hiperion.com', 'simpatizante'),
  ('Valeriano Alcantud', 'valcantud@free.fr', 'simpatizante'),
  ('Molina Flores', 'molinaflores@us.es', 'simpatizante'),
  ('Juan Manuel Azpitarte', 'azpitartej@gmail.com', 'simpatizante'),
  ('Ángeles Mora', 'angelesmora_fr@hotmail.com', 'simpatizante'),
  ('Antonio Ramón Molina', 'antonioramonm@gmail.com', 'simpatizante'),
  ('Guillermo Busutil', 'gbusutil@gmail.com', 'simpatizante'),
  ('Carlos Peña Aguilera', 'carpeag@gmail.com', 'simpatizante'),
  ('Margarita García Candeira', 'margarita.garcia@dfesp.uhu.es', 'simpatizante'),
  ('Ateneo de Granada', 'ateneodegranada.presidente@gmail.com', 'simpatizante'),
  ('Rafael Goicoechea', 'rafagoico@gmail.com', 'simpatizante'),
  ('Juan Mata', 'jmata@ugr.es', 'simpatizante'),
  ('Juan Luis Fuentes Osorio', 'jfuentes@ujaen.es', 'simpatizante'),
  ('Jose Carlos R. Escribano', 'josecarlosescribano@hotmail.com', 'simpatizante'),
  ('Luismi Aguilera', 'luismi.aguilera@gmail.com', 'simpatizante'),
  ('Álvaro Salvador', 'alvaro@alvarosalvador.com', 'simpatizante'),
  ('Manuel Rodríguez Alcázar', 'rodalcazar@gmail.com', 'simpatizante'),
  ('José Miguel Molero', 'jmmb@coagranada.org', 'simpatizante'),
  ('Juan Ignacio Varela', 'jivarela@ucm.es', 'simpatizante'),
  ('Erika Martínez', 'erikamartinez79@gmail.com', 'simpatizante'),
  ('Laura García Lorca', 'lgl@garcia-lorca.org', 'simpatizante'),
  ('Federico Fernández Crehuet', 'crehuetk@gmail.com', 'simpatizante'),
  ('Sara Nogales', 'saranogalessainz@hotmail.com', 'simpatizante'),
  ('Juan Cañavate', 'Jncvt2008@gmail.com', 'simpatizante'),
  ('María José Olmedo', 'mariajoseolmedo@gmail.com', 'simpatizante'),
  ('Roque Hidalgo Álvarez', 'rhidalgo@ugr.es', 'simpatizante'),
  ('Jesús Ambel', 'ateneodegranada@gmail.com', 'simpatizante')
on conflict (email) do nothing;
