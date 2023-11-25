// Example import for CodeceptJS tests
import {
  Feature, Before, Scenario, locate,
} from 'codeceptjs';

const assert = require('assert');

Feature('Unlike Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.wait(5);
});

Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.dontSeeElement('resto-item');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.dontSeeElement('resto-item');

  I.amOnPage('/');
  I.scrollTo('restaurant-list');
  I.wait(1);

  I.seeElement('resto-item h3');
  const firstRestaurant = locate('resto-item h3').first();

  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.click('#ConfirmButton');

  I.amOnPage('/#/favorite');
  I.seeElement('resto-item h3');

  const likedRestaurants = await I.grabTextFrom(
    locate('resto-item h3').first(),
  );

  assert.strictEqual(firstRestaurantTitle, likedRestaurants);

  I.seeElement('resto-item h3');

  await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.click('#ConfirmButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('resto-item');
});
