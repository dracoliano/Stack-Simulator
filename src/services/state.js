const state = {
  data: [],
  value: '',
  pop: () => state.data.pop(),
  push: () => state.data.push(state.value),
  handleChange: (event) => state.value = event.target.value
}
export default state;