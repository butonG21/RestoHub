import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import '../../component/restaurants/restaurant-list';
import {
  generatefavoriteSkeleton,
  generateRestoItemSkeleton,
} from '../../utils/template-skeleton-UI';
import { createElementlist, createNoDataTemplate } from '../templates/template-creator';

const Favorite = {
  skeletonLoad() {
    return generatefavoriteSkeleton();
  },

  async render() {
    return `
      <div class="container" id='main-content'>
        <div id="content">
          <div class="favorite-section">
            <h2 class="section-title" tabindex="0">Favorite Restaurants </h2>
          </div>
          <div class="restaurant-list" id="restaurant-list">
            <restaurant-list>${generateRestoItemSkeleton()}</restaurant-list>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    console.log(restaurants.length);

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
