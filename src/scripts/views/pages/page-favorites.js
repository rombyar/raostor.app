import FavoriteRestaurants from '../../data/restaurant-favorite-idb'
import { createRestaurantItemTemplate } from '../templates/template-item-restaurant'
import loader from '../templates/template-loader'

const pageFavorite = {
  async render () {
    return `
    <section class="content">
        <div class="explore">
            <h1 tabindex="0" class="explore__label">Restoran Favorit</h1>
            <div id="loading"></div>
            <div id="listRestaurant" class="posts"></div>
        </div>
    </section>
    `
  },

  async afterRender () {
    const loadingRestaurant = document.getElementById('loading')
    try {
      const listRestaurant = document.getElementById('listRestaurant')
      const restaurants = await FavoriteRestaurants.getAllRestaurants()
      if (restaurants.length !== 0) {
        restaurants.forEach((dataRestaurant) => {
          listRestaurant.innerHTML += createRestaurantItemTemplate(dataRestaurant)
        })
        loadingRestaurant.style.display = 'none'
      } else {
        loadingRestaurant.innerHTML = loader.status('Belum ada restoran favorit Kamu<br>Ayo cari restoran favorit Kamu <a class="link" href=".">di sini</a>!')
      }
    } catch (e) {
      loadingRestaurant.innerHTML = loader.offline(e)
    }
  }
}

export default pageFavorite
