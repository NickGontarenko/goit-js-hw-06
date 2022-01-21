const counter = {
  value: 0,
  decriment() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

decrementBtnRef.addEventListener('click', onClickDecrementBtn);
incrementBtnRef.addEventListener('click', onClickIncrementBtn);

function onClickDecrementBtn() {
  counter.decriment();
  counterValueRef.textContent = counter.value;
}

function onClickIncrementBtn() {
  counter.increment();
  counterValueRef.textContent = counter.value;
}
