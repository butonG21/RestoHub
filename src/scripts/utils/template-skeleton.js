import '../component/restaurant-detail/restaurant-info/restaurant-info';
import '../component/restaurant-detail/categories/categories-info';

const generateHeroSkeleton = () => {
  const hero = `
  <div class="img-wrapp">
        <img
        data-src="./images/placeholder.png"
        alt="hero-image-skleleton"
        loading="lazy"
        />
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
  return hero;
};

const generateRestoItemSkeleton = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <!-- Update the restaurant item skeleton HTML -->
    <restaurant-item class="card skeleton">
      <a href="#">
        <div class="card" tabindex="0">
          <img class="img-card" src="./images/placeholder.png" alt="image-skeleton" tabindex="0">
          <div class="text-card-wrapper">
            <div class="card-description">
              <div class="card-upper">
                  <p class="resto-location" tabindex="0"></p>
                  <div class="rating">
                    <span class="rating-icon">★</span>
                    <span class="rating-value" tabindex="0"></span>
                  </div>
              </div>
              <div class="card-bottom">
                <h3 class="resto-title" tabindex="0"></h3>
              </div>
            </div>
          </div>
        </div>
      </a>
    </restaurant-item>
          `;
  }
  return template;
};

const generateHomePageSkeleton = () => {
  const homepage = `
      <div class="content">
        <hero-picture class="hero">
          ${generateHeroSkeleton()}
        </hero-picture>

        <div class="container" id="main-content" tabindex="0">
          <div id="content">
            <h2 class="section-title" tabindex="0">Daftar Restaurant</h2>
            <div class="main">
              <restaurant-list>
                ${generateRestoItemSkeleton(20)}
              </restaurant-list>
            </div>
          </div>
        </div>
      </div>
    `;
  return homepage;
};

const generatefavoriteSkeleton = () => {
  const favorite = `
  <div class="container-skeleton" id='main-content'>
  <div id="content">
    <div class="favorite-section">
      <h2 class="section-title" tabindex="0">Favorite Restaurants </h2>
    </div>
    <div class="restaurant-list" id="restaurant-list">
      <restaurant-list>${generateRestoItemSkeleton(4)}</restaurant-list>
    </div>
  </div>
</div>
`;
  return favorite;
};

const generateDetailSkeleton = () => {
  const detail = `
      <div class="detail-upper skeleton">
        <div class="hero-background">
          <div class="background-wrap">
            <div class="gradient-img"></div>
            <div class="skeleton-image"></div>
          </div>
        </div>
        <!-- Restaurant Info Component -->
        <restaurant-infos>
          <div class="container" id="content">
            <div class="restaurant-image skeleton" tabindex="0"></div>
            <div class="restaurant-info comtainer">
              <h2 class="name skeleton" tabindex="0"></h2>
              <div class="location-rating">
                <div class="location">
                  <img src="./images/location-sign2.svg" alt="location-sign">
                  <span class="location-name skeleton" tabindex="0"></span>
                </div>
                <div class="rating">
                  <span class="star-icon">★</span>
                  <span class="rating-value skeleton" tabindex="0"></span>
                </div>
              </div>
              <div class="address-info">
                <div class="address skeleton" tabindex="0"></div>
              </div>
              <!-- Category Info Component -->
              <category-infos>
                <div class="detail-category-container skeleton">
                  <div class="detail-category-item skeleton"></div>
                  <div class="detail-category-item skeleton"></div>
                </div>
              </category-infos>
            </div>
          </div>
        </restaurant-infos>
  </div>
  `;
  return detail;
};

export {
  generateHeroSkeleton,
  generateRestoItemSkeleton,
  generateHomePageSkeleton,
  generatefavoriteSkeleton,
  generateDetailSkeleton,
};
