// class Counter {
//   constructor(initialValue) {
//     this.initialValue = initialValue;
//     this._refs = this._getRefs();
//     console.log(this._refs);
//     this.updateValue();
//     this._bindEvents();
//   }
//   _getRefs() {
//     const refs = {};
//     refs.decrementBtn = document.querySelector("[data-action='decrement']");
//     refs.incrementBtn = document.querySelector("[data-action='increment']");
//     refs.counterValue = document.querySelector("#value");
//     return refs;
//   }
//   _bindEvents() {
//     this._refs.decrementBtn.addEventListener("click", () => {
//       this.decrement();
//       this.updateValue();
//     });
//     this._refs.incrementBtn.addEventListener("click", () => {
//       this.increment();
//       this.updateValue();
//     });
//   }
//   updateValue() {
//     this._refs.counterValue.textContent = this.initialValue;
//   }
//   increment() {
//     this.initialValue += 1;
//   }
//   decrement() {
//     this.initialValue -= 1;
//   }
// }
// const counter = new Counter(0);
const value = document.querySelector("#value");
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");

function initializateValue(valueObj, value) {
  valueObj.textContent = value;
}
const onDecrement = () => {
  initializateValue(value, Number(value.textContent) - 1);
};
const onIncrement = () => {
  initializateValue(value, Number(value.textContent) + 1);
};
initializateValue(value, 0);
decrementBtn.addEventListener("click", onDecrement);
incrementBtn.addEventListener("click", onIncrement);
