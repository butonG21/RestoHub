import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import '../../component/restaurants/restaurant-list';

import { createElementlist, createNoDataTemplate } from '../templates/template-creator';

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

    const restaurantContainer = document.getElementById('restaurant-list');

    if (restaurants.length > 0) {
      createElementlist('restaurant-list', restaurants);
    } else {
      // Tampilkan pesan "Belum ada daftar restaurant favorite"
      const noDataHtml = createNoDataTemplate('Tidak ada Restaurant yang Kamu Favoritkan');
      restaurantContainer.innerHTML = noDataHtml;
    }
  },
};

export default Favorite;
