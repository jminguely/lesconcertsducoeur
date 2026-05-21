<template>
  <footer class="site-footer mt-20 pt-32 pb-8 px-3 md:px-6 bg-gray text-white">
    <div class="site-footer-container">
      <div class="logo-container mb-5 md:pl-3">
        <img
          class="w-24 lg:w-48 h-auto md:-ml-2 filter invert"
          src="/CdC-logo.png"
        />
      </div>
      <div
        class="navigation-container sm:col-start-1 sm:row-span-3 lg:row-span-2 md:pl-3"
      >
        <Navigation />
      </div>
      <div class="sm:row-start-1 sm:col-start-2 lg:row-start-auto">
        <h3 class="mb-3">{{ $t('footer').socials }}</h3>
        <div class="flex flex-row gap-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/concertsducoeur/"
          >
            <svg class="icon text-white h-8 w-8">
              <use href="~/assets/img/icons.svg#facebook"></use>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/lesconcertsducoeur/"
          >
            <svg class="icon text-white h-8 w-8">
              <use href="~/assets/img/icons.svg#instagram"></use>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@lesconcertsducoeur"
          >
            <svg class="icon text-white h-8 w-8">
              <use href="~/assets/img/icons.svg#youtube"></use>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:contact@lesconcertsducoeur.ch"
          >
            <svg class="icon text-white h-8 w-8">
              <use href="~/assets/img/icons.svg#email"></use>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col items-start sm:col-start-2 lg:col-start-auto">
        <h3 class="mb-3">{{ $t('footer').newsletter_infos }}</h3>

        <form
          id="mc-embedded-subscribe-form"
          :action="footerFormAction"
          method="post"
          class="inf-form w-full"
          novalidate
        >
          <input type="email" name="email" class="hidden" />
          <input type="hidden" name="key" :value="footerFormKey" />
          <input type="hidden" name="webform_id" :value="footerFormWebformId" />

          <div class="inf-success" style="display: none">
            <p class="text-sm success-message">
              {{ $t('newsletter').success }}
            </p>
          </div>

          <div class="inf-content w-full">
            <!-- Field "langue" -->
            <input
              v-if="$i18n"
              class="hidden"
              type="text"
              name="inf[51622]"
              :value="$i18n.locale === 'de' ? 'DE' : 'FR'"
            />

            <div class="newsletter-input-row">
              <input
                id="mce-EMAIL"
                class="newsletter-input"
                :placeholder="$t('footer').newsletter"
                type="email"
                value=""
                name="inf[1]"
                required
              />
              <button
                type="submit"
                class="newsletter-submit"
                :aria-label="$t('newsletter').submit"
                @click="onSubmitClick"
              >
                <span aria-hidden="true">></span>
              </button>
            </div>

            <div
              class="captcha-wrap"
              :class="{ 'is-open': showCaptchaTooltip }"
              aria-live="polite"
            >
              <span class="captcha-label">{{ captchaLabel }}</span>
              <div
                class="captcha-tooltip"
                :class="{ 'is-open': showCaptchaTooltip }"
              >
                <altcha-widget
                  hidelogo
                  hidefooter
                  type="native"
                  challengeurl="https://newsletter.infomaniak.com/v3/altcha-challenge"
                ></altcha-widget>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="sm:col-start-2 lg:col-start-auto">
        <h3 class="mb-3">{{ $t('footer').partner }}</h3>
        <div class="grid md:grid-cols-2 gap-5">
          <a
            class="block"
            href="https://www.livemusicnow.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="h-14 w-28 object-contain object-left filter invert"
              src="/LMN-logo.png"
            />
          </a>
          <img
            class="h-14 w-28 object-contain object-left"
            src="/HEMU-logo.png"
          />
          <img
            class="h-14 w-28 object-contain object-left"
            src="/HEMUGE-logo.png"
          />
          <img
            class="h-14 w-28 object-contain object-left"
            src="/HESSO-logo.png"
          />
        </div>
      </div>
      <div class="sm:col-start-2 lg:col-start-auto flex flex-col items-start">
        © {{ new Date().getFullYear() }}
        <i>Les Concerts du Cœur</i>
        <nuxt-link :to="`/${$i18n.locale}/impressum`">
          {{ $t('footer').impressum }}</nuxt-link
        >
        <nuxt-link :to="`/${$i18n.locale}/privacy`">
          {{ $t('footer').privacy }}
        </nuxt-link>
      </div>
      <div
        v-if="logos.length"
        class="partner-container lg:col-span-3 mt-16 min-w-0 sm:col-span-2"
      >
        <h3>{{ $t('footer').support }}</h3>
        <div class="border-t-1 border-white pt-3 mt-2">
          <LogosSlider :key="logos[0].id" :logos="logos" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Navigation from './Navigation.vue'
import LogosSlider from './pages/LogosSlider.vue'

export default {
  components: {
    Navigation,
    LogosSlider,
  },
  props: {
    logos: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showCaptchaTooltip: false,
    }
  },
  computed: {
    isGerman() {
      return this.$i18n && this.$i18n.locale === 'de'
    },
    captchaLabel() {
      return this.isGerman
        ? 'Sicherheitspruefung laeuft'
        : 'Verification anti-spam en cours'
    },
    footerFormAction() {
      return this.isGerman
        ? 'https://newsletter.infomaniak.com/v3/api/1/newsletters/webforms/15447/submit'
        : 'https://newsletter.infomaniak.com/v3/api/1/newsletters/webforms/15246/submit'
    },
    footerFormKey() {
      return this.isGerman
        ? 'eyJpdiI6InJ6MVZTajN2SEZQRkpxb0NuM1NYZGdCYWtBSmF2dzZTcFBSNHVPS3diN0E9IiwibWFjIjoiMTQwZmU4MmNjY2MxNzUwYjEyYzY2YmI1N2YyMDZkYmFkN2M0ZGFhNzgxNmU3ZjQxY2QzYzUxODYxODY0OGNlMyIsInZhbHVlIjoiZ24xK3diSVo0RkNHbERPNUtQQkRZUHpjWWx3ZmhUeWxXdkVmZUpMZ25DND0ifQ=='
        : 'eyJpdiI6IkdVNWhkTkdvTVNqZkxIQXNwYzNPTGo1eEpZT3FrcEVQZ3dzcmE4aUlvVE09IiwibWFjIjoiNTgzMmY0Nzk4M2E1ODU4ODhjZThjMzZlMTQyN2FlYTBkMTc0NWVhNDM4ZmVjOGJiZjE3ZDhkOWEzOThhNmMxMiIsInZhbHVlIjoiVGo1dXl4Q29sd3VtWm5Qb0ZFR3RnNjJaaVwvaDNmVHp1N0wzRXZDMjdcL2RzPSJ9'
    },
    footerFormWebformId() {
      return this.isGerman ? '15447' : '15246'
    },
  },
  mounted() {
    if (typeof window === 'undefined' || !window.customElements) return

    window.customElements.whenDefined('altcha-widget').then(() => {
      this.$nextTick(() => {
        this.$el.querySelectorAll('altcha-widget').forEach((widget) => {
          if (typeof widget.getConfiguration !== 'function') {
            window.customElements.upgrade(widget)
          }
        })
      })
    })
  },
  methods: {
    onSubmitClick() {
      if (!this.showCaptchaTooltip) {
        this.showCaptchaTooltip = true
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.site-footer-container {
  @apply max-w-7xl mx-auto;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  gap: 50px;

  @screen sm {
    grid-template-rows: auto auto;
    grid-template-columns: 200px auto;
  }

  @screen lg {
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 200px auto auto;
    gap: 0 50px;
  }

  a {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
    text-decoration-thickness: 1px;
  }
}

.inf-form {
  @apply w-full;
}

.newsletter-input-row {
  @apply flex items-stretch border-1 border-white;
}

.newsletter-input {
  @apply flex-auto p-2 bg-transparent text-white;
}

.newsletter-input::placeholder {
  color: rgb(255 255 255 / 72%);
}

.newsletter-input:focus {
  outline: none;
}

.newsletter-submit {
  @apply text-lg px-3 border-l-1 border-white;
}

.success-message {
  @apply w-full border-1 border-white px-3 py-2;

  line-height: 1.35;
}

.captcha-wrap {
  @apply relative mt-1 flex items-baseline gap-2 justify-between;
}

.captcha-label {
  @apply text-xs text-white text-opacity-60 flex-shrink-0 whitespace-nowrap;
}

.captcha-tooltip {
  @apply p-0;

  opacity: 0;
  max-height: 0;
  max-width: 0;
  overflow: hidden;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.captcha-tooltip.is-open {
  opacity: 1;
  max-height: 34px;
  max-width: 240px;
  overflow: visible;
  pointer-events: auto;
}

altcha-widget {
  display: inline-block;
  min-height: 20px;
  transform: scale(0.82);
  transform-origin: left center;

  /* Compact visual density for the footer layout */
  --altcha-padding: 0;
  --altcha-border-radius: 0;
  --altcha-font-size: 11px;
  --altcha-border-width: 0;
  --altcha-border-color: transparent;
}

/* Remove container chrome if exposed via shadow parts */
altcha-widget::part(main) {
  border: 0;
  padding: 0;
}
</style>
