const assert = require('assert');

Feature('Change Menu Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  console.log('pass');

  I.scrollTo('restaurant-list');
  console.log('pass');

  I.wait(1);

  I.seeElement('resto-item h3');

  I.click(locate('resto-item h3').first());
});

Scenario('change menu restaurant', ({ I }) => {
  I.scrollTo('.restaurant-description');
  I.see('Foods', '.tablinks.active[name="foods"]');
  I.wait(2);

  I.click('.tablinks[name="drinks"]');
  I.see('Drinks', '.tablinks.active[name="drinks"]');
});

Scenario('check menu foods and drinks', async ({ I }) => {
  I.scrollTo('menu-list');
  I.wait(1);
  I.seeElement('menu-item');

  /* Ambil nama menu makanan pertama */

  const foodMenuTitle = await I.grabTextFrom(
    locate('menu-item h3'),
  );
  console.log(foodMenuTitle);

  I.scrollTo('.restaurant-description');

  I.click('.tablinks[name="drinks"]');

  I.wait(2);

  I.seeElement('menu-item h3');

  /* Ambil nama menu minuman pertama */

  const drinksMenuTitle = await I.grabTextFrom(
    locate('menu-item h3'),
  );
  console.log(drinksMenuTitle);

  /* Check kedua menu pertama tidak sama */
  assert.notEqual(foodMenuTitle, drinksMenuTitle);
});
