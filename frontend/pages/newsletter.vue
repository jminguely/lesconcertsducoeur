<template>
  <div class="max-w-lg">
    <h1 class="text-4xl lg:text-5xl">{{ $t('newsletter').title }}</h1>
    <p class="lead">
      {{ $t('newsletter').lead }}
    </p>
    <form method="post" :action="formAction" class="inf-form" novalidate>
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
              type="submit"
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
    }
  },

  head() {
    return {
      title: 'Newsletter — Les Concerts du Cœur',
      script: [
        {
          src: this.trackingScriptUrl,
          type: 'text/javascript',
          body: true,
        },
      ],
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
    trackingScriptUrl() {
      return this.isGerman
        ? 'https://webform.statslive.info/ow/eyJpdiI6IkRKUkRLVHFWMWpBalJUTUhcL2lsd3F0NHZUemlmOFhLVjc4K1ppT1gxVTgwPSIsIm1hYyI6IjgyOGYwZDA4MzU5ZjFlYWVhZmJlMmRiYmM5MTAxMTQ1ZGM3ZmZiOGRmMGY4YThhZTk2YWU4ZjFmYjUwNjdjOTYiLCJ2YWx1ZSI6Iks3UUxXSE5SSk9FY1h2a1ZxdXArakRrRFl3UmM1WVcrZmxMR2tNKzJoUjA9In0='
        : 'https://webform.statslive.info/ow/eyJpdiI6ImFwU05xU3F2aG9HMmVIaythZU11M2NKZXdxTXpvU2VkQTdLdWkrWEx3XC9zPSIsIm1hYyI6Ijk5N2Q4MzQxZGNlZjk4Y2ViYzc4NmEyODQwMzAxOGVjYmJiYmY3ZDg4YWU1MTA4NzcyZjU1ZWRiNmQ4MDM0ZjMiLCJ2YWx1ZSI6IjdZb1B4V3ZHVXJ0YUUyUkx4OE1FdVNldiszWHUzdVZ2YXdhXC9hMHRjMU9RPSJ9'
    },
  },

  mounted() {
    this.detectedLocale = this.getSystemLocale()

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
    onSubmitClick() {
      if (!this.showCaptchaTooltip) {
        this.showCaptchaTooltip = true
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
