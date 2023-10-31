import API_ENDPOINT from '../globals/api-endpoints';

class RestaurantDataSources {
  static async restaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.RestaurantList);

      if (!response.ok) {
        throw new Error(`Failed to fetch data from the API. Status: ${response.status}`);
      }

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Error fetching restaurant list:', error);
      return [];
    }
  }

  static async detailsRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DetailsRestaurant(id));
    return response.json();
  }

  static async getRestaurantsBySearch(search) {
    const response = await fetch(API_ENDPOINT.SEARCH_RESTO(search));
    const responseJson = await response.json();
    return responseJson;
  }

  static async addNewReview(review) {
    const response = await fetch(API_ENDPOINT.AddReview, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantDataSources;
