import { refs } from './refs';
import { choiceMainRender } from './render_utils';
import { addToStorage, getFromStorage } from './storage';
import darkThemeImage from '../images/bg-dark-theme.jpg'

// window.onload = autoTheme();
window.onload = checkStorageOfTheme();

// checkStorageOfTheme();

refs.changeOfTheme.addEventListener('change', onThemeSelected);

function onThemeSelected(event) {
  let themeCheck = event.target.value;

  if (themeCheck === 'dark') {
    addToStorage('theme', `"dark"`);
    darkTheme();
    // refs.themeDarkIcon.style.color = '#ff6b01';
    // refs.themeLightIcon.style.color = '#ffffff';
  } else if (themeCheck === 'light') {
    addToStorage('theme', `"light"`);
    lightTheme();
    // refs.themeDarkIcon.style.color = '#ffffff';
    // refs.themeLightIcon.style.color = '#ff6b01';
  } else {
    addToStorage('theme', `"auto"`);
    autoTheme();
    // refs.themeDarkIcon.style.color = '#ffffff';
    // refs.themeLightIcon.style.color = '#ffffff';
  }
  choiceMainRender();
}

function darkTheme() {
  document.body.style.backgroundColor = '#2C2B2B';
  // document.body.style.backgroundImage = `url("${darkThemeImage}")`;
  refs.footer.style.backgroundColor = '#000000';
  refs.sliderTitle.style.color = '#FFFFFF';
  refs.footerSupp.style.color = '#FFFFFF';
  refs.footerApp.style.color = '#FFFFFF';
  refs.footerJoin.style.color = '#FFFFFF';
  refs.footerEmail.style.color = '#FFFFFF';
  refs.footerCopy.style.color = '#FFFFFF';
  // зміни для модалки фільму
  refs.modalMovie.style.backgroundColor = '#2C2B2B';

  refs.themeDarkIcon.style.color = '#ff6b01';
  refs.themeLightIcon.style.color = '#ffffff';
}

function lightTheme() {
  document.body.style.backgroundColor = '#FFFFFF';
  // document.body.style.backgroundImage = 'none';
  refs.sliderTitle.style.color = '#000000';
  refs.footer.style.backgroundColor = '#F7F7F7';
  refs.footerSupp.style.color = '#545454';
  refs.footerApp.style.color = '#545454';
  refs.footerJoin.style.color = '#545454';
  refs.footerEmail.style.color = '#545454';
  refs.footerCopy.style.color = '#545454';
  refs.modalMovie.style.backgroundColor = '#ffffff';

  // зміни для модалки фільму
  refs.modalMovie.style.backgroundColor = '#fff';

  refs.themeDarkIcon.style.color = '#ffffff';
  refs.themeLightIcon.style.color = '#ff6b01';
}

function autoTheme() {
  const date = new Date();
  const dateNow = date.getHours();

  if (dateNow > 6 && dateNow < 22) {
    lightTheme();
  } else {
    darkTheme();
  }
}

function checkStorageOfTheme() {
  if (getFromStorage('theme') === 'dark') {
    darkTheme();
    refs.changeOfTheme.value = 'dark';
  } else if (getFromStorage('theme') === 'light') {
    lightTheme();
    refs.changeOfTheme.value = 'light';
  } else {
    autoTheme();
    refs.changeOfTheme.value = 'auto';
  }
}

function checkThemeAutoAttribute() {
  if (refs.themeAuto.hasAttribute(selected)) {
    refs.themeAuto.removeAttribute(selected);
  } else {
    refs.themeAuto.setAttribute(selected, true);
  }
}

function checkThemeDarkAttribute() {
  if (refs.themeDark.hasAttribute(selected)) {
    refs.themeDark.removeAttribute(selected);
  } else {
    refs.themeDark.setAttribute(selected, true);
  }
}

function checkThemeLightAttribute() {
  if (refs.themeLight.hasAttribute(selected)) {
    refs.themeLight.removeAttribute(selected);
  } else {
    refs.themeLight.setAttribute(selected, true);
  }
}
