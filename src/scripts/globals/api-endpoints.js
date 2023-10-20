import CONFIG from './config';

const API_ENDPOINT = {
  RestaurantList: `${CONFIG.BaseUrl}/list`,
  DetailsRestaurant: (id) => `${CONFIG.BaseUrl}/detail/${id}`,
  AddReview: `${CONFIG.BaseUrl}/review`,
  Image_Url: {
    Small_Resolution: (id) => `${CONFIG.BaseImage}/small/${id}`,
    Medium_Resolution: (id) => `${CONFIG.BaseImage}/medium/${id}`,
    Large_Resolution: (id) => `${CONFIG.BaseImage}/large/${id}`,
  },
};
export default API_ENDPOINT;
