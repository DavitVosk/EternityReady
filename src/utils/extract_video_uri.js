export default (embedCode) => {
    const regEx = /src=["'](.+?)["']/gi;
    const regExObj = /object/gi;

    const matches = regEx.exec(embedCode);

    // for object now we are stipping out the object tags
    if (regExObj.exec(embedCode) !== null)
        return false;

    if(matches === null)
        return false;

    const video_uri = matches[1];

    return video_uri;
};
