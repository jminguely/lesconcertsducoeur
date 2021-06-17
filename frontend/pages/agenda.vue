<template>
  <div>
    <Headline>
      <template #headline> Agenda </template>
    </Headline>

    <div class="flex items-start my-20 text-2xl justify-items-start font-playFair">
      <ClassicSelect class="mr-16" :options="years">
        <template #label> à venir </template>
      </ClassicSelect>

      <ClassicSelect class="mr-16" :options="['Sélection']">
        <template #label> Filtre </template>
      </ClassicSelect>

      <ClassicSelect class="mr-16" :options="[]">
        <template #label> région </template>
      </ClassicSelect>
      <ClassicSelect class="mr-16" :options="years">
        <template #label> à venir passés </template>
      </ClassicSelect>
    </div>

    <DateDivider>
      <template #date>2021</template>
    </DateDivider>

    <EventDetails color="yellow" class="my-10">
      <template #due>Di 25.08.2019 | 15:00 Clinique Bernoise, Crans-Montana</template>
      <template #title>Récital de violon et violoncelle</template>
      <template #details>
        Elena Reser | violon Ugo Reser | violoncelle
        <br />–<br />
        Entrée libre
      </template>
    </EventDetails>

    <EventDetails color="green" class="my-10">
      <template #due>Di 25.08.2019 | 15:00 Clinique Bernoise, Crans-Montana</template>
      <template #title>Récital de violon et violoncelle</template>
      <template #details>
        Elena Reser | violon Ugo Reser | violoncelle
        <br />–<br />
        Entrée libre
      </template>
    </EventDetails>

    <EventDetails color="red" class="my-10 mb-40">
      <template #due>Je 05.09.2019 | 00:00 Stiftung Altersheim St. Mauritius, Zermatt </template>
      <template #title>Étudiants de l’académie du Zermatt Music Festival</template>
      <template #details>
        Richard Helm | Bariton Stéphanie Gurga | Piano <br />–<br />
        Entrée libre <br />–<br />
        En partenariat avec le Zermatt Music Festival and Academy Avec le soutien de la Fondation Beisheim
      </template>
    </EventDetails>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import DateDivider from '@/components/typography/DateDivider.vue'
import EventDetails from '@/components/typography/EventDetails.vue'
import ClassicSelect from '@/components/pages/ClassicSelect.vue'

export default {
  components: {
    Headline,
    ClassicSelect,
    DateDivider,
    EventDetails,
  },
  computed: {
    years() {
      const year = new Date().getFullYear()
      return Array.from({ length: year - 1900 }, (value, index) => 1901 + index).sort((a, b) => b - a)
    },
  },
}
</script>
