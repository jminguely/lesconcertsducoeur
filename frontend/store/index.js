export const state = () => ({
  cantonFilter: null,
  musicGroupSlugs: [],
})

export const mutations = {
  setCantonFilter(state, value) {
    state.cantonFilter = value
  },
  setMusicGroupSlugs(state, slugs) {
    state.musicGroupSlugs = slugs
  },
}
