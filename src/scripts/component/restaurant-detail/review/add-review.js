import { html, css, LitElement } from 'lit-element';
import RestaurantDataSources from '../../../data/restaurant-source';

class AddReview extends LitElement {
  static styles = css`
    @media screen and (min-width: 320px) {
        form, #searchResto {
            margin-top: 35px;
        }
        div.input-wrapper {
            position: relative;
            margin: 15px auto;
        }
        form .form-control, #searchResto .form-control {
            display: block;
            line-height: 2em;
            margin: 0;
            padding: 5px 10px;
            width: 100%;
            font-size: 1rem;
            border: 1px solid #f4f4f4;
            background-color: #f4f4f4;
            border-radius: 5px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            font-weight: 500;
            transition: .2s ease-in;
            outline: none;
        }
        form .form-control:placeholder-shown+.control-label, #searchResto .form-control:placeholder-shown+.control-label {
            visibility: hidden;
            z-index: -1;
            transition: .2s ease-in-out;
        }
        form .control-label, #searchResto .control-label {
            display: block;
            position: absolute;
            opacity: 0;
            bottom: 1.9rem;
            color: #5d5d5d;
            transition: .2s ease-in-out transform;
            font-size: 1.1rem;
            font-weight: 500;
        }
        form .btn-submit, #searchResto .btn-submit {
            background: #D2500F;
            border-radius: 15px;
            color: #fff;
            border: none;
            width: 120px;
            height: 45px;
            font-size: 1rem;
            display: block;
            margin-left: auto;
            box-shadow: 2px 3px 4px rgba(0,0,0,.25);
            cursor: pointer;
            transition: .2s ease-in-out;
        }
    }
  `;

  static properties = {
    submitReview: { type: Object },
  };

  render() {
    console.log(this.submitReview);
    return html`
      <form action="" id="reviewResto" method="get">
        <div class="input-wrapper">
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Enter your name"
            name="name"
          />
          <label for="name" class="control-label">Name</label>
        </div>

        <div class="input-wrapper">
          <textarea
            name="review"
            id="review"
            class="form-control"
            placeholder="Enter your review"
            name="review"
          ></textarea>

          <label for="review" class="control-label">Review</label>
        </div>

        <button type="submit" class="btn btn-submit" id="btn-submit">Submit</button>
      </form>
    `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    const form = this.shadowRoot.querySelector('form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('#name');
      const reviewInput = form.querySelector('#review');

      const name = nameInput.value;
      const review = reviewInput.value;

      const reviewData = {
        id: this.submitReview,
        name,
        review,
      };

      try {
        // Mengirim review ke API
        const response = await RestaurantDataSources.addNewReview(reviewData);

        if (response.message === 'success') {
          // Update daftar review
          this.reviews.push(reviewData);

          // Kosongkan formulir
          nameInput.value = '';
          reviewInput.value = '';

          alert('Review berhasil ditambahkan!');
          window.location.reload();

          // Fokuskan ke elemen review yang Anda inginkan
          const reviewElement = document.querySelector('review-list'); // Gantilah '#review-element' dengan selector yang sesuai
          if (reviewElement) {
            reviewElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          alert('Gagal menambahkan review. Silakan coba lagi.');
        }
      } catch (error) {
        console.error('Error saat menambahkan review:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
      }
    });
  }
}
customElements.define('add-review', AddReview);
