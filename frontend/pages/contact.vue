<template>
  <div>
    <Headline class="pt-28">
      <template #headline>Contact</template>
      <template #content>
        Si nos actions vous intéressent, si vous désirez organiser un concert dans votre établissement ou dans l'EMS de l’un de de vos proches, n’hésitez pas à nous contacter.
        <p class="my-10">Contact général</p>
        <p class="ml-48 underline font-newsCycle">contact@lesconcertsducoeur.ch</p>
      </template>
    </Headline>

    <AccordionItem>
      <template #label>Contact Valais</template>
      <template #content>
        <div class="mb-28">
          <div class="text-2xl text-red-500 ml-52">
            <span class="font-bold">Les Concerts du Coeur</span><br />
            Les Rocailles, Rue des Biolirs 6,<br />
            3963 Crans-Montana<br />
            <span class="underline">valais@lesconcertsducoeur.ch</span>
          </div>
        </div>

        <div class="mb-28">
          <h3 class="text-2xl font-playFair">Direction artistique</h3>
          <div class="text-2xl text-red-500 ml-52">
            <span class="font-bold">Laure Barras</span><br />
            <span class="underline">laure.barras@lesconcertsducoeur.chch</span>
          </div>
        </div>

        <div class="pb-28">
          <h3 class="text-2xl font-playFair">Bénévoles</h3>
          <div class="text-2xl text-red-500 ml-52">
            <span class="font-bold">Resp</span><br />
            <span class="underline">benevoles-vs@lesconcertsducoeur.ch</span>
          </div>
        </div>
      </template>
    </AccordionItem>

    <AccordionItem>
      <template #label>Contact Vaud</template>
      <template #content>
        <div class="mb-28">
          <div class="text-2xl text-red-500 ml-52">
            <span class="font-bold">Les Concerts du Coeur</span><br />
            Les Rocailles, Rue des Biolirs 6,<br />
            3963 Crans-Montana<br />
            <span class="underline">valais@lesconcertsducoeur.ch</span>
          </div>
        </div>

        <div class="mb-28">
          <h3 class="text-2xl font-playFair">Direction artistique</h3>
          <div class="text-2xl text-red-500 ml-52">
            <span class="font-bold">Laure Barras</span><br />
            <span class="underline">laure.barras@lesconcertsducoeur.chch</span>
          </div>
        </div>

        <div class="pb-28">
          <h3 class="text-2xl font-playFair">Bénévoles</h3>
          <div class="text-2xl text-red-500 ml-52">
            <span class="font-bold">Resp</span><br />
            <span class="underline">benevoles-vs@lesconcertsducoeur.ch</span>
          </div>
        </div>
      </template>
    </AccordionItem>

    <AccordionItem>
      <template #label>Contact Genève</template>
      <template #content>
        <div class="mb-28">
          <div class="text-2xl text-red-500 ml-52">
            <span class="font-bold">Les Concerts du Coeur</span><br />
            Les Rocailles, Rue des Biolirs 6,<br />
            3963 Crans-Montana<br />
            <span class="underline">valais@lesconcertsducoeur.ch</span>
          </div>
        </div>

        <div class="mb-28">
          <h3 class="text-2xl font-playFair">Direction artistique</h3>
          <div class="text-2xl text-red-500 ml-52">
            <span class="font-bold">Laure Barras</span><br />
            <span class="underline">laure.barras@lesconcertsducoeur.chch</span>
          </div>
        </div>

        <div class="pb-28">
          <h3 class="text-2xl font-playFair">Bénévoles</h3>
          <div class="text-2xl text-red-500 ml-52">
            <span class="font-bold">Resp</span><br />
            <span class="underline">benevoles-vs@lesconcertsducoeur.ch</span>
          </div>
        </div>
      </template>
    </AccordionItem>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import AccordionItem from '@/components/pages/AccordionItem.vue'

export default {
  components: {
    Headline,
    AccordionItem,
  },
}
</script>
