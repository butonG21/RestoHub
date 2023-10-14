import htmlContent from './hero.html';

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = htmlContent;
  }
}

customElements.define('hero-picture', Hero);
