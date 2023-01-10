export default (htmlContainer) => {
  const htmlClasses = ['header', 'sidebar', 'main'];

  htmlClasses.forEach((htmlClass) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add(htmlClass);
    htmlContainer.appendChild(newDiv);
  });
};
