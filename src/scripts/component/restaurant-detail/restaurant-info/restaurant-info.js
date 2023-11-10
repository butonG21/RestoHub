import { html, css, LitElement } from 'lit';
import API_ENDPOINTS from '../../../globals/api-endpoints';
import '../categories/categories-info';

class RestaurantInfo extends LitElement {
  static styles = css`
  @media screen and (min-width: 320px)  {
      :host {
      display: block;
      top: -25rem;
      position: relative;
      padding-top: 1.5rem;
      width: 100%
      color: #F56D15;
    }
    .container {
      margin: 0 10%;
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
      justify-content: center;
    }

    :host .container .restaurant-info .location-rating .location img {
      font-size: 1.5rem;
    }

    :host .container .restaurant-info .location-rating .location .location-name{
      font-size: 1.6rem;
      color: #DBE2EF;
      margin-left: 0.5rem;
    }

    :host .container .restaurant-info .location-rating .rating {
      margin-left: 1.5rem;
      align-item: center;
    }

    :host .container .restaurant-info .location-rating .rating .star-icon {
    font-size: 1.5rem;
    color: #ffce31;
    font-size: 35px;
    height: 2.3rem;
    }

    :host .container .restaurant-info .location-rating .rating .rating-value {
    font-size: 1.9rem;
    color: #DBE2EF;
    margin-left: 0.25rem
    }

    :host .container .restaurant-info .address-info {
      padding: 5px;
      font-size: 1.05rem;
      color: #DBE2EF;
      font-weight: 150;
      text-align: center;
    }
  }
  @media screen and (min-width: 768px) {
    :host {
      top: -20rem;
    }

    :host .container {
      display: flex;
      flex-direction: row;
    }

    :host .container .restaurant-image {
      width: 20rem;
      height: 20rem;

    }

    :host .container .restaurant-info {
      flex: 1;
      margin-left: 10px;
      width: fit-content;
    }

    :host .container .restaurant-info .name {
      font-size: 3rem;
    }

    :host .container .restaurant-info .location-rating .location img {
      font-size: 3rem;
    }

    :host .container .restaurant-info .location-rating .location .location-name {
      font-size: 2rem;
    }

    :host .container .restaurant-info .location-rating .rating .star-icon {
      font-size: 2rem;
    }

    :host .container .restaurant-info .address-info {
      font-size: 1.5rem;
      font-weight: 250;
    }
  }
 `;

  static properties = {
    info: { type: Object },
  };

  render() {
    console.log(this.info.id);
    return html`
    <div class="container" id="content">
      <div class="restaurant-image" tabindex="0">
        <img src="${API_ENDPOINTS.Image_Url.Small_Resolution(this.info.pictureId)}" alt="Profile Image" />
      </div>

      <div class="restaurant-info comtainer">
        <h2 class="name" tabindex="0">${this.info.name}</h2>
        <div class="location-rating">
          <div class="location">
            <img src="./images/location-sign2.svg" alt="location-sign" />
            <span class="location-name" tabindex="0">${this.info.city}</span>
          </div>
          <div class="rating">
          <span class="star-icon">★</span>
            <span class="rating-value" tabindex="0">${this.info.rating}</span>
          </div>
        </div>

        <div class="address-info">
          <div class="address" tabindex="0">
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
