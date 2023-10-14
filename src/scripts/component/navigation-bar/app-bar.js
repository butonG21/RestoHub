import htmlContent from './app-bar.html';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = htmlContent;
  }
}
customElements.define('app-bar', AppBar);
