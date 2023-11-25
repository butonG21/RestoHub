import {
  describe, afterEach,
} from '@jest/globals';
import itActsAsFavoriteRestoModel from './contracts/favoriteRestoContract';

let favoriteResto = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return false;
    }

    return favoriteResto.find((Resto) => Resto.id === id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(Resto) {
    if (!Object.prototype.hasOwnProperty.call(Resto, 'id')) {
      return;
    }

    // Make sure the id is not already in the list of favoriteResto
    if (this.getResto(Resto.id)) {
      return;
    }

    favoriteResto.push(Resto);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteResto = favoriteResto.filter((Resto) => Resto.id !== id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteResto = [];
  });

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
