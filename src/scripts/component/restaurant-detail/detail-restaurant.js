import API_ENDPOINTS from '../../globals/api-endpoints';

class RestaurantDetail extends HTMLElement {
  set Detail(detail) {
    this._detail = detail;
    this.render();
  }

  render() {
    if (!this._detail) {
      this.innerHTML = '<p>Loading...</p>';
      return;
    }

    this.innerHTML = `
      <div class="hero-background">
        <div class="background-wrap">
          <div class="gradient-img"></div>
              <img
                  src="./images/heros/hero-image_4.jpg"
                  alt="resto-profile"
              />
        </div>
      </div>

      <resto-info></resto-info>
    `;
  }
}
customElements.define('restaurant-detail', RestaurantDetail);
