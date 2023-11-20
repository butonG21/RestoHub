class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="img-wrapp">
    <picture>
        <source media="(max-width: 425px)" srcset="./images/hero-image-4-small.jpg">
        <source media="(max-width: 768px)" srcset="./images/hero-image-2-large.jpg">
        <img fetchpriority="high" src="./images/hero-image-2.jpg" alt="hero-image">
    </picture>

    <div class="hero-text_wrapp container">
        <div class="banner-text">
            <h2>
                Dive Into a<span class="world-of-cuisine">World of Cuisine</span>
            </h2>
            <h2>
                Where Every Bite Tells<span class="a-story">a Story</span>
            </h2>
        </div>
    </div>
</div>
    `;
  }
}

customElements.define('hero-picture', Hero);
