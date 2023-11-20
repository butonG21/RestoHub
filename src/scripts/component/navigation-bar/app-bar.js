class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="app-bar_menu">
      <button id="humberger" aria-label="humberger-button">☰</button>
    </div>

    <div class="app-bar_brands">
        <a class="header_title" href="/#" tabindex="0">
          <h1>Resto<span class="second-title">Hub</span></h1>
        </a>
    </div>

    <nav class="app-bar_navigation" id="navigationDrawer">
      <ul class="menu-list">
        <li><a href="#/home">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li><a href="https://github.com/butonG21">About Us</a></li>
      </ul>
    </nav>
    `;
  }
}
customElements.define('app-bar', AppBar);
