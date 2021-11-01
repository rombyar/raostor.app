const createRestaurantItemDetailTemplate = (restaurant) => `
    <div class="restaurant-detail-wrapper">

      <div class="restaurant-info">
        <div class="restaurant-status">
          <h1>${restaurant.name}</h1>
          <div class="restaurant-line"></div>
          <div class="stars" style="--rating: ${restaurant.rating};" aria-label="Rating of this product is ${restaurant.rating} out of 5."></div>
          <h2>Deskripsi</h2>
          <p>${restaurant.description}</p>
          <div class="restaurant-detail-more">
            <div class="restaurant-address">
              <h2>Alamat</h2>
              <div class="restaurant-line-sub"></div>
              <p>${restaurant.address}, Kota ${restaurant.city}</p>
            </div>
            <div class="restaurant-category">
              <h2>Kategori</h2>
              <div class="restaurant-line-sub"></div>
              <ul>${restaurant.categories.map((category) => '<li>🔹 ' + category.name + '</li>').join(' ')}</ul>
            </div>
            <div class="restaurant-category">
              <h2>Menu Makanan</h2>
              <div class="restaurant-line-sub"></div>
              <ul>
                ${restaurant.menus.foods.map((food) => '<li>🔹 ' + food.name + '</li>').join(' ')}
              </ul>
            </div>
            <div class="restaurant-category">
              <h2>Menu Minuman</h2>
              <div class="restaurant-line-sub"></div>
              <ul>
                ${restaurant.menus.drinks.map((drink) => '<li>🔹 ' + drink.name + '</li>').join(' ')}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    <div class="restaurant-detail-wrapper">

      <div class="restaurant-info">
        <div class="restaurant-review">
          <h1>Berikan Ulasan Kamu!</h1>
          <div class="restaurant-line-sub"></div>

            <form class="form-review">
              <div class="input-mb input-mt">
                <label for="formInputName">Nama</label>
                <input name="formInputName" type="text" class="form-control" id="formInputName" placeholder="Tuliskan namamu di sini!" required>
              </div>
              <div class="input-mb">
                <label for="formInputReview" >Ulasan</label>
                <textarea name="formInputReview" id="formInputReview" placeholder="Tuliskan ulasanmu di sini!" required></textarea>
              </div>
              <div>
                <button id="buttonSubmit" type="submit" class="button">Kirim ulasan Saya</button>
              </div>
            </form>
          
            <div class="scrollbar-review">
              <div class="onreview"></div>
              ${restaurant.customerReviews.map(
                  (reviewOut) =>
                  '<div class="show-review">' +
                    '<h3 class="show-review-name">' + reviewOut.name + '</h3>' +
                    '<span class="show-review-date">' + reviewOut.date + '</span>' +
                    '<p class="show-review-desc wrapword">' + reviewOut.review + '</p>' +
                  '</div>' +
                  '').reverse().join(' ')
              }
            </div>
            
        </div>
      </div>

    </div>

  `

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
       <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `

export {
  createRestaurantItemDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
