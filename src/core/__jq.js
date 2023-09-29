class App {
  // run() {
  //   function getScrollBarWidth() {
  //     var e = document.createElement('p')
  //     ;(e.style.width = '100%'), (e.style.height = '200px')
  //     var t = document.createElement('div')
  //     ;(t.style.position = 'absolute'),
  //       (t.style.top = '0px'),
  //       (t.style.left = '0px'),
  //       (t.style.visibility = 'hidden'),
  //       (t.style.width = '200px'),
  //       (t.style.height = '150px'),
  //       (t.style.overflow = 'hidden'),
  //       t.appendChild(e),
  //       document.body.appendChild(t)
  //     var l = e.offsetWidth
  //     t.style.overflow = 'scroll'
  //     e = e.offsetWidth
  //     return l == e && (e = t.clientWidth), document.body.removeChild(t), l - e
  //   }
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
  ordersMob() {
    if ($(window).width() <= 600) {
      let _this = this
      $('.orders-el').on('click', function () {
        $(this).addClass('fixed')
        _this.setNoscroll()
        return false
      })
      $('.orders-el__mob-prev').on('click', function () {
        $('.orders-el').removeClass('fixed')
        _this.unsetNoscroll()
        return false
      })
    }
  }
  choose() {
    $('.choose-el').on('click', function () {
      let $wrap = $(this).closest('.choose')
      $wrap.find('.choose-el').removeClass('active')
      $(this).addClass('active')
      return false
    })
  }
  tags() {
    $('.tags__el').on('click', function () {
      let $wrap = $(this).closest('.tags')
      $wrap.find('.tags__el').removeClass('active')
      $(this).addClass('active')
      return false
    })
  }
  paymentChoose() {
    $('.payment-choose-el__top').on('click', function () {
      let $wrap = $(this).closest('.payment-choose-el')
      if ($wrap.hasClass('active')) {
        $wrap.removeClass('active')
        $wrap.find('.payment-choose-el__dropdown').stop().slideUp(300)
      } else {
        $('.payment-choose-el').removeClass('active')
        $('.payment-choose-el__dropdown').stop().slideUp(300)
        $wrap.addClass('active')
        $wrap.find('.payment-choose-el__dropdown').stop().slideDown(300)
      }
      return false
    })
  }
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
    $('.action-btn__dropdown').each(function () {
      $(this)
        .closest('.action-btn')
        .find('.action-btn__content')
        .on('click', function () {
          let $wrap = $(this).closest('.action-btn')
          if ($wrap.hasClass('active')) {
            $wrap.removeClass('active')
            $wrap.find('.action-btn__dropdown').stop().fadeOut(300)
          } else {
            $('.action-btn').removeClass('active')
            $('.action-btn__dropdown').stop().hide()
            $wrap.addClass('active')
            $wrap.find('.action-btn__dropdown').stop().fadeIn(300)
          }
          return false
        })
    })
    if ($('.top-menu').length) {
      function menuBg() {
        if ($(window).scrollTop() >= 1) {
          $('.top-menu').addClass('bg')
        } else {
          $('.top-menu').removeClass('bg')
        }
      }
      menuBg()
      $(window).on('scroll', function () {
        menuBg()
      })
    }
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

    $('button.act-mob').on('click', function () {
      let $modal = $($(this).data('modal'))
      if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        $modal.stop().fadeOut(400)
        $('.top-menu').removeClass('bgPage')
        _this.unsetNoscroll()
      } else {
        $('.modal-act').stop().hide()
        $('.modal-mob').stop().hide()
        $('.modal-def').stop().hide()
        $('button.act-mob').removeClass('active')
        $(this).addClass('active')
        $modal.stop().fadeIn(400)
        $('.top-menu').addClass('bgPage')
        _this.setNoscroll()
      }
    })

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
    $('.btn-modal').on('click', function () {
      $('.modal-def').hide()
      let $modal = $($(this).data('modal'))
      _this.setNoscroll()
      $modal.fadeIn(300)
      return false
    })
    $('.btn-modal-act').on('click', function () {
      let $modal = $($(this).data('modal'))
      $('.profile-mob').hide()
      $('.profile-btn').removeClass('active')
      if ($(this).hasClass('active')) {
        _this.unsetNoscroll()
        $modal.fadeOut(300)
        $('.top-menu').removeClass('bg-modal')
        $(this).removeClass('active')
      } else {
        $(this).addClass('active')
        $('.top-menu').addClass('bg-modal')
        _this.setNoscroll()
        $modal.fadeIn(300)
      }
      return false
    })
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
  setNoscroll() {
    if ($('html').height() > $(window).height()) {
      document.querySelector('html').classList.add('noscroll')
    }
  }
  unsetNoscroll() {
    document.querySelector('html').classList.remove('noscroll')
  }
  clickOutside(wrap, func) {
    this.app.document.mouseup(function (e) {
      var container = wrap
      if (container.has(e.target).length === 0) {
        func()
      }
    })
  }
}
