const input = document.querySelector('#output');
const btn = document.querySelectorAll('.btn');
let display = '';
let result = 0;
btn.forEach(item => {
  item.addEventListener('click', (e)=> {
    input.value += e.target.innerHTML
  })
}  )
