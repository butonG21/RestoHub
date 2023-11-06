import UrlParser from '../../routes/url-parser';
import RestaurantDataSources from '../../data/restaurant-source';
import '../../component/restaurant-detail/detail-restaurant';
import { createElementDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/ like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="main-content" tabindex="0">
    <div id="likeButtonContainer"></div>
        <restaurant-detail class="detail"></restaurant-detail>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const restaurantData = await RestaurantDataSources.detailsRestaurant(url.id);

      if (restaurantData.restaurant) {
        createElementDetail('restaurant-detail', restaurantData.restaurant);
        LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'), // Select likeButtonContainer
          resto: {
            id: restaurantData.restaurant.id,
            name: restaurantData.restaurant.name,
            pictureId: restaurantData.restaurant.pictureId,
            city: restaurantData.restaurant.city,
            rating: restaurantData.restaurant.rating,
          },
        });
      } else {
        console.log('Restaurant data is not available.');
      }
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  },
};

export default Detail;
