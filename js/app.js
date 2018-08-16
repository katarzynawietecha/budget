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
    position: {
      newName: "",
      newAmount: "",
      newFlow: "plus" //default
    }
  },
  methods: {
    createPosition: function(){
      this.budget.push({
        name: this.position.newName,
        amount: this.position.newAmount,
        flow: this.position.newFlow
      })
    }
  }
})
