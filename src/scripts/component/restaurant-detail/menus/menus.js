import { html, css, LitElement } from 'lit-element';
import './menus-list';

class MenuElements extends LitElement {
  static styles = css`
    div.tab {
        overflow: hidden;
        width: fit-content;
        display: flex;
    }

    div.tab button {
        border: none;
        outline: none;
        cursor: pointer;
        padding: 10px 20px;
        transition: .3s;
        font-size: 17px;
        background-color: #fa0;
    }
    div.tab button.active {
    background-color: #fff;
    border: 1px solid #fa0;
    color: #fa0;
    }

    .menu-container {
      margin-top: 40px;
      display: grid;
      gap: 20px;
      row-gap: 20px;
    }

    @media screen and (min-width: 320px) {
      .menu-container {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (min-width: 420px) {
      .menu-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 520px) {
      .menu-container {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 768px) {
      .menu-container {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media screen and (min-width: 1024px) {
      .menu-container {
        grid-template-columns: repeat(5, 1fr);
      }
    }



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
        <menu-list class="menu-container" name="food-drink" .menuList="${menuList}"></menu-list>
      </div>
    `;
  }
}

customElements.define('menu-elements', MenuElements);
