import htmlContent from './footer.html';

class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = htmlContent;
  }
}

customElements.define('footer-bar', FooterBar);
