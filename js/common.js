const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click',function () {
searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');//클레스 요소를 찾아서
thisYear.textContent = new Date().getFullYear(); //2021

//javascript 생성자 함수 date() //요소가 가지고 있는 글자 내용들의 값을 알거나 지정할 수 있다.