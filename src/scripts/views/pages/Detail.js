import UrlParser from '../../routes/url-parser';
import RestaurantDataSources from '../../data/restaurant-source';
import '../../component/restaurant-detail/detail-restaurant';
import { createElementDetail, createLoaderTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    const html = `
    <div id="main-content" tabindex="0">
    <div id="likeButtonContainer"></div>
    ${document.querySelector('main').innerHTML = createLoaderTemplate.show()}
        <restaurant-detail class="detail"></restaurant-detail>
    </div>
    `;
    return html;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const restaurantData = await RestaurantDataSources.detailsRestaurant(url.id);
      createLoaderTemplate.remove();

      if (restaurantData.restaurant) {
        createElementDetail('restaurant-detail', restaurantData.restaurant);

        LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'), // Select likeButtonContainer
          FavoriteResto: FavoriteRestoIdb,
          resto: { ...restaurantData.restaurant },
        });
      } else {
        console.log('Restaurant data is not available.');
        createLoaderTemplate.remove();

        // Gunakan komponen ErrorMessage untuk menampilkan pesan error.
        const errorMessage = document.createElement('error-message');
        document.getElementById('main-content').appendChild(errorMessage);
      }
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
      createLoaderTemplate.remove();

      // Gunakan komponen ErrorMessage untuk menampilkan pesan error.
      const errorMessage = document.createElement('error-message');
      document.getElementById('main-content').appendChild(errorMessage);
    }
  },
};

export default Detail;
