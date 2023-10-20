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
export { createElementlist, createElementItem, createElementDetail };
