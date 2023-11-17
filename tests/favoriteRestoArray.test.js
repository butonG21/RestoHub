import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';

let favoriteResto = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteResto.find((Resto) => Resto.id == id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(Resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!Resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteResto
    if (this.getResto(Resto.id)) {
      return;
    }

    favoriteResto.push(Resto);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteResto = favoriteResto.filter((Resto) => Resto.id != id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteResto = [];
  });

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
