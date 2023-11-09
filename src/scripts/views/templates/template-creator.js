const createElementlist = (element, data) => {
  const elementList = document.querySelector(element);
  elementList.List = data;
};

const createElementItem = (element, data) => {
  const elementList = document.querySelector(element);
  elementList.Item = data;
};

const createElementDetail = (element, data) => {
  const elementList = document.querySelector(element);
  elementList.Detail = data;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLoaderTemplate = {
  show() {
    return `
    <div class="loader">
    <img src="./images/loading2.gif" alt="Loading..." />
    <div class="loader-text">
      <p>Loading Please Wait...</p>
    </div>
    </div>    `;
  },

  remove() {
    document.querySelector('.loader').remove();
  },
};

const createNoDataTemplate = (message) => `
    <div class="no-data-container">
      <img src="./images/Nodata.png" alt="No Data Image">
      <p class="no-data-message">${message}</p>
    </div>
  `;

export {
  createElementlist,
  createElementItem,
  createElementDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createLoaderTemplate,
  createNoDataTemplate,
};
