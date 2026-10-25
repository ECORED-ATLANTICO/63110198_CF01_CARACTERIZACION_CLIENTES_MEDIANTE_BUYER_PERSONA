<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reconociendo el mercado y los clientes potenciales.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos, principios y procesos relacionados con el comportamiento del consumidor, la identificación de clientes potenciales, la segmentación de mercados, el mercado objetivo, la prospectación comercial y la estrategia comercial, mediante la resolución de un cuestionario de selección múltiple con única respuesta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué analiza el comportamiento del consumidor durante la compra?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El proceso de decisión del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La estructura organizacional de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los estados financieros del negocio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La distribución física del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza principalmente a un cliente potencial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Haber realizado varias compras anteriormente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presentar afinidad con la oferta comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Poseer características compatibles con la organización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Administrar una organización comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es el propósito de categorizar clientes potenciales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar clientes según criterios definidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar automáticamente las ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilitar el análisis comercial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué aporta el perfilamiento comercial al análisis del cliente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La definición del presupuesto comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La identificación de atributos del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La elaboración del portafolio empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La administración del inventario disponible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Para qué sirven las fuentes de información del cliente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar productos industriales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Obtener información para comprender al consumidor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir el proceso de segmentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calcular la rentabilidad empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es la finalidad principal de segmentar un mercado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar consumidores con características comunes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elaborar campañas publicitarias digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar nuevos productos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar automáticamente las ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué permiten identificar las variables psicográficas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ubicación geográfica del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El nivel educativo del cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los intereses y estilos de vida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La actividad económica empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué analizan principalmente las variables conductuales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El comportamiento del consumidor frente al mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La distribución territorial de las empresas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las características demográficas familiares.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los recursos financieros de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué representa un nicho de mercado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un mercado internacional especializado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un grupo específico dentro de un segmento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una estrategia para aumentar ventas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un conjunto de proveedores comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿En qué se fundamenta seleccionar un público objetivo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En la intuición del equipo comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En el tamaño total del mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En la información obtenida durante la segmentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En el análisis del mercado y los objetivos comerciales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el propósito principal de la prospectación comercial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar campañas de publicidad institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar clientes potenciales para la gestión comercial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar nuevos productos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar la estructura administrativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué orientan las estrategias de prospectación comercial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La distribución física de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La elaboración de presupuestos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La identificación organizada de oportunidades comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las acciones dirigidas hacia clientes potenciales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué permiten los métodos de identificación de prospectos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reconocer clientes potenciales compatibles con la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar estrategias de fijación de precios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar campañas publicitarias masivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir procesos de contratación empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Para qué sirven los criterios de priorización comercial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificar productos según su precio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer el orden de atención de prospectos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar promociones para nuevos mercados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Organizar el inventario empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué favorece priorizar adecuadamente clientes potenciales?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el análisis del mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir la segmentación comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Optimizar la utilización de recursos comerciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar automáticamente las ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué integra una estrategia comercial dentro de la organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los procesos administrativos y financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El conocimiento del mercado y los clientes potenciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Las actividades contables de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los procesos de producción industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué orientan los objetivos comerciales en una organización?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El diseño del producto final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las decisiones y acciones comerciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La administración del talento humano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué aporta la segmentación a la estrategia comercial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar automáticamente la rentabilidad empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El conocimiento para orientar decisiones comerciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir el proceso de prospectación comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de analizar clientes potenciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Cómo se identifican las oportunidades de mercado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mediante decisiones tomadas al azar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente por experiencia del vendedor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'A través del análisis sistemático del mercado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivamente mediante campañas publicitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué proceso integra el análisis comercial completo del componente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Segmentación, perfilamiento, prospectación y estrategia comercial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Producción, distribución, inventarios y logística.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Publicidad, contabilidad, impuestos y compras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administración financiera, talento humano y manufactura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
