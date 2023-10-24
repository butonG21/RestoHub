import { html, css, LitElement } from 'lit';

class ReviewItem extends LitElement {
  static styles = css`
    /* Gaya CSS Anda di sini */
  `;

  static properties = {
    name: { type: String },
    date: { type: String },
    review: { type: String },
  };

  render() {
    return html`
      <div class="user-info-wrapper">
        <img src="https://source.unsplash.com/100x100?avatar ${this.name}" alt="">
        <div class="user-and-date">
          <h4 class="user-name">${this.name}</h4>
          <p class="date">${this.date}</p>
        </div>
      </div>
      <div class="user-review">
        <p class="review-text">"${this.review}"</p>
      </div>
    `;
  }
}

customElements.define('review-item', ReviewItem);
