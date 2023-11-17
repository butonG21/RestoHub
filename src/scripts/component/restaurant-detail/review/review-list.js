import { html, css, LitElement } from 'lit';
import './review-item';

class ReviewList extends LitElement {
  static styles = css`
  :host {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  `;

  static properties = {
    reviewList: { type: Array },
  };

  render() {
    return html`
      ${this.reviewList ? this.reviewList.map(
    (review, index) => html`
          <review-item
            name="${review.name}"
            date="${review.date}"
            review="${review.review}"
            key="${index}"
            tabindex="0"
          ></review-item>
        `,
  ) : html``}
    `;
  }
}
customElements.define('review-list', ReviewList);
