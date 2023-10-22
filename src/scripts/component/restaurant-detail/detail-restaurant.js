import { html, css, LitElement } from 'lit';
import './restaurant-info/restaurant-info';

class RestaurantDetail extends LitElement {
  static styles = css`

  .hero-background .background-wrap{
    width: 100%;
    height: 450px;
    position: relative;
    z-index: 0;
    left: 0;
}

.hero-background .background-wrap img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.hero-background .background-wrap .gradient-img{
   position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
        90deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(76, 76, 76, 0.5) 56.39%,
    rgba(196, 196, 196, 0.15) 100%);
}
@media screen and (min-width: 320px) {
  .hero-background .background-wrap {
    width: 100%;
    height: 420px;

    position: relative;
    z-index: 0;
    left: 0;
  }

  .hero-background .background-wrap img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .hero-background .background-wrap .gradient-img{
    position: absolute;
      width: 100%;
      height: 100%;

      background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.6) 0%,
          rgba(76, 76, 76, 0.5) 100%
      );
  }
}

@media screen and (min-width: 768px) {
  .hero-background .background-wrap {
    height: 320px;
  }
}
`;

  static properties = {
    Detail: { type: Object },
  };

  render() {
    if (!this.Detail) {
      return html`<p>Loading...</p>`;
    }
    const restaurantInfo = this.querySelector('restaurant-info');
    if (restaurantInfo) {
      restaurantInfo.info = this.Detail;
    }

    return html`
      <div class="hero-background">
        <div class="background-wrap">
          <div class="gradient-img"></div>
          <img
            src="./images/heros/hero-image_4.jpg"
            alt="restaurant-profile"
          />
        </div>
      </div>
      <restaurant-info .info="${this.Detail}"></restaurant-info>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
