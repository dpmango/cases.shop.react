// Burger

$('.menu .button').click(function (event) {
  $(this).toggleClass('active')
  $('.burger').toggleClass('active')
  return false
})

waitForElm('.a1').then(() => {
  $('.a1').click(function (e) {
    e.preventDefault()
    $('#a1').arcticmodal({})
  })
})

//
$('.popup__form').submit(function (event) {
  $.arcticmodal('close')
})

waitForElm('.a2').then(() => {
  $('.a2').click(function (e) {
    e.preventDefault()
    $('#a2').arcticmodal({})
  })
})

waitForElm('.a3').then(() => {
  $('.a3').click(function (e) {
    e.preventDefault()
    $('#a3').arcticmodal({})
  })
})

waitForElm('.a4').then(() => {
  $('.a4').click(function (e) {
    e.preventDefault()
    $('#a4').arcticmodal({})
  })
})

waitForElm('.accordeon__button').then(() => {
  var accordeonButtons = document.getElementsByClassName('accordeon__button')

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i]

    accordeonButton.addEventListener('click', toggleItems, false)
  }

  function toggleItems() {
    // переменная кнопки(актульная) с классом
    var itemClass = this.className

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons.length; i++) {
      accordeonButtons[i].className = 'accordeon__button closed'
    }

    // закрываем все открытые панели с текстом
    var pannels = document.getElementsByClassName('accordeon__panel')
    for (var z = 0; z < pannels.length; z++) {
      pannels[z].style.maxHeight = 0
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass == 'accordeon__button closed') {
      this.className = 'accordeon__button active'
      var panel = this.nextElementSibling
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  }
})

// svg
$(function () {
  jQuery('img.svg').each(function () {
    var $img = jQuery(this)
    var imgID = $img.attr('id')
    var imgClass = $img.attr('class')
    var imgURL = $img.attr('src')

    jQuery.get(
      imgURL,
      function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg')

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID)
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg')
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a')

        // Check if the viewport is set, else we gonna set it if we can.
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg)
      },
      'xml',
    )
  })
})
