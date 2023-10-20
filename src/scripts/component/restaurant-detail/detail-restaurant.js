import API_ENDPOINTS from '../../globals/api-endpoints';

class RestaurantDetail extends HTMLElement {
  set Detail(detail) {
    this._detail = detail;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="content">
            <div class="restaurant-img">
                <img
                    src="${API_ENDPOINTS.Image_Url.Medium_Resolution(this._detail.picttureId)}"
                    alt="resto-profile"
                />
            </div>

        </div>
        `;
  }
}
customElements.define('restaurant-detail', RestaurantDetail);
