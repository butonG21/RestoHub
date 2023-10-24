import { html, css, LitElement } from 'lit';

class CategoryInfo extends LitElement {
  static styles = css`
  @media screen and (min-width: 320px) {
    .detail-category-container {
      margin-top: 0.05rem;
      display: flex;
      justify-content: center;
    }

    .detail-category-container a.detail-category-item {
      font-size: 0.8rem;
      text-decoration: none;
      color: #fff;
      background-color: #34364a;
      padding: 0.7rem 1rem;
      border-radius: 10px;
      margin: 0.2rem 0.2rem;

    }
  }

  @media screen and (min-width: 768px) {
    .detail-category-container a.detail-category-item {
      font-size: 1.08rem;
    }
  }

  `;

  static get properties() {
    return {
      category: { type: Array },
    };
  }

  render() {
    return html`
      <div class="detail-category-container">
        ${this.category.map(
    (category) => html`
            <a href="#/search/${category.name}" class="detail-category-item">${category.name}</a>
          `,
  )}
      </div>
    `;
  }
}

customElements.define('category-info', CategoryInfo);
