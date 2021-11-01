import CONFIG from '../../globals/config'

const createRestaurantItemTemplate = (restaurants) => `
    <article class="post__item">
        <div class="menu">
            <a href="#/detail/${restaurants.id}" title="Restoran ${restaurants.name}">
                <img class="lazyload loading-sel" tabindex="0" class="post__item__thumbnail"
                    width="100%" height="100%"
                    data-src="${restaurants.pictureId ? CONFIG.BASE_IMAGE_URL + 'small/' + restaurants.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
                    alt="Gambar ${restaurants.name}">
            </a>
            <span tabindex="0" class="menu_label loading-sel">
                ${restaurants.city}
            </span>
        </div>
        <div class="post__item__content">
            <p class="post__item__rating loading-sel">
                <div class="stars" style="--rating: ${restaurants.rating};" aria-label="Rating of this product is 2.3 out of 5."></div>
                <span> Rating ${restaurants.rating}</span>
            </p>
            <h1 class="post__item__title loading-sel"><a href="#/detail/${restaurants.id}">${restaurants.name}</a></h1>
            <p tabindex="0" class="post__item__description loading-sel">${restaurants.description.substring(0, 200)} ...</p>
        </div>
    </article>
  `

export {
  createRestaurantItemTemplate
}
