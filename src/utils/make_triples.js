import maxChannelsOnViewport  from '../config/maxChannelsOnViewport';

export default (channels) => {

    const triples = [];

    let tripleContainer = [];
    channels.forEach((chnl) => {
        tripleContainer.push(chnl);

        if (tripleContainer.length === maxChannelsOnViewport) {
            triples.push(tripleContainer);
            tripleContainer = [];
        }

    });

    if (tripleContainer.length)
        triples.push(tripleContainer);

    return triples;
};
