<template>
  <div class="max-w-lg">
    <h1 class="text-4xl lg:text-5xl">{{ $t('newsletter').title }}</h1>
    <p class="lead">
      {{ $t('newsletter').lead }}
    </p>
    <form method="post" :action="formAction" class="inf-form">
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
          <div class="inf-input inf-input-text">
            <input
              type="text"
              name="inf[2]"
              data-inf-meta="2"
              :data-inf-error="$t('newsletter').errorText"
              :placeholder="$t('newsletter').firstname"
            />
          </div>
          <div class="inf-input inf-input-text">
            <input
              type="text"
              name="inf[3]"
              data-inf-meta="3"
              :data-inf-error="$t('newsletter').errorText"
              :placeholder="$t('newsletter').lastname"
            />
          </div>
          <div class="inf-input inf-input-text">
            <input
              type="email"
              name="inf[1]"
              data-inf-meta="1"
              :data-inf-error="$t('newsletter').errorEmail"
              required="required"
              :placeholder="$t('newsletter').email + ' *'"
            />
          </div>

          <!-- Hidden locale field -->
          <input
            v-if="$i18n"
            class="hidden"
            type="text"
            name="inf[51622]"
            :value="$i18n.locale === 'de' ? 'DE' : 'FR'"
          />

          <!-- Canton field -->
          <div class="inf-input inf-input-text">
            <input
              type="text"
              name="inf[51623]"
              data-inf-meta="51623"
              :placeholder="$t('newsletter').canton"
            />
          </div>

          <small>
            {{ $t('newsletter').privacy }}
          </small>
        </div>

        <div ref="altchaContainer" class="my-3"></div>

        <div class="inf-submit text-right">
          <input
            type="submit"
            :value="$t('newsletter').submit"
            class="btn bg-gray cursor-pointer"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Newsletter — Les Concerts du Cœur',
      script: [
        {
          src: this.trackingScriptUrl,
          type: 'text/javascript',
          body: true,
        },
        {
          src: 'https://eu.altcha.org/js/latest/altcha.min.js',
          type: 'module',
          defer: true,
          body: true,
        },
        {
          src: 'https://newsletter.storage5.infomaniak.com/mcaptcha/altcha.js',
          defer: true,
          body: true,
        },
        {
          src: 'https://newsletter.infomaniak.com/v3/static/webform_index.js?v=1771321045',
          type: 'text/javascript',
          body: true,
        },
      ],
    }
  },

  computed: {
    isGerman() {
      return this.$i18n && this.$i18n.locale === 'de'
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
    // Insert altcha-widget as a DOM element to avoid Vue 2 component resolution
    this.$nextTick(() => {
      const container = this.$refs.altchaContainer
      if (container) {
        const widget = document.createElement('altcha-widget')
        widget.setAttribute('hidelogo', '')
        widget.setAttribute('hidefooter', '')
        widget.setAttribute('floating', '')
        widget.setAttribute(
          'challengeurl',
          'https://newsletter.infomaniak.com/v3/altcha-challenge'
        )
        container.appendChild(widget)
      }
    })
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

.inf-input.inf-error label,
.inf-input.inf-error span.inf-message {
  color: #c03;
}

.inf-input.inf-error input {
  border: 1px solid #c03;
}
</style>
