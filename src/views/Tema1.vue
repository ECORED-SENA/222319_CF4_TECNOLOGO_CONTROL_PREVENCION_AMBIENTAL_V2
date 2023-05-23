<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Toma de muestras
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p El objetivo del muestreo es obtener una parte representativa del material bajo estudio (cuerpo de agua, efluente industrial, agua residual, suelos, emisiones, etc.) para la cual se analizarán las variables fisicoquímicas y microbiológicas de interés, para esto se requiere que el estudiante identifique la importancia de elaborar el plan de muestreo y protocolos de muestreo específicos según factor ambiental evaluado.
        .cajon.color-acento-contenido.p-4
          p.mb-0 En algunos casos, el objetivo del muestreo es demostrar que se cumplen las normas especificadas por la legislación ambiental como actividades de prevención y control ambiental y otros casos como medida de corrección y vigilancia cuando se ha ocasionado un impacto ambiental significativo como la contaminación ambiental en un ecosistema.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.bg-c1
          .col-12.px-4.px-lg-2.pt-4.pt-lg-2.pb-4.pb-lg-0
            .row.align-items-center
              .col-12.col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img1.svg', style="width: 80px").m-auto
              .col
                p.mb-0 La búsqueda principal del proceso de muestreo es lograr información relacionada con la concentración de las sustancias contaminantes o constitutivas de los elementos analizados (agua, suelo o aire). Con ello, establecer probables medidas de protección de la salud humana y de los diversos ecosistemas.
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Toma de muestras de agua y suelo: pasos y normativa
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Aunque probablemente no sea para siempre, en la actualidad es altamente probable que las personas disfruten, o hayan disfrutado, de un entorno natural apto, con algún río, lago, mar, aguas cristalinas, con la posibilidad de respirar sin exponer la vida, la salud o la integridad.
          br
          br
          | De otra parte y, tal vez, con menor frecuencia, los seres humanos habitan, ocupan o transitan lugares de aguas terrosas con imposibilidad de ver a través de ellas, y donde los olores son no solo insoportables, sino que generan afectación a la seguridad y al bienestar biológico, por los altos y medios niveles de contaminación.
    p.mb-5 En relación con los pasos y normativa para los procesos de muestreo, tenga presente:
    .row.justify-content-center
      .col-lg-5.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img2.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              h4.text-center Importancia
              p La importancia del muestreo y del transporte y recepción de muestras radica en que la información sobre sustancias que alteran la calidad del medio ha de ser significativa y fiable, de manera que la toma de decisiones sobre el sitio, potencialmente alterado o contaminado, sea adecuada a su particular problemática.
      .col-lg-5
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              h4.text-center La normativa
              p Desde lo relacionado con la normativa, en Colombia, para los procesos de toma de muestras, se adopta como referencia la Norma Técnica Colombiana del ICONTEC: técnicas de muestreo, toma de muestras, preservación y manejo para el componente agua, suelo, aire.
    Separador
    #t_1_1
    .titulo-segundo.color-secundario
      h2 1.1 Conceptos básicos de unidades de medida
    .row
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 Un sistema de unidades especifica las unidades de las cantidades fundamentales de longitud, masa, tiempo y fuerza. El sistema internacional de unidades es la referencia estándar para unidades de medida a nivel mundial; este cuenta con siete unidades bases para las magnitudes fundamentales como se muestra en la siguiente tabla:
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1.] Unidades bases para magnitudes
        .tabla-b.color-acento-contenido.mb-5
          table
            tr.bg-c2
              th.text-center Magnitud
              th.text-center Unidad
              th.text-center Símbolo
            tr
              td.text-center Longitud
              td.text-center Metro
              td.text-center m
            tr
              td.text-center Masa
              td.text-center Kilogramo
              td.text-center kg
            tr
              td.text-center Tiempo
              td.text-center Segundo
              td.text-center s
            tr
              td.text-center Corriente eléctrica
              td.text-center Ampere
              td.text-center A
            tr
              td.text-center Temperatura#[br]termodinámica
              td.text-center Kelvin
              td.text-center K
            tr
              td.text-center Intensidad luminosa
              td.text-center Candela
              td.text-center Cd
            tr
              td.text-center Cantidad de sustancia
              td.text-center Mol
              td.text-center Mol
      .col-lg-6
        p Los prefijos del sistema internacional de unidades, son representados por símbolos que se anteponen a la unidad, y representan un factor por el que debe ser multiplicada la cantidad.  
        p.mb-4 En la siguiente tabla se presentan algunos de los prefijos más usados:
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 2.] Prefijos más usados en campo de estudio de muestras
        .tabla-b.color-acento-contenido.mb-5
          table
            tr.bg-c2
              th.text-center Prefijo
              th.text-center Símbolo
              th.text-center Factor
              th.text-center Equivalente
            tr
              td.text-center Giga
              td.text-center G
              td.text-center 10#[sup 9]
              td.text-center 1 000 000 000
            tr
              td.text-center Mega
              td.text-center M
              td.text-center 10#[sup 6]
              td.text-center 1 000 000
            tr
              td.text-center Kilo
              td.text-center K
              td.text-center 10#[sup 3]
              td.text-center 1 000
            tr
              td.text-center Mili
              td.text-center M
              td.text-center 10#[sup -3]
              td.text-center 0.001
            tr
              td.text-center Micro
              td.text-center µ
              td.text-center 10#[sup -6]
              td.text-center 0.000 001
            tr
              td.text-center Nano
              td.text-center N
              td.text-center 10#[sup -9]
              td.text-center 0.000 000 001
    .row.justify-content-center.mb-5
      .col-lg-8.bg-c1.p-4
        p Los prefijos se emplean para facilitar la expresión de cantidades.
        .row.justify-content-center
          .col-lg-8.bg-c3.p-4
            p #[b Ejemplo 1: 11500m = 11,5*103m = 11,5 km]
            p.mb-0 #[b Ejemplo 2: 0,00528g = 5,28*10-3g = 5,28 mg]
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Uso de otras unidades
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p Existen otras unidades que se usan con bastante frecuencia y que, aun sin hacer parte del Sistema Internacional de Unidades, es posible emplearlas en conjunto. entre estas se encuentran:
        .row
          .col-12.bg-c3.p-4
            .row.justify-content-center
              .col-lg-8
                ul.lista-ul--color.lista-ul.mb-0
                  li 
                    i.fas.fa-check
                    | #[b El minuto (m): 1m = 60s]
                  li 
                    i.fas.fa-check
                    | #[b La hora (h): 1h = 3600s ]
                  li 
                    i.fas.fa-check
                    | #[b El día (d): 1d = 24h = 86400s]
                  li 
                    i.fas.fa-check
                    | #[b El litro (L,l): 1L = 1dm3 = 10-3m3]
                  li 
                    i.fas.fa-check
                    | #[b La tonelada (t): 1t = 103kg]
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 450px").m-auto
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Unidades consistentes
    p.mb-5 El desarrollo de los protocolos y procedimientos en este y en diferentes campos de estudio, involucra el uso de ecuaciones, cuyos elementos y resultados deben ser expresados empleando las unidades correctas. Por lo que, si las unidades en la ecuación no son consistentes, las respuestas serán erróneas.
    .row.mb-5
      .col-lg-12.bg-c4.p-4.p-lg-5
        ol.lista-ol--cuadro.lista-ol.mb-0
          li 
            .lista-ol--cuadro__vineta
              span.txt-c2 1.
            | #[b Despejar de la ecuación el término que se desea]
          li 
            .lista-ol--cuadro__vineta
              span.txt-c2 2.
            | #[b Definir las unidades que se requieren para el resultado]
          li 
            .lista-ol--cuadro__vineta
              span.txt-c2 3.
            | #[b Sustituir en la ecuación los valores con sus respectivas unidades]
          li 
            .lista-ol--cuadro__vineta
              span.txt-c2 4.
            | #[b Cancelar las unidades de los términos que parezcan en el numerador y el denominador]
          li 
            .lista-ol--cuadro__vineta
              span.txt-c2 5.
            | #[b Utilizar los factores de conversión para eliminar las unidades no deseadas, y obtener las que se definieron previamente en el paso dos]
          li.mb-0
            .lista-ol--cuadro__vineta
              span.txt-c2 6.
            | #[b Realizar el cálculo]
    p.mb-5 Amplie su conocimiento sobre las unidades de medida, analizando en detalle el siguiente ejemplo:
    .row.justify-content-center
      .col-10.col-lg.bg-c5.p-4.m-2
        .h4.text-center Situación
        p.mb-4 Para conocer el tiempo que tardará en llenarse un tanque de 1000 L, al usar una manguera por la que fluye un caudal de 0.4L/s.
        figure
          img(src='@/assets/curso/tema1/img6.svg', style="width: 80px").m-auto
      .col-10.col-lg.bg-c5.p-4.m-2
        .h4.text-center Ecuación empleada
        p.mb-4 Se usa la ecuación que aquí se muestra, donde Q es caudal, v es volumen y t es tiempo.
        figure
          img(src='@/assets/curso/tema1/img7.svg', style="width: 180px").m-auto
      .col-10.col-lg.bg-c5.p-4.m-2
        .h4.text-center Despeje de tiempo
        p.mb-4 Enseguida se deberá despejar tiempo en la ecuación que aquí se muestra.
        figure
          img(src='@/assets/curso/tema1/img8.svg', style="width: 180px").m-auto
      .col-10.col-lg.bg-c5.p-4.m-2
        .h4.text-center Unidades de resultado
        p.mb-0 Se proponen las unidades del resultado; para este caso pueden ser minutos, ya que el ejercicio no especifica las unidades finales. 
        p.mb-4 Se sustituye t en la ecuación.
        figure
          img(src='@/assets/curso/tema1/img9.svg', style="width: 280px").m-auto
    .row.justify-content-center
      .col-10.col-lg.bg-c5.p-4.m-2
        .h4.text-center Simplificación
        p.mb-4 Simplificando la fracción se obtiene...
        figure
          img(src='@/assets/curso/tema1/img10.svg', style="width: 240px").m-auto
      .col-10.col-lg.bg-c5.p-4.m-2
        .h4.text-center Cancelación de unidades
        p.mb-4 Se cancelan las unidades y aplicamos los factores de conversión.
        figure
          img(src='@/assets/curso/tema1/img11.svg', style="width: 180px").m-auto
      .col-10.col-lg.bg-c5.p-4.m-2
        .h4.text-center Factores de conversión
        p.mb-4 Se aplican los factores de conversión (y cancelación de unidades).
        figure
          img(src='@/assets/curso/tema1/img12.svg', style="width: 240px").m-auto
      .col-10.col-lg.bg-c5.p-4.m-2
        .h4.text-center Resultado
        p.mb-4 Se realiza el cálculo para obtener el resultado.
        figure
          img(src='@/assets/curso/tema1/img13.svg', style="width: 280px").m-auto
    Separador
    #t_1_2
    .titulo-segundo.color-secundario
      h2 1.2 Características básicas de rotulado y envasado
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p La información sobre las operaciones de muestreo es una parte fundamental para asegurar la calidad del programa de muestreo y base fundamental en la cadena de custodia de las muestras, ya que esto genera confianza en los resultados de los análisis aplicados a las muestras. Por tal razón la información consignada en los rótulos de los recipientes y en los registros de toma de muestras debe ser legible, veraz y trazable. 
        p Los rótulos de las muestras pueden:
        .row
          .col-12.bg-c6.p-4
            ul.lista-ul--color.lista-ul.mb-0
              li 
                i.fas.fa-check
                | #[b Ser adhesivos:] Tener forma de etiquetas adhesivas, de marca (rótulo) o ambas.
              li 
                i.fas.fa-check
                | #[b Ser removibles:] Ser removibles para hacer parte del proceso de registros posteriores.
              li 
                i.fas.fa-check
                | #[b Ser desvirtuados:] Enfrentarse a la posibilidad de remoción inapropiada o pérdida.
              li 
                i.fas.fa-check
                | #[b Ser económicos y prácticos:] Estar hechos, normalmente, en papel a prueba de agua con tinta indeleble y son pegados al frasco o recipiente de muestra.
              li 
                i.fas.fa-check
                | #[b Usarse funcionalmente:] Estar escritos directamente en el recipiente con tinta indeleble, sin embargo, no es lo más aconsejado.
              li 
                i.fas.fa-check
                | #[b Usarse con oportunidad:] Deben ser diligenciados justo antes o inmediatamente después de la toma de muestras.
              li 
                i.fas.fa-check
                | #[b Ajustarse al recipiente:] Deben fijarse en el recipiente de tal forma que se asegure que no se borrará o perderá la información.
              li 
                i.fas.fa-check
                | #[b Ofrecer claridad:] Deben ser totalmente legibles (no realizar tachones).
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img3.png', style="width: 340px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.bg-c1
          .col-12.px-4.px-lg-2.pt-4.pt-lg-2.pb-4.pb-lg-0
            .row.align-items-center
              .col-12.col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img1.svg', style="width: 80px").m-auto
              .col
                p.mb-0 La información mínima que debe contener un rótulo es: código del proyecto, consideraciones de seguridad y código del cronograma, nombre de identificación de la muestra, identificación de la ubicación del muestreo, punto de muestreo, intervalo de tiempo (Fecha y hora), tipo de muestreo, empresa o persona que realiza la toma, parámetros medidos in situ.
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.bg-c1
          .col-12.px-4.px-lg-2.pt-4.pt-lg-2.pb-4.pb-lg-0
            .row.align-items-center
              .col-12.col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img1.svg', style="width: 80px").m-auto
              .col
                p.mb-0 Para muestras microbiológicas se debe complementar la información con la preservación realizada (se debe consignar en el momento del alistamiento de los recipientes en el laboratorio, ya que la adición del preservante se hace antes del proceso de esterilización de los frascos).
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Envasado del muestreo
    p.mb-5 Según los análisis que vayan a realizarse se definirá el tipo de envase a utilizar. El mismo estará en función de la cantidad de muestra a tomar y de la necesidad de dejar (en análisis microbiológicos) o no (en la mayoría de los análisis) una cámara de aire o un espacio para mezclas o para el agregado de algún reactivo que permita la conservación de la muestra. Este aspecto debe ser tenido en cuenta tanto al planificar el muestreo como al realizar la toma de la muestra.
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Envases para muestreo de agua
    p.mb-5 Las muestras de agua pueden ser tomadas para análisis fisicoquímico o también para análisis microbiológico. En cada caso, hay unos criterios de envasado que deben seguirse:
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 3.] Envases para muestreo de agua
        .tabla-b.color-acento-contenido.mb-5
          table
            tr.bg-c2
              th.text-center Para análisis fisicoquímico
              th.text-center Para análisis microbiológico
            tr
              td #[b 1.] Se utilizarán envases de plástico o vidrio, con buen cierre, nuevos. Si se pensara en reutilizar un envase, deben desestimarse envases de gaseosas u otras bebidas, o que hayan contenido agua contaminada, soluciones concentradas, etc., únicamente podrían reutilizarse envases de agua mineral.
              td #[b A.] Se utilizarán envases con capacidad de 250-300ml, de plástico o vidrio, esterilizados, con tapa hermética y en lo posible de boca ancha (frascos).
            tr
              td
                p #[b 2.] En ambos casos debe asegurarse que el envase se encuentre LIMPIO, pero debe prestarse especial atención a no lavarlo con detergentes, hipoclorito de sodio (lavandina) u otros reactivos: el envase sólo puede ser enjuagado con agua.
                p.mb-0 De todas maneras, se trate de un envase nuevo o reutilizado, previo a la toma de la muestra, deberá enjuagarse por lo menos tres veces con el agua a muestrear. 
              td #[b B.] También pueden utilizarse bolsas especiales de polietileno estériles (fabricadas a tal fin), considerando que este tipo de envase es muy cómodo para la recolección y cerrado.
            tr
              td #[b 3.] La cantidad de muestra necesaria para un análisis físico-químico es de aproximadamente 1000ml. Si fuera necesario muestrear para algún análisis que requiriera del agregado de un reactivo específico para la conservación de la muestra, deberá preverse la toma en envases adicionales de menor capacidad. 
              td #[b C.] Es muy importante tener presente al seleccionar los envases, que este tipo de muestras debe mantenerse refrigerada hasta su llegada al laboratorio y procesamiento.
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Envases para muestreo de suelo
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p Una vez son tomadas las muestras de suelo, éstas son rotuladas y almacenadas en recipientes plásticos y de vidrio. Para toma de muestras de suelo no contaminadas se pueden usar recipientes de polietileno (como cubetas, botellas de boca ancha, talegas fuertes) porque son inertes baratos y cómodos.
        .row
          .col-12.bg-c7.p-4.p-lg-5
            p.mb-0 Para toma de muestras de suelo con sospecha que están contaminados es esencial asegurarse de que el material del recipiente de la muestra sea tal que la muestra permanezca siendo representativa. Para este tipo no se recomienda recipientes de plástico en caso de que exista contaminación orgánica como pesticidas, o talegas de polietileno no son adecuadas para suelos contaminados.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img4.png', style="width: 470px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.bg-c1
          .col-12.px-4.px-lg-2.pt-4.pt-lg-2.pb-4.pb-lg-0
            .row.align-items-center
              .col-12.col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img1.svg', style="width: 80px").m-auto
              .col
                p.mb-0 El recipiente se debe sellar en forma tal que no haya perdida de componentes volátiles tales como humedad o solventes. Los recipientes con muestras se deben llenar y sellar de forma que haya un mínimo espacio con aire.
    p.mb-5 Del mismo modo que con las muestras de agua, las muestras de suelo tendrán un análisis fisicoquímico o microbiológico. En cada caso, hay unos criterios de envasado que deben seguirse:
    .row.align-items-center.mb-5
      .col-lg-5.pe-0
        figure
          img(src='@/assets/curso/tema1/img5.png', style="width: 510px").m-auto
      .col-lg-7.bg-c3.p-4
        p #[b Para análisis físico-químico]
        p.mb-0 Se utilizarán envases de plástico polietileno rígido o flexible (bolsas plásticas) o vidrio, con buen cierre, nuevos de acuerdo al tipo de análisis. debe asegurarse que el envase se encuentre LIMPIO, pero debe prestarse especial atención a no lavarlo con detergentes, hipoclorito de sodio (lavandina) u otros reactivos: el envase sólo puede ser enjuagado con agua.
    .row.align-items-center.mb-5
      .col-lg-5.pe-0
        figure
          img(src='@/assets/curso/tema1/img6.png', style="width: 510px").m-auto
      .col-lg-7.bg-c3.p-4
        p #[b Para análisis microbiológico]
        p.mb-0 Se utilizarán envases de plástico o vidrio, esterilizados, con tapa hermética y en lo posible de boca ancha (frascos). También pueden utilizarse bolsas especiales de polietileno estériles (fabricadas a tal fin), considerando que este tipo de envase es muy cómodo para la recolección y cerrado. Es muy importante tener presente al seleccionar los envases, que este tipo de muestras debe mantenerse refrigerada hasta su llegada al laboratorio y procesamiento.
    p.mb-5 En la tabla que se muestra a continuación, identifique los recipientes, parámetros y tiempos de conservación apropiados para las muestras de suelo:
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 4.] Parámetros, recipientes y tiempo de conservación de muestras de suelo
        .tabla-b.color-acento-contenido
          table
            tr.bg-c2
              th.text-center Parámetro
              th.text-center Recipiente
              th.text-center Tiempo de Conservación
            tr
              td.text-center PH
              td.text-center P, G
              td.text-center 14 días
            tr
              td.text-center Conductividad
              td.text-center P, G
              td.text-center 14 días
            tr
              td.text-center Relación de adsorción de sodio
              td.text-center P, G
              td.text-center 14 días
    Separador
    #t_1_3
    .titulo-segundo.color-secundario
      h2 1.3 Capacitación del personal y seguridad y salud en el trabajo
    p.mb-5 Uno de los ejes estratégicos para realizar un proceso de toma y tratamiento de muestras acorde a la normatividad es el recurso humano que realizará esa función, el cual debe contar con las habilidades y competencias necesarias; estas mismas son definidas dentro de un instrumento de planeación denominado plan de capacitación.
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Formación y evaluación
    .row.mb-5
      .col-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img15.svg', style="width: 250px").m-auto
      .col-lg-10
        p La capacitación del personal de toma de muestras es tan importante que cuenta con un marco normativo que lo exige, como son: las resoluciones 1073 de 2003 y  1570 de 2004 del MAVDT, en donde se estipula que este personal debe ser formado, evaluado y certificado, como mínimo, en las Normas de Competencia Laboral código 280201034 #[b “Realizar los procedimientos de muestreo del agua de acuerdo con los protocolos de la entidad”]; código 280201001 #[b “Asegurar las condiciones de salud y seguridad en el puesto de trabajo”] y código 280201002 #[b “Generar información para apoyar la toma de decisiones empresariales”].
        p La capacitación del personal de toma de muestras en suelos también requiere capacitación en el tema de muestreo en suelos, aunque no existe, todavía, una norma de competencia laboral que obligue.
    .row.bg-c8.mb-5
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              p Para cualquiera de los dos personales de toma de muestra sea en agua o suelo, es importante que toda organización defina un plan de capacitación, en temas como:
            .col-lg-5
              ul.lista-ul--color.lista-ul.mb-0
                li 
                  i.fas.fa-check
                  | #[b Elementos personales de protección para la toma y procesamiento de muestras]
                li 
                  i.fas.fa-check
                  | #[b Equipos e instrumentos de laboratorio]
                li 
                  i.fas.fa-check
                  | #[b Riesgos y amenazas en campo y en laboratorio]
                li 
                  i.fas.fa-check
                  | #[b Tipos, técnicas y métodos de muestreo]
                li 
                  i.fas.fa-check
                  | #[b Normatividad aplicable, entre otros.]
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.bg-c1
          .col-12.px-4.px-lg-2.pt-4.pt-lg-2.pb-4.pb-lg-0
            .row.align-items-center
              .col-12.col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img1.svg', style="width: 80px").m-auto
              .col
                p.mb-0 Estar capacitados y permanentemente formados, no solamente va a significar una mejora en la calidad y expectativas laborales, sino que se van a minimizar los errores involucrados en el proceso de toma, preservación y transporte de muestras.
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Sobre la seguridad y salud en el trabajo de muestreo
    .row.mb-4
      .col-lg-8.mb-4.mb-lg-0
        p De acuerdo a la Sociedad americana de química (2003), en su publicación seguridad en los laboratorios químicos académicos, prevenir accidentes de cualquier tipo en un laboratorio, es responsabilidad de todos los que usan este espacio de trabajo, por lo cual es necesario tener siempre una actitud cooperativa activa.
        p Los accidentes que se pueden dar cuando se trabaja con insumos químicos bien sea dentro de un laboratorio o en pruebas de campo, suelen ser asociadas a:
        .row
          .col-12.bg-c3.p-4
            .row.justify-content-center
              .col-10.col-lg-8
                ul.lista-ul--color.lista-ul.mb-0
                  li 
                    i.fas.fa-check
                    | #[b Actividades de indiferencia]
                  li 
                    i.fas.fa-check
                    | #[b No utilizar el sentido común]
                  li.mb-0
                    i.fas.fa-check
                    | #[b No seguir instrucciones y cometer errores]
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img16.svg', style="width: 450px").m-auto
    p.mb-4 Cuando se menciona tomar un “Rol activo” se está haciendo referencia a seguir, siempre, recomendaciones como:
    .row.mb-4
      .col-12.bg-c3.p-4
        .row.justify-content-center
          .col-10.col-lg-8
            ul.lista-ul--color.lista-ul.mb-0
              li 
                i.fas.fa-check
                | #[b Seguir las reglas de seguridad]
              li 
                i.fas.fa-check
                | #[b No jugar bromas mientras realiza actividades de toma de muestras o de laboratorio]
              li 
                i.fas.fa-check
                | #[b Familiarizarse con los equipos de seguridad]
              li 
                i.fas.fa-check
                | #[b Siempre indagar antes sobre los peligrosos si va a manejar sustancias químicas]
    p.mb-5 Para realizar la actividad de toma de muestras se debe garantizar que las personas cuenten con unos implementos de seguridad mínimos, como:
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.m-1
          .col-12.p-4.p-lg-5
            h4 Casco
            p.mb-5 En campo es necesario como prevención.
            figure.mb-0
              img(src='@/assets/curso/tema1/img7.png', style="width: 500px").m-auto
        .row.m-1
          .col-12.p-4.p-lg-5
            h4 Cofia
            p.mb-5 Si tiene el cabello largo, manténgalo recogido durante el desarrollo de la práctica. Use la cofia si el líder del proceso lo considera necesario.
            figure.mb-0
              img(src='@/assets/curso/tema1/img8.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Protección de ojos
            p Es obligatorio que todo el personal que permanezca en el laboratorio use permanentemente las gafas de seguridad, aun cuando no estén realizando prácticas. Las personas que utilizan gafas de manera permanente deben disponer de unas gafas de seguridad suplementarias, No utilice lentes de contacto dentro del laboratorio, ya que su uso facilita la acumulación de sustancias tóxicas en los ojos. Los lentes blandos absorben los vapores de sustancias tóxicas, ocasionando la irritación, además de interferir con los procedimientos de lavado de emergencia.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema1/img9.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Mascarilla o Tapabocas
            p Cuando la práctica de laboratorio implique la manipulación de compuestos volátiles, tóxicos, nocivos y/o irritantes, es indispensable emplear equipos de protección respiratoria, adaptados y homologados para la sustancia en cuestión. También deben utilizarse en caso de fugas y derrames de las sustancias anteriores, dada la gran concentración ambiental que resulta de los mismos.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema1/img10.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Instrumental de campo o vestimenta (Guardapolvo blanco)
            p Primero se debe aclarar que la ropa utilizada en laboratorio o en campo, debe proteger tanto de salpicaduras como de derrames, preferiblemente un guardapolvo blanco, si es para uno de cuencas de agua contaminadas este debe ser impermeable.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema1/img11.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Bata de laboratorio
            p Si se usa la bata las características más aconsejables son: Material: algodón, dril o gabardina, Color: blanco, Manga: larga con puño resortado, Largo (extensión): mínimo hasta el muslo (3/4), Tipo de cierre: de abotonar a presión.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema1/img12.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Zapatos
            p En el caso de los laboratorios se debe usar zapatos totalmente cerrados y que no sean de cuero o cuero sintético, no se podrá usar sandalias o cualquier zapato que deje piel al descubierto ni con tacones.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema1/img13.png', style="width: 500px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Guantes
            p De nitrilo, de neopreno, gruesos y delgados. Cualquier manipulación de sustancias corrosivas, irritantes, de elevada toxicidad o de elevado poder de penetración a través de la piel, debe ser llevada a cabo empleando guantes adecuados y limpios. Finalizada la práctica, lave los guantes con abundante agua y jabón. Haga lo propio con sus manos.
          .col-lg-6
            figure.mb-0
              img(src='@/assets/curso/tema1/img14.png', style="width: 500px").m-auto
    .row.mb-4
      .col-auto.txt-c1.px-4.py-3
        h4.text-white.mb-0 Peligros químicos
    .row
      .col-lg-7.mb-4.mb-lg-0
        p Las sustancias químicas pueden causar daño si no son manipuladas de forma adecuada y según protocolos, lo más importante por resaltar es que estas sustancias tienen diferentes características (tóxicas, inflamables, corrosivas y reactivas) y debe reconocerlas y saber cómo reaccionar en caso de accidentes.
        .row.justify-content-center
          .col-12
            .row.bg-c1
              .col-12.px-4.px-lg-4.pt-4.pt-lg-2.pb-4.pb-lg-0
                .row.align-items-center
                  .col-12.col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img1.svg', style="width: 80px").m-auto
                  .col
                    p.mb-0 Existen sustancias que cuentan con más de un peligro, por lo cual se considera que el grado de peligrosidad de las sustancias químicas puede variar, por ello siempre trabajar de forma segura es la manera correcta de desarrollar actividades con estos implementos.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img15.png', style="width: 450px").m-auto
    Separador
    #t_1_4
    .titulo-segundo.color-secundario
      h2 1.4 Plan de muestreo y técnicas de muestreo
    .row.align-items-end.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p El plan de muestreo es un instrumento de planeación en el cual se deja todo consolidado sobre el muestreo a realizar. En general se recomienda que el plan de muestreo especifique como mínimo los siguientes ítems:
        .row
          .col-12.bg-c7.p-4
            ul.lista-ul--color.lista-ul.mb-0
              li 
                i.fas.fa-check
                | #[b El objetivo]
              li 
                i.fas.fa-check
                | #[b El sitio de toma de muestra]
              li 
                i.fas.fa-check
                | #[b El método y técnica a usar]
              li 
                i.fas.fa-check
                | #[b Los parámetros a medir]
              li 
                i.fas.fa-check
                | #[b Los instrumentos y equipos requeridos]
              li 
                i.fas.fa-check
                | #[b El personal y las competencias que debe manejar]
              li 
                i.fas.fa-check
                | #[b Los elementos de seguridad y salud en el trabajo]
              li.mb-0
                i.fas.fa-check
                | #[b Los formatos requeridos para el registro de información]
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img16.png', style="width: 500px").m-auto
    p Antes de iniciar el muestreo, es elemental tener claramente definido la forma como serán tomadas las muestras para poder realizar un trabajo de campo. Dentro de los tipos de muestras se pueden encontrar: muestras sencillas, compuestas, periódicas, continuas y de serie. 
    p.mb-5 A continuación, profundice en las generalidades y particularidades de los tipos de muestras:
    .row.mb-5
      .col-12.bg-c9.p-4.p-lg-5
        p.mb-4 #[b Plan de muestreo, tipos de muestras.]
        LineaTiempoE.color-acento-contenido
          .row(titulo="Muestras simples" subtitulo="")
            .col-12
              p.mb-0 Este tipo de muestra se toma en un momento y lugar determinado. Es aplicable en los casos que se sabe, la composición del agua no varía significativamente en el tiempo o lugar, como lo son usualmente para caracterización fisicoquímica de aguas naturales. Este tipo de muestra simple se usa en el muestreo de grifos.
          .row(titulo="Muestras compuestas" subtitulo="")
            .col-12
              p.mb-0 Aquellas que son usadas, en su mayoría, para vertimientos domésticos e industriales. Debido a la variación horaria de su caudal son muy utilizadas en el monitoreo de ríos, vertimientos o procesos industriales en línea. Su toma se realiza en un mismo punto en intervalos de tiempo previamente definidos y el volumen de cada muestra parcial puede ser constante o variar en función del caudal.
          .row(titulo="Cuando hay variación del caudal" subtitulo="")
            .col-12
              p.mb-4 Para los casos en que se requiere variar el volumen en cada toma, se recolectan muestras parciales (alícuotas). Ejemplo: cada 2 o 3 horas, cuyo volumen se obtiene según la siguiente relación:
              .row.justify-content-center
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img18.svg', style="width: 270px").m-auto
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/img19.svg', style="width: 470px").m-auto
          .row(titulo="Estudios de calidad ambiental marina" subtitulo="")
            .col-12
              p.mb-0 En estos casos es necesario el monitoreo de afluentes con el fin de conocer las descargas y el volumen de contaminantes que llegan al mar, por tal motivo es necesario realizar muestreos compuestos para lograr la correcta caracterización de dichos afluentes (que pueden ser ríos o descargas de aguas residuales). Es importante resaltar que este tipo de muestra genera resultados de concentraciones promedio.
          .row(titulo="Muestras integradas" subtitulo="")
            .col-12
              p.mb-0 Este tipo de muestra consiste en la recolección de muestras simples en diferentes puntos de manera simultánea que posteriormente son mezcladas. En caso de presentarse variaciones de caudal en los puntos de muestreo, se debe tener en cuenta para que el volumen aportado sea proporcional al caudal medido durante la toma de la muestra.
          .row(titulo="Muestras en serie" subtitulo="")
            .col-12
              p.mb-0 Dentro de las muestras en serie se distinguen dos tipos, de perfil profundo y de área: las primeras son muy aplicables en oceanografía cuando el objetivo es conocer la variación vertical de un parámetro, por ejemplo, definir la posición de la capa termohalina, de la picnoclina, etc. Las segundas, son una serie de muestras de agua tomadas a una profundidad en particular, de una masa de agua en diversas locaciones; muy utilizadas para definir distribuciones espaciales por capas.
    p El proceso de toma, preservación y transporte de muestras, supone el establecimiento previo de las técnicas de muestreo que se deberán aplicar para obtener resultados satisfactorios. 
    p.mb-5 Dentro de las principales técnicas de muestreo, se pueden mencionar y explicar las siguientes:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--verde")
      .row(titulo="Muestreo manual")
        .col-12
          p.mb-0 El muestreo manual se realiza cuando se tienen sitios de fácil acceso o aquellos que por medio de ciertas adaptaciones puedan facilitar la toma de muestras. La ventaja de este tipo de muestreo es permitir al encargado de tomar la   muestra, observar los cambios en las características del agua en cuanto a sustancias flotantes, color, olor, aumento o disminución de caudales, entre otros; sin embargo este sólo es aceptable para los criterios de control y vigilancia, si la muestra es representativa de la calidad del agua del sitio de muestreo particular, motivo por el cual se requiere establecer que la información obtenida de estas muestras puntuales tomadas en un sitio y tiempo dados es única para ese lugar y tiempo seleccionado.
      .row(titulo="Muestreo automático")
        .col-12
          p.mb-0 Para aquellos lugares de difícil acceso se recomiendan los muestreadores automáticos, ya que cuentan con más precisión en la toma de la muestra, aun cuando su mayor desventaja sea el montaje y calibración del equipo, pues su aplicación implica la instalación de equipos (antenas, paneles solares, etc.) y herramientas (licencias de trasmisión, software) que elevan el costo, convirtiéndose en un factor limitante para la implementación de este tipo de muestreo. Entre los equipos automáticos más representativos para determinar la calidad del agua destinada para consumo humano, se destacan los: muestreadores secuenciales automáticos para proveer muestras compuestas en un período extenso de tiempo, Sistemas de monitoreo en línea (sistema SAMOS para detección de pesticidas, y nuevos sensores), Sistemas biológicos de alarma temprana que alerten si hay contaminación en la muestra y muestreadores pasivos, así llamados porque simulan captación biológica.
      .row(titulo="Muestreo mixto")
        .col-12
          p.mb-0 Se pueden poner en marcha programas de muestreo que involucren la utilización de los dos tipos de muestreo mencionados anteriormente (muestreo mixto), convirtiendo el monitoreo en un sistema integrado que permite la verificación manual de los resultados obtenidos de forma automática. Dicha verificación es realizada aleatoriamente, de tal manera que se pueda realizar la calibración, ajuste y mantenimiento de los equipos automáticos. Las técnicas del muestreo de agua para análisis microbiológicos básicamente incluyen procedimientos para prevenir su contaminación durante el llenado de los recipientes por microorganismos presentes en el exterior de los grifos, accesorios, en el ambiente o en el operario. Las técnicas de llenado de los recipientes se pueden dividir en dos: muestreo en el grifo o muestreo por inmersión.
      .row(titulo="Muestreo por inmersión")
        .col-12
          p.mb-0 El muestreo por inmersión se realiza cuando se requiere tomar muestras de profundidad por ejemplo en el caso de muestreos de tanques de almacenamiento que no cuenten con dispositivos de muestras o en el agua de manantiales o pozos, piscinas. En estos casos la muestra se debe tomar con un recipiente estéril en su interior y exterior. Tan pronto se va a tomar la muestra se debe retirar la envoltura protectora del recipiente y con la ayuda de una vara de muestreo se lleva a cabo la toma de muestra. En el caso de toma de las piscinas, la muestra se debe tomar de -10 a -20 cm de profundidad y el recipiente se introduce horizontalmente para evitar la pérdida de tiosulfato. Para balnearios se hace de manera similar haciendo la toma a -20 a -30. En el caso de pozos o manantiales sin dispositivos de muestreo, la toma se debe hacer con bombas o dispositivos sumergibles estériles.
      .row(titulo="Muestreo tomado al azar")
        .col-12
          p.mb-0 Se basa en una muestra que se toma totalmente al azar, por medio de un recipiente abierto, el cual se coloca en un solo punto en la superficie (arroyo, embalse, rio, etc.); estas muestras por lo general se toman antes de hacer otro trabajo en el lugar para no afectar la corriente y la posterior recolección; para este ejercicio se utilizan muestreadores colectores que suelen pararse corriente abajo de la botella durante la operación de llenado.
  
</template>

<script>
export default {
  name: 'Tema1',
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
