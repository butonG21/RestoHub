import { html, css, LitElement } from 'lit';
import API_ENDPOINTS from '../../../globals/api-endpoints';

class RestaurantInfo extends LitElement {
  static styles = css`
    /* CSS styles for the component */
  `;

  static properties = {
    info: { type: Object },
  };

  render() {
    return html`
      <div class="content">
        <div class="restaurant-image">
          <img src="${API_ENDPOINTS.Image_Url.Small_Resolution(this.info.pictureId)}" alt="Profile Image" />
        </div>

        <div class="restaurant-info">
          <h2 class="name">${this.info.name}</h2>
          <div class="location-rating">
            <div class="location">
              <img src="./images/location-sign2.svg" alt="location-sign" />
              <span class="location-name">${this.info.city}</span>
            </div>
            <div class="rating">
              <img src="./images/star-icon.svg" allt="rating-icon" />
              <span class="rating-value">${this.info.rating}</span>
            </div>
          </div>

          <div class="addres-info">
            <div class="addres">
              <span>${this.info.address}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-info', RestaurantInfo);
