<template>
  <div>
    <div class="flex flex-col justify-between mb-16 lg:pr-10 lg:flex-row lg:pt-28">
      <div>
        <Headline>
          <template #headline>
            <span class="text-4xl lg:text-7xl">L'association valaisanne</span>
          </template>
          <template #content>
            <p class="text-2xl lg:text-base">Les Concerts du Cœur Valaisans</p>
            <p class="text-xl font-newsCycle">fondés le 13 janvier 2017</p>
          </template>
        </Headline>
      </div>

      <div>
        <img src="~/assets/img/illustrations/illustration1.svg" />
      </div>
    </div>
    <Headline class="my-16">
      <template #headline>
        <span class="text-4xl lg:text-7xl"> Comité et direction artistique Valais </span>
      </template>
    </Headline>

    <div class="flex flex-col justify-between lg:flex-row">
      <div class="flex-col mb-16 lg:mb-0 lg:flex-row">
        <div class="mb-16">
          <h3 class="text-2xl font-playFair">Direction artistique</h3>
          <h5 class="ml-8 text-xl font-newsCycle lg:ml-0">Laure Barras, soprano</h5>
          <p class="ml-8 text-lg text-red-500 lg:ml-0">Contacter par email</p>
        </div>

        <div>
          <h3 class="text-2xl font-playFair">Statuts de l’accociation</h3>
          <br class="hidden lg:block" />
          <p class="text-lg text-red-500">> Document officiel des statuts (PDF)</p>
        </div>
      </div>

      <div>
        <div class="lg:mb-16">
          <h3 class="text-2xl font-playFair">Comité</h3>
        </div>
        <div class="mb-8 ml-8 lg:mb-16 lg:ml-0 font-newsCycle">
          <h3 class="text-lg font-bold lg:text-2xl">Président</h3>
          <h5 class="text-lg lg:text-xl">Michel Buro (consultant);</h5>
        </div>

        <div class="mb-8 ml-8 lg:mb-16 lg:ml-0 font-newsCycle">
          <h3 class="text-lg font-bold lg:text-2xl">vice-président</h3>
          <h5 class="text-lg lg:text-xl">René-Pierre Antille (administrateur immobilier ainsi que de la Fondation du Château Mercier);</h5>
        </div>

        <div class="mb-8 ml-8 lg:mb-16 lg:ml-0 font-newsCycle">
          <h3 class="text-lg font-bold lg:text-2xl">secrétaire</h3>
          <h5 class="text-lg lg:text-xl">Andrée Lemaitre (juriste);</h5>
        </div>

        <div class="mb-8 ml-8 lg:mb-16 lg:ml-0 font-newsCycle">
          <h3 class="text-lg font-bold lg:text-2xl">trésorière</h3>
          <h5 class="text-lg lg:text-xl">Claudia Roque (comptable);</h5>
        </div>

        <div class="mb-8 ml-8 lg:mb-16 lg:ml-0 font-newsCycle">
          <h3 class="text-lg font-bold lg:text-2xl">membre musicien</h3>
          <h5 class="text-lg lg:text-xl">Jean-Luc Follonier (chanteur, chef du département de chant au conservatoire de Sion et directeur d'Ouverture Opéra)</h5>
        </div>

        <div class="mb-8 ml-8 lg:mb-16 lg:ml-0 font-newsCycle">
          <h3 class="text-lg font-bold lg:text-2xl">membre musicienne</h3>
          <h5 class="text-lg lg:text-xl">Patricia Neels (violoncelliste)</h5>
        </div>
      </div>
    </div>

    <Headline>
      <template #headline>
        <span class="text-4xl lg:text-7xl">Comment soutenir le Valais?</span>
      </template>
    </Headline>

    <DonationBlock class="mb-16" :circle="false">
      <template #title>Devenez bénévole</template>
      <template #details>
        Nous avons besoin de votre soutien pour les tâches suivantes:
        <br />— alksdfjal <br />— alksdfjal <br /><br />Annoncez-vous à benevoles-vs@lesconcertsducoeur.ch
      </template>
    </DonationBlock>

    <DonationBlock class="mb-16">
      <template #title>Faites un don</template>
      <template #details>
        No de compte : 103.079.98.07<br />
        IBAN : CH82 0076 5001 0307 9980 7<br />
        SWIFT / BIC : BCVSCH2LXXX<br />
        CCP : 19-81-6<br />
        Clearing : 765
      </template>
    </DonationBlock>

    <DonationBlock class="mb-10 lg:mb-56" :circle="false">
      <template #title>Devenez membre</template>
      <template #details>
        > Bulletin d'adhésion pour les membres<br />
        > Document officiel des statuts de l’association
      </template>
    </DonationBlock>

    <Headline class="mb-28">
      <template #headline>Nos partenaires et soutiens</template>
    </Headline>

    <Partner class="mb-32">
      <template #title> En partenariat avec </template>
      <template #image>
        <img src="~/assets/img/partners/LMN.svg" />
      </template>
    </Partner>

    <Sponsors :sponsors="sponsors">
      <template #title> Soutiens </template>
    </Sponsors>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import DonationBlock from '@/components/typography/DonationBlock.vue'
import Partner from '@/components/pages/Partner.vue'
import Sponsors from '@/components/pages/Sponsors.vue'

export default {
  components: {
    Headline,
    DonationBlock,
    Partner,
    Sponsors,
  },
  data() {
    return {
      sponsors: [
        { img: require('~/assets/img/partners/BS.svg'), link: 'https://google.com' },
        { img: require('~/assets/img/partners/Hemu.svg'), link: 'https://google.com' },
        { img: require('~/assets/img/partners/LR.svg'), link: 'https://google.com' },
        { img: require('~/assets/img/partners/M.svg'), link: 'https://google.com' },
      ],
    }
  },
  fetch() {
    window.console.log(this.$route.params.canton)
  },
}
</script>
