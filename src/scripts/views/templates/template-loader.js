const loader = {
  load () {
    return `
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
        `
  },

  status (message) {
    return `
        <section class="content">
            <p class="message-status">${message}</p>
        </section>
        `
  },

  offline (e) {
    return `
        <section class="content">
          <p class="message-status">Koneksi Kamu terputus. Jika bukan koneksi, silakan <a href="." class="link">muat ulang</a>!</p>
        </section>
        `
  }
}

export default loader
