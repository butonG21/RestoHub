import API_ENDPOINTS from '../../globals/api-endpoints';

class RestaurantDetail extends HTMLElement {
  set detail(detail) {
    this._detail = detail;
    this.render();
  }

  render() {
    if (!this._detail) {
      this.innerHTML = '<p>Loading...</p>';
      return;
    }

    this.innerHTML = `
      <div class="content">
          <div class="restaurant-img">
              <img
                  src="${API_ENDPOINTS.Image_Url.Medium_Resolution(this._detail.pictureId)}"
                  alt="resto-profile"
              />
          </div>
      </div>
    `;
  }
}
customElements.define('restaurant-detail', RestaurantDetail);
