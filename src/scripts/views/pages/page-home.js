import restaurantSource from '../../data/restaurant-source'
import loader from '../templates/template-loader'
import { createRestaurantItemTemplate } from '../templates/template-item-restaurant'

const pageHome = {
  async render () {
    return `
    <section class="content">
        <div class="explore">
            <h1 tabindex="0" class="explore__label">Jelajahi Restoran</h1>
            <div id="loading"></div>
            <div id="listRestaurant" class="posts"></div>
        </div>
    </section>
      `
  },

  async afterRender () {
    const loadingRestaurant = document.getElementById('loading')
    const listRestaurant = document.getElementById('listRestaurant')
    loadingRestaurant.innerHTML = loader.load()

    try {
      const restaurants = await restaurantSource.pageHome()
      if (restaurants.length !== 0) {
        restaurants.forEach((dataRestaurant) => {
          listRestaurant.innerHTML += createRestaurantItemTemplate(dataRestaurant)
        })
        loadingRestaurant.style.display = 'none'
      } else {
        loadingRestaurant.innerHTML = loader.status('Belum ada data restoran')
      }
    } catch (e) {
      loadingRestaurant.innerHTML = loader.offline()
    }
  }
}

export default pageHome
