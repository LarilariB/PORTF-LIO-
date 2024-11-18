new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    
    pagination: {
      el: '.swiper-pagination',
      clikable: true,
      dynamicBullets: true
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    /*break points responsive*/
    breakpoints: {
        0:{
            slidesPerView: 1
           
        },
        768:{
            slidesPerView: 2
           
        },
         1024:{
            slidesPerView: 3
           
        }, 
     
    }
  })