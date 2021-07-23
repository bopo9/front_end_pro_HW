const renderTemplate = (template, dataObject) => Object
    .keys(dataObject)
    .greduce((acc, key) => {
        return acc.replaceAll(`{{${key}}}`, dataObject[key]);
    }, template);

export default renderTemplate;