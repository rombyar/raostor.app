import CONFIG from './config'

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  POST_RESTAURANT_REVIEW: `${CONFIG.BASE_URL}review`
}

export default API_ENDPOINT
