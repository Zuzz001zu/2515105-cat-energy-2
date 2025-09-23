/* в этот файл добавляет скрипты*/
const navigation = document.querySelector('.nav');
const navToggle = document.querySelector('.button-burger');

navToggle.classList.add('button-burger--open');
navigation.classList.add('nav--js');
navigation.classList.remove('nav--open');

navToggle.addEventListener('click', () => {
  if (navigation.classList.contains('nav--open')) {
    navigation.classList.remove('nav--open');
    navToggle.classList.remove('button-burger--close');
    navToggle.classList.add('button-burger--open');
  } else {
    navigation.classList.add('nav--open');
    navToggle.classList.add('button-burger--close');
    navToggle.classList.remove('button-burger--open');
  }
});
