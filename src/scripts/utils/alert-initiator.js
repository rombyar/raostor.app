import Swal from 'sweetalert2'
import postRestaurantReview from './review-initiator'

const alertInitiator = {
  alertDefaultPresenter (message) {
    Swal.fire({
      title: 'Terjadi kesalahan!',
      text: message,
      icon: 'warning'
    }).then(() => {})
  },

  alertSendPresenter (message, url, name, review) {
    Swal.fire({
      title: 'Kirim ulasan!',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, kirim sekarang!',
      cancelButtonText: 'Tidak jadi'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Berhasil!',
          'Hore, Kamu berhasil memberikan ulasan!',
          'success'
        )

        postRestaurantReview(url, name, review)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Batal',
          'Baik, mungkin bisa nanti :)',
          'error'
        )
      }
    })
  }
}

export default alertInitiator
