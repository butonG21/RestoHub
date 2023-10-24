import { html, css, LitElement } from 'lit-element';
import './menus-list';

class MenuElements extends LitElement {
  static styles = css`
    /* Your styles here */
  `;

  static properties = {
    foods: { type: Array },
    drinks: { type: Array },
    activeTab: { type: String },
  };

  constructor() {
    super();
    this.activeTab = 'foods'; // Set the default active tab
  }

  switchTab(tabName) {
    this.activeTab = tabName;
  }

  render() {
    const { activeTab } = this;
    const menuList = activeTab === 'foods' ? this.foods : this.drinks;

    return html`
    <div class="tab">
    <button @click="${() => this.switchTab('foods')}" class="tablinks ${this.activeTab === 'foods' ? 'active' : ''}" name="foods">Foods</button>
    <button @click="${() => this.switchTab('drinks')}" class="tablinks ${this.activeTab === 'drinks' ? 'active' : ''}" name="drinks">Drinks</button>
  </div>
<div id="${this.activeTab}" class="tabcontent ${activeTab === 'foods' ? 'active' : ''}">
        <menu-list name="food-drink" .menuList="${menuList}"></menu-list>
      </div>
    `;
  }
}

customElements.define('menu-elements', MenuElements);
