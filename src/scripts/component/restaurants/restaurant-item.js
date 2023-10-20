import API_ENDPOINT from '../../globals/api-endpoints';

class restoItem extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
}

  render() {
    this.innerHTML = `
    <div class="card" tabindex="0">
        <img class="img-card" src="${API_ENDPOINT.Image_Url.Small_Resolution(this._resto.pictureId)}" alt="image-${this._resto.name}">
        <div class="text-card-wrapper">
          <div class="card-description">
            <div class="card-upper">
              <p class="resto-location">${this._resto.city}</p>
              <div class="rating">
                <span class="rating-icon">★</span>
                <span class="rating-value">${this._resto.rating}</span>
              </div>
            </div>
            <div class="card-bottom">
              <h3 class="resto-title">${this._resto.name}</h3>
            </div>
          </div>
        </div>
    </div>
    `;
  }
}
customElements.define('resto-item', restoItem);
