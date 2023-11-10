import RestaurantDataSources from '../../data/restaurant-source';
import '../../component/restaurants/restaurant-list';
import { createElementlist, createLoaderTemplate } from '../templates/template-creator';
import '../../component/error';

const Home = {
  async render() {
    const html = `
    <div class="content">
      <hero-picture class="hero"></hero-picture>

      <div class="container" id="main-content" tabindex="0">
        <div id="content">
          <h2 class="section-title" tabindex="0">Daftar Restaurant</h2>
          <div class="main">
            ${document.querySelector('main').innerHTML = createLoaderTemplate.show()}
            <restaurant-list></restaurant-list>
          </div>
        </div>
      </div>
    </div>
    `;
    return html;
  },
  async afterRender() {
    try {
      const restaurants = await RestaurantDataSources.restaurantList();
      // menghilangkan loader.
      createLoaderTemplate.remove();

      createElementlist('restaurant-list', restaurants.restaurants);

      console.log(restaurants.restaurants);
    } catch (error) {
      console.error('Error fetching restaurant data:', error);

      // Jika gagal melakuakan fetching data tampilkan pesan atau halaman pengganti untuk error.
      const errorMessage = document.createElement('error-message');
      document.getElementById('main-content').appendChild(errorMessage);
    }
  },
};

export default Home;
