<template>
  <div class="max-w-lg">
    <h1 class="text-4xl lg:text-5xl">{{ $t('newsletter').title }}</h1>
    <p class="lead">
      {{ $t('newsletter').lead }}
    </p>
    <form
      method="post"
      :action="formAction"
      class="inf-form"
      novalidate
      @submit="handleFormSubmit"
    >
      <input type="email" name="email" class="hidden" />
      <input type="hidden" name="key" :value="formKey" />
      <input type="hidden" name="webform_id" :value="formWebformId" />

      <div class="inf-success" style="display: none">
        <h4 class="text-xl font-bold my-4">
          {{ $t('newsletter').success }}
        </h4>
        <p>
          <a href="#" class="inf-btn">&laquo;</a>
        </p>
      </div>

      <div class="inf-content">
        <div class="flex flex-col gap-3 my-3">
          <div class="newsletter-input-row">
            <input
              id="mce-EMAIL"
              class="newsletter-input"
              type="email"
              name="inf[1]"
              data-inf-meta="1"
              :data-inf-error="$t('newsletter').errorEmail"
              required
              :placeholder="$t('newsletter').email + ' *'"
            />
            <button
              type="button"
              class="newsletter-submit"
              :aria-label="$t('newsletter').submit"
              @click="onSubmitClick"
            >
              <span aria-hidden="true">></span>
            </button>
          </div>

          <!-- Hidden locale field -->
          <input
            class="hidden"
            type="text"
            name="inf[51622]"
            :value="formLanguage"
          />

          <small>
            {{ $t('newsletter').privacy }}
          </small>
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
</template>

<script>
export default {
  data() {
    return {
      showCaptchaTooltip: false,
      detectedLocale: null,
      isSubmitting: false,
    }
  },

  head() {
    return {
      title: 'Newsletter — Les Concerts du Cœur',
    }
  },

  computed: {
    systemLocale() {
      return this.detectedLocale || this.siteLocale
    },
    siteLocale() {
      return (this.$i18n && this.$i18n.locale) || 'fr'
    },
    isGerman() {
      return this.siteLocale === 'de'
    },
    formLanguage() {
      return this.systemLocale === 'de' ? 'DE' : 'FR'
    },
    captchaLabel() {
      return this.isGerman
        ? 'Sicherheitspruefung laeuft'
        : 'Verification anti-spam en cours'
    },
    formAction() {
      return this.isGerman
        ? 'https://newsletter.infomaniak.com/v3/api/1/newsletters/webforms/15447/submit'
        : 'https://newsletter.infomaniak.com/v3/api/1/newsletters/webforms/15246/submit'
    },
    formKey() {
      return this.isGerman
        ? 'eyJpdiI6InJ6MVZTajN2SEZQRkpxb0NuM1NYZGdCYWtBSmF2dzZTcFBSNHVPS3diN0E9IiwibWFjIjoiMTQwZmU4MmNjY2MxNzUwYjEyYzY2YmI1N2YyMDZkYmFkN2M0ZGFhNzgxNmU3ZjQxY2QzYzUxODYxODY0OGNlMyIsInZhbHVlIjoiZ24xK3diSVo0RkNHbERPNUtQQkRZUHpjWWx3ZmhUeWxXdkVmZUpMZ25DND0ifQ=='
        : 'eyJpdiI6IkdVNWhkTkdvTVNqZkxIQXNwYzNPTGo1eEpZT3FrcEVQZ3dzcmE4aUlvVE09IiwibWFjIjoiNTgzMmY0Nzk4M2E1ODU4ODhjZThjMzZlMTQyN2FlYTBkMTc0NWVhNDM4ZmVjOGJiZjE3ZDhkOWEzOThhNmMxMiIsInZhbHVlIjoiVGo1dXl4Q29sd3VtWm5Qb0ZFR3RnNjJaaVwvaDNmVHp1N0wzRXZDMjdcL2RzPSJ9'
    },
    formWebformId() {
      return this.isGerman ? '15447' : '15246'
    },
  },

  mounted() {
    this.detectedLocale = this.getSystemLocale()
    this.loadAltcha()
  },

  beforeDestroy() {
    // Clean up the script tag when leaving the page so re-entry doesn't double-load
    const el = document.querySelector('script[data-altcha-page]')
    if (el) el.remove()
  },

  methods: {
    getSystemLocale() {
      if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return null
      }

      const candidates = [
        ...(Array.isArray(navigator.languages) ? navigator.languages : []),
        navigator.language,
      ].filter(Boolean)

      const hasGerman = candidates.some((lang) =>
        String(lang).toLowerCase().startsWith('de')
      )

      return hasGerman ? 'de' : 'fr'
    },

    loadAltcha() {
      if (typeof window === 'undefined') return
      // Guard: skip if already registered (e.g. hot-reload)
      if (window.customElements && window.customElements.get('altcha-widget'))
        return
      const script = document.createElement('script')
      script.src = 'https://eu.altcha.org/js/latest/altcha.min.js'
      script.type = 'module'
      script.dataset.altchaPage = 'newsletter'
      document.body.appendChild(script)
    },

    onSubmitClick(event) {
      event.preventDefault()

      if (this.isSubmitting) {
        return
      }

      // Show captcha if not already visible
      if (!this.showCaptchaTooltip) {
        this.showCaptchaTooltip = true
        return
      }

      // Altcha widget automatically writes a hidden input[name="altcha"] when solved
      const form = this.$el.querySelector('form')
      const altchaInput = form && form.querySelector('input[name="altcha"]')
      if (altchaInput && altchaInput.value) {
        this.submitForm()
      }
      // If not solved yet, user must wait for the captcha to complete
    },

    handleFormSubmit(event) {
      event.preventDefault()

      const form = this.$el.querySelector('form')
      const altchaInput = form && form.querySelector('input[name="altcha"]')
      if (!altchaInput || !altchaInput.value) {
        this.showCaptchaTooltip = true
        return
      }

      this.submitForm()
    },

    submitForm() {
      const form = this.$el.querySelector('form')
      if (form) {
        this.isSubmitting = true
        // Submit the form after a short delay to ensure everything is ready
        this.$nextTick(() => {
          form.submit()
        })
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.newsletter-input-row {
  @apply flex items-stretch border-1 border-gray border-opacity-30;
}

.newsletter-input {
  @apply flex-auto py-1 px-2;
}

.newsletter-input::placeholder {
  color: rgb(107 114 128 / 72%);
}

.newsletter-input:focus {
  outline: none;
}

.newsletter-submit {
  @apply text-lg px-3 border-l-1 border-gray border-opacity-30;
}

.inf-input.inf-error label,
.inf-input.inf-error span.inf-message {
  color: #c03;
}

.inf-input.inf-error input {
  border: 1px solid #c03;
}

.captcha-wrap {
  @apply mt-2 flex items-baseline gap-2 justify-start;
}

.captcha-label {
  @apply text-xs text-gray text-opacity-70 flex-shrink-0 whitespace-nowrap;
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

  --altcha-padding: 0;
  --altcha-border-radius: 0;
  --altcha-font-size: 11px;
  --altcha-border-width: 0;
  --altcha-border-color: transparent;
}

altcha-widget::part(main) {
  border: 0;
  padding: 0;
}
</style>
