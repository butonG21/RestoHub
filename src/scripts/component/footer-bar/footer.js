class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container">
    <hr class="footer-divider">
    <div class="footer-wrapp">
        <div class="footer-brands">
            <a class="footer-title" href="#" tabindex="0">
                <h1>Resto<span class="second-title">Hub</span></h1>
            </a>
            <img src="./images/restohub.png" alt="RestoHub-logo">
            <p class="footer-quote" tabindex="0">
                Taste the World, One Bite at a Time
            </p>
        </div>

        <div class="link-wrap">
            <div class="service" tabindex="0">
                <h2 class="service-title">Our services</h2>

                <ul class="link-list">
                    <li class="link-item"><a href="#/favorite">Favorite</a></li>
                    <li class="link-item"><a href="#">FAQ</a></li>
                </ul>
            </div>

            <div class="contact-us">
                <h2 class="contact-title" tabindex="0">Contact Us</h2>

                <ul class="link-list">
                    <li class="link-item">
                        <a href="mailto:support@restohub.co.id">support@restohub.co.id</a>
                    </li>
                    <li class="link-item">
                        <span><a href="https://www.google.com/maps/place/Tangerang,+Tangerang+City,+Banten/@-6.1766622,106.485221,11z/data=!3m1!4b1!4m6!3m5!1s0x2e69f8e853d2e38d:0x301576d14feb9c0!8m2!3d-6.1701796!4d106.6403236!16zL20vMDR3cGpo">Tangerang, Banten, Indonesia</a></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <span>Copyright © 2023 • All rights reserved • RestoHub</span>
    </div>
</div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
