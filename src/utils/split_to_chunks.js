import maxImagesOnViewport from '../config/maxChannelsOnViewport';

export default (array) => {
    const result = [];
    var i, j, chunk = maxImagesOnViewport;
    for (i = 0, j = array.length; i < j; i += chunk) {
        result.push(array.slice(i, i + chunk));
    }

    return result;
};
