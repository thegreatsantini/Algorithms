const input = document.querySelector('.calculator__equation');
const btn = document.querySelectorAll('.calculator__cell');
let equation = '';
let result = 0;
input.innerHTML = 'hrell'
btn.forEach(item => {
  item.addEventListener('click', (e)=> {
    console.log(e.target.innerHTML)
    input.value += e.target.innerHTML
  })
}  )
