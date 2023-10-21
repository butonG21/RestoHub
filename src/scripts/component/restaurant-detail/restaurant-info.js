import API_ENDPOINTS from '../../globals/api-endpoints';

class RestaurantInfo extends HTMLElement {
  set Info(resto) {
    this._info = resto;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="content">
        <div class="resto-image">
          <img
            src="${API_ENDPOINTS.Image_Url.Small_Resolution(this._info.pictureId)}"
            alt="Profile Image"
          />
        </div>
      </div>`;
  }
}

customElements.define('restaurant-info', RestaurantInfo);
