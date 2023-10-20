import UrlParser from '../../routes/url-parser';
import RestaurantDataSources from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator'; // Sesuaikan dengan path yang sesuai

class Detail {
  async render() {
    return `
      <h2>Detail Page</h2>
      <div id="restaurant-detail" class="restaurant-detail">
        <!-- Ini adalah tempat di mana detail restoran akan dirender -->
      </div>
    `;
  }

  async afterRender() {
    return true;
  }
}
export default Detail;
