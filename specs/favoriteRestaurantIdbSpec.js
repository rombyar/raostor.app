import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'
import FavoriteRestaurants from '../src/scripts/data/restaurant-favorite-idb'

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurants.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurants.deleteRestaurant(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(FavoriteRestaurants)
})
