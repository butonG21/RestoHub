import './restaurant-item';
import data from '../../../public/data/DATA.json';

class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const { restaurants } = data; // Menggunakan data yang telah diimpor

    this.innerHTML = `
        ${restaurants.map((restaurant) => `
          <restaurant-item
            name="${restaurant.name}"
            image="${restaurant.pictureId}"
            location="${restaurant.city}"
            rating="${restaurant.rating}"
          ></restaurant-item>
        `).join('')}    `;
  }
}
customElements.define('restaurant-list', RestaurantList);
