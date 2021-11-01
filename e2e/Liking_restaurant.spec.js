const assert = require('assert')

Feature('Liking restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('Belum ada restoran favorit Kamu', '.message-status')
})

Scenario('liking one restaurant (1)', ({ I }) => {
  I.see('Belum ada restoran favorit Kamu', '.message-status')

  I.amOnPage('/')

  I.seeElement('.post__item__title a')
  I.click(locate('.post__item__title a').first())

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.post__item')
})

Scenario('liking one restaurant (2)', async ({ I }) => {
  I.see('Belum ada restoran favorit Kamu', '.message-status')

  I.amOnPage('/')

  I.seeElement('.post__item__title a')

  const firstRestaurant = locate('.post__item__title a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.post__item')
  const likedRestaurantTitle = await I.grabTextFrom('.post__item__title')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.post__item__title a')
  I.click(locate('.post__item__title a').first())

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.post__item')

  I.seeElement('.post__item__title a')
  I.click(locate('.post__item__title a').first())

  I.seeElement('#likeButton')
  I.click('#likeButton')
})

Scenario('reviewing one restaurant (1)', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.post__item__title a')
  I.click(locate('.post__item__title a').first())

  I.amOnPage('/#/detail')
  I.seeElement('.form-review')

  I.fillField('#formInputName', 'Ahmad')
  I.fillField('#formInputReview', 'E2E rom 01')

  I.click('#buttonSubmit')

  I.seeElement('.swal2-actions')
  I.click('.swal2-confirm')
})

Scenario('reviewing one restaurant (2)', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.post__item__title a')
  I.click(locate('.post__item__title a').first())

  I.amOnPage('/#/detail')
  I.seeElement('.form-review')

  I.fillField('#formInputName', '')
  I.fillField('#formInputReview', '')

  I.click('#buttonSubmit')

  I.seeElement('.swal2-actions')
  I.click('.swal2-confirm')
})

Scenario('reviewing one restaurant (3)', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.post__item__title a')
  I.click(locate('.post__item__title a').first())

  I.amOnPage('/#/detail')
  I.seeElement('.form-review')

  I.fillField('#formInputName', 'Ahmad')
  I.fillField('#formInputReview', '')

  I.click('#buttonSubmit')

  I.seeElement('.swal2-actions')
  I.click('.swal2-confirm')
})

Scenario('reviewing one restaurant (4)', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.post__item__title a')
  I.click(locate('.post__item__title a').first())

  I.amOnPage('/#/detail')
  I.seeElement('.form-review')

  I.fillField('#formInputName', 'Ahmad Batal')
  I.fillField('#formInputReview', 'Batal mengirim ulasan')

  I.click('#buttonSubmit')

  I.seeElement('.swal2-actions')
  I.click('.swal2-cancel')
  I.click('.swal2-confirm')
})
