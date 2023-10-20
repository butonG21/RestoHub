import RestaurantDataSources from '../../data/restaurant-source';
import '../../component/restaurants/restaurant-list';
import { createElementlist } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
    <hero-picture class="hero"></hero-picture>

    <div class="container" id="main-content" tabindex="0">
      <div id="content">
        <h2 class="section-title" tabindex="0">Daftar Restaurant</h2>
        <div class="main">
          <restaurant-list></restaurant-list>
        </div>
      </div>
    </div>

  </div>
  `;
  },
  async afterRender() {
    const restaurants = await RestaurantDataSources.restaurantList();
    createElementlist('restaurant-list', restaurants.restaurants);
    console.log(restaurants.restaurants);
  },

};

export default Home;
