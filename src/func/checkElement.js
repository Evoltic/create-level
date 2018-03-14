const checkElement = (element, items) => {
  let checkedElement;

  const elementNumber = Number(element);
  const isElementNumber = (elementNumber == element && element !== '');

  const isElementBoolean = (element === "true" || element === "false");

  if (isElementNumber) {
     checkedElement = elementNumber;

  } else if (isElementBoolean) {
    checkedElement = JSON.parse(element);

  } else {
    checkedElement = element;
  }

  const duplicate = items.find(item => item.element === checkedElement);
  const noDuplicates = typeof duplicate == 'undefined';

  if (noDuplicates) {
    return checkedElement
  } else {
    return 'elementFailedTest'
  }
}

export default checkElement;
