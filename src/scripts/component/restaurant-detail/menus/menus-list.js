import { LitElement, html, css } from 'lit-element';
import './menus-item';

class MenuList extends LitElement {
  static styles = css`
  `;

  static properties = {
    menuList: { type: Array },
    name: { type: String },
  };

  render() {
    if (!this.menuList) {
      return html``;
    }

    return html`
      ${this.menuList.map(
    (menuItem) => html`
          <menu-item class="${this.name}" .menuItem="${menuItem}" tabindex="0"></menu-item>
        `,
  )}
    `;
  }
}

customElements.define('menu-list', MenuList);
