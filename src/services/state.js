const state = {
  data: [],
  value: '',
  length: 0,
  pop: () => state.data.pop(),
  push: param => {
    if (param) {
      if (!state.value) return false
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i] === null) {
          state.data[i] = state.value;
          break
        } 
      }
    }
    else state.data.push(state.value);
  },
  setLength : () => {
    state.data = []
    for (let i = 0; i < state.length; i++) {
      state.data.push(null)
    }
  },
  handleChange: event => state.value = event.target.value,
  handleLength: event => state.length = event.target.value
}
export default state;