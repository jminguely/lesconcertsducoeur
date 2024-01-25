export const state = () => ({
  cantonFilter: null,
});

export const mutations = {
  setCantonFilter(state, value) {
    state.cantonFilter = value;
  },
};
