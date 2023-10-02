class App {
  // run() {
  //   $('head').append('<style>.noscroll{margin-right: ' + getScrollBarWidth() + 'px;}</style>')
  //   $('head').append(
  //     '<style>.noscroll .top-menu{padding-right: ' + getScrollBarWidth() + 'px;}</style>',
  //   )
  // }
  // chat() {
  //   $('.chat-acts__inp').on('input', function () {
  //     this.style.height = '1px'
  //     this.style.height = this.scrollHeight + 'px'
  //   })
  //   $('.chat__el').on('click', function () {
  //     $('.chat__el').removeClass('active')
  //     $(this).addClass('active')
  //     return false
  //   })
  //   $('.chat__body-wrap').scrollTop(9999)
  //   $('.chat__body').scrollTop(9999)
  //   if ($(window).width() <= 991) {
  //     $('.chat__el').on('click', function () {
  //       $('.chat__body').stop().fadeIn(300)
  //       $('#modal-support').addClass('open')
  //       return false
  //     })
  //     $('.chat__prev').on('click', function () {
  //       $('#modal-support').removeClass('open')
  //       $('.chat__body').stop().fadeOut(300)
  //       return false
  //     })
  //   }
  // }


  // theme() {
  //   $('.theme-btn__btn_black').on('click', function () {
  //     $('.theme-btn__btn').removeClass('active')
  //     $('html').removeClass('theme-white')
  //     $('.theme-btn__btn_black').addClass('active')
  //     return false
  //   })
  //   $('.theme-btn__btn_white').on('click', function () {
  //     $('.theme-btn__btn').removeClass('active')
  //     $('html').addClass('theme-white')
  //     $('.theme-btn__btn_white').addClass('active')
  //     return false
  //   })
  // }

  masonry() {
    if ($(window).width() > 600) {
      let mas = $('.rewiews_masonry').masonry({
        itemSelector: '.rewiews__el',
        horizontalOrder: true,
        resize: true,
      })
      setTimeout(() => {
        mas.masonry('layout')
      }, 100)
    }
  }
  menu() {
    let _this = this

    $('.top-menu__burger, .menu-mob__close').on('click', function () {
      if ($('.menu-mob').hasClass('active')) {
        $('.menu-mob').removeClass('active')
        $('.menu-mob').stop().fadeOut(400)
        if (!$('.top-menu').hasClass('profile')) {
          _this.unsetNoscroll()
        }
      } else {
        $('.menu-mob').addClass('active')
        $('.menu-mob').stop().fadeIn(400)
        _this.setNoscroll()
      }
      return false
    })
    $('.action-btn__dropdown-close').on('click', function () {
      let $wrap = $(this).closest('.action-btn')
      $wrap.removeClass('active')
      $wrap.find('.action-btn__dropdown').stop().fadeOut(300)
      return false
    })

    // $('button.act-mob').on('click', function () {
    //   let $modal = $($(this).data('modal'))
    //   if ($(this).hasClass('active')) {
    //     $(this).removeClass('active')
    //     $modal.stop().fadeOut(400)
    //     $('.top-menu').removeClass('bgPage')
    //     _this.unsetNoscroll()
    //   } else {
    //     $('.modal-act').stop().hide()
    //     $('.modal-mob').stop().hide()
    //     $('.modal-def').stop().hide()
    //     $('button.act-mob').removeClass('active')
    //     $(this).addClass('active')
    //     $modal.stop().fadeIn(400)
    //     $('.top-menu').addClass('bgPage')
    //     _this.setNoscroll()
    //   }
    // })

    this.clickOutside($('.action-btn'), function () {
      $('.action-btn').removeClass('active')
      $('.action-btn__dropdown').stop().fadeOut(300)
    })
  }
  modal() {
    let _this = this
    $('.modal-def__overlay, .modal-content__close, .modal-def__close').on('click', function () {
      let $modal = $(this).closest('.modal-def')
      $modal.fadeOut(300)
      if (!$('.top-menu').hasClass('profile')) {
        _this.unsetNoscroll()
      }
      return false
    })
    // $('.btn-modal').on('click', function () {
    //   $('.modal-def').hide()
    //   let $modal = $($(this).data('modal'))
    //   _this.setNoscroll()
    //   $modal.fadeIn(300)
    //   return false
    // })
    // $('.btn-modal-act').on('click', function () {
    //   let $modal = $($(this).data('modal'))
    //   $('.profile-mob').hide()
    //   $('.profile-btn').removeClass('active')
    //   if ($(this).hasClass('active')) {
    //     _this.unsetNoscroll()
    //     $modal.fadeOut(300)
    //     $('.top-menu').removeClass('bg-modal')
    //     $(this).removeClass('active')
    //   } else {
    //     $(this).addClass('active')
    //     $('.top-menu').addClass('bg-modal')
    //     _this.setNoscroll()
    //     $modal.fadeIn(300)
    //   }
    //   return false
    // })
    $('.btn-notify').on('click', function () {
      if ($('.sec-notify').hasClass('active')) {
        $('.sec-notify').removeClass('active')
        $('.sec-page__sidebar').fadeOut(400)
        _this.unsetNoscroll()
      } else {
        $('.sec-notify').addClass('active')
        $('.sec-page__sidebar').fadeIn(400)
      }
      return false
    })
    if ($(window).width() <= 768) {
      _this.clickOutside($('.sec-page__sidebar'), function () {
        $('.sec-notify').removeClass('active')
        $('.sec-page__sidebar').fadeOut(400)
        // _this.unsetNoscroll();
      })
    }
  }
}
