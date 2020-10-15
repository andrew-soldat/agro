$(function () {
   /*       burger     
   ====================== */
   const menuButton = document.querySelector(".menu__icon");
   menuButton.onclick = function () {
      document
         .querySelector(".menu__icon-line")
         .classList.toggle("menu__icon-active");
      document
         .querySelector(".header__menu")
         .classList.toggle("header__menu--active");
      document.querySelector("body").classList.toggle("lock");
   };

   /*      slider     
   ======================== */

   $(".slider-quote").slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
   });

   function ibg() {
      $.each($(".ibg"), function (index, val) {
         if ($(this).find("img").length > 0) {
            $(this).css(
               "background-image",
               'url("' + $(this).find("img").attr("src") + '")'
            );
         }
      });
   }

   ibg();

   $('a[href=""]').click(function () {
      return false;
   });

   // ================================================================================

   $(window).scroll(function () {
      $(".fadeIn-Down").each(function () {
         let imagePos = $(this).offset().top;

         let topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow + 650) {
            $(this).addClass("animate__fadeInDown");
         }
      });
   });
   $(window).scroll(function () {
      $(".fadeIn-Up").each(function () {
         let imagePos = $(this).offset().top;

         let topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow + 650) {
            $(this).addClass("animate__fadeInUp");
         }
      });
   });
   $(window).scroll(function () {
      $(".fadeIn-Left").each(function () {
         let imagePos = $(this).offset().top;

         let topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow + 650) {
            $(this).addClass("animate__fadeInLeft");
         }
      });
   });
   $(window).scroll(function () {
      $(".fadeIn-Right").each(function () {
         let imagePos = $(this).offset().top;

         let topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow + 650) {
            $(this).addClass("animate__fadeInRight");
         }
      });
   });
   $(window).scroll(function () {
      $(".fade-In").each(function () {
         let imagePos = $(this).offset().top;

         let topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow + 650) {
            $(this).addClass("animate__fadeIn");
         }
      });
   });

   // let blockStatus = true;

   // $(window).scroll(function () {
   //    $(".item-progress__desc").each(function () {
   //       let imagePos = $(this).offset().top;

   //       let topOfWindow = $(window).scrollTop();

   //       let count_finish = $(".item-progress__number").text();

   //       if (imagePos < topOfWindow + 650 && blockStatus) {
   //          blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

   //          $({ numberValue: 0 }).animate(
   //             { numberValue: count_finish },
   //             {
   //                duration: 1000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
   //                easing: "linear",

   //                step: function (val) {
   //                   $(".item-progress__number").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
   //                },
   //             }
   //          );
   //       }
   //    });
   // });

   var a = 0;
   $(window).scroll(function () {
      var oTop = $(".item-progress__desc").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
         $(".item-progress__number").each(function () {
            var $this = $(this),
               countTo = $this.attr("data-count");
            $({
               countNum: $this.text(),
            }).animate(
               {
                  countNum: countTo,
               },
               {
                  duration: 800,
                  easing: "swing",
                  step: function () {
                     $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                     $this.text(this.countNum);
                  },
               }
            );
         });
         a = 1;
      }
	});
	
});
