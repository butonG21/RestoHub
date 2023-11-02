import { html, css, LitElement } from 'lit';

class ReviewItem extends LitElement {
  static styles = css`
  @media screen and (min-width: 320px) {
    :host {
        width: 100%;
        border-bottom: 1px solid #b0b0b0;
        margin-bottom: 1rem;
    }
    :host .user-info-wrapper {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }
    :host .user-info-wrapper img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 10px;
    }
    :host .user-info-wrapper .user-and-date .user-name{
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #34364a;
      margin: 0;
    }

    :host .user-info-wrapper .user-and-date .date{
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      margin: 0;
    }

    :host .user-review .review-text {
      font-style: italic;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: #545454;
    }
  }

  @media screen and (min-width: 768px) {
    :host .user-info-wrapper img {
      width: 65px;
      height: 65px;
    }

    :host .user-review .review-text {
      font-size: 16px;
    }
  }
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
