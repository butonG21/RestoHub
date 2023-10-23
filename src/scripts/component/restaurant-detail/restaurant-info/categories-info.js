import { html, css, LitElement } from 'lit';

class CategoryInfo extends LitElement {
  static styles = css`
    /* CSS styles for the component */
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
