class AppHero extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `<div id="heroku" class="part__hero">
      <div id="hero__inner" class="part__hero__inner">
          <h1 tabindex="0" class="part__hero__title">Memberikan rekomendasi restoran terbaik adalah tujuan Kami</h1>
          <p tabindex="0" class="part__hero__tagline">
              Cobalah resep terbaru dari setiap restoran dan rasakan perbedaannya.
          </p>
      </div>
  </div>`
  }
}

customElements.define('app-hero', AppHero)
