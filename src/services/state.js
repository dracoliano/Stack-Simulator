const state = {
  data: [],
  pop: (data) => data.pop(),
  push: (data, value) => console.log(state.change()),//data.push(value),
  change: () => 1,
  handleChange: () => this.change
}
export default state;