class AppNav extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `<nav class="part__nav">
        <div class="part__container">
            <div class="part__brand">
                <a href="/" title="Nama aplikasi, ROASTOR">RAOSTOR</a>
            </div>
            <button id="hamburgerButton" aria-label="Menu Navigasi" class="part__nav__icon">☰</button>
            <!-- <div class="part__sidebar"></div> -->
            <ul id="navigationDrawer" class="part__sidebar__list">
                <li class="part__list__item"><a href="/">Beranda</a></li>
                <li class="part__list__item"><a href="#/favorite">Favorit</a></li>
                <li class="part__list__item"><a href="https://github.com/rombyar">Tentang</a></li>
            </ul>
        </div>
    </nav>`
  }
}

customElements.define('app-nav', AppNav)
