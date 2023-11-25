// Example import for CodeceptJS tests
import {
  Feature, Before, Scenario, locate,
} from 'codeceptjs';

const assert = require('assert');

Feature('Liking Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.see('Tidak ada Restaurant yang Kamu Favoritkan', '.no-data-message');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant yang Kamu Favoritkan', '.no-data-message');

  I.amOnPage('/');

  I.scrollTo('restaurant-list');
  I.wait(1);

  I.seeElement('resto-item h3');

  const firstRestaurant = locate('resto-item h3').first();

  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('resto-item h3');

  const likedRestaurants = await I.grabTextFrom(
    locate('resto-item h3').first(),
  );

  assert.strictEqual(firstRestaurantTitle, likedRestaurants);
});
