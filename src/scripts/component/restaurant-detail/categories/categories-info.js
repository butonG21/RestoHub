import { html, css, LitElement } from 'lit';

class CategoryInfo extends LitElement {
  static styles = css`
  @media screen and (min-width: 320px) {
    .detail-category-container {
      margin-top: 0.05rem;
      display: flex;
      justify-content: center;
    }

    .detail-category-container .detail-category-item {
      font-size: 0.8rem;
      text-decoration: none;
      color: #fff;
      background-color: #34364a;
      padding: 0.7rem 1rem;
      border-radius: 10px;
      margin: 0.2rem 0.2rem;
      cursor: pointer; /* Tambahkan cursor pointer untuk menandakan elemen dapat diklik */
    }
  }

  @media screen and (min-width: 768px) {
    .detail-category-container .detail-category-item {
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
            <div
              class="detail-category-item"
              @click=${() => this.handleCategoryClick(category.name)}
            >
              ${category.name}
            </div>
          `,
  )}
      </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  handleCategoryClick(categoryName) {
    console.log(`Kategori ${categoryName} diklik.`);
  }
}

customElements.define('category-info', CategoryInfo);
