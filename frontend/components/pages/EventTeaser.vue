<template>
  <div
    class="flex flex-col justify-between border-b border-gray-800 lg:grid lg:grid-cols-2 lg:gap-x-10"
  >
    <div
      class="mb-2 font-playFair"
      :class="event.canton && `text-${event.canton.abbreviation}`"
    >
      <div>
        {{
          $dateFns.format(
            new Date(event.date_time),
            'dd.MM.yyyy' + ' | ' + 'HH:mm'
          )
        }}
        <span v-if="event.time_end && event.time_end != '00:00:00.000'"
          >— {{ event.time_end.slice(0, 5) }}</span
        >
      </div>
      <div>{{ event.location }}</div>
    </div>
    <div>
      <div class="relative overflow-hidden w-full h-full">
        <span class="badge">Entrée libre</span>
      </div>
    </div>
    <div class="flex flex-col lg:max-w-xl">
      <div class="text-3xl lg:text-4xl lg:mb-0 text-gray">
        {{ event.title }}
      </div>
    </div>

    <div class="flex flex-col">
      <div>
        <template v-if="event.music_group != null">
          <div class="mb-1">
            <nuxt-link
              :to="localePath(`/artistes/${event.music_group.slug}`)"
              class="font-playFair text-xl"
            >
              {{ event.music_group.name }}
            </nuxt-link>
          </div>
          <div v-for="artist in event.music_group.artists" :key="artist.id">
            <span>{{ artist.first_name }} {{ artist.last_name }}</span>
            <span>|</span>
            <span>{{ artist.instrument }}</span>
          </div>
        </template>
        <template v-else>
          <div v-for="artist in event.artists" :key="artist.id">
            <span>{{ artist.first_name }} {{ artist.last_name }}</span>
            <span>|</span>
            <span>{{ artist.instrument }}</span>
          </div>
        </template>
      </div>
      <div v-dompurify-html="event.details" class="rich-text"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.badge {
  position: absolute;
  top: 0;
  right: 0;
  border-top: 2px dotted;
  border-bottom: 2px dotted;
  padding: 0.25rem 2rem;
  transform: rotate(20deg);
}
</style>
