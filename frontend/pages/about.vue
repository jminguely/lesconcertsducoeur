<template>
  <div>
    <Headline>
      <template #headline>Mentions légales</template>
    </Headline>

    <div class="prose prose-xl max-w-full">
      <p>
        <span class="text-3xl font-playFair mb-4">Adresse de contact</span><br />
        Les Concerts du Coeur<br />
        Adresse<br />
        Email
      </p>

      <p>
        <span class="text-3xl font-playFair mb-4">Représentant(s) autorisé(s)</span><br />
        Contenu du texte : ...<br />
        conception graphique : Malaïka Schürch<br />
        Illsutrations : Michèle Reymond<br />
        Programmation : Alex Roque<br />
        Traductions français-allemand : ...<br />
      </p>

      <p>
        <span class="text-3xl font-playFair mb-4">Utilisation de services tiers</span><br />
        Ce site utilise le service de don RaiseNow. Les données sont traitées selon les conditions d’utilisation dudit service.
      </p>

      <p>
        <span class="text-3xl font-playFair mb-4">Clause de non-responsabilité</span><br />
        L’auteur se réserve le droit de ne pas être responsable de l’actualité, de l’exactitude, de l’exhaustivité ou de la qualité des informations fournies. Les réclamations en responsabilité
        concernant les dommages causés par l’utilisation de toute information fournie, y compris tout type d’information incomplète ou incorrecte, seront donc rejetées. Toutes les offres sont sans
        engagement. Des parties de pages ou la publication complète, y compris toutes les offres et informations, peuvent être étendues, modifiées ou partiellement ou totalement supprimées par
        l’auteur sans annonce séparée.
      </p>

      <p>
        <span class="text-3xl font-playFair mb-4">Clause de non-responsabilité pour les liens</span><br />
        Les références et les liens vers des sites web tiers ne relèvent pas de notre responsabilité. Nous déclinons toute responsabilité concernant ces sites. L’accès à ces sites et leur utilisation
        se font aux risques et périls de l’utilisateur.
      </p>

      <p>
        <span class="text-3xl font-playFair mb-4">Droits d’auteur</span><br />
        Les droits d’auteur et tous les autres droits sur le contenu, les images, les photos ou autres fichiers de ce site appartiennent exclusivement aux concerts du coeur ou aux détenteurs de droits
        spécifiquement nommés. Pour la reproduction de tout élément, le consentement écrit du détenteur du droit d’auteur doit être obtenu au préalable.
      </p>
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

<style></style>
