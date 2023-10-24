import { html, css, LitElement } from 'lit';
import './review-item';

class ReviewList extends LitElement {
  static styles = css`
    /* Gaya CSS Anda di sini */
  `;

  static properties = {
    reviewList: { type: Array },
  };

  render() {
    return html`
      ${this.reviewList.map(
    (review, index) => html`
          <review-item
            name="${review.name}"
            date="${review.date}"
            review="${review.review}"
            key="${index}"
          ></review-item>
        `,
  )}
    `;
  }
}

customElements.define('review-list', ReviewList);
