<template>
  <div class="text-xl">
    <Headline>
      <template #headline>Offres d'emploi</template>
      <template #content> L’Association <i>Les Concerts du Cœur Vaudois</i> cherche un.en&nbsp;:</template>
    </Headline>

    <h2 class="mt-8 mb-4 text-2xl lg:text-3xl font-playFair">Chargé.e d’administration</h2>
    <p class="text-xl mt-4">
      <b>Type de contrat&nbsp;:</b> salarié à un taux de 15 % CDI<br />
      <b>Entrée en fonction&nbsp;:</b> 1 février 2022 ou à convenir<br />
      <b>Salaire&nbsp;:</b> CHF 750.- brut par mois <br />
      <b>Lieu de travail&nbsp;:</b> à domicile avec déplacements occasionnels
    </p>

    <h2 class="mt-4 text-2xl lg:text-3xl">Cahier des charges</h2>
    <ul class="pt-2">
      <li>— Tenue de la comptabilité de l’association ;</li>
      <li>— Gestion des bases de données et des fichiers administratifs ;</li>
      <li>— Préparation et envoi des contrats aux artistes et aux institutions ;</li>
      <li>— Facturation des clients ;</li>
      <li>— Préparation et envoi des fiches et certificats de salaire ;</li>
      <li>— Gestion des décomptes de charges sociales et de l’impôt à la source ;</li>
      <li>— Gestion des membres de l'association, classement et archivage des documents, traitement du courrier, prise des PVs.</li>
    </ul>

    <h2 class="mt-8 mb-2 text-2xl lg:text-3xl">Votre mission</h2>
    <p class="text-xl">Assister la direction dans l’ensemble des tâches administratives liées à la production des <i>Concerts du Coeur</i> sur le territoire vaudois.</p>

    <h2 class="mt-8 text-2xl lg:text-3xl">Votre profil</h2>
    <ul class="pt-2">
      <li>— Vous bénéficiez d’une expérience solide en comptabilité et en administration ;</li>
      <li>— Vous montrez un intérêt particulier pour les domaines de la culture et du social ;</li>
      <li>— Vous maîtrisez les programmes de la suite Microsoft Office ;</li>
      <li>— Vous faites preuve d’un sens prononcé de l’organisation, savez gérer les priorités et disposez d’un esprit d’initiative.</li>
    </ul>

    <h2 class="mt-8 mb-2 text-2xl lg:text-3xl">Votre dossier de candidature</h2>
    <p class="text-xl">
      Merci de nous faire parvenir une lettre de motivation et votre CV par mail à l’adresse : <a href="mailto:vaud@lesconcertsducoeur.ch">vaud@lesconcertsducoeur.ch</a> avant le 7 janvier 2022.
    </p>
    <Spacing />
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import Spacing from '@/components/typography/Spacing.vue'

export default {
  components: {
    Headline,
    Spacing,
  },

  data() {
    return {
      canton: null,
    }
  },

  fetchOnServer: false,

  fetch() {
    this.canton = this.$route.params.canton
  },
}
</script>
