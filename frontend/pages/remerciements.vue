<template>
  <div>
    <Headline>
      <template #headline>{{ $t('impressum').title }}</template>
    </Headline>

    <div v-if="$i18n.locale == 'fr'" class="prose prose-xl max-w-full">
      <h2 class="text-3xl font-playFair">Adresse de contact</h2>
      <p>
        <i>Les Concerts du Cœur</i><br />
        Rue des Creusets 16<br />
        1950 Sion<br />
        valais@lesconcertsducoeur.ch
      </p>

      <h2 class="text-3xl font-playFair">Représentant.s autorisé.s</h2>
      <p>
        Contenu du texte : Laure Barras<br />
        Conception graphique : Malaïka Schürch<br />
        Illustrations : Michèle Reymond<br />
        Programmation : Alex Roque<br />
        Traductions français-allemand : Franziska Heinzen
      </p>

      <h2 class="text-3xl font-playFair">Utilisation de services tiers</h2>
      <p>Ce site utilise le service de don RaiseNow. Les données sont traitées selon les conditions d’utilisation dudit service.</p>

      <h2 class="text-3xl font-playFair">Clause de non-responsabilité</h2>
      <p>
        L’auteur se réserve le droit de ne pas être responsable de l’actualité, de l’exactitude, de l’exhaustivité ou de la qualité des informations fournies. Les réclamations en responsabilité
        concernant les dommages causés par l’utilisation de toute information fournie, y compris tout type d’information incomplète ou incorrecte, seront donc rejetées. Toutes les offres sont sans
        engagement. Des parties de pages ou la publication complète, y compris toutes les offres et informations, peuvent être étendues, modifiées ou partiellement ou totalement supprimées par
        l’auteur sans annonce séparée.
      </p>

      <h2 class="text-3xl font-playFair">Clause de non-responsabilité pour les liens</h2>
      <p>
        Les références et les liens vers des sites web tiers ne relèvent pas de notre responsabilité. Nous déclinons toute responsabilité concernant ces sites. L’accès à ces sites et leur utilisation
        se font aux risques et périls de l’utilisateur.
      </p>

      <h2 class="text-3xl font-playFair">Droits d’auteur</h2>
      <p>
        Les droits d’auteur et tous les autres droits sur le contenu, les images, les photos ou autres fichiers de ce site appartiennent exclusivement aux <i>Concerts du Cœur</i> ou aux détenteurs de
        droits spécifiquement nommés. Pour la reproduction de tout élément, le consentement écrit du détenteur du droit d’auteur doit être obtenu au préalable.
      </p>
    </div>

    <div v-if="$i18n.locale == 'de'" class="prose prose-xl max-w-full">
      <h2 class="text-3xl font-playFair">Kontaktadresse</h2>
      <p>
        <i>Les Concerts du Cœur</i><br />
        Rue des Creusets 16<br />
        1950 Sion<br />
        valais@lesconcertsducoeur.ch
      </p>

      <h2 class="text-3xl font-playFair">Bevollmächtigte:r Vertreter:in</h2>
      <p>
        Textinhalt: Laure Barras<br />
        Grafikdesign: Malaïka Schürch<br />
        Illustrationen: Michèle Reymond<br />
        Programmierung: Alex Roque<br />
        Deutsche Übersetzungen: Franziska Heinzen
      </p>

      <h2 class="text-3xl font-playFair">Nutzung von Diensten Dritter</h2>
      <p>Diese Website nutzt den Spendendienst RaiseNow. Die Daten werden gemäß den Nutzungsbedingungen des genannten Dienstes verarbeitet.</p>

      <h2 class="text-3xl font-playFair">Haftungsausschluss</h2>
      <p>
        Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftpflichtansprüche: Haftungsansprüche gegen den Autor,
        welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger
        Informationen verursacht wurden, sind grundsätzlich ausgeschlossen. Alle Angebote sind freibleibend. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne
        gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
      </p>

      <h2 class="text-3xl font-playFair">Haftungsausschluss für Links</h2>
      <p>
        Verweise und Links auf Webseiten Dritter liegen nicht in unserer Verantwortung. Wir übernehmen keine Verantwortung für den Inhalt dieser Webseiten. Der Zugang zu und die Nutzung dieser
        Webseiten erfolgt auf eigene Gefahr.
      </p>

      <h2 class="text-3xl font-playFair">Copyright</h2>
      <p>
        Das Urheberrecht und alle anderen Rechte an den Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschließlich dem Verein Les Concerts du Coeur oder den ausdrücklich
        genannten Rechteinhabern. Für die Vervielfältigung von Material ist die schriftliche Zustimmung des Urheberrechtsinhabers einzuholen.
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
