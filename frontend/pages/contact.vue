<template>
  <div>
    <Headline>
      <template #headline> Contact </template>
      <template #content>
        Si nos actions vous intéressent, si vous désirez organiser un concert dans votre établissement ou dans l'EMS de l’un de de vos proches, n’hésitez pas à nous contacter.
      </template>
    </Headline>

    <spacing />

    <h2 class="text-3xl font-playFair">Contact général</h2>
    <p class="font-newsCycle text-xl">contact@lesconcertsducoeur.ch</p>

    <spacing />
    <accordion :items="items" class="hidden lg:block"> </accordion>

    <div v-for="(item, i) in items" :key="i + item.title" class="lg:hidden">
      <div>
        <h3 class="mb-4 text-3xl font-playFair">{{ item.title }}</h3>
      </div>
      <div v-html="item.text"></div>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import Accordion from '@/components/pages/Accordion.vue'
import Spacing from '@/components/typography/Spacing.vue'

export default {
  components: {
    Headline,
    Accordion,
    Spacing,
  },
  data() {
    return {
      items: [
        {
          noImage: true,
          title: `Contact Valais`,
          text: `
          <div class="mb-8 lg:mb-12">
          <div class="text-xl text-vs">
            <span class="font-bold">Les Concerts du Coeur</span><br />
            Les Rocailles, Rue des Biolirs 6,<br />
            3963 Crans-Montana<br />
            <a href="mailto:valais@lesconcertsducoeur.ch">valais@lesconcertsducoeur.ch</a>
          </div>
        </div>
        <spacing />

        <div class="mb-8 lg:mb-12">
          <h3 class="text-2xl lg:text-3xl font-playFair mb-4">Direction artistique et organisation des concerts Bas-Valais et Valais Centrale</h3>
          <div class="text-xl text-vs">
            <span class="font-bold">Laure Barras</span><br />
            <a href="mailto:laure.barras@lesconcertsducoeur.ch">laure.barras@lesconcertsducoeur.ch</a>
          </div>
        </div>

        <div class="mb-8 lg:mb-12">
          <h3 class="text-2xl lg:text-3xl font-playFair mb-4">Organisation concerts Haut-Valais</h3>
          <div class="text-xl text-vs">
            <span class="font-bold">Franziska Heinzen</span><br />
            <a href="mailto:franziska.heinzen@lesconcertsducoeur.ch">franziska.heinzen@lesconcertsducoeur.ch</a>
          </div>
        </div>

        <div>
          <h3 class="text-2xl lg:text-3xl font-playFair mb-4">Secrétariat</h3>
          <div class="text-xl text-vs">
            <span class="font-bold">Danielle Waser-Massy</span><br />
            <a href="mailto:secretariat-vs@lesconcertsducoeur.ch">secretariat-vs@lesconcertsducoeur.ch</a>
          </div>
        </div>`,
        },
        {
          noImage: true,
          title: `Contact Vaud`,
          text: `
          <div class="mb-8 lg:mb-12">
          <div class="text-xl text-vd">
            <span class="font-bold">Les Concerts du Cœur Vaudois</span><br />
            Route du village 59<br />
            1509 Vucherens<br />
            <a href="mailto:vaud@lesconcertsducoeur.ch">vaud@lesconcertsducoeur.ch</a>
          </div>
        </div>
        <spacing />

        <div>
          <h3 class="text-2xl lg:text-3xl font-playFair mb-4">Direction artistique et organisation des concerts</h3>
          <div class="text-xl text-vd">
            <span class="font-bold">Mary Rose</span><br />
            <a href="mailto:mary.rose@lesconcertsducoeur.ch">mary.rose@lesconcertsducoeur.ch</a>
          </div>
        </div>
        `,
        },
        {
          noImage: true,
          title: `Contact Genève`,
          text: `
          <div class="mb-8 lg:mb-12">
          <div class="text-xl text-ge">
            <span class="font-bold">Les Concerts du Cœur Genevois</span><br />
            C/O Etude Zarb & Wood<br />
            Rue du Conseil-General 11<br />
            1205 Genève<br />
            <a href="mailto:geneve@lesconcertsducoeur.ch">geneve@lesconcertsducoeur.ch</a>
          </div>
        </div>
        <spacing />

        <div>
          <h3 class="text-2xl lg:text-3xl font-playFair mb-4">Direction artistique et organisations des concerts</h3>
          <div class="mb-2 text-xl text-ge">
            <span class="font-bold">Laure Zaugg</span><br />
            <a href="mailto:laure.zaugg@lesconcertsducoeur.ch">laure.zaugg@lesconcertsducoeur.ch</a>
          </div>
          <div class="text-xl text-ge">
            <span class="font-bold">Sylvain Leutwyler</span><br />
            <a href="mailto:sylvain.leutwyler@lesconcertsducoeur.ch">sylvain.leutwyler@lesconcertsducoeur.ch</a>
          </div>
        </div>
        `,
        },
      ],
    }
  },
}
</script>
