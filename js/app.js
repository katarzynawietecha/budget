const budget = [
  {
    name: "Salary",
    amount: 1000,
    flow: "plus"
  },
  {
    name: "Payment for room",
    amount: 300,
    flow: "minus"
  }
]


new Vue({
  el: "#app",
  data: {
    title: "Budget calculator",
    budget: budget,
    singlePosition: {
      newName: "",
      newAmount: "",
      flow: ""
    }
  }
})
