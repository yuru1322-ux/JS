const tabsButtun = document.querySelectorAll('.tabs__button')
const tabsContent = document.querySelectorAll('.tabs__content')


const tabsShow = (tab,index) => {
tab.addEventListener('click',() => {
  tabsButtun.forEach((button) => {
  button.classList.remove('is-active');
});

tabsContent.forEach((content) => {
  content.classList.remove('is-active');
});
  tab.classList.add('is-active');
  tabsContent[index].classList.add('is-active');
});
};


tabsButtun.forEach(tabsShow);
