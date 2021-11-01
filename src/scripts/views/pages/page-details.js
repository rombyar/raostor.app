import restaurantSource from '../../data/restaurant-source'
import loader from '../templates/template-loader'
import { createRestaurantItemDetailTemplate } from '../templates/template-item-restaurant-detail'
import UrlParser from '../../routes/url-parser'
import CONFIG from '../../globals/config'
import alertPresenter from '../../utils/alert-initiator'
import likeButtonPresenter from '../../utils/like-button-presenter'
import FavoriteRestaurantIdb from '../../data/restaurant-favorite-idb'

const pageDetail = {
  async render () {
    return `
    <section class="content">
        <div class="explore">
            <h1 tabindex="0" id="title__label" class="explore__label">Detail Restoran</h1>
            <div id="loading"></div>
            <div id="restaurant-main"></div>
            <div id="likeButtonContainer"></div>
        </div>
    </section>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const loadingRestaurant = document.getElementById('loading')
    const listRestaurant = document.getElementById('restaurant-main')
    const heroRestaurant = document.getElementById('heroku')
    loadingRestaurant.innerHTML = loader.load()

    try {
      document.getElementById('title__label').style.display = 'none'
      document.getElementById('hero__inner').style.display = 'none'

      const detailRestaurant = await restaurantSource.pageDetail(url.id)

      if (!detailRestaurant.error) {
        const imageCover = detailRestaurant.pictureId ? CONFIG.BASE_IMAGE_URL + 'medium/' + detailRestaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'
        listRestaurant.innerHTML = createRestaurantItemDetailTemplate(detailRestaurant)
        heroRestaurant.style.backgroundImage = 'url(' + imageCover + ')'
        heroRestaurant.style.minHeight = '300px'

        likeButtonPresenter.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          favoriteRestaurants: FavoriteRestaurantIdb,
          restaurant: {
            id: detailRestaurant.id,
            name: detailRestaurant.name,
            description: detailRestaurant.description,
            city: detailRestaurant.city,
            // address: detailRestaurant.address,
            pictureId: detailRestaurant.pictureId,
            // categories: detailRestaurant.categories,
            // menus: detailRestaurant.menus,
            rating: detailRestaurant.rating
            // customerReviews: detailRestaurant.customerReviews
          }
        })

        loadingRestaurant.style.display = 'none'
      } else {
        loadingRestaurant.innerHTML = loader.status('Ternyata, data tidak berhasil dimuat!')
      }
    } catch (e) {
      loadingRestaurant.innerHTML = loader.offline(e)
    }

    const formInputName = document.querySelector('#formInputName')
    const formInputReview = document.querySelector('#formInputReview')
    const buttonSubmit = document.querySelector('#buttonSubmit')

    buttonSubmit.addEventListener('click', (e) => {
      e.preventDefault()
      if (formInputName.value === '') {
        alertPresenter.alertDefaultPresenter('Nama tidak boleh kosong')
        formInputName.value = ''
      } else if (formInputReview.value === '') {
        alertPresenter.alertDefaultPresenter('Ulasan tidak boleh kosong')
        formInputReview.value = ''
      } else {
        alertPresenter.alertSendPresenter('Apakah Kamu mau kirim ulasan ini?', url, formInputName.value, formInputReview.value)
        formInputName.value = ''
        formInputReview.value = ''
      }
    })
  }
}

export default pageDetail
