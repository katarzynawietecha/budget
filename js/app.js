const budget = [
  // {
  //   name: "Salary",
  //   amount: 1000,
  //   flow: "plus"
  // },
  // {
  //   name: "Salary",
  //   amount: 2000,
  //   flow: "plus"
  // }
//   {
//     name: "Payment for room",
//     amount: 300,
//     flow: "minus"
//   }
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
    total: 0,
    error: false
  },
  methods: {
    createPosition: function(){
      if((this.position.newName === "") || (this.position.newAmount === "")){
        this.error = true;
      }else{
        this.budget.push({
          name: this.position.newName,
          amount: parseFloat(this.position.newAmount),
          flow: this.position.newFlow
        })
        if(this.position.newFlow === "plus"){
          this.total += parseFloat(this.position.newAmount);
        }else{
          this.total -= parseFloat(this.position.newAmount);
        }
        //Cleaning fields
        this.position.newName = "";
        this.position.newAmount = "";
        this.position.newFlow = "plus";
      }
    },
    removePosition: function(index){
      if(this.budget[index].flow === "plus"){
        this.total -= this.budget[index].amount;
      }else{
        this.total += this.budget[index].amount;
      }
      this.budget.splice(index, 1);
    }
  }
})
