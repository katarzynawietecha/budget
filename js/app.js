const budget = [
  // {
  //   name: "Salary",
  //   amount: 1000,
  //   flow: "plus"
  // },
  // {
  //   name: "Payment for room",
  //   amount: 300,
  //   flow: "minus"
  // }
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
    },
    total: 0
  },
  methods: {
    createPosition: function(){
      this.budget.push({
        name: this.position.newName,
        amount: this.position.newAmount,
        flow: this.position.newFlow
      })
      if(this.position.newFlow === "plus"){
        this.total += this.position.newAmount;
      }else{
        this.total -= this.position.newAmount;
      }
      //Cleaning fields
      this.position.newName = "";
      this.position.newAmount = "";
      this.position.newFlow = "plus";
    }
  }
})
