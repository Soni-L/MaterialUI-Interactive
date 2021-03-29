const documentationUrlMapper = (componentName) => {
  let splitString = componentName.split(/(?=[A-Z])/);
  let urlApendix = "";

  if (splitString.length > 1) {
    for (let i = 0; i < splitString.length; i++) {
      urlApendix += splitString[i] + "-";
    }

    if (urlApendix[urlApendix.length - 1] === "-") {
      urlApendix = urlApendix.substring(0, urlApendix.length - 1);
    }
  } else {
    urlApendix = componentName;
  }

  return urlApendix;
};

export default documentationUrlMapper;
