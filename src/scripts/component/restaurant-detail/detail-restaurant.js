import './restaurant-info';

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
                  alt="restaurant
          -profile"
              />
        </div>
      </div>
      <restaurant-info></restaurant-info>
    `;

    const restaurantInfo = this.querySelector('restaurant-info');
    if (restaurantInfo) {
      restaurantInfo.Info = this._detail;
    }
  }
}
customElements.define('restaurant-detail', RestaurantDetail);
