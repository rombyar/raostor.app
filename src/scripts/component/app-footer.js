class AppFooter extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `<footer>
      <span tabindex="0" >Copyright © 2021 - RAOSTOR Apps</span>
  </footer>`
  }
}

customElements.define('app-footer', AppFooter)
