import restaurantSource from '../data/restaurant-source'

const postRestaurantReview = (url, name, review) => {
  const dataReview = {
    id: url.id,
    name,
    review
  }

  restaurantSource.postRestaurantReview(dataReview)

  const reviewContainer = document.querySelector('.onreview')
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date().toLocaleDateString('id-ID', options)

  const inputNewReview = `
    <div class="show-review new-review">
      <h3 class="show-review-name">${name}</h3>
      <span class="show-review-date">${date}</span>
      <p class="show-review-desc wrapword">${review}</p>
    </div>`

  reviewContainer.innerHTML += inputNewReview
}

export default postRestaurantReview
