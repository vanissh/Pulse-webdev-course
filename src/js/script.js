//slider
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controls: false,
    responsive: {
        320: {
            nav: true
        },
        767: {
            nav: false
        }

    }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

//catalog
document.querySelector('.catalog').addEventListener('click', (e) => {
  let target = e.target;

  if(target.closest('.card__more')){
    target.closest('.card').classList.add('card-active')
  }

  if(target.closest('.card__back')){
    target.closest('.card').classList.remove('card-active')
  }
})

