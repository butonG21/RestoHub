import { html, css, LitElement } from 'lit';
import API_ENDPOINTS from '../../../globals/api-endpoints';
import './categories-info';

class RestaurantInfo extends LitElement {
  static styles = css`
    
  :host {
      display: block;
      top: -25rem;
      position: relative;
      padding-top: 1.5rem;
      width: 100%
      color: #F56D15;
    }
    :host .container {
      margin: 0 2rem;
    }

    :host .container {
      display: flex;
      flex-wrap: wrap;

    }
    :host .container .restaurant-image {
      width: 10rem;
      height: 10rem;
      border-radius: 15px;
      border-color: red;
      margin: auto;
      overflow: hidden;
      z-index: 1;
    }

    :host .container .restaurant-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    :host .container .restaurant-info {
      margin-left: unset;
      padding-top: 1rem;
      display: block;
      width: 100%;
    }

    :host .container .restaurant-info .name {
      font-size: 1.8rem;
      color: #FF731D;
      letter-spacing: 0.05em;
      text-align: center;
      margin: 0.05em auto;
    }

    :host .container .restaurant-info .location-rating {
      display: flex;
      align-items: center;
    }
  `;

  static properties = {
    info: { type: Object },
  };

  render() {
    return html`
    <div class="container" id="content">
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
            <img src="./images/star-icon.svg" alt="rating-icon" />
            <span class="rating-value">${this.info.rating}</span>
          </div>
        </div>

        <div class="address-info">
          <div class="address">
            <span>${this.info.address}</span>
          </div>
        </div>

        <category-info .category="${this.info.categories}"></category-info>
      </div>
    </div>
    `;
  }
}

customElements.define('restaurant-info', RestaurantInfo);
