<template>
  <div class="max-w-lg">
    <h1 class="text-4xl lg:text-5xl">{{ $t('newsletter').title }}</h1>
    <p class="lead">
      {{ $t('newsletter').lead }}
    </p>
    <form
      id="mc-embedded-subscribe-form"
      action="https://newsletter.infomaniak.com/external/submit"
      method="post"
      target="_blank"
    >
      <div class="flex flex-col gap-3 my-3">
        <input
          type="text"
          name="inf[2]"
          :placeholder="$t('newsletter').firstname"
        />
        <input
          type="text"
          name="inf[3]"
          :placeholder="$t('newsletter').lastname"
        />
        <input
          type="email"
          name="inf[1]"
          required="required"
          :placeholder="$t('newsletter').email"
          oninvalid="this.setCustomValidity('Please Enter valid email')"
          oninput="setCustomValidity('')"
        />
        <small>
          {{ $t('newsletter').privacy }}
        </small>
        <input type="email" name="email" class="hidden" />
        <input
          type="hidden"
          name="key"
          value="eyJpdiI6ImVuYmFndVREdHdmU00xMkRnMVwvekNtcENoN2xTclJFazllS21CMGVlOWR3PSIsInZhbHVlIjoiK0ZOT3o3OHhWZ1JEOTNQKzJmQ1NxTm8wYlwvQW9nbnl3UllWdEozejJTUk09IiwibWFjIjoiMWJmM2JhODkxMDk2OGFiYmYyYTM0ZmQyOWUzNTBiNzc2YWJlODM0OTBlNTMzMzc4MmMxMzAyN2E1NzI1YzMwNCJ9"
        />
        <input type="hidden" name="webform_id" value="15246" />

        <!-- Field "langue" -->
        <input
          v-if="$i18n"
          class="hidden"
          type="text"
          name="inf[51622]"
          :value="$i18n.locale"
        />
      </div>
      <div class="text-right">
        <input
          type="submit"
          :value="$t('newsletter').submit"
          class="btn bg-gray cursor-pointer"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Newsletter — Les Concerts du Cœur`,
    }
  },
}
</script>

<style lang="postcss" scoped>
form input[type='text'],
form input[type='email'] {
  @apply border-1 border-gray border-opacity-30 py-1 px-2;
}

.btn {
  @apply font-playFair py-1 px-2 rounded-3xl inline-block text-white whitespace-nowrap text-center no-underline;
}
</style>
