<template>
  <div>
    <Headline>
      <template #headline>Soutenez-nous</template>
    </Headline>

    <div class="flex my-28">
      <div class="w-full py-4 pr-10">
        <h2 class="text-3xl font-playFair">
          - Parler de nous autour de vous; <br />
          <span>- Devenez membre</span> de l'association; <br />
          <span>- Devenez bénévole</span>; <br />
          <span>- Faites un don</span>. <br /><br />
          Merci !
        </h2>
      </div>
      <div class="w-full">
        <img src="~/assets/img/illustrations/illustration7.svg" />
      </div>
    </div>

    <!-- <Headline>
      <template #headline> Devenez bénévole</template>
    </Headline>

    <div class="flex flex-col my-20">
      <div class="flex my-10">
        <div class="text-3xl transform -translate-y-6 font-playFair">dans le canton du Valais</div>
        <div class="max-w-2xl text-xl text-red-500 ml-28 font-newsCycle">
          Nous avons besoin de votre soutien pour les tâches suivantes: alksdfjal Annoncez-vous à benevoles-vs@lesconcertsducoeur.ch
        </div>
      </div>

      <div class="flex my-10">
        <div class="text-3xl transform -translate-y-6 font-playFair">… sur Vaud</div>
        <div class="max-w-2xl text-xl text-green-500 ml-28 font-newsCycle">
          Nous avons besoin de votre soutien pour les tâches suivantes: alksdfjal Annoncez-vous à benevoles-vd@lesconcertsducoeur.ch
        </div>
      </div>

      <div class="flex my-10">
        <div class="text-3xl transform -translate-y-6 font-playFair">… à Genève</div>
        <div class="max-w-2xl text-xl text-yellow-500 ml-28 font-newsCycle">
          Nous avons besoin de votre soutien pour les tâches suivantes: alksdfjal Annoncez-vous à benevoles-ge@lesconcertsducoeur.ch
        </div>
      </div>
    </div> -->

    <Headline>
      <template #headline>Faites un don</template>
    </Headline>

    <DonationBlock class="mb-28">
      <template #title>- à l’association valaisanne</template>
      <template #details>
        <p>
          No de compte : 103.079.98.07<br />
          IBAN : CH82 0076 5001 0307 9980 7<br />
          SWIFT / BIC : BCVSCH2LXXX<br />
          CCP : 19-81-6<br />
          Clearing : 765
        </p>
      </template>
    </DonationBlock>

    <DonationBlock class="mb-28" color="green">
      <template #title>- à l’association vaudoise</template>
      <template #details>
        <p>
          No de compte : 103.079.98.07<br />
          IBAN : CH82 0076 5001 0307 9980 7<br />
          SWIFT / BIC : BCVSCH2LXXX<br />
          CCP : 19-81-6<br />
          Clearing : 765
        </p>
      </template>
    </DonationBlock>

    <DonationBlock class="mb-28" color="yellow">
      <template #title>- à l’association genevoise</template>
      <template #details>
        <p>
          No de compte : 103.079.98.07<br />
          IBAN : CH82 0076 5001 0307 9980 7<br />
          SWIFT / BIC : BCVSCH2LXXX<br />
          CCP : 19-81-6<br />
          Clearing : 765
        </p>
      </template>
    </DonationBlock>

    <Headline>
      <template #headline>Devenez membre</template>
    </Headline>

    <div class="flex flex-col my-20">
      <div class="flex my-10">
        <div class="text-3xl transform -translate-y-6 font-playFair">Valaisan</div>
        <div class="max-w-2xl text-xl prose text-red-500 ml-28 font-newsCycle">
          > Bulletin d'adhésion pour les membres<br />
          > Document officiel des statuts de l’association
        </div>
      </div>

      <div class="flex my-10">
        <div class="text-3xl transform -translate-y-6 font-playFair">Vaudois</div>
        <div class="max-w-2xl text-xl text-green-500 ml-28 font-newsCycle">
          > Bulletin d'adhésion pour les membres<br />
          > Document officiel des statuts de l’association
        </div>
      </div>

      <div class="flex my-10">
        <div class="text-3xl transform -translate-y-6 font-playFair">Genevois</div>
        <div class="max-w-2xl text-xl text-yellow-500 ml-28 font-newsCycle">
          > Bulletin d'adhésion pour les<br />
          > Document officiel des statuts de l’association
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import DonationBlock from '@/components/typography/DonationBlock.vue'

export default {
  components: {
    Headline,
    DonationBlock,
  },
}
</script>
