<template>
  <div>
    <Headline>
      <template #headline>{{ $t('soutien').donate.title }} </template>
    </Headline>

    <DonationBlock canton="vs" circle>
      <template #title>{{ $t('soutien').donate.vs }}</template>
      <template #details>
        <p>
          Les Concerts du Cœur <br />
          No de compte{{ $i18n.locale == 'fr' ? ' :' : ':' }} 103.079.98.07
          <br />
          IBAN{{ $i18n.locale == 'fr' ? ' :' : ':' }} CH82 0076 5001 0307 9980 7
          <br />
          SWIFT/BIC{{ $i18n.locale == 'fr' ? ' :' : ':' }} BCVSCH2LXXX <br />
          CCP{{ $i18n.locale == 'fr' ? ' :' : ':' }} 19-81-6 <br />
          Clearing{{ $i18n.locale == 'fr' ? ' :' : ':' }} 765
        </p>
      </template>
    </DonationBlock>

    <spacing />

    <DonationBlock canton="vd" circle>
      <template #title>{{ $t('soutien').donate.vd }}</template>
      <template #details>
        <p>
          Les Concerts du Cœur Vaudois <br />
          1509 Vucherens <br />
          IBAN{{ $i18n.locale == 'fr' ? ' :' : ':' }} CH13 0076 7000 Z546 0551 3
          <br />
          SWIFT/BIC{{ $i18n.locale == 'fr' ? ' :' : ':' }} BCVLCH2LXXX <br />
          Clearing{{ $i18n.locale == 'fr' ? ' :' : ':' }} 767
        </p>
      </template>
    </DonationBlock>

    <spacing />

    <DonationBlock class="mb-28" canton="ge" circle>
      <template #title>{{ $t('soutien').donate.ge }}</template>
      <template #details>
        <p>
          Les Concerts du Cœur Genevois <br />
          1205 Genève <br />
          IBAN{{ $i18n.locale == 'fr' ? ' :' : ':' }} CH83 0078 8000 0508 4197 7
          <br />
          SWIFT/BIC{{ $i18n.locale == 'fr' ? ' :' : ':' }} BCGECHGGXXX <br />
          Clearing{{ $i18n.locale == 'fr' ? ' :' : ':' }} 788 <br />
        </p>
      </template>
    </DonationBlock>
    <!-- <Headline>
      <template #headline>{{ $t('soutien').supportUs.title }}</template>
    </Headline>

    <div class="flex">
      <div class="w-full py-4 pr-10">
        <h2 class="text-3xl font-playFair" v-dompurify-html="$t('soutien').supportUs.text"></h2>
      </div>
      <div class="w-full">
        <img src="~/assets/img/illustrations/illustration7.webp" />
      </div>
    </div> -->

    <spacing />

    <!-- <Headline>
      <template #headline> Devenez bénévole</template>
    </Headline>

    <div class="flex flex-col my-20">
      <div class="flex my-10">
        <div class="text-3xl transform -translate-y-6 font-playFair">dans le canton du Valais</div>
        <div class="max-w-2xl text-xl text-red-500 ml-28">
          Nous avons besoin de votre soutien pour les tâches suivantes: alksdfjal Annoncez-vous à benevoles-vs@lesconcertsducoeur.ch
        </div>
      </div>

      <div class="flex my-10">
        <div class="text-3xl transform -translate-y-6 font-playFair">… sur Vaud</div>
        <div class="max-w-2xl text-xl text-green-500 ml-28">
          Nous avons besoin de votre soutien pour les tâches suivantes: alksdfjal Annoncez-vous à benevoles-vd@lesconcertsducoeur.ch
        </div>
      </div>

      <div class="flex my-10">
        <div class="text-3xl transform -translate-y-6 font-playFair">… à Genève</div>
        <div class="max-w-2xl text-xl text-yellow-500 ml-28">
          Nous avons besoin de votre soutien pour les tâches suivantes: alksdfjal Annoncez-vous à benevoles-ge@lesconcertsducoeur.ch
        </div>
      </div>
    </div> -->

    <Headline id="devenir-membre">
      <template #headline>{{ $t('soutien').member.title }}</template>
    </Headline>

    <div class="mb-8">
      <h2 class="mb-4 text-3xl font-playFair">
        {{ $t('soutien').member.vs.title }}
      </h2>
      <p class="max-w-2xl text-xl text-VS">
        <a
          href="https://api-new.lesconcertsducoeur.ch/uploads/Cd_C_VS_bulletindadhesion_membres_ordinaires_FR_bc25236636.pdf"
          >&gt; {{ $t('soutien').member.vs.subscription }}</a
        ><br />
        <a
          href="https://api-new.lesconcertsducoeur.ch/uploads/Cdc_VS_statuts_2019_signes_4d53a41b7e.pdf"
          >&gt; {{ $t('soutien').member.vs.status }}</a
        >
      </p>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-3xl font-playFair">
        {{ $t('soutien').member.vd.title }}
      </h2>
      <p class="max-w-2xl text-xl text-VD">
        <a
          href="https://api-new.lesconcertsducoeur.ch/uploads/Cd_C_VD_bulletindadhesion_membres_ordinaires_320695b34d.pdf"
          >&gt; {{ $t('soutien').member.vd.subscription }}</a
        ><br />
        <a
          href="https://api-new.lesconcertsducoeur.ch/uploads/Cd_C_VD_statuts_c18257d91d.pdf"
          >&gt; {{ $t('soutien').member.vd.status }}</a
        >
      </p>
    </div>

    <h2 class="mb-4 text-3xl font-playFair">
      {{ $t('soutien').member.ge.title }}
    </h2>
    <p class="max-w-2xl text-xl text-GE">
      <a
        href="https://api-new.lesconcertsducoeur.ch/uploads/Cd_C_GE_bulletindadhesion_membres_c_679aaa5faa.pdf"
        >&gt; {{ $t('soutien').member.ge.subscription }}</a
      ><br />
      <a
        href="https://api-new.lesconcertsducoeur.ch/uploads/Cd_C_GE_Statuts_80c429d56e.pdf"
        >&gt; {{ $t('soutien').member.ge.status }}</a
      >
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
