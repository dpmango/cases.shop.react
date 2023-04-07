// waitForElm('.accordeon__button').then(() => {
//   var accordeonButtons = document.getElementsByClassName('accordeon__button')

//   //пишем событие при клике на кнопки - вызов функции toggle
//   for (var i = 0; i < accordeonButtons.length; i++) {
//     var accordeonButton = accordeonButtons[i]

//     accordeonButton.addEventListener('click', toggleItems, false)
//   }

//   function toggleItems() {
//     // переменная кнопки(актульная) с классом
//     var itemClass = this.className

//     // добавляем всем кнопкам класс close
//     for (var i = 0; i < accordeonButtons.length; i++) {
//       accordeonButtons[i].className = 'accordeon__button closed'
//     }

//     // закрываем все открытые панели с текстом
//     var pannels = document.getElementsByClassName('accordeon__panel')
//     for (var z = 0; z < pannels.length; z++) {
//       pannels[z].style.maxHeight = 0
//     }

//     // проверка. если кнопка имеет класс close при нажатии
//     // к актуальной(нажатой) кнопке добававляем активный класс
//     // а панели - которая находится рядом задаем высоту
//     if (itemClass == 'accordeon__button closed') {
//       this.className = 'accordeon__button active'
//       var panel = this.nextElementSibling
//       panel.style.maxHeight = panel.scrollHeight + 'px'
//     }
//   }
// })
