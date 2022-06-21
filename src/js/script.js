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
      card.classList.contains(`card_${id}`)? 
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
    target.closest('.card').classList.add('card_active')
  }

  if(target.closest('.card__back')){
    target.closest('.card').classList.remove('card_active')
  }

  if(target.closest('.catalog__tab')){

    const tab = target.closest('.catalog__tab')

    tabs.forEach(item => 
      item !== tab ? 
        item.classList.remove('catalog__tab_active') : 
        item.classList.toggle('catalog__tab_active')
    )
    
    if(tab.classList.contains('catalog__tab_active')){
      activeID = tab.id
      showCards(activeID)
    } else {
      showCards()
    }
  }
})

//modal

document.addEventListener('click', e => {
  let target = e.target

  if(target.closest('[data-modal="order"]')){
    const name = target.closest('.card').querySelector('.card__title').textContent

    document.querySelector('.overlay').style.display = 'block'
    document.querySelector('#order').style.display = 'flex'
    document.querySelector('#order .modal__descr').textContent = name
  }

  if(target.closest('[data-modal="consultation"]')){
    document.querySelector('.overlay').style.display = 'block'
    document.querySelector('#consultation').style.display = 'flex'
  }

  if(target.matches('.overlay')){
   document.querySelector('.overlay .modal').style.display = 'none'
   document.querySelector('.overlay').style.display = 'none'
  }

  if(target.closest('.modal__close')){
   document.querySelector('.modal').style.display = 'none'
   document.querySelector('.overlay').style.display = 'none'
  }
})



