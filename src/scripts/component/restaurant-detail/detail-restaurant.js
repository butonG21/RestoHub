import { html, css, LitElement } from 'lit';
import './restaurant-info/restaurant-info';
import './menus/menus';
import './review/review-list';
import './review/add-review';

class RestaurantDetail extends LitElement {
  static styles = css`
   .container {
    margin: 0 10%;
  }

  .detail-upper {
    height: 430px;

  }
  .detail-upper .hero-background .background-wrap {
    position: absolute;
    z-index: 0;
    left: 0;
}

.detail-upper .hero-background .background-wrap img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.detail-upper .hero-background .background-wrap .gradient-img{
   position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
        90deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(76, 76, 76, 0.5) 56.39%,
    rgba(196, 196, 196, 0.15) 100%);
}

div.menus{
  margin-top: 40px;
}

div.menus .section-title{
  margin: 20px auto;
  color: #D2500F;
  font-weight: 500;
  font-size: 25px;
  line-height: 36px;
}

div.reviews {
  margin-top: 40px;
}

div.reviews .section-title {
  margin: 20px auto;
  color: #D2500F;
  font-weight: 500;
  font-size: 25px;
  line-height: 36px;

}
div.add-review .title {
  margin: 20px auto;
  color: #D2500F;
  font-weight: 500;
  font-size: 25px;
  line-height: 36px;
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

  div.detail-upper .hero-background .background-wrap {
    width: 100%;
    height: 420px;
    position: relative;
    z-index: 0;
  }

  div.detail-upper .hero-background .background-wrap img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  div.detail-upper .hero-background .background-wrap .gradient-img {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(76, 76, 76, 0.5) 100%
    );

    div.menus{
      margin-top: 40px;
    }
  }

  .detail-bottom{
    margin: 60px auto;
  }

  .detail-bottom .restaurant-description .title {
    margin: 20px auto;
    color: #D2500F;
    font-size: 25px;
  }
  .detail-bottom .restaurant-description .description-detail {
    color: #34364a;
    font-size: 16px;
  }
}

@media screen and (min-width: 768px) {
  .detail-upper .hero-background .background-wrap {
    height: 200px;
  }

  .detail-bottom .restaurant-description .title {
    font-size: 25px;
  }

  .detail-bottom .restaurant-description .description-detail {
    font-size: 16px;
  }

}
`;

  static properties = {
    Detail: { type: Object },
    foods: { type: Array },
    drinks: { type: Array },
    reviews: { type: Array },

  };

  render() {
    this.foods = this.Detail?.menus?.foods || [];
    this.drinks = this.Detail?.menus?.drinks || [];
    this.reviews = this.Detail?.customerReviews || [];

    if (!this.Detail) {
      return html`<p>Loading...</p>`;
    }

    return html`
    <div class="detail-upper">
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
    <div class="detail container">
      <div class="detail-bottom">
        <div class="restaurant-description">
          <h2 class="title">Description</h2>
          <p class="description-detail">${this.Detail.description}</p>
        </div>
      </div>
      <div class="menus">
        <h2 class="section-title">Menus</h2>
        <menu-elements .foods="${this.foods}" .drinks="${this.drinks}"></menu-elements>
      </div>
      <div class="reviews">
        <h2 class="section-title">Reviews</h2>
        <review-list .reviewList="${this.reviews}"></review-list>
      </div>
      <div class="add-review">
        <h2 class="title">Add Reviews</h2>
        <add-review .submitReview="${this.Detail.id}" .reviews="${this.reviews}"></add-review>
      </div>
    </div>
  `;
  }
}
customElements.define('restaurant-detail', RestaurantDetail);
