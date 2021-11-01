import pageHome from '../views/pages/page-home'
import pageFavorite from '../views/pages/page-favorites'
import pageDetail from '../views/pages/page-details'

const routes = {
  '/': pageHome,
  '/home': pageHome,
  '/favorite': pageFavorite,
  '/detail/:id': pageDetail
}

export default routes
