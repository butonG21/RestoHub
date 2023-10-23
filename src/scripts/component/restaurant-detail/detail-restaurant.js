import { html, css, LitElement } from 'lit';
import './restaurant-info/restaurant-info';

class RestaurantDetail extends LitElement {
  static styles = css`

  .detail-container .hero-background .background-wrap{
    width: 100%;
    height: 450px;
    position: absolute;
    z-index: 0;
    left: 0;
}

.detail-container .hero-background .background-wrap img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.detail-container .hero-background .background-wrap .gradient-img{
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
  div.content {
    position: relative;
    padding-top: 3rem;
    color: #F56D15;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  div.content .restaurant-image {
    width: 15rem;
    height: 15rem;
    border-radius: 12px;
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.));
    margin: auto;
    overflow: hidden;
    z-index: 1; /* Mengatur z-index menjadi 1 untuk menempatkan .content di depan */
  }

  div.content .restaurant-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div.detail-container .hero-background .background-wrap {
    width: 100%;
    height: 420px;
    position: relative; /* Mengatur posisi menjadi relative */
    z-index: 0; /* Mengatur z-index menjadi 0 untuk menjaga .hero-background di belakang .content */
  }

  div.detail-container .hero-background .background-wrap img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  div.detail-container .hero-background .background-wrap .gradient-img {
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
  .detail-container .hero-background .background-wrap {
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
    <div class="detail-container">
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
    </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
