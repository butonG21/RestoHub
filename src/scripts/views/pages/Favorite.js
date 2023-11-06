import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import '../../component/restaurants/restaurant-list';

import { createElementlist } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
          <div class="container" id='main-content'>
            <div id="content">
              <div class="favorite-section">
                <h2 class="section-title">Favorite Restaurants </h2>
              </div>
              <div class="restaurant-list" id="restaurant-list">
                <restaurant-list></restaurant-list>
              </div>
            </div>
          </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();

    // const restaurantContainer = document.getElementById('restaurant-list');

    createElementlist('restaurant-list', restaurants);
  },
};

export default Favorite;
