/* =====================================================================
 *  CATÁLOGO DE TIPOS DE EVENTO
 *  Cada tipo define: textos/etiquetas de la invitación, tema por defecto,
 *  etiquetas del formulario del generador y datos de ejemplo (demo).
 *  Para agregar un tipo nuevo, copia uno parecido y cambia sus valores.
 *  En los textos puedes usar {nombre1}, {nombre2}, {nombres} y {evento}.
 * ===================================================================== */

// Textos por defecto (si un tipo no define una etiqueta, se usa esta)
const ETIQUETAS_BASE = {
  tituloPestana: 'Invitación',
  evento: 'nuestro evento',
  calendario: '{nombres}',
  intro: 'Estás invitado a {evento}',
  cuenta: 'Cuenta regresiva',
  galeria: 'Galería',
  ubicaciones: 'Ubicaciones',
  vestimenta: 'Código de vestimenta',
  regalos: 'Regalos',
  rsvp: 'Confirma tu asistencia',
  rsvpTexto: 'Tu presencia es muy importante para nosotros.',
  album: 'Álbum de fotos',
  albumKicker: 'Compartamos recuerdos',
  padrinos: 'Con la bendición de',
  programa: 'Programa',
  revelacion: '¿Qué será?',
  revelacionKicker: 'Haz tu apuesta'
};

const _lugar = (titulo, lugar, hora, direccion) => ({ titulo, lugar, hora, direccion, mapsQuery: direccion, mapsLink: '' });
const _pp = (txt) => txt.split('\n').map((l) => { const [rol, nombres] = l.split('|').map((s) => s.trim()); return { rol, nombres }; });
const _prog = (txt) => txt.split('\n').map((l) => { const [hora, actividad, detalle = ''] = l.split('|').map((s) => s.trim()); return { hora, actividad, detalle }; });

const EVENTOS = {
  /* ---------------- BODAS Y PAREJA ---------------- */
  boda: {
    nombre: 'Boda', icono: '💍', categoria: 'Bodas y pareja', slug: '',
    campos: { nombre1: 'Nombre 1', nombre2: 'Nombre 2', destacado: null, conector: true },
    lugares: ['Ceremonia', 'Recepción'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: 'Nuestra Boda', evento: 'nuestra boda', calendario: 'Boda de {nombres}', galeria: 'Nuestra galería', album: 'Álbum de la boda', padrinos: 'Padres y padrinos', programa: 'Itinerario' },
    demo: {
      tema: 'clasico',
      padrinos: _pp('Padres de la novia | Jorge Pérez y Ana Rojas\nPadres del novio | Luis Gómez y Carmen Vargas\nPadrinos de matrimonio | Ricardo Soto y Paola Mendoza'),
      programa: _prog('16:00 | Ceremonia religiosa\n19:00 | Recepción y cóctel\n20:30 | Vals de los novios\n21:00 | Cena\n22:00 | ¡A bailar!')
    }
  },
  aniversario: {
    nombre: 'Aniversario de bodas', icono: '🥂', categoria: 'Bodas y pareja', slug: 'aniversario',
    campos: { nombre1: 'Nombre 1', nombre2: 'Nombre 2', destacado: 'Años de casados (ej. 25)', conector: true },
    lugares: ['Misa de acción de gracias', 'Celebración'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: 'Nuestro Aniversario', evento: 'nuestro aniversario de bodas', calendario: 'Aniversario de {nombres}', padrinos: 'Nuestros hijos' },
    demo: {
      tema: 'gala',
      protagonistas: { nombre1: 'Rosa', nombre2: 'Fernando', monograma: 'R & F', destacado: '25' },
      textos: { bienvenida: 'Bodas de plata', frase: 'Veinticinco años después, te volvería a elegir una y mil veces.', historia: 'Queremos celebrar estos años de amor, familia y bendiciones junto a las personas que han caminado con nosotros.', despedida: 'Gracias por ser parte de nuestra historia.', firma: 'Rosa & Fernando', diaLlego: '¡Hoy celebramos!' },
      ceremonia: _lugar('Misa de acción de gracias', 'Parroquia San Miguel', '18:00', 'Calle 21 de Calacoto, La Paz'),
      recepcion: _lugar('Celebración', 'Salón Real', '20:00', 'Av. Arce 2500, La Paz'),
      vestimenta: { tipo: 'Formal', descripcion: 'Elegante, tonos plateados bienvenidos.', nota: '', paleta: ['#C0C0C0', '#2C2C2C', '#5B6B7A'] },
      rsvp: { mensajeWhatsapp: '¡Hola! 🥂 Confirmo mi asistencia al aniversario de {nombres}.' },
      padrinos: _pp('Nuestros hijos | Andrea, Diego y Lucía'),
      secciones: { regalos: false }
    }
  },
  despedida: {
    nombre: 'Despedida de soltera/o', icono: '🎉', categoria: 'Bodas y pareja', slug: 'despedida',
    campos: { nombre1: 'Nombre de la/el futura/o esposa/o', nombre2: null, destacado: null, conector: false },
    lugares: ['Punto de encuentro', 'Fiesta'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: 'Despedida de soltera', evento: 'la despedida de soltera de {nombre1}', calendario: 'Despedida de {nombre1}', padrinos: 'Organizan' },
    demo: {
      tema: 'romantico',
      protagonistas: { nombre1: 'Camila', nombre2: '', monograma: 'C', destacado: '' },
      textos: { bienvenida: 'Despedida de soltera', frase: 'Antes del "sí, acepto", ¡una última noche de chicas!', historia: 'Prepárate para una noche llena de risas, baile y sorpresas para la novia.', despedida: '¡Lo que pasa en la despedida, se queda en la despedida!', firma: 'Las amigas de Camila', diaLlego: '¡Hoy es la noche!' },
      ceremonia: _lugar('Punto de encuentro', 'Café del Mundo', '19:00', 'Sopocachi, La Paz'),
      recepcion: _lugar('Fiesta', 'Terraza Luna', '21:00', 'Av. 6 de Agosto, La Paz'),
      vestimenta: { tipo: 'Todas de rosa', descripcion: 'Ven con algo rosado. La novia irá de blanco.', nota: '', paleta: ['#F2A7C3', '#E6739F', '#FFFFFF'] },
      rsvp: { mensajeWhatsapp: '¡Hola! 🎉 ¡Me apunto a la despedida de {nombre1}!' },
      regalos: { texto: 'Si quieres colaborar con la sorpresa para la novia:' },
      padrinos: _pp('Organizan | Paola, Lucía y Fernanda'),
      secciones: { padrinos: true }
    }
  },

  /* ---------------- CUMPLEAÑOS ---------------- */
  quince: {
    nombre: '15 Años', icono: '👑', categoria: 'Cumpleaños', slug: 'xv',
    campos: { nombre1: 'Nombre de la quinceañera', nombre2: null, destacado: 'Destacado (ej. XV)', conector: false },
    lugares: ['Misa de acción de gracias', 'Fiesta'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: 'Mis XV Años', evento: 'mis XV años', calendario: 'XV años de {nombre1}', galeria: 'Mis fotos', album: 'Álbum de mis XV', padrinos: 'Mis padres y padrinos', rsvpTexto: 'Tu presencia es muy importante para mí.', intro: 'Estás invitado a mis XV años' },
    demo: {
      tema: 'quince',
      protagonistas: { nombre1: 'Sofía', nombre2: '', monograma: 'XV', destacado: 'XV' },
      textos: { bienvenida: 'Mis XV Años', frase: 'Hay momentos que se esperan toda la vida. Este es uno de ellos y quiero vivirlo contigo.', historia: 'Con la bendición de Dios y el amor de mi familia, te invito a celebrar el inicio de una nueva etapa.', despedida: 'Gracias por acompañarme en esta noche tan especial.', firma: 'Sofía', diaLlego: '¡Hoy es mi gran noche!' },
      ceremonia: _lugar('Misa de acción de gracias', 'Iglesia de San Francisco', '18:00', 'Plaza San Francisco, La Paz'),
      recepcion: _lugar('Fiesta', 'Salón Cristal', '20:30', 'Av. Busch 1500, Miraflores, La Paz'),
      vestimenta: { tipo: 'Gala', descripcion: 'Damas: vestido largo. Caballeros: traje oscuro.', nota: 'El color rosa está reservado para la quinceañera.', paleta: ['#2C2C2C', '#5B6B7A', '#C0C0C0', '#8C6F9E'] },
      rsvp: { mensajeWhatsapp: '¡Hola! 👑 Confirmo mi asistencia a los XV años de {nombre1}.' },
      regalos: { texto: 'Tu presencia es mi mejor regalo. Si deseas tener un detalle conmigo, habrá lluvia de sobres.' },
      padrinos: _pp('Mis padres | Carlos Mendoza y Patricia Flores\nMis padrinos | Roberto Flores y Gabriela Ríos\nChambelán | Diego Mendoza'),
      programa: _prog('20:30 | Recepción de invitados\n21:00 | Entrada de la quinceañera\n21:15 | Vals\n22:00 | Cena\n23:00 | Fiesta'),
      secciones: { programa: true }
    }
  },
  cumple: {
    nombre: 'Cumpleaños', icono: '🎂', categoria: 'Cumpleaños', slug: 'cumple',
    campos: { nombre1: 'Nombre del cumpleañero/a', nombre2: null, destacado: 'Edad que cumple', conector: false },
    lugares: ['Previa', 'Fiesta'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: 'Mi Cumpleaños', evento: 'mi cumpleaños', calendario: 'Cumpleaños de {nombre1}', rsvpTexto: 'Me encantaría que estés conmigo.', padrinos: 'Organizan' },
    demo: {
      tema: 'gala',
      protagonistas: { nombre1: 'Andrés', nombre2: '', monograma: '30', destacado: '30' },
      textos: { bienvenida: '¡Celebremos mi cumpleaños!', frase: 'Treinta años, muchas historias y las mejores personas. ¡Brindemos juntos!', historia: '', despedida: '¡Te espero para celebrar en grande!', firma: 'Andrés', diaLlego: '¡Hoy es mi cumpleaños!' },
      recepcion: _lugar('Fiesta', 'Lounge Altura', '21:00', 'Calle 15 de Calacoto, La Paz'),
      vestimenta: { tipo: 'Casual elegante', descripcion: 'Ven cómodo y con ganas de bailar.', nota: '', paleta: [] },
      rsvp: { mensajeWhatsapp: '¡Hola {nombre1}! 🎂 Confirmo que voy a tu cumpleaños.' },
      regalos: { texto: 'Tu presencia es mi mejor regalo.' },
      secciones: { ceremonia: false, historia: false, regalos: false }
    }
  },
  infantil: {
    nombre: 'Cumpleaños infantil', icono: '🎈', categoria: 'Cumpleaños', slug: 'cumple',
    campos: { nombre1: 'Nombre del niño/a', nombre2: null, destacado: 'Edad que cumple', conector: false },
    lugares: ['Lugar 1', 'Fiesta'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: '¡Mi Cumpleaños!', evento: 'mi fiesta de cumpleaños', calendario: 'Cumple de {nombre1}', cuenta: '¡Ya falta poco!', galeria: 'Mis fotos', rsvp: '¿Vienes a mi fiesta?', rsvpTexto: '¡Me haría muy feliz que vengas!', padrinos: 'Mis papás', album: 'Fotos de la fiesta', intro: '¡Estás invitado a mi fiesta!' },
    demo: {
      tema: 'infantil',
      protagonistas: { nombre1: 'Mateo', nombre2: '', monograma: '5', destacado: '5' },
      textos: { bienvenida: '¡Mi cumpleaños!', frase: '¡Habrá juegos, pastel, sorpresas y mucha diversión!', historia: '', despedida: '¡Te espero para jugar y celebrar juntos!', firma: 'Mateo', diaLlego: '¡Hoy es mi fiesta!' },
      recepcion: _lugar('Fiesta', 'Salón de fiestas Mundo Mágico', '15:00', 'Av. Los Sauces 300, Calacoto, La Paz'),
      vestimenta: { tipo: 'Temática: Superhéroes', descripcion: '¡Ven disfrazado de tu superhéroe favorito!', nota: '', paleta: ['#FF7A59', '#3B82F6', '#FACC15', '#22C55E'] },
      rsvp: { mensajeWhatsapp: '¡Hola! 🎈 Confirmo que vamos a la fiesta de {nombre1}.' },
      regalos: { texto: 'Tu presencia es mi mejor regalo 🎁' },
      padrinos: _pp('Mis papás | Luis y Carla'),
      secciones: { ceremonia: false, historia: false, regalos: false, intro: true }
    }
  },

  /* ---------------- RELIGIOSOS ---------------- */
  bautizo: {
    nombre: 'Bautizo', icono: '🕊️', categoria: 'Religiosos', slug: 'bautizo',
    campos: { nombre1: 'Nombre del bebé', nombre2: null, destacado: null, conector: false },
    lugares: ['Ceremonia de bautizo', 'Recepción'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: 'Mi Bautizo', evento: 'mi bautizo', calendario: 'Bautizo de {nombre1}', padrinos: 'Mis papás y padrinos', rsvpTexto: 'Me encantaría que me acompañes en este día.', intro: 'Estás invitado a mi bautizo' },
    demo: {
      tema: 'celeste',
      protagonistas: { nombre1: 'Emilia', nombre2: '', monograma: 'E', destacado: '' },
      textos: { bienvenida: 'Mi Bautizo', frase: 'Hoy recibo la luz de la fe y quiero compartir esta bendición contigo.', historia: '', despedida: 'Gracias por acompañarme en este día tan especial.', firma: 'Emilia', diaLlego: '¡Hoy es mi bautizo!' },
      ceremonia: _lugar('Ceremonia de bautizo', 'Parroquia Nuestra Señora de La Paz', '11:00', 'Av. 20 de Octubre, Sopocachi, La Paz'),
      recepcion: _lugar('Recepción', 'Casa de la familia', '13:00', 'Calle 8 de Obrajes 450, La Paz'),
      vestimenta: { tipo: 'Formal', descripcion: 'Tonos claros.', nota: '', paleta: ['#FFFFFF', '#DCE8F2', '#C9B99A'] },
      rsvp: { mensajeWhatsapp: '¡Hola! 🕊️ Confirmo mi asistencia al bautizo de {nombre1}.' },
      regalos: { texto: 'Tu presencia es nuestro mejor regalo.' },
      padrinos: _pp('Mis papás | Javier Quiroga y Mariana Salas\nMis padrinos | Esteban Salas y Daniela Quiroga'),
      secciones: { padrinos: true, regalos: false, historia: false }
    }
  },
  comunion: {
    nombre: 'Primera Comunión', icono: '✝️', categoria: 'Religiosos', slug: 'comunion',
    campos: { nombre1: 'Nombre del niño/a', nombre2: null, destacado: null, conector: false },
    lugares: ['Misa', 'Recepción'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: 'Mi Primera Comunión', evento: 'mi Primera Comunión', calendario: 'Primera Comunión de {nombre1}', padrinos: 'Mis papás y padrinos', rsvpTexto: 'Me encantaría que me acompañes en este día.', intro: 'Estás invitado a mi Primera Comunión' },
    demo: {
      tema: 'celeste',
      protagonistas: { nombre1: 'Lucas', nombre2: '', monograma: 'L', destacado: '' },
      textos: { bienvenida: 'Mi Primera Comunión', frase: 'Dejad que los niños vengan a mí.', historia: 'Con alegría recibiré a Jesús por primera vez y quiero compartir este momento contigo.', despedida: 'Gracias por acompañarme en este día tan especial.', firma: 'Lucas', diaLlego: '¡Hoy es mi Primera Comunión!' },
      ceremonia: _lugar('Santa Misa', 'Parroquia San Miguel', '10:00', 'Calle 21 de Calacoto, La Paz'),
      recepcion: _lugar('Recepción', 'Jardín Las Lomas', '12:30', 'Av. Costanera, Achumani, La Paz'),
      vestimenta: { tipo: 'Formal', descripcion: 'Tonos claros.', nota: '', paleta: [] },
      rsvp: { mensajeWhatsapp: '¡Hola! ✝️ Confirmo mi asistencia a la Primera Comunión de {nombre1}.' },
      regalos: { texto: 'Tu presencia es mi mejor regalo.' },
      padrinos: _pp('Mis papás | Andrés Vega y Lorena Paz\nMi padrino | Marcelo Paz'),
      secciones: { padrinos: true, regalos: false }
    }
  },
  confirmacion: {
    nombre: 'Confirmación', icono: '🕯️', categoria: 'Religiosos', slug: 'confirmacion',
    campos: { nombre1: 'Nombre del confirmando/a', nombre2: null, destacado: null, conector: false },
    lugares: ['Misa de confirmación', 'Recepción'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: 'Mi Confirmación', evento: 'mi Confirmación', calendario: 'Confirmación de {nombre1}', padrinos: 'Mis papás y padrino', rsvpTexto: 'Me encantaría que me acompañes en este día.', intro: 'Estás invitado a mi Confirmación' },
    demo: {
      tema: 'clasico',
      protagonistas: { nombre1: 'Valeria', nombre2: '', monograma: 'V', destacado: '' },
      textos: { bienvenida: 'Mi Confirmación', frase: 'Hoy confirmo mi fe con alegría y quiero compartirlo con las personas que más quiero.', historia: '', despedida: 'Gracias por acompañarme.', firma: 'Valeria', diaLlego: '¡Hoy es mi Confirmación!' },
      ceremonia: _lugar('Misa de confirmación', 'Catedral Metropolitana', '17:00', 'Plaza Murillo, La Paz'),
      recepcion: _lugar('Recepción', 'Restaurante El Jardín', '19:00', 'Av. Ballivián, Calacoto, La Paz'),
      vestimenta: { tipo: 'Formal', descripcion: '', nota: '', paleta: [] },
      rsvp: { mensajeWhatsapp: '¡Hola! 🕯️ Confirmo mi asistencia a la Confirmación de {nombre1}.' },
      regalos: { texto: 'Tu presencia es mi mejor regalo.' },
      padrinos: _pp('Mis papás | Raúl Torrez y Silvia Ortiz\nMi madrina | Gabriela Ortiz'),
      secciones: { padrinos: true, regalos: false, historia: false }
    }
  },

  /* ---------------- BEBÉS ---------------- */
  babyshower: {
    nombre: 'Baby Shower', icono: '🍼', categoria: 'Bebés', slug: 'baby-shower',
    campos: { nombre1: 'Nombre del bebé (o "Baby Shower")', nombre2: 'Papás (subtítulo)', destacado: null, conector: false },
    lugares: ['Lugar 1', 'Baby Shower'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: 'Baby Shower', evento: 'el baby shower de {nombre1}', calendario: 'Baby Shower de {nombre1}', regalos: 'Lista de regalos', padrinos: 'Te esperan', intro: 'Estás invitada al baby shower de {nombre1}' },
    demo: {
      tema: 'baby',
      protagonistas: { nombre1: 'Bebé Joaquín', nombre2: 'Ana & Luis', monograma: 'J', destacado: '' },
      textos: { bienvenida: 'Baby Shower', frase: 'Un pequeño milagro está en camino y queremos celebrarlo contigo.', historia: '', despedida: '¡Gracias por consentir a nuestro bebé desde ya!', firma: 'Ana & Luis', diaLlego: '¡Hoy es el baby shower!' },
      recepcion: _lugar('Baby Shower', 'Casa de los abuelos', '16:00', 'Calle 10 de Achumani 820, La Paz'),
      vestimenta: { tipo: 'Casual', descripcion: 'Ven cómoda; tonos pastel bienvenidos.', nota: '', paleta: ['#BFE3D6', '#F7E1AE', '#F2C6C2'] },
      rsvp: { mensajeWhatsapp: '¡Hola! 🍼 Confirmo mi asistencia al baby shower de {nombre1}.' },
      regalos: { texto: 'Si deseas obsequiarle algo al bebé, aquí tienes algunas ideas:', mesaUrl: '' },
      secciones: { ceremonia: false, historia: false }
    }
  },
  revelacion: {
    nombre: 'Revelación de género', icono: '🎀', categoria: 'Bebés', slug: 'revelacion',
    campos: { nombre1: 'Mamá', nombre2: 'Papá', destacado: null, conector: true },
    lugares: ['Lugar 1', 'Revelación'],
    excluir: [],
    esenciales: ['revelacion'],
    etiquetas: { tituloPestana: '¿Niño o niña?', evento: 'nuestra revelación de género', calendario: 'Revelación de género de {nombres}', revelacion: '¿Niño o niña?', intro: '¿Niño o niña? Descúbrelo con nosotros' },
    demo: {
      tema: 'revelacion',
      protagonistas: { nombre1: 'Ana', nombre2: 'Luis', monograma: '?', destacado: '' },
      textos: { bienvenida: 'Revelación de género', frase: 'Pronto conoceremos a nuestro bebé… ¿será niño o niña?', historia: '', despedida: '¡Gracias por vivir esta sorpresa con nosotros!', firma: 'Ana & Luis', diaLlego: '¡Hoy lo descubrimos!' },
      recepcion: _lugar('Revelación', 'Jardín Las Flores', '16:00', 'Av. Costanera, Achumani, La Paz'),
      vestimenta: { tipo: 'Elige tu equipo', descripcion: 'Ven de celeste si crees que es niño o de rosa si crees que es niña.', nota: '', paleta: ['#86BCE4', '#F2A7C3'] },
      rsvp: { mensajeWhatsapp: '¡Hola! 🎀 Confirmo mi asistencia a la revelación de {nombres}.' },
      revelacion: { texto: 'Vota por tu favorito y descubre el resultado el día del evento.', opcionA: { nombre: 'Niño', color: '#86BCE4' }, opcionB: { nombre: 'Niña', color: '#F2A7C3' }, resultado: '' },
      secciones: { ceremonia: false, historia: false, regalos: false, revelacion: true }
    }
  },

  /* ---------------- GRADUACIONES ---------------- */
  promocolegio: {
    nombre: 'Promoción de colegio', icono: '🎒', categoria: 'Graduaciones', slug: 'promo',
    campos: { nombre1: 'Nombre (ej. Promoción 2026)', nombre2: 'Colegio (subtítulo)', destacado: 'Destacado (ej. año)', conector: false },
    lugares: ['Acto de graduación', 'Fiesta de promoción'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: 'Fiesta de Promoción', evento: 'nuestra fiesta de promoción', calendario: '{nombre1} · {nombre2}', padrinos: 'Padrinos de promoción', galeria: 'Nuestros recuerdos', album: 'Álbum de la promo' },
    demo: {
      tema: 'azul',
      protagonistas: { nombre1: 'Promoción 2026', nombre2: 'Unidad Educativa San Andrés', monograma: 'P26', destacado: '2026' },
      textos: { bienvenida: '¡Nos graduamos!', frase: 'Doce años de amistad, aprendizajes y sueños. Hoy cerramos un ciclo y empezamos otro.', historia: '', despedida: '¡Gracias por acompañarnos en este logro!', firma: 'Promoción 2026', diaLlego: '¡Hoy nos graduamos!' },
      ceremonia: _lugar('Acto de graduación', 'Coliseo del colegio', '17:00', 'Av. Arce 1234, La Paz'),
      recepcion: _lugar('Fiesta de promoción', 'Salón Los Andes', '21:00', 'Av. Busch, Miraflores, La Paz'),
      vestimenta: { tipo: 'Gala', descripcion: 'Damas: vestido largo. Caballeros: traje y corbata.', nota: '', paleta: [] },
      rsvp: { mensajeWhatsapp: '¡Hola! 🎓 Confirmo mi asistencia a la fiesta de la {nombre1}.' },
      padrinos: _pp('Padrinos de promoción | Lic. Jorge Arce y Sra. Mónica Villa\nAsesor de curso | Prof. Ramiro Quispe'),
      programa: _prog('17:00 | Acto de graduación\n21:00 | Recepción\n21:30 | Vals de promoción\n22:30 | Cena\n23:30 | Fiesta'),
      secciones: { regalos: false, historia: false, padrinos: true, programa: true }
    }
  },
  graduacion: {
    nombre: 'Graduación profesional', icono: '🎓', categoria: 'Graduaciones', slug: 'graduacion',
    campos: { nombre1: 'Nombre del graduado/a', nombre2: 'Carrera (subtítulo)', destacado: null, conector: false },
    lugares: ['Acto de colación', 'Celebración'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: 'Mi Graduación', evento: 'mi graduación', calendario: 'Graduación de {nombre1}', padrinos: 'Con el apoyo de', rsvpTexto: 'Me encantaría compartir este logro contigo.', intro: 'Estás invitado a mi graduación' },
    demo: {
      tema: 'azul',
      protagonistas: { nombre1: 'Daniela Rojas', nombre2: 'Licenciatura en Administración de Empresas', monograma: 'DR', destacado: '' },
      textos: { bienvenida: '¡Me gradúo!', frase: 'Años de esfuerzo, desvelos y sueños hoy se convierten en un logro que quiero compartir contigo.', historia: 'Gracias a mi familia y amigos por acompañarme en este camino.', despedida: '¡Gracias por ser parte de este logro!', firma: 'Lic. Daniela Rojas', diaLlego: '¡Hoy me gradúo!' },
      ceremonia: _lugar('Acto de colación', 'Paraninfo Universitario', '10:00', 'Av. Villazón, La Paz'),
      recepcion: _lugar('Celebración', 'Restaurante Mirador', '13:00', 'Av. Saavedra, Miraflores, La Paz'),
      vestimenta: { tipo: 'Formal', descripcion: '', nota: '', paleta: [] },
      rsvp: { mensajeWhatsapp: '¡Hola! 🎓 Confirmo mi asistencia a la graduación de {nombre1}.' },
      padrinos: _pp('Mis padres | Hugo Rojas y Elena Castro'),
      secciones: { regalos: false }
    }
  },

  /* ---------------- EMPRESAS ---------------- */
  inauguracion: {
    nombre: 'Inauguración', icono: '✂️', categoria: 'Empresas', slug: 'inauguracion',
    campos: { nombre1: 'Nombre del negocio', nombre2: 'Subtítulo (ej. Nueva sucursal)', destacado: null, conector: false },
    lugares: ['Lugar 1', 'Inauguración'],
    excluir: ['revelacion', 'padrinos'],
    etiquetas: { tituloPestana: 'Inauguración', evento: 'la inauguración de {nombre1}', calendario: 'Inauguración {nombre1}', rsvpTexto: 'Será un gusto contar con su presencia.', album: 'Fotos del evento', intro: 'Te invitamos a la inauguración de {nombre1}' },
    demo: {
      tema: 'corporativo',
      protagonistas: { nombre1: 'Café Aroma', nombre2: 'Nueva sucursal Sopocachi', monograma: 'CA', destacado: '' },
      textos: { bienvenida: 'Te invitamos a la inauguración de', frase: 'Un nuevo espacio para compartir buenos momentos. Queremos celebrarlo contigo.', historia: '', despedida: '¡Gracias por acompañarnos en este nuevo comienzo!', firma: 'Equipo Café Aroma', diaLlego: '¡Hoy abrimos nuestras puertas!' },
      recepcion: _lugar('Inauguración', 'Café Aroma Sopocachi', '18:00', 'Av. 20 de Octubre 2100, Sopocachi, La Paz'),
      vestimenta: { tipo: 'Casual elegante', descripcion: '', nota: '', paleta: [] },
      rsvp: { mensajeWhatsapp: 'Hola, confirmo mi asistencia a la inauguración de {nombre1}.' },
      programa: _prog('18:00 | Bienvenida\n18:30 | Corte de cinta\n19:00 | Brindis y degustación'),
      secciones: { ceremonia: false, historia: false, regalos: false, programa: true, vestimenta: false }
    }
  },
  corporativo: {
    nombre: 'Evento corporativo', icono: '💼', categoria: 'Empresas', slug: 'evento',
    campos: { nombre1: 'Nombre del evento', nombre2: 'Empresa / organizador', destacado: null, conector: false },
    lugares: ['Lugar 1', 'Evento'],
    excluir: ['revelacion', 'padrinos'],
    etiquetas: { tituloPestana: 'Invitación', evento: '{nombre1}', calendario: '{nombre1} · {nombre2}', programa: 'Agenda', rsvpTexto: 'Agradecemos confirmar su asistencia.', album: 'Fotos del evento', intro: '{nombre2} te invita' },
    demo: {
      tema: 'corporativo',
      protagonistas: { nombre1: 'Cena de Fin de Año 2026', nombre2: 'Grupo Andino S.A.', monograma: 'GA', destacado: '' },
      textos: { bienvenida: 'Grupo Andino te invita a', frase: 'Celebremos juntos los logros de este año y brindemos por los desafíos que vienen.', historia: '', despedida: 'Gracias por ser parte de nuestro equipo.', firma: 'Gerencia General', diaLlego: '¡Hoy es el evento!' },
      recepcion: _lugar('Evento', 'Hotel Casa Grande', '20:00', 'Av. Ballivián 1000, Calacoto, La Paz'),
      vestimenta: { tipo: 'Business formal', descripcion: 'Traje oscuro / vestido de cóctel.', nota: '', paleta: [] },
      rsvp: { mensajeWhatsapp: 'Hola, confirmo mi asistencia a {nombre1}.' },
      programa: _prog('20:00 | Recepción\n20:30 | Palabras de Gerencia\n21:00 | Reconocimientos\n21:30 | Cena\n22:30 | Fiesta'),
      secciones: { ceremonia: false, historia: false, regalos: false, programa: true, intro: false }
    }
  },

  /* ---------------- OTROS ---------------- */
  otro: {
    nombre: 'Otro evento', icono: '🎊', categoria: 'Otros', slug: 'evento',
    campos: { nombre1: 'Título principal', nombre2: 'Subtítulo (opcional)', destacado: 'Destacado (opcional)', conector: false },
    lugares: ['Lugar 1', 'Lugar 2'],
    excluir: ['revelacion'],
    etiquetas: { tituloPestana: 'Invitación', evento: '{nombre1}', calendario: '{nombre1}' },
    demo: {
      tema: 'clasico',
      protagonistas: { nombre1: 'Reunión de exalumnos', nombre2: 'Generación 2006', monograma: '20', destacado: '20' },
      textos: { bienvenida: 'Te invitamos a', frase: 'Veinte años después, volvamos a encontrarnos.', historia: '', despedida: '¡Te esperamos!', firma: 'Comité organizador', diaLlego: '¡Hoy es el día!' },
      recepcion: _lugar('Encuentro', 'Club de La Paz', '19:00', 'Av. Camacho, La Paz'),
      rsvp: { mensajeWhatsapp: 'Hola, confirmo mi asistencia a {nombre1}.' },
      secciones: { ceremonia: false, historia: false, regalos: false, padrinos: false }
    }
  }
};
