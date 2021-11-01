import API_ENDPOINT from '../globals/api-endpoint'
import CONFIG from '../globals/config'

class restaurantSource {
  static async pageHome () {
    const response = await fetch(API_ENDPOINT.HOME)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async pageDetail (id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }

  static async postRestaurantReview (data) {
    const response = await fetch(API_ENDPOINT.POST_RESTAURANT_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY
      },
      body: JSON.stringify(data)
    })
    return response
  }
}

export default restaurantSource
