import { LitElement, html, css } from 'lit';

class ErrorMessage extends LitElement {
  static styles = css`
  .error-message {
    text-align: center;
    padding: 20px;
  }

  .error-message img {
    max-width: 50%;
    height: auto;
    margin-top: 20px;
  }

  .error-message h3 {
    color: #f00;
    font-size: 30px;
  }

  .error-message p {
    margin-top: 10px;
    color: #333;
    font-size: 20px;
  }
    `;

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <div class="error-message">
        <h3>Oops, terjadi kesalahan!</h3>
        <img src="./images/NoConections.png" alt="noconections-image">
        <p>Mohon coba lagi nanti atau periksa koneksi internet Anda.</p>
      </div>
    `;
  }
}

customElements.define('error-message', ErrorMessage);
