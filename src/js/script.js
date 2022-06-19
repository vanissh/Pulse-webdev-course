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

const tabs = document.querySelectorAll('.catalog__tab'),
  cards = document.querySelectorAll('.card')

let activeID

const showCards = (id) => {
  if(id){
    cards.forEach(card => 
      card.classList.contains(`card-${id}`)? 
        (card.style.display = 'flex'): 
        card.style.display = 'none'
    )
    return
  }

  cards.forEach(card => card.style.display = 'flex')
}

document.querySelector('.catalog').addEventListener('click', (e) => {
  let target = e.target;

  if(target.closest('.card__more')){
    target.closest('.card').classList.add('card-active')
  }

  if(target.closest('.card__back')){
    target.closest('.card').classList.remove('card-active')
  }

  if(target.closest('.catalog__tab')){

    const tab = target.closest('.catalog__tab')

    tabs.forEach(item => 
      item !== tab ? 
        item.classList.remove('catalog__tab-active') : 
        item.classList.toggle('catalog__tab-active')
    )
    
    if(tab.classList.contains('catalog__tab-active')){
      activeID = tab.id
      showCards(activeID)
    } else {
      showCards()
    }
  }
})



