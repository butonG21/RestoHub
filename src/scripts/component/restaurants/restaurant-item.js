class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card" tabindex="0">
        <img class="img-card" src="${this.getAttribute('image')}" alt="image-${this.getAttribute('name')}">
        <div class="text-card-wrapper">
          <div class="card-description">
            <div class="card-upper">
              <p class="resto-location">${this.getAttribute('location')}</p>
              <div class="rating">
                <span class="rating-icon">★</span>
                <span class="rating-value">${this.getAttribute('rating')}</span>
              </div>
            </div>
            <div class="card-bottom">
              <h3 class="resto-title">${this.getAttribute('name')}</h3>
            </div>
          </div>
        </div>
    </div>
    `;
  }
}
customElements.define('restaurant-item', RestaurantItem);
