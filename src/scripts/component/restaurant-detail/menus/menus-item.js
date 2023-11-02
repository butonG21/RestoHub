import { LitElement, html, css } from 'lit-element';

class MenuItem extends LitElement {
  static styles = css`
  @media screen and (min-width: 320px){
   .image-wrapper img {
      min-height: 150px;
      border-radius: 25px;
      display: block;
      margin: auto;
      object-fit: cover;
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  }

  a {
    text-decoration: none;
  }

  h4.menu-item-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;
    color: #34364a;
    text-transform: capitalize;
    text-align: center;
  }
}

@media screen and (min-width: 520px){
  .image-wrapper img {
    width: 100%;
    min-height: 150px
  }
}

@media screen and (min-width: 520px){
  .image-wrapper img {
    width: 100%;
    min-height: 170px
  }
}

@media screen and (min-width: 1024px) {
  .image-wrapper img {
    width: 100%;
    min-height: 200px;
  }
}
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
