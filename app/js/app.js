import $ from 'jquery'
window.jQuery = $
window.$ = $

import 'magnific-popup/dist/jquery.magnific-popup.min.js';
import 'slick-carousel/slick/slick.js';

document.addEventListener('DOMContentLoaded', () => {

	$('.dropdown .title').on('click', function() {
		if($(this).parent().hasClass('active')) {
			$(this).siblings('.content').slideUp();
			$(this).parent().removeClass('active');
		} else {
			$(this).siblings('.content').slideDown();
			$(this).parent().addClass('active');
		}
	});

	var $status = $('.pagingInfo');
	var $slickElement = $('.slideshow');
	
	$('.slider_first').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
			//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
			var i = (currentSlide ? currentSlide : 0) + 1;
			$status.text(i + '/' + slick.slideCount);
	});

	$('.slider_first').slick({
		infinite: true,
		autoplay: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		// prevArrow: '<svg class="slick-prev" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 12H3.67" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
		// nextArrow: '<svg class="slick-next" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.43 5.92993L20.5 11.9999L14.43 18.0699" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.5 12H20.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
		responsive: [
			{
				breakpoint: 990,
				settings: {
					prevArrow: '<svg class="slick-prev" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 12H3.67" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
					nextArrow: '<svg class="slick-next" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.43 5.92993L20.5 11.9999L14.43 18.0699" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.5 12H20.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',			
					slidesToShow: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					prevArrow: '<svg class="slick-prev" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#2842D8"/><path d="M23 27.9201L16.48 21.4001C15.71 20.6301 15.71 19.3701 16.48 18.6001L23 12.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
					nextArrow: '<svg class="slick-next" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#2842D8"/><path d="M16.91 27.9201L23.43 21.4001C24.2 20.6301 24.2 19.3701 23.43 18.6001L16.91 12.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',			
					slidesToShow: 1
				}
			}
		]
	});

	$('.hero .slider_first .slide').each(function( index ) {
		$(this).css('background-image', 'url('+ $(this).attr('data-d') +')');
	});

	$( window ).on( "resize", function() {
		$('.hero .slider_first .slide').each(function( index ) {
			$(this).css('background-image', 'url('+ $(this).attr('data-d') +')');
		});
	} );
	
	$('.slider_second').slick({
		infinite: true,
		autoplay: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		prevArrow: '<svg class="slick-prev" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" transform="matrix(-1 0 0 1 48 0)" fill="white"/><path d="M27.09 31.9201L20.57 25.4001C19.8 24.6301 19.8 23.3701 20.57 22.6001L27.09 16.0801" stroke="#2842D8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
		nextArrow: '<svg class="slick-next" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="white"/><path d="M20.91 31.9201L27.43 25.4001C28.2 24.6301 28.2 23.3701 27.43 22.6001L20.91 16.0801" stroke="#2842D8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
		responsive: [
			{
				breakpoint: 990,
				settings: {
					prevArrow: '<svg class="slick-prev" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" transform="matrix(-1 0 0 1 48 0)" fill="white"/><path d="M27.09 31.9201L20.57 25.4001C19.8 24.6301 19.8 23.3701 20.57 22.6001L27.09 16.0801" stroke="#2842D8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
					nextArrow: '<svg class="slick-next" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="white"/><path d="M20.91 31.9201L27.43 25.4001C28.2 24.6301 28.2 23.3701 27.43 22.6001L20.91 16.0801" stroke="#2842D8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
					slidesToShow: 1,
					dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					prevArrow: '<svg class="slick-prev" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#2842D8"/><path d="M23 27.9201L16.48 21.4001C15.71 20.6301 15.71 19.3701 16.48 18.6001L23 12.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
					nextArrow: '<svg class="slick-next" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#2842D8"/><path d="M16.91 27.9201L23.43 21.4001C24.2 20.6301 24.2 19.3701 23.43 18.6001L16.91 12.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',			
					slidesToShow: 1,
					dots: true,
				}
			}
		]
	});

	if (window.screen.width > 766) {
		$('.catalog_slider_new').slick({
			infinite: true,
			autoplay: false,
			arrows: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			prevArrow: '<svg class="slick-prev" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="none"/><path d="M26.9998 31.9201L20.4798 25.4001C19.7098 24.6301 19.7098 23.3701 20.4798 22.6001L26.9998 16.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
			nextArrow: '<svg class="slick-next" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="none"/><path d="M20.9102 31.9201L27.4302 25.4001C28.2002 24.6301 28.2002 23.3701 27.4302 22.6001L20.9102 16.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
		});

		$('.news_slider').slick({
			infinite: true,
			autoplay: false,
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			prevArrow: '<svg class="slick-prev" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="none"/><path d="M26.9998 31.9201L20.4798 25.4001C19.7098 24.6301 19.7098 23.3701 20.4798 22.6001L26.9998 16.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
			nextArrow: '<svg class="slick-next" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="none"/><path d="M20.9102 31.9201L27.4302 25.4001C28.2002 24.6301 28.2002 23.3701 27.4302 22.6001L20.9102 16.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
		});

		$('.catalog-cat-slider').slick({
			infinite: true,
			autoplay: false,
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			prevArrow: '<svg class="slick-prev" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="none"/><path d="M26.9998 31.9201L20.4798 25.4001C19.7098 24.6301 19.7098 23.3701 20.4798 22.6001L26.9998 16.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
			nextArrow: '<svg class="slick-next" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="none"/><path d="M20.9102 31.9201L27.4302 25.4001C28.2002 24.6301 28.2002 23.3701 27.4302 22.6001L20.9102 16.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
		});
	}

	$('.catalog-tabs .tabs .tab').on('click', function(){
		$(this).siblings('.tab').removeClass('active');
		$(this).addClass('active');
		var nav = $(this).attr('data-nav-tab');
		$('.content_catalog').removeClass('active');
		$('*[data-tab='+ nav +']').addClass('active');
	});

	$('#contest_popup .title .tab').on('click', function(){
		$(this).siblings('.tab').removeClass('active');
		$(this).addClass('active');
		var nav = $(this).attr('data-nav-tab');
		$('#contest_popup .wrapper').removeClass('active');
		$('*[data-tab='+ nav +']').addClass('active');
	});

	$('.news-page .tabs .tab').on('click', function(){
		$(this).siblings('.tab').removeClass('active');
		$(this).addClass('active');
		var nav = $(this).attr('data-nav-tab');
		$('.content_catalog').removeClass('active');
		$('*[data-tab='+ nav +']').addClass('active');
	});

	$('.product-card .buy_type .button').on('click', function(){
		if (window.screen.width < 992) {
			$(this).parent().addClass('d-none');
			$(this).parent().siblings().removeClass('d-none');
		}
		var num = $(this).attr('data-show');
		if (num == 2 || num == 4) {
			$('.product-card .case').slideDown();
			$('.rullet_wrapper').addClass('active');
		} else {
			$('.rullet_wrapper').removeClass('active');
			$('.product-card .case').slideUp();
		}
		$(this).siblings('.button').removeClass('active');
		$(this).addClass('active');
		$('.button-list').removeClass('active');
		$('*[data-active='+ num +']').addClass('active');


	});

	$('.burger').on('click', function() {
		$(this).toggleClass('active');
		$('.mobile-menu').toggleClass('active');
		$('body').toggleClass('active');
		if ($(this).hasClass('active')) {
			$('.burger span').text('Закрыть');
			$('.burger svg').remove();
			$(this).append('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.5L22.8627 22.5627" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.8625 1.5L1.49986 22.5627" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
		} else {
			$('.burger span').text('Меню');
			$('.burger svg').remove();
			$(this).append('<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9.33325H28" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M4 16H28" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M4 22.6667H28" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>');
		}

	});

	$('.contest_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.catalog_link').on('click', function() {
		$('.catalog_menu').addClass('active');
		$('.catalog_menu_layer').addClass('active');


		// $(window).on('scroll', function() {
		// 	$('.catalog_menu').removeClass('active');
		// 	$('.catalog_menu_layer').removeClass('active');	
		// });

	});

	$('.catalog_menu_layer').on('click', function() {	
		$('.catalog_menu').removeClass('active');
		$('.catalog_menu_layer').removeClass('active');
	});

	$('.catalog-close').on('click', function() {
		$('.catalog_menu').removeClass('active');
		$('.catalog_menu_layer').removeClass('active');

	});

	$('.titles a').on( "mouseenter", function() {
		$('.wrapper .content div').removeClass('active');
		var nav = $(this).attr('data-tab');
		$('*[data-tab-num='+ nav +']').addClass('active');
  });

	$('.checkbox-list label input[type=checkbox]').on('change', function() {
		if ($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().addClass('active');
		}
	});

	$('.catalog-filter .block.drop .title').on('click', function() {
		if ($(this).parent().hasClass('active')) {
			$(this).children('svg').css('transform', 'rotate(0deg)');
			$(this).parent().removeClass('active');
			$(this).siblings('.content').slideUp();
		} else {
			$(this).children('svg').css('transform', 'rotate(180deg)');
			$(this).parent().addClass('active');
			$(this).siblings('.content').slideDown();
		}
	});

	$('.block .switcher_ui input[type=checkbox]').on('change', function() {
		$(this).parent().toggleClass('active')
	});

	let sliderOne = document.querySelector('#slider-1');
	if (sliderOne != null) {
		let sliderTwo = document.querySelector('#slider-2');
		let displayValOne = document.querySelector('#range1');
		let displayValTwo = document.querySelector('#range2');

		let displayValFive = document.querySelector('#range5');
		let displayValSix = document.querySelector('#range6');

		let minGap = 0;
		let sliderTrack = document.querySelector('.slider-track');
		let sliderMaxValue = document.querySelector('#slider-1').max;

		$('#slider-1').on('input', function() {
			slideOne();
		});
		$('#slider-2').on('input', function() {
			slideTwo();
		});

		function slideOne(){
				if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
						sliderOne.value = parseInt(sliderTwo.value) - minGap;
				}
				displayValOne.textContent = sliderOne.value;
				if (displayValFive != null) {
					displayValFive.textContent = sliderOne.value;
				}
				fillColor();
		}
		function slideTwo(){
				if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
						sliderTwo.value = parseInt(sliderOne.value) + minGap;
				}
				displayValTwo.textContent = sliderTwo.value;
				if (displayValSix != null) {
					displayValSix.textContent = sliderTwo.value;
				}
				fillColor();
		}
		function fillColor(){
				var percent1 = (sliderOne.value / sliderMaxValue) * 100;
				var percent2 = (sliderTwo.value / sliderMaxValue) * 100;
				sliderTrack.style.background = `linear-gradient(to right, #CCCCCC ${percent1}% , #8B9A93 ${percent1}% , #8B9A93 ${percent2}%, #CCCCCC ${percent2}%)`;
		}

		window.onload = function(){
			slideOne();
			slideTwo();
		}
	}

	let sliderOne1 = document.querySelector('#slider-3');
	if (sliderOne1 != null) {
		let sliderTwo1 = document.querySelector('#slider-4');
		let displayValOne1 = document.querySelector('#range3');
		let displayValTwo1 = document.querySelector('#range4');
		let minGap1 = 0;
		let sliderTrack1 = document.querySelector('.tr1');
		let sliderMaxValue1 = document.querySelector('#slider-3').max;

		$('#slider-3').on('input', function() {
			slideOne1();
		});
		$('#slider-4').on('input', function() {
			slideTwo1();
		});

		function slideOne1(){
				if(parseInt(sliderTwo1.value) - parseInt(sliderOne1.value) <= minGap1){
						sliderOne1.value = parseInt(sliderTwo1.value) - minGap1;
				}
				displayValOne1.textContent = sliderOne1.value;
				fillColor1();
		}
		function slideTwo1(){
				if(parseInt(sliderTwo1.value) - parseInt(sliderOne1.value) <= minGap1){
						sliderTwo1.value = parseInt(sliderOne1.value) + minGap1;
				}
				displayValTwo1.textContent = sliderTwo1.value;
				fillColor1();
		}
		function fillColor1(){
				var percent1 = (sliderOne1.value / sliderMaxValue1) * 100;
				var percent2 = (sliderTwo1.value / sliderMaxValue1) * 100;
				sliderTrack1.style.background = `linear-gradient(to right, #CCCCCC ${percent1}% , #8B9A93 ${percent1}% , #8B9A93 ${percent2}%, #CCCCCC ${percent2}%)`;
		}

		window.onload = function(){
			slideOne1();
			slideTwo1();
		}
	}

	$('.mobile-filter .mobile-filter-switcher').on('click', function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).siblings('.mobile-filter-wrapper').slideUp();
			$(this).siblings('.do_filter').css('display', 'none');
			$(this).siblings('.close_filter').css('display', 'none');

		} else {
			$(this).addClass('active');
			$(this).siblings('.mobile-filter-wrapper').slideDown();
			$(this).siblings('.do_filter').css('display', 'flex');
			$(this).siblings('.close_filter').css('display', 'flex');
		}
	});

	$('.mobile-filter .close_filter').on('click', function() {
		$(this).siblings('.mobile-filter-switcher').removeClass('active');
		$(this).siblings('.mobile-filter-wrapper').slideUp();
		$(this).siblings('.do_filter').css('display', 'none');
		$(this).css('display', 'none');

	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
  	autoplaySpeed: 6000,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 9,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		// centerMode: true,
		arrows: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 9,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,					
				}
			}
		]
	});

	if (window.screen.width < 990) {
		$('.photo-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true,
			prevArrow: '<svg class="slick-prev" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#2842D8"/><path d="M22.9998 27.92L16.4798 21.4C15.7098 20.63 15.7098 19.37 16.4798 18.6L22.9998 12.08" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
			nextArrow: '<svg class="slick-next" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#2842D8"/><path d="M16.9102 27.92L23.4302 21.4C24.2002 20.63 24.2002 19.37 23.4302 18.6L16.9102 12.08" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
		});
	}

	$('.faq .item .title').on('click', function() {
		if($(this).parent().hasClass('active')) {
			$(this).siblings('.content').slideUp();
			$(this).parent().removeClass('active');
		} else {
			$(this).siblings('.content').slideDown();
			$(this).parent().addClass('active');
		}
	});

	$('.cart-page .fields .select').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).siblings('.options').slideUp();
			$(this).removeClass('active');
		} else {
			$(this).siblings('.options').slideDown();
			$(this).addClass('active');
		}
	});

	$('.cart-page .fields .options .option').on('click', function() {
		var num = $(this).attr('data-num');
		$("#pay_select").val(num).change();

		$('.select .icon img').remove();
		$(this).children('img').clone().appendTo( ".select .icon" );

		$('.cart-page .fields .select').siblings('.options').slideUp(100);
		// $('.cart-page .fields .select').siblings('.options').css('display', 'none');
		$('.cart-page .fields .select').removeClass('active');

	});

	$('.payment-popup .fields .select').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).siblings('.options').slideUp();
			$(this).removeClass('active');
		} else {
			$(this).siblings('.options').slideDown();
			$(this).addClass('active');
		}
	});

	$('.payment-popup .fields .options .option').on('click', function() {
		var num = $(this).attr('data-num');
		$("#case_pay_select").val(num).change();

		$('.select .icon img').remove();
		$(this).children('img').clone().appendTo( ".select .icon" );

		$('.payment-popup .fields .select').siblings('.options').slideUp(100);
		$('.payment-popup .fields .select').removeClass('active');
		
	});
	
	$('.checkbox input').on('change', function() {
		$(this).siblings('svg').toggleClass('active');
	});

	$('.check input').on('change', function() {
		$(this).siblings('svg').toggleClass('active');
	});

	function makeTimer() {

		//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
			// var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");
			var	endTime = $('#timer1').attr('data-end');	
				endTime = (Date.parse(endTime) / 1000);
	
				var now = new Date();
				now = (Date.parse(now) / 1000);
	
				var timeLeft = endTime - now;
	
				var days = Math.floor(timeLeft / 86400); 
				var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
				var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
				var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		
				if (hours < "10") { hours = "0" + hours; }
				if (minutes < "10") { minutes = "0" + minutes; }
				if (seconds < "10") { seconds = "0" + seconds; }
	
				$("#days").html(days + "<span>д</span>");
				$("#hours").html(hours + "<span>ч</span>");
				$("#minutes").html(minutes + "<span>м</span>");
				$("#seconds").html(seconds + "<span>с</span>");		

				$("#days1").html(days + "<span>д</span>");
				$("#hours1").html(hours + "<span>ч</span>");
				$("#minutes1").html(minutes + "<span>м</span>");
				$("#seconds1").html(seconds + "<span>с</span>");	
	
	}
	setInterval(function() { makeTimer(); }, 1000);

	$('.login_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.fiz_login_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.tg_login_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.z1_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.z2_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.z3_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.payment_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		fixedContentPos: true,
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.cart_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.searchform .tag-swicther').on('click', function() {
		$(this).siblings('.tags').toggleClass('active');
		if ($(this).siblings('.tags').hasClass('active')) {
			$(this).siblings('.tags').slideDown({
				start: function () {
					$(this).css({
						display: "flex"
					})
				}
			});
		} else {
			$(this).siblings('.tags').slideUp();
		}
	});

	$('.searchform .tabs .item').on('click', function(){
		$(this).siblings('.item').removeClass('active');
		$(this).addClass('active');
		var nav = $(this).attr('data-nav-tab');
		$('.content-type').removeClass('active');
		$('*[data-tab='+ nav +']').addClass('active');
	});

	function isShown() {
		if($('.searchform').hasClass('active')) {
			const target = $('.searchform')
			document.addEventListener('click', (event) => {
				var withinBoundaries = event.composedPath().includes(target)
				if (withinBoundaries) {
					console.log('Click happened inside element')
				} else {
						console.log('Click happened **OUTSIDE** element')
						$('.searchform').removeClass('active');
				}
			})
		}
	}

	$('.search form input').on('click', function() {	
		$('.searchform').addClass('active');
		$('.search-form_layer').addClass('active');
	});

	$('.search-form_layer').on('click', function() {	
		$('.searchform').removeClass('active');
		$('.search-form_layer').removeClass('active');
	});

	$('.catalog-filter .tabs .tab').on('click', function(){
		$(this).siblings('.tab').removeClass('active');
		$(this).addClass('active');
		var nav = $(this).attr('data-nav-tab');
		$('.content-type').removeClass('active');
		$('*[data-tab='+ nav +']').addClass('active');
	});

	$('.label .promo .button').on('click', function() {
		var val = $(this).siblings('label').children('.is_active').val();
		// console.log(val);
		if (val == 1) {
			val = 0;
			$(this).siblings('label').children('.is_active').val(val);
		} else {
			val = 1;
			$(this).siblings('label').children('.is_active').val(val);
		}
	});

	$('.catalog-filter .tabs_list .tab').on('click', function(){
		$(this).siblings('.tab').removeClass('active');
		$(this).addClass('active');
		var nav = $(this).attr('data-nav-tab');
		$('.content-catalog').removeClass('active');
		$('*[data-tab='+ nav +']').addClass('active');
	});

	$('.case_list').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 900,
		arrows: false,
		slidesToShow: 9,
		slidesToScroll: 1,
		dots: false,
		responsive: [
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 9,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 430,
				settings: {
					slidesToShow: 4,
				}
			}
		]
	});

	$('.user_menu').on('click', function() {
		$(this).toggleClass('active');
		$('.user_menu_wrapper').toggleClass('active');
	});

	$('.balance input').on('change', function() {
		$(this).siblings('svg').toggleClass('active');
	});

	$('.case_list_wrapper .hide-button').on('click', function() {
		$(this).toggleClass('active');
		$(this).parent().siblings('.cases').slideToggle();
	});

	$('.payment_form input.pay_summ').on('change', function() {
		var summ = $(this).val();
		$(this).parent().siblings('.get_summ').children('b').empty();
		if (summ != '') {
			$(this).parent().siblings('.get_summ').children('b').append(summ+' ₽');
		} else {
			$(this).parent().siblings('.get_summ').children('b').append('0 ₽');
		}
	});
	
	$('.payments_list .item').on('click', function() {

		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		var payment = $(this).attr('data-pay');
		$('.payment .selected_payment').empty();
		$('.payment .selected_payment').append(payment);
		$('.payment .payment_logo img').remove();
		$(this).children('img').clone().appendTo( ".payment .payment_logo" );

	});

	$('.payment_form .promo .button').on('click', function() {
		var val = $(this).siblings('label').children('.is_active').val();
		if (val == 1) {
			val = 0;
			$(this).siblings('label').children('.is_active').val(val);
		} else {
			val = 1;
			$(this).siblings('label').children('.is_active').val(val);
		}
	});

	if (window.screen.width < 992) {
		$('.payment_form .payment').on('click', function() {
			$(this).children('svg').toggleClass('active');
			$(this).siblings('.mobile_payments').slideToggle();
		});

		$('.mobile_payments .item').on('click', function() {

			$(this).siblings().removeClass('active');
			$(this).addClass('active');
	
			var payment = $(this).attr('data-pay');
			$('.payment .selected_payment').empty();
			$('.payment .selected_payment').append(payment);
			$('.payment .payment_logo img').remove();
			$(this).children('img').clone().appendTo( ".payment .payment_logo" );
	
			$('.payment_form .payment').children('svg').removeClass('active');
			$('.payment_form .payment').siblings('.mobile_payments').slideUp();


		});
	}

	$('.show_count').on('click', function() {
		$(this).toggleClass('active');
	});

	$('.show_count .show_list li').on('click', function() {
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
		var text = $(this).html();
		$('.show_count span').empty();
		$('.show_count span').append(text);
		resetCounterEvents();
	});


	if (window.screen.width > 991) {
		$('.catalog .sort .view svg').on('click', function() {
			$(this).siblings('svg').removeClass('active');
			$(this).addClass('active');
			if ($(this).hasClass('grid-type')) {
				$('.content-catalog.products .row .col-6').addClass('col-xl-3');
				$('.content-catalog.products .row .col-xl-12').removeClass('col-xl-12');
				$('.content-catalog.products .row .col-6 .card').addClass('active');
				$('.content-catalog.products .row .col-6 .product-card_list').removeClass('active');

			} else {
				$('.content-catalog.products .row .col-xl-3').removeClass('col-xl-3');
				$('.content-catalog.products .row .col-6').addClass('col-xl-12');
				$('.content-catalog.products .row .col-6 .card').removeClass('active');
				$('.content-catalog.products .row .col-6 .product-card_list').addClass('active');

			}
		});
		$('.servs .sort .view svg').on('click', function() {
			$(this).siblings('svg').removeClass('active');
			$(this).addClass('active');
			if ($(this).hasClass('grid-type')) {
				$('.products .row .col-6').addClass('col-xl-3');
				$('.products .row .col-xl-12').removeClass('col-xl-12');
				$('.products .row .col-6 .card').addClass('active');
				$('.products .row .col-6 .product-card_list').removeClass('active');

			} else {
				$('.products .row .col-xl-3').removeClass('col-xl-3');
				$('.products .row .col-6').addClass('col-xl-12');
				$('.products .row .col-6 .card').removeClass('active');
				$('.products .row .col-6 .product-card_list').addClass('active');

			}
		});
	}


	if ($('.product-card .container-fluid').length != ''){
	(function(){
		var a = document.querySelector('.fixed-block'), b = null, K = null, Z = 0, P = 10, N = 10;  // если у P ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента, если у N — нижний край дойдёт до нижнего края элемента. Может быть отрицательным числом
		window.addEventListener('scroll', Ascroll, false);
		document.body.addEventListener('scroll', Ascroll, false);
		function Ascroll() {
			var Ra = a.getBoundingClientRect(),
					R1bottom = document.querySelector('.product-card .container-fluid').getBoundingClientRect().bottom;
			if (Ra.bottom < R1bottom) {
				if (b == null) {
					var Sa = getComputedStyle(a, ''), s = '';
					for (var i = 0; i < Sa.length; i++) {
						if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
							s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
						}
					}
					b = document.createElement('div');
					b.className = "stop";
					b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
					a.insertBefore(b, a.firstChild);
					var l = a.childNodes.length;
					for (var i = 1; i < l; i++) {
						b.appendChild(a.childNodes[1]);
					}
					a.style.height = b.getBoundingClientRect().height + 'px';
					a.style.padding = '0';
					a.style.border = '0';
				}
				var Rb = b.getBoundingClientRect(),
						Rh = Ra.top + Rb.height,
						W = document.documentElement.clientHeight,
						R1 = Math.round(Rh - R1bottom),
						R2 = Math.round(Rh - W);
				if (Rb.height > W) {
					if (Ra.top < K) {  // скролл вниз
						if (R2 + N > R1) {  // не дойти до низа
							if (Rb.bottom - W + N <= 0) {  // подцепиться
								b.className = 'sticky';
								b.style.top = W - Rb.height - N + 'px';
								Z = N + Ra.top + Rb.height - W;
							} else {
								b.className = 'stop';
								b.style.top = - Z + 'px';
							}
						} else {
							b.className = 'stop';
							b.style.top = - R1 +'px';
							Z = R1;
						}
					} else {  // скролл вверх
						if (Ra.top - P < 0) {  // не дойти до верха
							if (Rb.top - P >= 0) {  // подцепиться
								b.className = 'sticky';
								b.style.top = P + 'px';
								Z = Ra.top - P;
							} else {
								b.className = 'stop';
								b.style.top = - Z + 'px';
							}
						} else {
							b.className = '';
							b.style.top = '';
							Z = 0;
						}
					}
					K = Ra.top;
				} else {
					if ((Ra.top - P) <= 0) {
						if ((Ra.top - P) <= R1) {
							b.className = 'stop';
							b.style.top = - R1 +'px';
						} else {
							b.className = 'sticky';
							b.style.top = P + 'px';
						}
					} else {
						b.className = '';
						b.style.top = '';
					}
				}
				window.addEventListener('resize', function() {
					a.children[0].style.width = getComputedStyle(a, '').width
				}, false);
			}
		}
		})()
	}


	$('#tg_login_popup .button.step-1').on('click', function() {

		var mail = $('#tg_login_popup .wrapper form .mail').val();
		if (mail != '') {
			postData('https://extraplay.net/api/startAuth', {email: mail})
			.then((data) => {
				// console.log(data);
				// if(data['ok'] == true) {}
			});
		}

		$('#tg_login_popup .step-1').addClass('d-none');
		$('#tg_login_popup .title .main').empty();
		$('#tg_login_popup .title .main').append('Подтвердите регистрацию');
		$('#tg_login_popup .step-3').removeClass('d-none');
		$('#tg_login_popup .title .info').empty();
		$('#tg_login_popup .title .info').append('Введите код, отправленный на вашу почту, чтобы подтвердить регистрацию');
		// $('#tg_login_popup .title .info').addClass('d-none');
	});

	// $("#telegram-login-extraplay_bot").on("load", function() {
	// 	let head = $("#telegram-login-extraplay_bot").contents().find("head");
	// 	let css = `<style>html {
	// 		height: 100%!important;
	// 		}
	// 		body.widget_frame_base.tgme_widget.body_widget_login.r2x {
	// 				height: 100%!important;
	// 		}
	// 		.tgme_widget_login.large button.tgme_widget_login_button {
	// 				border-radius: 0!important;
	// 				height: 100%!important
	// 		}</style>`;
	// 	$(head).append(css);
	// });



	$(".searchform .scroller svg").on('click', function(event){
		$('.searchform .scroll-line').animate({scrollLeft:'+=500'},500);
		$(".searchform .scroller-left").removeClass('d-none');
	});
	$(".searchform .scroller-left svg").on('click', function(event){
		$('.searchform .scroll-line').animate({scrollLeft:'-=500'},500); 

		// console.log($('.searchform .scroll-line').scrollLeft());

		setTimeout(function() { 
			if ($('.searchform .scroll-line').scrollLeft() == 0) {
				$(".searchform .scroller-left").addClass('d-none');
			}
		}, 501);
		

	});

	$(".block .content a.more").on('click', function(){
		$(this).siblings('.more_content').slideToggle();
	});

	$(".sidebar .dropdown ul a.more").on('click', function(){
		$(this).siblings('.more_content').slideToggle();
	});



	// $('#tg_login_popup .input.step-2.mainpassinp input').on('input', function() {
	// 	var count = $(this).val().length;
	// 	$(this).siblings('.testpass').children('span').empty();
	// 	$(this).siblings('.testpass').children('span').append(count+'/6');
	// });

	// $('#tg_login_popup .input.step-2 svg').on('click', function() {
	// 	if ($(this).hasClass('active')) {
	// 		$(this).removeClass('active');
	// 		$(this).siblings('input').attr('type', 'password');
	// 	} else {
	// 		$(this).addClass('active');
	// 		$(this).siblings('input').attr('type', 'text');
	// 	}
	// });

	// $('#tg_login_popup .button.step-2').on('click', function() {
	// 	$('#tg_login_popup .step-2').addClass('d-none');
	// 	$('#tg_login_popup .title .main').empty();
	// 	$('#tg_login_popup .title .main').append('Подтвердите регистрацию');

	// 	$('#tg_login_popup .step-3').removeClass('d-none');

	// 	$('#tg_login_popup .title .info').append('Введите код, отправленный на вашу почту, чтобы подтвердить регистрацию');
	// 	$('#tg_login_popup .title .info').removeClass('d-none');
	// });

	// search

	$('.top-line .search input').on('input propertychange', function() {

		$('.searchform .wrapper .main_title').hide();
		$('.searchform .wrapper .tabs').css('display', 'inline-flex');

		var searchName = $(this).val();
		const xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://extraplay.net/api/catalog/search?name='+searchName);
		xhr.send();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
						const json = xhr.responseText;
						const products = JSON.parse(json);
						showSearchResult(products);
				} else {
						console.error(xhr.statusText);
				}
			}
		};
	});

	function showSearchResult(products) {
		if (products['data'].length != 0) {
			$('.searchform .wrapper .products').empty();
			products['data'].forEach((item) => {
				generateSearchResultHTML(item)
			});
		} else {
			// console.log('products empty');
			$('.searchform .wrapper .products').empty();
			$('.searchform .wrapper .products').append(`
				<div class="empty">
      	  <span>
      	    <div class="title">Нам жаль, но по вашему запросу нам не удалось ничего найти</div>
      	    <div class="subtitle">Скорректируйте ваш запрос или перейдите в каталог</div>
      	  </span>
      	  <img src="images/dist/empty_search.png" alt="">
      	</div>
			`);
		}
	}

	function generateSearchResultHTML(item) {

		$('.searchform .wrapper .products').append(`
			<div class="line">
        <span>
					<a href="`+ item['link'] +`">
          	<img src="`+ item['image'] +`" alt="">
					</a>
          <div>
            <div class="name"><a href="`+ item['link'] +`">`+ item['name'] +`</a></div>
            <div class="price">`+ item['price'] +` ₽</div>
          </div>
        </span>
        <span>
          <div class="rate d-none">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1174_96921)">
              <path d="M7.99929 12.1735L3.29729 14.8055L4.34729 9.52016L0.390625 5.8615L5.74196 5.22683L7.99929 0.333496L10.2566 5.22683L15.608 5.8615L11.6513 9.52016L12.7013 14.8055L7.99929 12.1735ZM7.99929 3.51683L10.8306 12.2302L3.41863 6.84483H12.58L5.16796 12.2302L7.99929 3.51683L10.8306 12.2302L3.41863 6.84483H12.58L5.16796 12.2302L7.99929 3.51683Z" fill="#BF1919"></path>
              </g>
              <defs>
              <clipPath id="clip0_1174_96921">
              <rect width="16" height="16" fill="white" transform="translate(0 0.000244141)"></rect>
              </clipPath>
              </defs>
            </svg> 4,9
          </div>
          <a href="javascript:void(0);" class="button add_card_btn" data-link="`+ item['cart'] +`" data-id="`+ item['id'] +`">В корзину</a>
        </span>
      </div>
		`);

		$('.searchform .wrapper .products .add_card_btn').on('click', function() {
			var id = $(this).attr('data-id');
			var link = $(this).attr('data-link');
			if (id != '' && link != '') {
				postData(link, {})
					.then((data) => {
						console.log(data);
					});
			}
		});
	}



	$('#login_popup .wrapper form .get_code').on('click', function() {
		var mail = $('#login_popup .wrapper form .mail').val();
		if (mail != '') {
			postData('https://extraplay.net/api/startAuth', {email: mail})
			.then((data) => {
				// console.log(data);
				if(data['ok'] == true) {
					$('#login_popup .wrapper form .get_code').addClass('d-none');
					$('#login_popup .wrapper form .code').removeClass('d-none');
					countdown();
					$('#login_popup .wrapper form .counter_wrapper').on('click', function() {
						var cod = $('#login_popup .wrapper form .code').val();
						if(cod != '') {
							
							// console.log(mail);
							// console.log(cod);

							// postData('https://extraplay.net/oauth/email', {email: mail, code: cod})
							// .then((data) => {
							// 	console.log(data);
							// });
							window.location.href= 'https://extraplay.net/oauth/email?email='+mail+'&code='+cod;
							// const xhr = new XMLHttpRequest();
							// xhr.open('GET', 'https://extraplay.net/oauth/email?email='+mail+'&code='+cod);
							// xhr.send();
							// xhr.onreadystatechange = function () {
							// 	if (xhr.readyState === 4) {
							// 		if (xhr.status === 200) {
							// 				console.log(xhr.responseText);
							// 		} else {
							// 				console.error(xhr.statusText);
							// 		}
							// 	}
							// };

						} 
					});
				}
			});
		}
	});


	function countdown() {
		var seconds = 59;
		function tick() {
			$('#login_popup .wrapper form .counter_wrapper').removeClass('d-none');
			var counter = $('#login_popup .wrapper form .counter_wrapper .counter');
			seconds--;
			counter.empty();
			counter.append("" + (seconds < 10 ? "0" : "") + String(seconds));
			if (seconds > 0) {
				setTimeout(tick, 1000);
			} else {
				$('#login_popup .wrapper form .counter_wrapper').addClass('d-none');
				$('#login_popup .wrapper form .get_code').removeClass('d-none');
				$('#login_popup .wrapper form .counter_wrapper .counter').empty();
			}
		}
		tick();
	}
	

	const postData = async (url = '', data = {}) => {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		return response.json(); 
	}


	// catalog

	var genres = [];
	var years = [];
	var categories = [];

	let params = (new URL(document.location)).searchParams; 
	if (params.get("genre_id")) {
		genres.push(params.get("genre_id"));

		$(".catalog-filter .block input").each(function( index ) {
			if($(this).val() == params.get("genre_id")) {
				$(this).prop('checked', true);
				$(this).parent().addClass('active');
			}
		});

		if (window.screen.width > 991) {
			var minprice = $("#slider-1").val();
			var maxprice = $("#slider-2").val();
		} else {
			var maxprice = $("#slider-4").val();
			var minprice = $("#slider-3").val();
		}

    catalogFilterRequest(years, genres, categories, minprice, maxprice, 0);
	}

	$(".catalog-filter .block input").on("change", function () {
		if (window.screen.width > 991) {
			if ($(this).parent().parent().is("#genres")) {
				genres = [];
				$(this)
					.parent()
					.parent()
					.children("label")
					.children("input")
					.each(function () {
						if ($(this).parent().hasClass("active")) {
							var attr = $(this).val();
							genres.push(attr);
						}
					});
			} else if ($(this).parent().parent().is("#years")) {
				years = [];
				$(this)
					.parent()
					.parent()
					.children("label")
					.children("input")
					.each(function () {
						if ($(this).parent().hasClass("active")) {
							var attr = $(this).val();
							years.push(attr);
						}
					});
			} else if ($(this).parent().parent().is("#categories")) {
				categories = [];
				$(this)
					.parent()
					.parent()
					.children("label")
					.children("input")
					.each(function () {
						if ($(this).parent().hasClass("active")) {
							var attr = $(this).val();
							categories.push(attr);
						}
					});
			}

			var minprice = $("#slider-1").val();
			var maxprice = $("#slider-2").val();
			
		} else {
			if ($(this).parent().parent().is("#genres-m")) {
				genres = [];
				$(this)
					.parent()
					.parent()
					.children("label")
					.children("input")
					.each(function () {
						if ($(this).parent().hasClass("active")) {
							var attr = $(this).val();
							genres.push(attr);
						}
					});
			} else if ($(this).parent().parent().is("#years-m")) {
				years = [];
				$(this)
					.parent()
					.parent()
					.children("label")
					.children("input")
					.each(function () {
						if ($(this).parent().hasClass("active")) {
							var attr = $(this).val();
							years.push(attr);
						}
					});
			} else if ($(this).parent().parent().is("#categories-m")) {
				categories = [];
				$(this)
					.parent()
					.parent()
					.children("label")
					.children("input")
					.each(function () {
						if ($(this).parent().hasClass("active")) {
							var attr = $(this).val();
							categories.push(attr);
						}
					});
			}

			var minprice = $("#slider-3").val();
			var maxprice = $("#slider-4").val();
		}

    // console.log("год: " + years);
    // console.log("жанр:" + genres);
    // console.log("платформа: " + categories);
    // console.log("мин прайс: " + minprice);
    // console.log("макс прайс: " + maxprice);

    catalogFilterRequest(years, genres, categories, minprice, maxprice, 0);
  });

	function catalogFilterRequest(years, genres, categories, minprice, maxprice, page, morelink, type) {
		var getLink = createGetLink(years, genres, categories, minprice, maxprice, page, type);

		const xhr = new XMLHttpRequest();
		xhr.open('GET', getLink);
		xhr.send();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 3) {
				if (morelink != 1){
					showModel();
				}
			}
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					if (morelink != 1){
						hideModel();
					}
						const json = xhr.responseText;
						const request = JSON.parse(json);
						catalogFilterDataHandling(request['data'], morelink)
						drawPagination(request['data']['products'])
						$('.footer_filters').removeClass('d-none')
				} else {
					if (morelink != 1){
						hideModel();
						filterEmpty();
					}
				}
			}
		};

	}

	function createGetLink(years, genres, categories, minprice, maxprice, page, type) {

		if(years.length != 0) {
			var yearsStroke = '';
			// var countElementsArr = years.length;
			years.forEach((num, i) => {
				yearsStroke += 'years[]='+num+'&';
			})
			// console.log(yearsStroke);
		} else { yearsStroke = ''; } 

		if(genres.length != 0) {
			var genresStroke = '';
			// var countElementsArr = genres.length;
			genres.forEach((num, i) => {
				genresStroke += 'genres[]='+num+'&';
			})
			// console.log(genresStroke);
		} else { genresStroke = ''; }

		if(categories.length != 0) {
			var categoriesStroke = '';
			// var countElementsArr = categories.length;
			categories.forEach((num, i) => {
				categoriesStroke += 'categories[]='+num+'&';
			})
			// console.log(categoriesStroke);
		} else { categoriesStroke = ''; }

		var limit = $('.show_count .show_list li.active').attr('data-showcounter');
		var tip = '';
		if (type != null) {
			tip = type;
		}
		if (page == 0) {
			// console.log('https://extraplay.net/api/catalog?'+yearsStroke+genresStroke+categoriesStroke+'&min_price='+minprice+'&max_price='+maxprice+'&page=1&limit='+limit+tip);
			return 'https://extraplay.net/api/catalog?'+yearsStroke+genresStroke+categoriesStroke+'&min_price='+minprice+'&max_price='+maxprice+'&page=1&limit='+limit+tip;
		} else {
			// console.log('https://extraplay.net/api/catalog?'+yearsStroke+genresStroke+categoriesStroke+'&min_price='+minprice+'&max_price='+maxprice+'&page='+page+'&limit='+limit+tip);
			return 'https://extraplay.net/api/catalog?'+yearsStroke+genresStroke+categoriesStroke+'&min_price='+minprice+'&max_price='+maxprice+'&page='+page+'&limit='+limit+tip;
		}

	}

	function catalogFilterDataHandling(data, morelink) {
		// console.log(data);
		var products = data['products']['data'];
		var totalProductsCount = data['products']['total'];

		$('.catalog h1.inter span').empty();
		$('.catalog h1.inter span').append(totalProductsCount);
		
		if (morelink != 1) {
			setTimeout(() => products.forEach((item) => {
				// console.log(item);
				productCardDraw(item);
			}), 1501);
		} else {
			products.forEach((item) => {
				// console.log(item);
				productCardDraw(item);
			});
		}


		
	}

	function showModel() {
		$('.catalog-filter .content-catalog.products').empty();
		$('.catalog-filter .content-catalog.products').append('<div class="row"></div>');
		let i = 0;
		var totalCount = $('.show_count .show_list li.active').attr('data-showcounter');

		if($('.catalog .sort .view svg.active').hasClass('grid-type')) {
			while (i < totalCount) {
				$('.catalog-filter .content-catalog.products .row').append(`
				<div class="col-xl-3 col-6">	
					<div class="card layout">
						<span><div class="img"></div><div class="name"></div></span>
						<div class="price"><div class="sale"></div><div class="lastprice"></div></div>
					</div>
				</div>`);
				i++;
			}
		} else {
			while (i < totalCount) {
				$('.catalog-filter .content-catalog.products .row').append(`
				<div class="col-xl-12">
					<div class="product-card_list layout">
						<div class="column"><div class="img"></div></div>
						<div class="column-2">
							<div class="name"></div><div class="wrapper">
								<div class="line"><span></span><span></span></div><div class="line"><span></span><span></span></div>
								<div class="line"><span></span> <div class="d-flex"><div class="iconsvg"></div><div class="iconsvg"></div></div>
								</div>
							</div>
						</div>
						<div class="column-3"><div class="price"><div class="sale"></div><div class="lastprice"></div><div class="newprice"></div></div><a href="#" class="button"></a></div>
					</div>
				</div>`);
				i++;
			}
		}


	}

	function hideModel() {
		setTimeout(() => $('.catalog-filter .content-catalog.products .row').empty(), 1500);
		// $('.catalog-filter .content-catalog.products').empty()
	}

	function productCardDraw(item) {
		// console.log(item);

		var activeGrid = '';
		var activeList = '';
		var activeGridLayout = 'col-xl-3';

		if($('.catalog .sort .view svg.active').hasClass('grid-type')) {
			activeGrid = 'active';
		} else {
			activeList = 'active';
			activeGridLayout = 'col-xl-12';
		}
		var realized = '';
		if (item['realized'] != null) {
			realized = `<div class="line">Дата выхода: <span>`+ item['realized'] +`</span></div>`;
		}

		$('.catalog-filter .content-catalog.products .row').append(`
			<div class="`+activeGridLayout+` col-6">
				<a href="`+ item['cart_link'] +`" class="card `+activeGrid+`">
					<span>
					<div class="lay_wrapper">
						<div class="lay">
							<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.5" width="40" height="40" rx="20" fill="white"/>
								<path d="M22.93 13.9301L29 20.0001L22.93 26.0701" stroke="#2842D8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M12 20H28.83" stroke="#2842D8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>   
							Подробнее   
						</div>
						<img src="https://extraplay.net/`+ item['card_image'] +`" alt="">
					</div>
					<div class="name">`+ item['name'] +`</div>
					</span>
					<div class="price">
						<div class="sale">-`+ item['sale_percent'] +`%</div>
						<div class="lastprice">`+ item['old_price'] +`₽</div>
						<div class="newprice">`+ item['price'] +`₽</div>
					</div>
				</a>
				<div class="product-card_list `+activeList+`">
					<div class="column">
						<a href="`+ item['cart_link'] +`"><img src="https://extraplay.net/`+ item['card_image'] +`" alt=""></a>
					</div>
					<div class="column-2">
						<a href="`+ item['cart_link'] +`"><div class="name">`+ item['name'] +`</div></a>
						<div class="wrapper">
							`+ realized +`
							<!-- <div class="line">Издатель: <span>Rockstar Games</span></div> -->
							<div class="line">Платформа: 
								<span>
									<img src="https://extraplay.net/`+ item['platform']['icon_path'] +`" alt="">       
								</span>
							</div>
						</div>
					</div>
					<div class="column-3">
						<div class="price">
							<div class="sale">-`+ item['sale_percent'] +`%</div>
							<div class="lastprice">`+ item['old_price'] +`₽</div>
							<div class="newprice">`+ item['price'] +`₽</div>
						</div>
						<a href="" class="button">Добавить в корзину</a>
					</div>
				</div>
			</div>
		`);

		$('.catalog-filter .content-catalog.products .row .product-card_list .column-3 .button').on('click', function() {
			// var id = $(this).attr('data-id');
			var link = item['cart_link'];
			if (link != '') {
				postData(link, {})
					.then((data) => {
						console.log(data);
					});
			}
		});
	}

	function drawPagination(data) {
		$('.catalog-footer .pagination ul').empty();
		var links = data['links'];
		var nexPage = data['next_page_url'];
		var prevPage = data['prev_page_url'];
		// console.log(data);
		links.forEach((num) => {
			var active = '';
			if(num['active'] == true) {active = 'active'}
			if (num['label'] == '...') {
				$('.catalog-footer .pagination ul').append('<li><a href="#">'+num['label']+'</a></li>');
			} else if (num['label'] == 'pagination.previous') {
				if (prevPage != null) {
					$('.catalog-footer .pagination ul').append(`
						<li><a data-page="`+num['url'].split('=')[1]+`" href="#">
								<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="40" y="40" width="40" height="40" rx="9" transform="rotate(-180 40 40)" fill="none" />
									<path d="M23.0898 12.08L16.5698 18.6C15.7998 19.37 15.7998 20.63 16.5698 21.4L23.0898 27.92"
										stroke="#9CABFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg></a>
						</li>`);
				}
			} else if (num['label'] == 'pagination.next') {
				if (nexPage != null) {
					$('.catalog-footer .pagination ul').append(`
						<li><a data-page="`+num['url'].split('=')[1]+`" href="#">
								<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="40" height="40" rx="9" fill="none" />
									<path d="M16.9102 27.92L23.4302 21.4C24.2002 20.63 24.2002 19.37 23.4302 18.6L16.9102 12.08"
										stroke="#9CABFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg></a>
						</li>
					`);
				}
			} else {
				$('.catalog-footer .pagination ul').append('<li class="'+active+'"><a data-page="'+num['label']+'" href="#">'+num['label']+'</a></li>');
			}
		});
		paginationEvents();
	}

	function paginationEvents() {
		$('.catalog-footer .pagination ul li a').on('click', function() {
			var page = $(this).attr('data-page');

			$(".catalog-filter .block input").each(function( index ) {
				if ($(this).parent().parent().is("#genres")) {
					genres = [];
					$(this)
						.parent()
						.parent()
						.children("label")
						.children("input")
						.each(function () {
							if ($(this).parent().hasClass("active")) {
								var attr = $(this).val();
								genres.push(attr);
							}
						});
				} else if ($(this).parent().parent().is("#years")) {
					years = [];
					$(this)
						.parent()
						.parent()
						.children("label")
						.children("input")
						.each(function () {
							if ($(this).parent().hasClass("active")) {
								var attr = $(this).val();
								years.push(attr);
							}
						});
				} else if ($(this).parent().parent().is("#categories")) {
					categories = [];
					$(this)
						.parent()
						.parent()
						.children("label")
						.children("input")
						.each(function () {
							if ($(this).parent().hasClass("active")) {
								var attr = $(this).val();
								categories.push(attr);
							}
						});
				}
			});

			var minprice = $("#slider-1").val();
    	var maxprice = $("#slider-2").val();

			catalogFilterRequest(years, genres, categories, minprice, maxprice, page);
		});

	}

	function resetCounterEvents() {
			var page = $('.pagination ul li.active a').attr('data-page');

			$(".catalog-filter .block input").each(function( index ) {

				if (window.screen.width > 991) {
					if ($(this).parent().parent().is("#genres")) {
						genres = [];
						$(this)
							.parent()
							.parent()
							.children("label")
							.children("input")
							.each(function () {
								if ($(this).parent().hasClass("active")) {
									var attr = $(this).val();
									genres.push(attr);
								}
							});
					} else if ($(this).parent().parent().is("#years")) {
						years = [];
						$(this)
							.parent()
							.parent()
							.children("label")
							.children("input")
							.each(function () {
								if ($(this).parent().hasClass("active")) {
									var attr = $(this).val();
									years.push(attr);
								}
							});
					} else if ($(this).parent().parent().is("#categories")) {
						categories = [];
						$(this)
							.parent()
							.parent()
							.children("label")
							.children("input")
							.each(function () {
								if ($(this).parent().hasClass("active")) {
									var attr = $(this).val();
									categories.push(attr);
								}
							});
					}		
				} else {
					if ($(this).parent().parent().is("#genres-m")) {
						genres = [];
						$(this)
							.parent()
							.parent()
							.children("label")
							.children("input")
							.each(function () {
								if ($(this).parent().hasClass("active")) {
									var attr = $(this).val();
									genres.push(attr);
								}
							});
					} else if ($(this).parent().parent().is("#years-m")) {
						years = [];
						$(this)
							.parent()
							.parent()
							.children("label")
							.children("input")
							.each(function () {
								if ($(this).parent().hasClass("active")) {
									var attr = $(this).val();
									years.push(attr);
								}
							});
					} else if ($(this).parent().parent().is("#categories-m")) {
						categories = [];
						$(this)
							.parent()
							.parent()
							.children("label")
							.children("input")
							.each(function () {
								if ($(this).parent().hasClass("active")) {
									var attr = $(this).val();
									categories.push(attr);
								}
							});
					}
				}
			});

			if (window.screen.width > 991) {
				var minprice = $("#slider-1").val();
				var maxprice = $("#slider-2").val();
			} else {
				var maxprice = $("#slider-4").val();
				var minprice = $("#slider-3").val();
			}

			catalogFilterRequest(years, genres, categories, minprice, maxprice, page);
	}

	$('.show_more_catalog_btn').on('click', function() {

		var page = $('.pagination ul li.active a').attr('data-page');
		page = Number(page) + 1;

		$(".catalog-filter .block input").each(function( index ) {

			if (window.screen.width > 991) {
				if ($(this).parent().parent().is("#genres")) {
					genres = [];
					$(this)
						.parent()
						.parent()
						.children("label")
						.children("input")
						.each(function () {
							if ($(this).parent().hasClass("active")) {
								var attr = $(this).val();
								genres.push(attr);
							}
						});
				} else if ($(this).parent().parent().is("#years")) {
					years = [];
					$(this)
						.parent()
						.parent()
						.children("label")
						.children("input")
						.each(function () {
							if ($(this).parent().hasClass("active")) {
								var attr = $(this).val();
								years.push(attr);
							}
						});
				} else if ($(this).parent().parent().is("#categories")) {
					categories = [];
					$(this)
						.parent()
						.parent()
						.children("label")
						.children("input")
						.each(function () {
							if ($(this).parent().hasClass("active")) {
								var attr = $(this).val();
								categories.push(attr);
							}
						});
				}		
			} else {
				if ($(this).parent().parent().is("#genres-m")) {
					genres = [];
					$(this)
						.parent()
						.parent()
						.children("label")
						.children("input")
						.each(function () {
							if ($(this).parent().hasClass("active")) {
								var attr = $(this).val();
								genres.push(attr);
							}
						});
				} else if ($(this).parent().parent().is("#years-m")) {
					years = [];
					$(this)
						.parent()
						.parent()
						.children("label")
						.children("input")
						.each(function () {
							if ($(this).parent().hasClass("active")) {
								var attr = $(this).val();
								years.push(attr);
							}
						});
				} else if ($(this).parent().parent().is("#categories-m")) {
					categories = [];
					$(this)
						.parent()
						.parent()
						.children("label")
						.children("input")
						.each(function () {
							if ($(this).parent().hasClass("active")) {
								var attr = $(this).val();
								categories.push(attr);
							}
						});
				}
			}
		});

		if (window.screen.width > 991) {
			var minprice = $("#slider-1").val();
			var maxprice = $("#slider-2").val();
		} else {
			var maxprice = $("#slider-4").val();
			var minprice = $("#slider-3").val();
		}

		var morelink = 1;

		catalogFilterRequest(years, genres, categories, minprice, maxprice, page, morelink);

	});

	function filterEmpty() {
		$('.footer_filters').addClass('d-none');
		$('.catalog-filter .content-catalog.products .row').append(`
			<h1>Ничего не найдено</h1>
		`);
		
	}

	// servs

	if($('section.servs').length != '') {

		var genres = [];
		var years = [];
		var categories = [];
		var minprice = 0;
		var maxprice = 9999999;
		var type = '&type=usluga';

		catalogFilterRequest(years, genres, categories, minprice, maxprice, 0, 0, type);

	}

	// main page


	function productCardDrawMain(item) {
		// console.log(item);

		var activeGrid = 'active';

		$('*[data-tab=digital]').append(`
				<a href="`+ item['cart_link'] +`" class="card `+activeGrid+`">
					<span>
					<div class="lay_wrapper">
						<div class="lay">
							<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.5" width="40" height="40" rx="20" fill="white"/>
								<path d="M22.93 13.9301L29 20.0001L22.93 26.0701" stroke="#2842D8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M12 20H28.83" stroke="#2842D8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>   
							Подробнее   
						</div>
						<img src="https://extraplay.net/`+ item['card_image'] +`" alt="">
					</div>
					<div class="name">`+ item['name'] +`</div>
					</span>
					<div class="price">
						<div class="sale">-`+ item['sale_percent'] +`%</div>
						<div class="lastprice">`+ item['old_price'] +`₽</div>
						<div class="newprice">`+ item['price'] +`₽</div>
					</div>
				</a>
		`);
	}

	function createGetLinkMain(years, genres, categories, minprice, maxprice, page, type) {

		if(years.length != 0) {
			var yearsStroke = '';
			// var countElementsArr = years.length;
			years.forEach((num, i) => {
				yearsStroke += 'years[]='+num+'&';
			})
			// console.log(yearsStroke);
		} else { yearsStroke = ''; } 

		if(genres.length != 0) {
			var genresStroke = '';
			// var countElementsArr = genres.length;
			genres.forEach((num, i) => {
				genresStroke += 'genres[]='+num+'&';
			})
			// console.log(genresStroke);
		} else { genresStroke = ''; }

		if(categories.length != 0) {
			var categoriesStroke = '';
			// var countElementsArr = categories.length;
			categories.forEach((num, i) => {
				categoriesStroke += 'categories[]='+num+'&';
			})
			// console.log(categoriesStroke);
		} else { categoriesStroke = ''; }

		var limit = 30;
		var tip = '';
		if (type != null) {
			tip = type;
		}
		if (page == 0) {
			// console.log('https://extraplay.net/api/catalog?'+yearsStroke+genresStroke+categoriesStroke+'&min_price='+minprice+'&max_price='+maxprice+'&page=1&limit='+limit+tip);
			return 'https://extraplay.net/api/catalog?'+yearsStroke+genresStroke+categoriesStroke+'&min_price='+minprice+'&max_price='+maxprice+'&page=1&limit='+limit+tip;
		} else {
			// console.log('https://extraplay.net/api/catalog?'+yearsStroke+genresStroke+categoriesStroke+'&min_price='+minprice+'&max_price='+maxprice+'&page='+page+'&limit='+limit+tip);
			return 'https://extraplay.net/api/catalog?'+yearsStroke+genresStroke+categoriesStroke+'&min_price='+minprice+'&max_price='+maxprice+'&page='+page+'&limit='+limit+tip;
		}

	}

	function catalogFilterDataHandlingMain(data, morelink) {
		// console.log(data);
		var products = data['products']['data'];
		if (morelink != 1) {
			$('*[data-tab=digital]').empty();
		}
		
			products.forEach((item) => {
				// console.log(item);
				productCardDrawMain(item);
			});
		
	}

	function drawPaginationMain(data) {
		$('section.main .main-content .catalog-tabs .pagination ul').empty();
		var links = data['links'];
		var nexPage = data['next_page_url'];
		var prevPage = data['prev_page_url'];
		// console.log(data);
		links.forEach((num) => {
			var active = '';
			if(num['active'] == true) {active = 'active'}
			if (num['label'] == '...') {
				$('section.main .main-content .catalog-tabs .pagination ul').append('<li><a href="#">'+num['label']+'</a></li>');
			} else if (num['label'] == 'pagination.previous') {
				if (prevPage != null) {
					$('section.main .main-content .catalog-tabs .pagination ul').append(`
						<li><a data-page="`+num['url'].split('=')[1]+`" href="#">
								<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="40" y="40" width="40" height="40" rx="9" transform="rotate(-180 40 40)" fill="none" />
									<path d="M23.0898 12.08L16.5698 18.6C15.7998 19.37 15.7998 20.63 16.5698 21.4L23.0898 27.92"
										stroke="#9CABFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg></a>
						</li>`);
				}
			} else if (num['label'] == 'pagination.next') {
				if (nexPage != null) {
					$('section.main .main-content .catalog-tabs .pagination ul').append(`
						<li><a data-page="`+num['url'].split('=')[1]+`" href="#">
								<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="40" height="40" rx="9" fill="none" />
									<path d="M16.9102 27.92L23.4302 21.4C24.2002 20.63 24.2002 19.37 23.4302 18.6L16.9102 12.08"
										stroke="#9CABFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg></a>
						</li>
					`);
				}
			} else {
				$('section.main .main-content .catalog-tabs .pagination ul').append('<li class="'+active+'"><a data-page="'+num['label']+'" href="#">'+num['label']+'</a></li>');
			}
		});
		paginationEvents();
	}

	function catalogFilterRequestMain(years, genres, categories, minprice, maxprice, page, morelink, type) {
		var getLink = createGetLinkMain(years, genres, categories, minprice, maxprice, page, type);

		const xhr = new XMLHttpRequest();
		xhr.open('GET', getLink);
		xhr.send();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					
						const json = xhr.responseText;
						const request = JSON.parse(json);

						catalogFilterDataHandlingMain(request['data'], morelink)
						drawPaginationMain(request['data']['products'])
					
				} else {
					if (morelink != 1){
						hideModel();
						filterEmpty();
					}
				}
			}
		};

	}

	// USL
	function productCardDrawMainUsl(item) {
		// console.log(item);

		var activeGrid = 'active';

		$('*[data-tab=usluga]').append(`
				<a href="`+ item['cart_link'] +`" class="card `+activeGrid+`">
					<span>
					<div class="lay_wrapper">
						<div class="lay">
							<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.5" width="40" height="40" rx="20" fill="white"/>
								<path d="M22.93 13.9301L29 20.0001L22.93 26.0701" stroke="#2842D8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M12 20H28.83" stroke="#2842D8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>   
							Подробнее   
						</div>
						<img src="https://extraplay.net/`+ item['card_image'] +`" alt="">
					</div>
					<div class="name">`+ item['name'] +`</div>
					</span>
					<div class="price">
						<div class="sale">-`+ item['sale_percent'] +`%</div>
						<div class="lastprice">`+ item['old_price'] +`₽</div>
						<div class="newprice">`+ item['price'] +`₽</div>
					</div>
				</a>
		`);
	}

	function catalogFilterDataHandlingMainUsl(data, morelink) {
		// console.log(data);
		var products = data['products']['data'];
		if (morelink != 1) {
			$('*[data-tab=usluga]').empty();
		}
		
			products.forEach((item) => {
				// console.log(item);
				productCardDrawMainUsl(item);
			});
		
	}

	function catalogFilterRequestMainUsl(years, genres, categories, minprice, maxprice, page, morelink, type) {
		var getLink = createGetLinkMain(years, genres, categories, minprice, maxprice, page, type);

		const xhr = new XMLHttpRequest();
		xhr.open('GET', getLink);
		xhr.send();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					
						const json = xhr.responseText;
						const request = JSON.parse(json);

						catalogFilterDataHandlingMainUsl(request['data'], morelink)
						// drawPaginationMain(request['data']['products'])
					
				} else {
					if (morelink != 1){
						hideModel();
						filterEmpty();
					}
				}
			}
		};

	}

	$('section.main .main-content .catalog-tabs .buttonmore').on('click', function() {

		var page = $('section.main .main-content .catalog-tabs .pagination ul li.active a').attr('data-page');
		page = Number(page) + 1;

		var genres = [];
		var years = [];
		var categories = [];
		var minprice = 0;
		var maxprice = 9999999;
		var morelink = 1;

		catalogFilterRequestMain(years, genres, categories, minprice, maxprice, page, morelink);

		var type = '&type=usluga';
		catalogFilterRequestMainUsl(years, genres, categories, minprice, maxprice, page, morelink, type);

	});

	if($('section.main .main-content .catalog-tabs').length != '') {

		var genres = [];
		var years = [];
		var categories = [];
		var minprice = 0;
		var maxprice = 9999999;
		var type = '';

		catalogFilterRequestMain(years, genres, categories, minprice, maxprice, 0, 0, type);

		type = '&type=usluga';
		catalogFilterRequestMainUsl(years, genres, categories, minprice, maxprice, 0, 0, type);

	}
	




	// rullet

	// var i;
	// for (i = 0; i < 3; i++) {
	// 	$(".window .list li").clone().appendTo(".window .list");
	// 	// var j = 0;
	// 	// $(".window .list li").each(function() {
	// 	// 	j++;
	// 	// 	console.log(j+'___'+i)
	// 	// });
	// }

	// $('.button-rul').on('click', function () {

	// 		$('html, body').animate({
	// 			scrollTop: $('.rullet').position().top
	// 		}, 400);

	// 		$('.window').css({
	// 				right: "0"
	// 		})
	// 		$('.window .list li').removeClass('winner');

	// 		function selfRandom(min, max) {
	// 				// return Math.floor(Math.random() * (max - min + 1)) + min;
	// 				return $('.button-rul').attr('data-counter');
	// 		}

	// 		var x = selfRandom(50, 100);
	// 		$('.window .list li:eq('+x+')').addClass('winner')

	// 		var minus = ($('.rullet .wraper').width() / 100) * 40.57;
	// 		// console.log(((x*130)+(x*8-12)-119));
	// 		// console.log(minus)
	// 		// console.log($('.rullet .wraper').width())
	// 		// console.log(x);
			
	// 		$('.window').animate({
	// 				right: (((x*130) - minus))
	// 		}, 10000);
	// });


	// $('.case_open_btns .button_open').on('click', function () {

	// 	$('html, body').animate({
	// 		scrollTop: $('.rullet').position().top
	// 	}, 400);

	// 	$('.window').css({
	// 			right: "0"
	// 	})
	// 	$('.window .list li').removeClass('winner');

	// 	function selfRandom(min, max) {
	// 			// return Math.floor(Math.random() * (max - min + 1)) + min;
	// 			return $('.case_open_btns .button_open').attr('data-counter');
	// 	}

	// 	var x = selfRandom(50, 100);
	// 	$('.window .list li:eq('+x+')').addClass('winner')

	// 	var minus = ($('.rullet .wraper').width() / 100) * 40.57;
	// 	// console.log(((x*130)+(x*8-12)-119));
	// 	// console.log(minus)
	// 	// console.log($('.rullet .wraper').width())
	// 	// console.log(x);
		
	// 	$('.window').animate({
	// 			right: (((x*166) - minus))
	// 	}, 10000);
	// });


	$('.z_popup .copy-button').on('click', function() {
		var copy = $(this).siblings('.code_wrapper').children('.code-get').attr('data-val');
		navigator.clipboard.writeText(copy);
	});






// rullet
const Roulette = (function () {
    
	const rotationStopEventName = "rotationStop";
	const rotationStartEventName = "rotationStart";

	const rouletteClass = "roulette";
	const rouletteListClass = "roulette__list";
	const roulettePrizeClass = "roulette__prize";

	const PrizeNotFoundException = "Prize not found";
	const ItemsNotFoundException = "Items not found";
	const NotImplementedException = "Not implemented";
	const NotEnoughArgumentsException = "Not enough arguments";
	const ContainerUndefinedException = "Container was undefined";
	const RotationIsAlreadyActiveException = "Rotation is already active";

	const rotationTokens = new WeakMap();

	class Prize {

			constructor(element, index, spacing, width, height) {
					this.index = index;
					this.element = element;

					let wrapper = document.createElement("li");
					wrapper.classList.add(roulettePrizeClass);
					wrapper.style.marginRight = `${spacing}px`;
					wrapper.style.minWidth = `${width}px`;
					wrapper.style.minHeight = `${height}px`;
					wrapper.appendChild(element);

					this.wrapper = wrapper;
			}

	}

	class Roulette {
			
			constructor(container, options) {
					let { 
							spacing = 10, 
							acceleration = 350, 
							fps = 40, 
							audio = "libs/vanillaRoulette/click.wav",
							selector = ":scope > *",
							stopCallback = null,
							startCallback = null
					} = options || {};

					let node = 
							typeof container === "string" ? 
									document.querySelector(container) : 
							container instanceof HTMLElement ? 
									container : 
							container && container[0] instanceof HTMLElement ? 
									container[0] :
									undefined;

					if (!node) 
							throw ContainerUndefinedException;

					node.classList.add(rouletteClass);

					let list = document.createElement("ul");
					list.classList.add(rouletteListClass);

					let childNodes = [...node.querySelectorAll(selector)];
					if (!childNodes.length)
							throw ItemsNotFoundException;
					let injector = childNodes[0].parentElement
					let maxWidth = Math.max(...childNodes.map(x => x.clientWidth));
					let maxHeight = Math.max(...childNodes.map(x => x.clientHeight));
					let prizes = childNodes.map((el, i) => new Prize(el, i, spacing, maxWidth, maxHeight));
					for (let prize of prizes)
							list.appendChild(prize.wrapper);

					node.style.padding = `${spacing}px`;
					injector.appendChild(list);

					let player = typeof audio === "string" ? new Audio(audio) : audio && audio.play ? audio : null;
					if (player && !player.clone) 
							player.clone = player.cloneNode ? player.cloneNode : () => player;

					this.container = node;
					this.list = list;
					this.prizes = prizes;
					this.spacing = spacing;
					this.acceleration = acceleration;
					this.width = (spacing + maxWidth) * prizes.length;
					this.prizeWidth = maxWidth;
					this.audio = player;
					this.fps = fps;
					rotationTokens.set(this, -1);

					if (startCallback)
							this.container.addEventListener(rotationStartEventName, startCallback);
					if (stopCallback)
							this.container.addEventListener(rotationStopEventName, stopCallback);
			}

			rotate(pixels = 0) {
					if (this.rotates)
							throw RotationIsAlreadyActiveException;
					if (pixels > 0)
							rotateForward.bind(this)(pixels);
					else if (pixels < 0)
							rotateBackward.bind(this)(pixels);
			}

			rotateTo(block, options) {
					if (this.rotates)
							throw RotationIsAlreadyActiveException;
					let numBlock = Number(block);
					let prize = Number.isNaN(numBlock) ? this.findPrize({ element: block }) : this.findPrize({ index: numBlock });
					if (!prize)
							throw PrizeNotFoundException;
					let { tracks = 0, time = 0, random = true, backward = false } = options || {};
					time |= 0;
					tracks |= 0;
					if (this.selectedPrize.index === prize.index && !time && !tracks)
							return;
					if (time)
							rotateByTime.bind(this)(prize, time, random, backward);
					else
							rotateByTracks.bind(this)(prize, tracks, random, backward);
			}

			playClick() {
					if (this.audio)
					{
							let promise = this.audio.clone().play();
							if (promise && promise.catch)
									promise.catch(() => {});
					}
			}

			findPrize(options) {
					let { index, element } = options || {};
					if ((typeof index !== "number" || Number.isNaN(index)) && !element)
							throw NotEnoughArgumentsException;
					return element ? this.prizes.find(x => x.element === element) : this.prizes[index];
			}

			stop() {
					if (this.rotates) {
							clearInterval(rotationTokens.get(this));
							rotationTokens.set(this, -1);
							this.container.dispatchEvent(new CustomEvent(rotationStopEventName, { detail: { prize: this.selectedPrize } }));
					}
			}

			get selectedPrize() {
					let afterCenterIndex = 
							this.prizes.concat()
									.sort((a, b) => a.wrapper.offsetLeft - b.wrapper.offsetLeft)
									.find(prize => prize.wrapper.offsetLeft > this.center).index;
					return this.prizes[(this.prizes.length + afterCenterIndex - 1) % this.prizes.length];
			}

			get firstBlock() {
					return this.findPrize({ element: this.list.querySelector(`:scope > .${roulettePrizeClass} > *`) });
			}

			get lastBlock() {
					let nodes = this.list.querySelectorAll(`:scope > .${roulettePrizeClass} > *`);
					return this.findPrize({ element: nodes[nodes.length - 1] });
			}

			get rotates() {
					return rotationTokens.get(this) > -1;
			}

			get center() {
					return this.list.offsetLeft + this.list.clientWidth / 2;
			}

			static get version() {
					return "1.1.0";
			}
	}

	function rotateForward(pixels) {
			this.container.dispatchEvent(new CustomEvent(rotationStartEventName, { detail: { prize: this.selectedPrize } }));

			pixels = Math.abs(pixels);
			let starter = Math.abs(Number(this.firstBlock.wrapper.style.marginLeft.replace("px", "")));

			let k = this.acceleration;
			let v0 = Math.sqrt(2 * k * pixels);
			let totalTime = v0 / k;

			let intervalMS = 1000 / this.fps;
			let intervalS = intervalMS / 1000;

			let blockWidth = this.prizeWidth + this.spacing;
			let t = 0;
			let currentBlock = 0;
			let played = false;
			let halfBlock = this.spacing + this.prizeWidth / 2;

			let token = setInterval(() => {

					if (t > totalTime) {
							this.stop();
							return;
					}

					let currentPos = (starter + (v0 * t - k * t * t / 2)) % this.width;

					if (Math.floor(currentPos / blockWidth) != currentBlock) {
							let block = this.firstBlock;
							this.list.appendChild(block.wrapper);
							block.wrapper.style.marginLeft = "0px";
							currentBlock = (currentBlock + 1) % this.prizes.length;
							played = false;
					}
					let margin = currentPos % blockWidth;
					this.firstBlock.wrapper.style.marginLeft = `-${margin}px`;
					if (margin > halfBlock && !played) {
							played = true;
							this.playClick();
					}

					t += intervalS;

			}, intervalMS);

			rotationTokens.set(this, token);
	}

	function rotateBackward(pixels) {
			// TODO
			throw NotImplementedException;
	}

	function rotateByTracks(prize, tracks, random, backward) {
			const blockWidth = this.prizeWidth + this.spacing;
			let currentBlock = this.selectedPrize;
			let length = Math.round(tracks) * this.width;
			if (backward)
			{
					// TODO
					length *= -1;
			}
			else
			{
					let currentPosition = currentBlock.index * blockWidth + (this.center - currentBlock.wrapper.offsetLeft);
					let destination = prize.index * blockWidth + this.spacing + this.prizeWidth / 2;
					if (destination < currentPosition)
							length += this.width - (currentPosition - destination);
					else
							length += destination - currentPosition;
					if (random)
							length += Math.random() * this.prizeWidth * 0.8 - this.prizeWidth * 0.4;
			}
			this.rotate(length);
	}

	function rotateByTime(prize, time, random, backward) {
			let v0 = this.acceleration * time;
			let l = v0 * v0 / (2 * this.acceleration);
			let tracks = Math.ceil(l / this.width);
			rotateByTracks.bind(this)(prize, tracks, random, backward);
	}

	return Roulette;
})();


if ($('.roulette').length) {
	let options = {
    spacing: 2,    
    acceleration: 350, 
    fps: 40, 
    audio: null,
    selector: ":scope > *",
    stopCallback: function({detail: { prize }}) {
        // console.log("stop");
        // console.log(`Selected prize index is: ${prize.index}`);
				$('.z1_popup').magnificPopup('open');
    },
    startCallback: function({detail: { prize }}) {
        // console.log("start");
    }
	};

	let roulette = new Roulette(".roulette", options);

	// document.getElementById("start").addEventListener("click", function() {
	// 		roulette.rotateTo(10, { tracks: 1, random: false });
	// });

	$('.button-rul').on('click', function () {
		var num = $(this).attr('data-counter')
		roulette.rotateTo(num, { tracks: 2, random: false });
	});

}






    

})

