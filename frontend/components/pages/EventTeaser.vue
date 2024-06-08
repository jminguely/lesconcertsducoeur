<template>
  <div class="border-b border-gray-800 grid grid-cols-2 lg:gap-x-10">
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
    <div class="flex">
      <svg
        v-if="event.badge"
        class="ml-auto -mt-5 h-16"
        :class="`text-${event.canton.abbreviation}`"
      >
        <use :href="`${icons}#${event.badge}-${$i18n.locale}`"></use>
      </svg>
    </div>
    <div class="flex flex-col lg:max-w-xl col-span-2 lg:col-span-1">
      <div class="text-3xl lg:text-4xl lg:mb-0 text-gray">
        {{ event.title }}
      </div>
    </div>

    <div class="flex flex-col col-span-2 lg:col-span-1">
      <div>
        <template v-if="event.music_group != null">
          <div class="mb-1">
            <nuxt-link
              :to="localePath(`/artistes/${event.music_group.slug}`)"
              class="font-playFair text-xl no-underline"
              :class="`hover:text-${event.canton.abbreviation}`"
            >
              {{ event.music_group.name }}
              <svg class="inline-block h-4 w-4 mb-1 ml-1">
                <use :href="`${icons}#info`"></use>
              </svg>
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
import icons from '~/assets/img/icons.svg'

export default {
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      icons,
    }
  },
}
</script>
