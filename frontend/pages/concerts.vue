<template>
  <div>
    <Headline>
      <template #headline>Nos concerts</template>
      <template #content
        ><p>
          Nous adaptons constamment nos concerts à la situation sanitaire, aux publics et aux lieux. Nous pouvons chercher avec vous la meilleure solution pour votre institution. N’hésitez pas à nous
          contacter pour en discuter
        </p></template
      >
    </Headline>
    <p class="mb-16 text-xl font-newsCycle">
      Dans les établissements médico-sociaux et les institutions vouées aux personnes en difficulté nous donnons des concerts sous forme traditionnelle. Nous souhaitons que ces lieux de vie se
      transforment en salle de concert pour les résidents, le personnel ainsi que les proches le temps d’un après-midi. Afin de garantir une meilleure organisation et des concerts participatifs, nous
      travaillons en aval avec le personnel des institutions hôtes.
    </p>

    <ImageBlock>
      <template #title>Vous souhaitez organiser un concert?</template>
      <template #content>
        <ul class="my-10 font-newsCycle">
          <li>> organiser un concert en Valais</li>
          <li>> organiser un concert sur Vaud</li>
          <li>> organiser un concert sur Genève</li>
        </ul>
        <p class="font-playFair">Nous sommes à votre écoute.</p>
      </template>

      <template #image>
        <img class="mx-auto" src="https://placeimg.com/540/360/animals" />
      </template>
    </ImageBlock>

    <Spacing />

    <AccordionItem>
      <template #label>Le concert traditionnel</template>
      <template #content>
        Dans les établissements médico-sociaux et les institutions vouées aux personnes en difficulté nous donnons des concerts sous forme traditionnelle. Nous souhaitons que ces lieux de vie se
        transforment en salle de concert pour les résidents, le personnel ainsi que les proches le temps d’un après-midi. Afin de garantir une meilleure organisation et des concerts participatifs,
        nous travaillons en aval avec le personnel des institutions hôtes.
      </template>
      <template #image><img class="mx-auto" src="https://placeimg.com/540/360/animals" /></template>
    </AccordionItem>

    <AccordionItem>
      <template #label>Les interventions dans les chambres</template>
      <template #content>
        Dans les établissements médico-sociaux et les institutions vouées aux personnes en difficulté nous donnons des concerts sous forme traditionnelle. Nous souhaitons que ces lieux de vie se
        transforment en salle de concert pour les résidents, le personnel ainsi que les proches le temps d’un après-midi. Afin de garantir une meilleure organisation et des concerts participatifs,
        nous travaillons en aval avec le personnel des institutions hôtes.
      </template>
      <template #image><img class="mx-auto" src="https://placeimg.com/540/360/animals" /></template>
    </AccordionItem>

    <AccordionItem>
      <template #label>concerts virtuels</template>
      <template #content>
        Dans les établissements médico-sociaux et les institutions vouées aux personnes en difficulté nous donnons des concerts sous forme traditionnelle. Nous souhaitons que ces lieux de vie se
        transforment en salle de concert pour les résidents, le personnel ainsi que les proches le temps d’un après-midi. Afin de garantir une meilleure organisation et des concerts participatifs,
        nous travaillons en aval avec le personnel des institutions hôtes.
      </template>
      <template #image><img class="mx-auto" src="https://placeimg.com/540/360/animals" /></template>
    </AccordionItem>

    <AccordionItem>
      <template #label>concerts en terrasse / balcons /extérieur</template>
      <template #content>
        Dans les établissements médico-sociaux et les institutions vouées aux personnes en difficulté nous donnons des concerts sous forme traditionnelle. Nous souhaitons que ces lieux de vie se
        transforment en salle de concert pour les résidents, le personnel ainsi que les proches le temps d’un après-midi. Afin de garantir une meilleure organisation et des concerts participatifs,
        nous travaillons en aval avec le personnel des institutions hôtes.
      </template>
      <template #image><img class="mx-auto" src="https://placeimg.com/540/360/animals" /></template>
    </AccordionItem>

    <AccordionItem>
      <template #label>rencontre virtuelle avec les artistes</template>
      <template #content>
        Dans les établissements médico-sociaux et les institutions vouées aux personnes en difficulté nous donnons des concerts sous forme traditionnelle. Nous souhaitons que ces lieux de vie se
        transforment en salle de concert pour les résidents, le personnel ainsi que les proches le temps d’un après-midi. Afin de garantir une meilleure organisation et des concerts participatifs,
        nous travaillons en aval avec le personnel des institutions hôtes.
      </template>
      <template #image><img class="mx-auto" src="https://placeimg.com/540/360/animals" /></template>
    </AccordionItem>

    <AccordionItem>
      <template #label>atelier découverte d’instruments</template>
      <template #content>
        Dans les établissements médico-sociaux et les institutions vouées aux personnes en difficulté nous donnons des concerts sous forme traditionnelle. Nous souhaitons que ces lieux de vie se
        transforment en salle de concert pour les résidents, le personnel ainsi que les proches le temps d’un après-midi. Afin de garantir une meilleure organisation et des concerts participatifs,
        nous travaillons en aval avec le personnel des institutions hôtes.
      </template>
      <template #image><img class="mx-auto" src="https://placeimg.com/540/360/animals" /></template>
    </AccordionItem>

    <p class="my-8 text-2xl font-playFair">Dans l’élaboration du répertoire nous répondons aux directives suivantes:</p>

    <div class="text-xl font-newsCycle">
      <ul class="mb-5">
        <li>— faire découvrir un nouveau répertoire afin d’éveiller la curiosité des auditeurs;</li>
        <li>— interpréter des œuvres spécifiques demandées en amont par le public;</li>
        <li>— faire revivre le répertoire musical régional;</li>
        <li>— faire participer le public dans l’interprétation d’un répertoire connu comme des chants régionaux traditionnels.</li>
      </ul>

      <p class="mb-5">Le concert dure entre 45 minutes et une heure.</p>

      <p class="mb-5">
        Il est accompagné de médiation. Les artistes se présentent et parlent des pièces qu’ils vont interpréter. La configuration de la salle est primordiale. Idéalement le lieu où se tient le
        concert se transforme en véritable salle de concert, adaptée pour l’écoute. Généralement, plus le public est groupé, plus il est facile pour les artistes de communiquer.
      </p>

      <p class="mb-5">Une fois le concert terminé, les musiciens restent sur place pour échanger avec le public.</p>
    </div>

    <Spacing />

    <div class="flex flex-col justify-between lg:flex-row">
      <div class="max-w-xl my-5 lg:my-0 lg:mr-20">
        <img src="~/assets/img/illustrations/illustration6.svg" />
      </div>

      <Testimonial class="max-w-xl">
        <template #quote>
          Votre concert a permis au personnel soignant de constater l’effet bénéfique de la musique sur l’ensemble des résidents. Votre performance a apporté du calme, de la sérénité, beaucoup de joie
          et de plaisir.
        </template>

        <template #name>Claude Crettol</template>

        <template #title>Directeur des EMS Beaulieu et Jasmins</template>
      </Testimonial>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import ImageBlock from '@/components/typography/ImageBlock.vue'
import Spacing from '@/components/typography/Spacing.vue'
import Testimonial from '@/components/typography/Testimonial.vue'
import AccordionItem from '@/components/pages/AccordionItem.vue'

export default {
  components: {
    Headline,
    ImageBlock,
    AccordionItem,
    Spacing,
    Testimonial,
  },
}
</script>
