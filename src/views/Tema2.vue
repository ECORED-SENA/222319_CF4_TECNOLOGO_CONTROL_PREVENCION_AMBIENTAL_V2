<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Transporte y recepción de muestras
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        p El proceso de muestreo y análisis de muestra tiene, dentro de muchas implicaciones el de conservar, transportar y recibir las muestras. En dicho procedimiento, siempre que sea necesario movilizarla a la zona de laboratorio o de almacenamiento se recomienda actuar bajo los criterios y protocolos establecidos y las normas.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Siempre es conveniente transportarlas en los tiempos establecidos, previendo los posibles contratiempos y vicisitudes, es decir, mitigando al máximo las posibilidades de afectar o desvirtuar la calidad e integridad de las mismas.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width: 450px").m-auto
    Separador
    #t_2_1
    .row.bg-c11
      .col-12
        .px-5.pt-5
          .titulo-segundo.color-secundario
            h2 2.1 Acondicionamiento, transporte y recepción de muestras de agua
          p El acondicionamiento de las muestras dependerá del objetivo del muestreo. En general, para análisis físico-químico puede ser necesario acondicionarlas con conservadores de frío, ya que algunas especies químicas (nitratos, sulfatos) pueden sufrir transformaciones por acción microbiana. También deben mantenerse al resguardo de la luz, procurando enviarlas lo más rápido posible al laboratorio.
          p.mb-5 En el caso de análisis microbiológico es indispensable que la muestra se mantenga refrigerada hasta su arribo al laboratorio, ya que tanto las temperaturas mayores a 6ºC como la luz provocan la multiplicación de los microorganismos e invalidan la muestra dado que los resultados no reflejarán la realidad.
          .row.justify-content-center.mb-5
            .col-lg-10
              .row.bg-c1
                .col-12.px-4.px-lg-2.pt-4.pt-lg-2.pb-4.pb-lg-0
                  .row.align-items-end
                    .col-12.col-lg-auto.mb-4.mb-lg-0
                      figure
                        img(src='@/assets/curso/tema1/img1.svg', style="width: 80px").m-auto
                    .col
                      p Independientemente de la cantidad de muestras y del medio de transporte que se utilice para llevarlas al laboratorio, deben seguirse las recomendaciones para su remisión al laboratorio que las va a analizar.
          p.mb-5 Para la recepción y transporte de muestras no refrigeradas, téngase en cuenta aspectos como:
          .row.justify-content-center.mb-5
            .col-lg-10
              .row
                .col-12.bg-c3.p-4
                  .row.justify-content-center
                    .col-12
                      ul.lista-ul--color.lista-ul.mb-0
                        li.mb-4
                          i.fas.fa-check
                          | #[b Entregar lo más pronto posible las muestras con sus actas al laboratorio, recordando que para muestras de agua potable no deben transcurrir más de seis (6) horas entre el momento de la recolección y su llegada al laboratorio.]
                        li.mb-4
                          i.fas.fa-check
                          | #[b El acta de toma de muestra de datos no debe estar con los recipientes sino en la parte exterior del embalaje, para evitar que se deteriore. -Los recipientes que contengan las muestras se deben proteger y sellar de tal forma que no se deterioren, ni su contenido sufra ninguna pérdida durante el transporte]
                        li.mb-4
                          i.fas.fa-check
                          | #[b El empaque debe proteger los recipientes de una posible contaminación externa y en sí mismo no debe ser fuente de contaminación]
                        li.mb-0
                          i.fas.fa-check
                          | #[b Para el caso de muestras enviadas por correo, se deberá asegurar la conservación e integridad de éstas, hasta su llegada al laboratorio]
          p.mb-5 En el caso de recepción y transporte de muestras refrigeradas, las siguientes son los recaudos que se deben considerar:
          .row.mb-5
            .col-12.bg-c9.p-4.p-lg-5
              p.mb-4 #[b Recepción y transporte de muestras refrigeradas]
              LineaTiempoE.color-acento-contenido
                .row(titulo="1. Refrigeración" subtitulo="")
                  .col-12
                    .row.align-items-center
                      .col-lg-auto.mb-4.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema2/img3.svg', style="width: 120px").m-auto
                      .col
                        p.mb-0 Durante el transporte se recomienda refrigeración a 4° C y protección de la luz, especialmente si se sospecha que el agua está contaminada con organismos patógenos. Es necesario que al refrigerarse las muestras se tomen las precauciones y medidas necesarias para prevenir cualquier contaminación proveniente del hielo derretido.
                .row(titulo="2. Tiempos" subtitulo="")
                  .col-12
                    .row.align-items-center
                      .col-lg-auto.mb-4.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema2/img4.svg', style="width: 120px").m-auto
                      .col
                        p.mb-0 Si se supera el tiempo de preservación recomendado antes del análisis, las muestras se deben analizar y se debe reportar el tiempo entre el muestreo y el análisis, después de consultar con el profesional encargado de la interpretación de los resultados analíticos.
                .row(titulo="3. Almacenamiento" subtitulo="")
                  .col-12
                    .row.align-items-center
                      .col-lg-auto.mb-4.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema2/img5.svg', style="width: 120px").m-auto
                      .col
                        p.mb-0 Todas las muestras de un mismo sitio de muestreo deberán ser almacenadas en una misma nevera portátil, para evitar posibles confusiones con muestras de otros sitios; sin embargo, si fueron tomados blancos estos deben ir empacados de igual manera que las otras muestras para que el laboratorio no los pueda identificar.
                .row(titulo="4. Recipientes" subtitulo="")
                  .col-12
                    .row.align-items-center
                      .col-lg-auto.mb-4.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema2/img6.svg', style="width: 120px").m-auto
                      .col
                        p.mb-0 Los recipientes deberán ser colocados en posición vertical, con suficientes bolsas de hielo intercaladas de tal manera que se alcance una temperatura cercana a los 4° C. Se debe verificar que las botellas no se caigan, ni se abran, ni se les desprenda el rótulo. Después de embaladas se tapa y se sella la nevera.
                .row(titulo="5. Rotulado" subtitulo="")
                  .col-12
                    .row.align-items-center
                      .col-lg-auto.mb-4.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema2/img7.svg', style="width: 120px").m-auto
                      .col
                        p.mb-0 Es aconsejable colocarle un rótulo con la firma de quien hizo el muestreo, la fecha y la hora, adherido de tal manera que se rompa una vez la nevera sea abierta (sello de seguridad).
                .row(titulo="6. Responsables e implicados" subtitulo="")
                  .col-12
                    .row.align-items-center
                      .col-lg-auto.mb-4.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema2/img8.svg', style="width: 120px").m-auto
                      .col
                        p.mb-0 Las neveras deberán ser entregadas por alguna de las personas que hicieron parte de la comisión de muestreo al laboratorio, entregando igualmente los formatos de campo. Las muestras deberán ser radicadas y colocadas, tan pronto como sea posible, dentro del cuarto frío donde las muestras se conservarán para su posterior análisis.
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Entrega de la muestra y recepción en laboratorio
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p El laboratorio donde se practican los análisis fisicoquímicos y microbiológicos de las muestras para la vigilancia generalmente cuenta con instalaciones y equipos propios de la Autoridad Sanitaria y son operados por especialistas en técnicas de análisis de agua.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Los laboratorios donde se practican los análisis fisicoquímicos y microbiológicos de las muestras para el control, cuentan con instalaciones, equipos y personal propios de la Persona Prestadora o son laboratorios particulares autorizados por el Ministerio de la Protección Social, según Resolución expedida por el Ministerio de la Protección Social, porque cumplen con los requisitos mínimos previstos en el artículo 27 del Decreto 1575 de 2007.
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 450px").m-auto
    .row.align-items-end.bg-c12.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img2.png', style="width: 450px").m-auto
      .col-lg-8
        p #[b Personal de laboratorio]
        p.mb-4 El personal de estos laboratorios encargados de la recepción de las muestras, así como los encargados de la recolección y transporte de las muestras deben seguir todas las recomendaciones estipuladas, especialmente en aquellos laboratorios donde, por la complejidad y tamaño de los sistemas de distribución, se procesan muestras recogidas por varios equipos de recolección, o procedentes de varios clientes, como es el caso de los laboratorios particulares.
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        p Las muestras deben registrarse en cuanto lleguen al laboratorio. El procedimiento de entrada y registro de la muestra es importante para los propósitos de la cadena de custodia.
        p La siguiente información debe requerirse en el procedimiento de entrada y registro:
        .row
          .col-lg-12.bg-c3.p-4.p-lg-5
            ol.lista-ol--cuadro.lista-ol.mb-0
              li
                .lista-ol--cuadro__vineta
                  span.txt-c2 a.
                span #[b Número de código de la muestra].
              li
                .lista-ol--cuadro__vineta
                  span.txt-c2 b.
                span #[b Nombre de la Persona Prestadora, para el caso de los laboratorios de vigilancia o los laboratorios particulares que atienden varios clientes].
              li
                .lista-ol--cuadro__vineta
                  span.txt-c2 c.
                span #[b Nombre del (o los) tomadores de muestras].
              li
                .lista-ol--cuadro__vineta
                  span.txt-c2 d.
                span #[b Número del método de muestreo].
              li
                .lista-ol--cuadro__vineta
                  span.txt-c2 e.
                span #[b Localización de almacenamiento de la muestra].
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img3.png', style="width: 450px").m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-secundario
      h2 2.2 Transporte y recepción de muestras de suelo
    p.mb-4 Las muestras deben protegerse de la desecación, la excesiva humedad, la exposición a rayos solares y calor excesivo. De acuerdo a lo anterior, el suelo para análisis deberá conservarse durante el transportarse en nevera de icopor, asegurando su calidad.
    .row.align-items-end.mb-5
      .col-lg-8.mb-4.mb-lg-0
        .row
          .col-12.bg-c6.p-4
            ul.lista-ul--color.lista-ul.mb-0
              li.mb-3
                i.fas.fa-check
                span #[b En el fondo de la cava de icopor, introducir gel refrigerante o hielo en bolsas plásticas]
              li.mb-3
                i.fas.fa-check
                span #[b Colocar encima de las bolsas de hielo una rejilla metálica o plástica, que las separe de las muestras]
              li.mb-3
                i.fas.fa-check
                span #[b Evitar utilizar materiales como madera o cartón para realizar el aislamiento de la muestra con el gel o el hielo, debido a que se estos materiales se humedecen, ocasionando crecimiento de microorganismos contaminantes]
              li.mb-3
                i.fas.fa-check
                span #[b Introducir las muestras, colocándolas encima de la rejilla, malla metálica o plástica]
              li.mb-3
                i.fas.fa-check
                span #[b Mantener la temperatura de conservación en un rango de 4°C a 8°C]
              li
                i.fas.fa-check
                span #[b Sellar la nevera de icopor con cinta adhesiva cuando el envió se realiza inmediatamente, de lo contrario refrigerar y rotular]
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img4.png', style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img22.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Profundice en los aspectos clave del proceso de conservación y transporte de muestras de suelos, explorando el contenido del Anexo_4_ConservaciónYTransporteMuestrasSuelos
                  p.text-small Anexo_4_ConservaciónYTransporteMuestrasSuelos
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_4_ConservacionYTransporteMuestrasSuelos.pdf')" target="_blank")
                    span(style="color: #000 !important") Descargar
                    i.fas.fa-file-download(style="color: #000 !important")
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Entrega a laboratorio - recepción de muestras
    p Las muestras deben registrarse en cuanto lleguen al laboratorio. El procedimiento de entrada y registro de la muestra es importante para los propósitos de la cadena de custodia.
    p.mb-5 La siguiente información debe requerirse en el procedimiento de entrada y registro:
    .row.mb-5
      .col-12.bg-c7.p-4
        ul.lista-ul--color.lista-ul.mb-0
          li
            i.fas.fa-check
            | #[b Número de código de la muestra]
          li
            i.fas.fa-check
            | #[b Nombre de la Persona Prestadora, para el caso de los laboratorios de vigilancia o los laboratorios particulares que atienden varios clientes]
          li
            i.fas.fa-check
            | #[b Nombre del (o los) tomadores de muestras]
          li
            i.fas.fa-check
            | #[b Número del método de muestreo]
          li.mb-0
            i.fas.fa-check
            | #[b Localización de almacenamiento de la muestra]
    p.mb-5 Preste atención a otros aspectos clave que, sobre transporte y recepción de muestras de suelo, se mencionan a continuación:
    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Inspección en la recepción
            p El recepcionista del laboratorio debe inspeccionar el etiquetado de las muestras y compararlo con la información del registro de campo o acta de toma de muestra de suelo. Si hay conformidad en esta inspección, el recepcionista del laboratorio firma este documento de vigilancia o control incluyendo la fecha y hora de llegada.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img5.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Cuando no hay conformidad
            p Si no hay conformidad, el recolector anota en la parte del formato, correspondiente a las observaciones, las inconformidades encontradas en la inspección de las muestras y firma el acta incluyendo la fecha y hora de llegada.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img6.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Asignación de código
            p Para cualquiera que sea el caso anteriormente descrito (hay o no conformidad), le asigna un número o código para su entrada, la registra en el libro del laboratorio y guarda las muestras en el cuarto frío bajo llave hasta que sea asignada a un analista.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img7.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Cuidado y vigilancia
            p Una vez la muestra está en el laboratorio, el encargado del cuarto frío y los analistas son responsables de su cuidado y vigilancia.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img8.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Agilidad en el proceso
            p Las muestras se deben entregar en el laboratorio lo más pronto posible. Es importante coordinar el envío de las muestras al laboratorio en horas convenientes, con el propósito de realizar los análisis en el horario normal de trabajo y en el mismo día, si es posible.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img9.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Preservación de las muestras
            p A su llegada al laboratorio, si es imposible analizar las muestras de inmediato, estás se deben preservar en condiciones tales que eviten cualquier contaminación procedente del exterior del recipiente, su deterioro y que impidan cualquier cambio de su contenido.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img10.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Recomendación importante
            p Para este propósito se recomienda usar gabinetes refrigerados o fríos y lugares oscuros. Se deben manejar las muestras refrigeradas después de su llegada al laboratorio.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img11.png', style="width: 500px").m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-secundario
      h2 2.3 Cadena de custodia
    p En la última fase de la recolección de muestras, se requiere supervisión y control constante; su importancia radica en organizar las actividades de transporte, preservación, almacenamiento y recepción de las muestras de tal forma que estas no sean alteradas, modificadas o que generen un riesgo que se materialice en resultados no verídicos al procesar las muestras.
    p La cadena de custodia es el procedimiento que se da cuando una muestra está bajo custodia (posesión o control físico) de alguien, de modo que se debe evitar la manipulación indebida o alteración de sus características desde la toma de la muestra hasta que se desecha.
    p.mb-4 A manera general se podría definir que la cadena de custodia involucra acciones y actividades como:
    .row.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .row
          .col-12.bg-c7.p-4
            ul.lista-ul--color.lista-ul.mb-0
              li
                i.fas.fa-check
                | #[b La toma de la muestra]
              li
                i.fas.fa-check
                | #[b El uso del recipiente para la misma]
              li
                i.fas.fa-check
                | #[b El almacenamiento temporal]
              li
                i.fas.fa-check
                | #[b El transporte al laboratorio]
              li
                i.fas.fa-check
                | #[b Almacenamiento en el laboratorio]
              li
                i.fas.fa-check
                | #[b El desarrollo de los análisis]
              li.mb-0
                i.fas.fa-check
                | #[b El desecho de la muestra]
      .col-lg-6
        figure
          img(src='@/assets/curso/tema2/img12.png', style="width: 550px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .text-white.p-4
              p.text-center #[b Garantizar el soporte de los datos y conclusiones a los que se llegue con el estudio o ensayo de muestreo, de forma adecuada, en una situación legal o reglamentaria. Busca mantener registros que certifiquen que los procedimientos fueron desarrollados según condiciones técnicas y que los resultados son verídicos y fiables.]
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Fase de toma de muestras
    p Para la toma y recolección de muestras en campo, se recomienda que se asigne a una sola persona la custodia de la muestra; esto con el fin de que la misma sea manipulada por la menor cantidad de individuos posible. A esta persona se le reconocerá como el #[strong muestreador de campo], él o ella se responsabilizará de la toma hasta la transferencia adecuada al lugar de análisis.
    p En lo que respecta a la documentación de custodia en campo, se deben diseñar los formatos que se requieran para la actividad de campo de recolección de muestras, pueden ser diseñados por muestra o para múltiples muestras.
    p.mb-5 Dentro de la documentación necesaria y pertinente, se encuentra:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido1
            .p-4
              p.text-center.mb-4 #[b Rotulado]
              p El rotulado de identificación de las muestras que especifique el punto exacto donde se tomó la misma, junto con la fecha y la hora.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido1
            .p-4
              p.text-center.mb-4 #[b Registro de campo]
              p El registro de campo, que debe contener espacios para la siguiente información: nombre e identificación de la muestra, ubicación del muestreo, fecha e intervalo de tiempo, firmas del personal que realizó la actividad, preservación (cantidad y tipo), número de recipientes, número de réplicas (si aplica), notas de campo, análisis deseado, tipo de muestra.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido1
            .p-4
              p.text-center.mb-4 #[b Sellado de la muestra]
              p El sellado de la muestra, si se requiere se pueden emplear sellos de custodia de la muestra de papel adhesivo a prueba de agua, con el fin que para manipular la muestra se requiera romperlos, así se garantizará la no manipulación de la misma antes de su entrega a laboratorios.
    p Las muestras deben ser entregadas lo más pronto posible al laboratorio. El registro de campo o acta de toma de muestras debe mantenerse intacto durante todo el procedimiento.
    p La fase de almacenamiento y transporte, es fundamental en un proceso de análisis de muestras, ya que, si no se realiza según las medidas técnicas reglamentarias, la muestra podría sufrir alteraciones y no reflejar resultados verídicos.
    p.mb-5 Para las muestras no refrigeradas, se deben considerar, aspectos como los que se enuncian enseguida:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--verde")
      .row(titulo="Prontitud")
        .col-12
          p.mb-0 Entregar lo más pronto posible las muestras con sus actas al laboratorio, como ejemplo: las muestras de agua potable no deben transcurrir más de seis (6) horas entre el momento de la recolección y su llegada al laboratorio.
      .row(titulo="Acta de toma")
        .col-12
          p.mb-0 El acta de toma de muestra de datos no debe estar con los recipientes sino en la parte exterior del embalaje, para evitar que se deteriore.
      .row(titulo="Recipientes")
        .col-12
          p.mb-0 Los recipientes que contengan las muestras se deben proteger y sellar de tal forma que no se deterioren, ni su contenido sufra ninguna pérdida durante el transporte. El empaque debe proteger los recipientes de una posible contaminación externa y en sí mismo no debe ser fuente de contaminación.
      .row(titulo="Conservación e integridad")
        .col-12
          p.mb-0 Para el caso de muestras enviadas por correo, se deberá asegurar la conservación e integridad de éstas, hasta su llegada al laboratorio. Utilizar neveras de icopor que son destinadas exclusivamente para este almacenamiento y transporte. Las muestras no deben transcurrir más de 24 horas entre la recolección y la llegada al laboratorio.
      .row(titulo="Contenedores de enfriamiento")
        .col-12
          p.mb-0 Empacar los frascos o recipientes con las muestras en neveras de icopor portátiles refrigeradas con bolsas con hielo o #[em ice packs]. Durante el transporte se recomienda refrigerar a 4° C y proteger la muestra de la luz (Siempre tapada), contabilizar tiempos de traslado para eliminar la posibilidad de contaminar la muestra con hielo derretido.
      .row(titulo="Sostenimiento de la temperatura")
        .col-12
          p.mb-0 En el caso de análisis microbiológico es indispensable que la muestra se mantenga refrigerada hasta su arribo al laboratorio, ya que tanto las temperaturas mayores a 6ºC como la luz provocan la multiplicación de los microorganismos e invalidan la muestra dado que los resultados no reflejarán la realidad.
      .row(titulo="Mantener los conjuntos")
        .col-12
          p.mb-0 Se recomienda que todas las muestras de un mismo sitio de muestreo se empaquen en un mismo recipiente de almacenamiento (nevera). Transportar y almacenar los recipientes siempre en posición vertical, verificando que no pierdan el rótulo, ni se puedan caer.
      .row(titulo="Marcado y rotulado")
        .col-12
          p.mb-0 Se aconseja ponerle rótulo a la nevera con firma de quien hizo el muestreo con fecha y hora. Se deben entregar al laboratorio preferiblemente por algún encargado de la fase de muestreo. Las muestras deberán ser radicadas y colocadas en el cuarto frío donde se podrán conservar para su posterior análisis.
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Muestras con preservantes
    .row.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        p Algunas muestras, dependiendo de su objetivo de análisis, van a requerir preservación con productos químicos. Estos se adicionan con el objeto de detener o retardar las reacciones bioquímicas que se llevan a cabo en las muestras hasta el momento de efectuar su análisis; entre los preservadores químicos más utilizados están: el ácido clorhídrico (HCl), el sulfúrico (H2SO4), nítrico (HNO3) y el tiosulfato de sodio (Na2S2O3).
        p Sobre las muestras con preservantes químicos, tenga presente:
      .col-lg-6
        figure
          img(src='@/assets/curso/tema2/img13.png', style="width: 550px").m-auto
    .row.mb-5
      .col-12.bg-c7.p-4
        ul.lista-ul--color.lista-ul.mb-0
          li.mb-3
            i.fas.fa-check
            | #[b Para las muestras de suelo es raro que se usen preservantes casi no se usa]
          li.mb-3
            i.fas.fa-check
            | #[b Es esencial que los preservantes utilizados no alteren la muestra para los ensayos requeridos]
          li.mb-3
            i.fas.fa-check
            | #[b Se recomienda revisar la literatura y norma referente al uso de algunos compuestos químicos que podrían generar reacciones como por ejemplo el uso de Hidróxido de sodio (NaOH) ya que puede generar calentamiento local]
          li.mb-0
            i.fas.fa-check
            | #[b Para algunas determinaciones, en especial las de elementos traza, es esencial efectuar un ensayo en blanco]
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Reactivos
    p En este apartado se enlistan algunos de los reactivos que se usan para preservar las muestras, sin embargo, es importante que cada una de esas sustancias también sean rotuladas con la vida media (fecha de caducidad), la cual no debe ser excedida, y se debe marcar la muestra a la cual se le adiciono el preservante.
    p.mb-5 Tales reactivos son:
    .row.justify-content-center.mb-5
      .col-lg-10.bg-c3
        .row
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema2/img14.svg', style="width: 80px").m-auto
          .col.p-4
            p.mb-0 #[b • Sólidos:] Hidróxido de sodio NaOH, Dicromato de potasio K2Cr2O7, tiosulfato de sodio (Na2S2O3) entre otros.
            p.mb-0 #[b • Soluciones:] Solución de acetato de cinc (p =1,7 g/ml) C4H6O4Zn, Ácido clorhídrico (p= 1.16 g/ml) HCL, Ácido sulfúrico (8 mol/l) H2SO4 entre otros. (p.9)
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Fase de entrega de muestras al laboratorio
    p El último paso es la entrega de las muestras al laboratorio, debe tener en cuenta que usualmente los registros de cadena de custodia se mantienen en papel físico, por el tema de firmas, sin embargo, existen maneras de llevar este registro por medio de medios ofimáticos o tecnológicos con firmas virtuales.
    p.mb-5 En esta última fase, se puede realizar la entrega de las muestras al laboratorio o bien procesar el ingreso de las mismas para que las mismas personas que tomaron el muestreo realicen los análisis fisicoquímicos y microbiológicos, sin embargo, en ambos casos se debe garantizar la cadena de custodia realizando las siguientes acciones:
    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Registro
            p Las muestras deben registrarse en cuanto lleguen al laboratorio. El procedimiento de entrada y registro de la muestra es importante para los propósitos de la cadena de custodia. La siguiente información debe requerirse: número de código de la muestra, nombre de la persona que recibe, nombre de los tomadores de la muestra, número del método de muestreo, y localización de almacenamiento.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img14.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Inspección
            p Se debe inspeccionar el etiquetado y rotulado y compararlo con el registro de campo, si es conforme (concuerdan y es acorde a los procedimientos técnicos), el que recibe firmará la recepción incluyendo fecha y hora.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img15.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Registro de observaciones
            p Cuando exista #[strong no conformidad], el que recolectó la muestra deberá anotar en la parte de atrás del registro las observaciones las inconformidades encontradas (Con fecha y hora).
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img16.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Registro de evento
            p Para los dos casos mencionados se debe registrar la llegada en los registros de laboratorio y se guardan las muestras en el cuarto frío, se define si se procesas o no las no conformes, pero una vez se inicie el análisis de laboratorio la cadena de custodia para el cuidado y vigilancia del analista.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img17.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Tiempos pertinentes
            p Es importante tener claro que el tiempo aconsejado como máximo para transporte y entrega a laboratorio es de seis (6) horas, si no se puede cumplir se debe proceder a realizar acciones de preservación para asegurar su entrega.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img18.png', style="width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
