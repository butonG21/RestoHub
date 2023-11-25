Feature('add Review Restaurant');

Scenario('add Review Restaurant', ({ I }) => {
  I.amOnPage('/');

  I.scrollTo('restaurant-list');
  I.wait(1);

  I.seeElement('resto-item h3');

  I.click(locate('resto-item h3').last());

  I.wait(1);
  const userNameReview = 'yoga Test for E2E';
  const reviewUser = 'yoga This is Review Test for E2E';

  I.scrollTo('form#reviewResto');
  I.wait(1);

  I.fillField('input#name', userNameReview);
  I.fillField('#review', reviewUser);
  I.click('.btn-submit');
  I.click('#ConfirmButton');

  // Wait for a reasonable time for the review to be updated.
  I.wait(5);

  I.scrollTo('form#reviewResto');
  I.wait(1);

  I.see(userNameReview, '.user-name');
  I.see(reviewUser, '.review-text');
});
