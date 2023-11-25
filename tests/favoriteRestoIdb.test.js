import { describe, afterEach } from '@jest/globals';
import itActsAsFavoriteRestoModel from './contracts/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllResto()).forEach(async (Resto) => {
      await FavoriteRestoIdb.deleteResto(Resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
