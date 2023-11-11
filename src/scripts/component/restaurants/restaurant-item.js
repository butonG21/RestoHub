import API_ENDPOINT from '../../globals/api-endpoints';

class restoItem extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#/detail/${this._resto.id}">
    <div class="card" tabindex="0">
        <img class="img-card" src="${API_ENDPOINT.Image_Url.Small_Resolution(this._resto.pictureId)}" loading="lazy" alt="image-${this._resto.name}" tabindex="0">
        <div class="text-card-wrapper">
          <div class="card-description">
            <div class="card-upper">
              <p class="resto-location" tabindex="0">${this._resto.city}</p>
              <div class="rating">
                <span class="rating-icon">★</span>
                <span class="rating-value" tabindex="0">${this._resto.rating}</span>
              </div>
            </div>
            <div class="card-bottom">
              <h3 class="resto-title" tabindex="0">${this._resto.name}</h3>
            </div>
          </div>
        </div>
    </div>
    </a>

    `;
  }
}
customElements.define('resto-item', restoItem);
