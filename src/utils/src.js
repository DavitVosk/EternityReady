export default function (embedCode) {
    let cleanUrl = embedCode.match(/src=['"].+?['"]/ig)[0].slice(5).slice(0, - 1);

    cleanUrl = cleanUrl.replace(/^\/\//, '');
    if (! /^https?:\/\//i.test(cleanUrl)) {
        cleanUrl = 'http://' + cleanUrl;
    }
    return cleanUrl;
}