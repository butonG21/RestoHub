import { LitElement, html, css } from 'lit-element';

class MenuItem extends LitElement {
  static styles = css`
    /* Your styles here */
  `;

  static properties = {
    menuItem: { type: Object },
  };

  render() {
    const tabSection = this.getAttribute('class');

    return html`
      <a href="#/search/${this.menuItem.name}">
        <div class="image-wrapper">
          <img
            class="img-responsive menu-item-image"
            src="https://source.unsplash.com/200x200?${tabSection} ${this.menuItem.name}"
            alt="Menu ${this.menuItem.name} Image"
          />
        </div>
        <h4 class="menu-item-title">${this.menuItem.name}</h4>
      </a>
    `;
  }
}

customElements.define('menu-item', MenuItem);
