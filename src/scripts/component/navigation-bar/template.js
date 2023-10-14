const createTemplate = (html) => {
  const templateElement = document.createElement('template');

  templateElement.innerHTML = html;
  return templateElement;
};

export default createTemplate;
