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

    <DonationBlock canton="vs" circle>
      <template #title>— à l’association valaisanne</template>
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

    <spacing />

    <DonationBlock canton="vd" circle>
      <template #title>— à l’association vaudoise</template>
      <template #details>
        <p>
          Banque Cantonale Vaudoise <br />
          IBAN : CH13 0076 7000 Z546 0551 3<br />
          SWIFT / BIC : BCVLCH2LXXX<br />
          CCP : 10-725-4<br />
          Clearing : 767
        </p>
      </template>
    </DonationBlock>

    <spacing />

    <DonationBlock class="mb-28" canton="ge" circle>
      <template #title>— à l’association genevoise</template>
      <template #details>
        <p>
          Banque Cantonale Vaudoise <br />
          IBAN : CH13 0076 7000 Z546 0551 3<br />
          SWIFT / BIC : BCVLCH2LXXX<br />
          CCP : 10-725-4<br />
          Clearing : 767
        </p>
      </template>
    </DonationBlock>

    <Headline>
      <template #headline>Devenez membre</template>
    </Headline>

    <div class="mb-8">
      <h2 class="mb-4 text-3xl font-playFair">Valaisan</h2>
      <p class="max-w-2xl text-xl text-vs font-newsCycle">
        <a href="https://api.lesconcertsducoeur.ch/uploads/Cd_C_VS_bulletindadhesion_membres_ordinaires_FR_bc25236636.pdf">&gt; Bulletin d'adhésion pour les membres</a><br />
        <a href="https://api.lesconcertsducoeur.ch/uploads/Cd_C_VS_statuts_760d9d3219.pdf">&gt; Document officiel des statuts de l’association</a>
      </p>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-3xl font-playFair">Vaudois</h2>
      <p class="max-w-2xl text-xl text-vd font-newsCycle">
        <a href="https://api.lesconcertsducoeur.ch/uploads/uploads/Cd_C_VD_bulletindadhesion_membres_ordinaires_320695b34d.pdf">&gt; Bulletin d'adhésion pour les membres</a><br />
        <a href="https://api.lesconcertsducoeur.ch/uploads/Cd_C_VD_statuts_c18257d91d.pdf">&gt; Document officiel des statuts de l’association</a>
      </p>
    </div>

    <h2 class="mb-4 text-3xl font-playFair">Genevois</h2>
    <p class="max-w-2xl text-xl text-ge font-newsCycle">
      <a href="https://api.lesconcertsducoeur.ch/uploads/Cd_C_GE_bulletindadhesion_membres_c_679aaa5faa.pdf">&gt; Bulletin d'adhésion pour les membres</a><br />
      <a href="https://api.lesconcertsducoeur.ch/uploads/Cd_C_GE_Statuts_80c429d56e.pdf">&gt; Document officiel des statuts de l’association</a>
    </p>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import Spacing from '@/components/typography/Spacing.vue'
import DonationBlock from '@/components/typography/DonationBlock.vue'

export default {
  components: {
    Headline,
    DonationBlock,
    Spacing,
  },
}
</script>
