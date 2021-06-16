<template>
  <div class="mt-24 px-9">
    <nuxt-link class="absolute flex items-center justify-center w-20 h-20 leading-5 text-center text-white transform bg-gray-700 rounded-full right-10 -rotate-25 top-20 font-bodoni" to="support">
      Nous soutenir!
    </nuxt-link>
    <Headline>
      <template #headline> Notre vision / but /mission </template>
      <template #content>
        <p class="my-8">
          Les Concerts du Cœur sont convaincus de la force de la musique afin de rompre l’isolement en partageant de l’émotion, par le biais d’ateliers musicaux, de concerts de qualité et d’une
          interaction avec les artistes.
        </p>
        <p>Toutes les régions des Concerts du Coeur poursuivent les mêmes buts.</p>
      </template>
    </Headline>

    <div class="flex mt-12 mb-24">
      <Sublink width="auto">
        <template #text>> En savoir plus sur l’organisation valaisanne</template>
      </Sublink>

      <Sublink color="green" width="auto">
        <template #text>> En savoir plus sur l’organisation valaisanne</template>
      </Sublink>

      <Sublink color="yellow" width="auto">
        <template #text>> En savoir plus sur l’organisation valaisanne</template>
      </Sublink>
    </div>

    <Headline>
      <template #headline> Nos buts </template>
    </Headline>

    <DetailedImages :items="items" />

    <Headline>
      <template #headline>Nos objectifs</template>
    </Headline>

    <div class="text-2xl font-newsCycle pr-44">
      <p class="my-10">
        Des études récentes ont démontré que les activités musicales avaient des effets similaires aux antidépresseurs 1. Elles peuvent retarder les effets négatifs de la maladie d’Alzheimer et
        prévenir l’isolement social2.
      </p>

      <p class="my-10">
        Dans cette perspective Les Concerts du Coeur propose de faire le lien entre des artistes professionnels ou en formation et les résidents d'EMS, patients des hôpitaux, personnes défavorisées ou
        incarcérées, ainsi que leur famille et le personnel soignant, par le biais de concerts préparés en aval avec les responsables de ces centres. Ainsi nous voulons favoriser tous ensemble des
        moments de complicité et de partage d'émotion.
      </p>

      <p class="my-10">
        Nous avons la conviction que des concerts de qualité réalisés par des artistes professionnels passionnés doivent être accessibles à tous, indépendamment de leur âge, de leur état de santé, de
        leurs moyens financiers ou de leur origine sociale.
      </p>

      <p class="my-10">
        L’activité de l’association touche les domaines de la musique, de la santé, du social ainsi que de la médiation culturelle. Le projet s'étend sur toute l'année dans les EMS, hôpitaux, centres
        pour handicapés, centres pour réfugiés et prisons. Les concerts sont destinés aux résidents des institutions, aux patients, à leurs proches ainsi qu'au personnel.
      </p>

      <p class="my-10">1 CHANDA, Mona Lisa et LEVITIN, Daniel J. (avril 2013), Trends in Cognitive Sciences</p>

      <p class="my-10">2 PLATEL, Hervé (octobre 2015), "Pourquoi la musique est bonne pour le cerveau ?"</p>
    </div>

    <div class="mb-32">
      <h3 class="text-3xl font-playFair">Documentation</h3>
      <ul class="text-2xl">
        <li>— Pourquoi la musique est bonne pour le cerveau – Le Point</li>
        <li>— An Evidence Review of the Impact of Participatory Arts on Older People</li>
      </ul>
    </div>

    <div class="flex justify-between">
      <div class="w-full">
        <Headline class="w-5/6 mb-16">
          <template #headline>Comment nous soutenir</template>
        </Headline>

        <div class="text-2xl pr-52">
          <p>
            Les dons sont la façon la plus simple de nous aider. Les Concerts du Cœur étant une association reconnue d’utilité publique vous pourrez les déduire fiscalement. Vous pouvez également
            devenir membre de l’association et/ou bénévole. Sponsoriser un concert pour un de vos proches est également possible.
          </p>
          <ul class="my-10">
            <li>> faire un don</li>
            <li>> devenir membre de l’une des associations</li>
            <li>> devenir bénévole</li>
          </ul>
        </div>
      </div>

      <div class="w-full">
        <img src="~/assets/img/illustrations/illustration5.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import Sublink from '@/components/typography/Sublink.vue'
import DetailedImages from '@/components/typography/DetailedImages.vue'

export default {
  components: {
    Headline,
    Sublink,
    DetailedImages,
  },
  data() {
    return {
      items: [
        { description: 'de produire et réaliser des concerts de qualité notamment dans les EMS, hôpitaux et prisons', img: `https://placeimg.com/540/317/animals?nocache=${Math.random()}` },
        {
          description:
            'de sélectionner et soutenir de jeunes musiciens en leur donnant l’occasion de mettre leurs talents au service de  concerts à l’intention spécifique de personnes âgées dépendantes, de personnes hospitalisées, incarcérées ou défavorisées',
          img: `https://placeimg.com/540/317/animals?nocache=${Math.random()}`,
        },
        {
          description: 'd’ouvrir de nouveaux horizons à des artistes professionnels et d’ajouter une dimension sociale à leur métier.',
          img: `https://placeimg.com/540/317/animals?nocache=${Math.random()}`,
        },
        {
          description: 'De rassembler des musiciens professionnels ainsi que des personnalités politiques, artistiques et sociales.',
          img: `https://placeimg.com/540/317/animals?nocache=${Math.random()}}`,
        },
      ],
    }
  },
}
</script>
