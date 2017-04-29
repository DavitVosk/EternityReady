export default (url) => {
    if (url.match('http')) {
        return url
    }
    return 'http://' + url.slice(2);
};