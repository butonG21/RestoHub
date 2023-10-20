import UrlParser from '../../routes/url-parser';
import RestaurantDataSources from '../../data/restaurant-source';
import {createElementDetail} from '../templates/template-creator'

class Detail {
  async render() {
    return `
    <div class="container" id='main-content'>
      <resto-detail></resto-detail>
    </div>
    `;
  }

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const resto = (await RestaurantSource.getRestaurantsDetail(url.id))
        .restaurant;

    createElementDetail('resto-detail', resto);
}
}
export default Detail;
