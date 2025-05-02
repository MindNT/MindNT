const EMAIL_RECIPIENT = 'mindntlabs@gmail.com';
const MARKETING_EMAIL = 'labdesignmx2023@gmail.com';

export const openEmailClient = (subject, body, isMarketing = false) => {
  const recipient = isMarketing ? MARKETING_EMAIL : EMAIL_RECIPIENT;
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
};

export const emailTemplates = {
  generalDemo: () => ({
    subject: 'Solicitud de Demo - MindNT',
    body: `Hola equipo de MindNT,

Nombre: [Su nombre]
Teléfono: [Su teléfono]

Me gustaría solicitar una demostración de sus servicios.
Me interesa conocer más sobre: [Especifique el servicio]

Espero su respuesta.
Saludos cordiales.`
  }),

  v360Demo: () => ({
    subject: 'Solicitud de Demo - V360',
    body: `Hola equipo de MindNT,

Nombre: [Su nombre]
Teléfono: [Su teléfono]

Me interesa conocer más sobre V360, su herramienta de análisis competitivo con IA.

Espero su respuesta.
Saludos cordiales.`
  }),

  webDevelopment: () => ({
    subject: 'Cotización - Desarrollo Web',
    body: `Hola equipo de MindNT,

Nombre: [Su nombre]
Teléfono: [Su teléfono]

Me gustaría recibir una cotización para el desarrollo de una página web.

Espero su respuesta.
Saludos cordiales.`
  }),

  nexxusDemo: () => ({
    subject: 'Solicitud de Demo - Nexxus',
    body: `Hola equipo de MindNT,

Nombre: [Su nombre]
Teléfono: [Su teléfono]

Me interesa conocer más sobre Nexxus, su agente de IA personalizable.

Espero su respuesta.
Saludos cordiales.`
  }),

  additionalTools: () => ({
    subject: 'Información - Herramientas Adicionales',
    body: `Hola equipo de MindNT,

Nombre: [Su nombre]
Teléfono: [Su teléfono]

Me gustaría obtener más información sobre sus herramientas adicionales (Menú Digital QR y Tarjeta de Presentación Digital).

Espero su respuesta.
Saludos cordiales.`
  }),

  marketingServices: (service) => ({
    subject: `Cotización - Servicios de Marketing: ${service}`,
    body: `Hola equipo de MindNT,

Nombre: [Su nombre]
Teléfono: [Su teléfono]

Me gustaría recibir información sobre sus servicios de marketing, específicamente sobre ${service}.

Por favor, quisiera conocer:
- Planes y paquetes disponibles
- Tiempos de implementación
- Inversión requerida

Espero su respuesta.
Saludos cordiales.`,
    isMarketing: true
  }),

  marketingCampaign: () => ({
    subject: 'Cotización - Campaña de Marketing Personalizada',
    body: `Hola equipo de MindNT,

Nombre: [Su nombre]
Teléfono: [Su teléfono]

Me interesa desarrollar una campaña de marketing personalizada para mi negocio.

Me gustaría discutir:
- Objetivos de la campaña
- Canales de marketing sugeridos
- Presupuesto y duración estimada

Espero su respuesta.
Saludos cordiales.`,
    isMarketing: true
  }),

  marketingConsultancy: () => ({
    subject: 'Solicitud - Asesoría de Marketing',
    body: `Hola equipo de MindNT,

Nombre: [Su nombre]
Teléfono: [Su teléfono]

Me gustaría agendar una asesoría de marketing para mi negocio.

Áreas de interés:
- Estrategia digital
- Presencia en redes sociales
- Optimización de conversión

Espero su respuesta.
Saludos cordiales.`,
    isMarketing: true
  })
};
