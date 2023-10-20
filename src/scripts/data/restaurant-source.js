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
}

export default RestaurantDataSources;
