import UrlParser from '../../routes/url-parser';
import RestaurantDataSources from '../../data/restaurant-source';
import '../../component/restaurant-detail/detail-restaurant';
import { createElementDetail } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id='main-content'>
        <restaurant-detail class="detail"></restaurant-detail>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const restaurantData = await RestaurantDataSources.detailsRestaurant(url.id);
      console.log(restaurantData);
      if (restaurantData.restaurant) {
        createElementDetail('restaurant-detail', restaurantData.restaurant);
      } else {
        console.log('Restaurant data is not available.');
      }
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  },
};

export default Detail;
