<template>
  <div>
    <div class="flex justify-between pr-10 mb-16 pt-28">
      <div>
        <Headline>
          <template #headline>L'association valaisanne</template>
          <template #content>
            <p>Les Concerts du Cœur Valaisans</p>
            <p class="text-xl font-newsCycle">fondés le 13 janvier 2017</p>
          </template>
        </Headline>
      </div>

      <div>
        <img src="~/assets/img/illustrations/illustration1.svg" />
      </div>
    </div>
    <Headline class="my-16">
      <template #headline> Comité et direction artistique Valais </template>
    </Headline>

    <div class="flex justify-between">
      <div>
        <div class="mb-16">
          <h3 class="text-2xl font-playFair">Direction artistique</h3>
          <h5 class="text-xl font-newsCycle">Laure Barras, soprano</h5>
          <p class="text-lg text-red-500">Contacter par email</p>
        </div>

        <div>
          <h3 class="text-2xl font-playFair">Statuts de l’accociation</h3>
          <br />
          <p class="text-lg text-red-500">> Document officiel des statuts (PDF)</p>
        </div>
      </div>

      <div>
        <div class="mb-16">
          <h3 class="text-2xl font-playFair">Comité</h3>
        </div>
        <div class="mb-16 font-newsCycle">
          <h3 class="text-2xl font-bold">Président</h3>
          <h5 class="text-xl">Michel Buro (consultant);</h5>
        </div>

        <div class="mb-16 font-newsCycle">
          <h3 class="text-2xl font-bold">vice-président</h3>
          <h5 class="text-xl">René-Pierre Antille (administrateur immobilier ainsi que de la Fondation du Château Mercier);</h5>
        </div>

        <div class="mb-16 font-newsCycle">
          <h3 class="text-2xl font-bold">secrétaire</h3>
          <h5 class="text-xl">Andrée Lemaitre (juriste);</h5>
        </div>

        <div class="mb-16 font-newsCycle">
          <h3 class="text-2xl font-bold">trésorière</h3>
          <h5 class="text-xl">Claudia Roque (comptable);</h5>
        </div>

        <div class="mb-16 font-newsCycle">
          <h3 class="text-2xl font-bold">membre musicien</h3>
          <h5 class="text-xl">Jean-Luc Follonier (chanteur, chef du département de chant au conservatoire de Sion et directeur d'Ouverture Opéra)</h5>
        </div>

        <div class="mb-16 font-newsCycle">
          <h3 class="text-2xl font-bold">membre musicienne</h3>
          <h5 class="text-xl">Patricia Neels (violoncelliste)</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'

export default {
  components: {
    Headline,
  },
}
</script>
