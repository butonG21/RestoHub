import Swal from 'sweetalert2';
import {
  createLikeRestoButtonTemplate,
  createLikedRestoButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, FavoriteResto, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;
    this._favoriteResto = FavoriteResto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await this._favoriteResto.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putResto(this._resto);

      // Menammpilkan pesan alert setelah berhasil menambahkan restoran ke favorit
      Swal.fire({
        title: 'Restoran ditambahkan ke daftar favorit!',
        icon: 'success',
        html: '<button id="ConfirmButton" style="background-color: #F05454; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">OK</button>',
        showConfirmButton: false,
        allowOutsideClick: false,
      });

      // Menambahkan event listener ke tombol yang disesuaikan
      document.getElementById('ConfirmButton').addEventListener('click', () => {
        Swal.close(); // Menutup SweetAlert
      });
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteResto(this._resto.id);

      // Menampilkan pesan alert setelah berhasil menghapus restoran dari favorit
      Swal.fire({
        title: 'Restoran dihapus dari daftar favorit!',
        icon: 'success',
        html: '<button id="ConfirmButton" style="background-color: #F05454; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">OK</button>',
        showConfirmButton: false,
        allowOutsideClick: false,
      });

      // Menambahkan event listener ke tombol yang disesuaikan
      document.getElementById('ConfirmButton').addEventListener('click', () => {
        // Kode yang dijalankan saat tombol diklik
        // ...
        Swal.close(); // Menutup SweetAlert
      });
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
