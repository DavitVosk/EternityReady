import axios from 'axios';

export default (channelURL, cb = (aliveChannel) => {}) => {
    // channelURL = 'http://www.eternityready.tv/Local_Channels/CHANNEL6-ERMC/';
    axios.get(channelURL,{
        validateStatus: (status) => {
            return (status >= 200 && status <= 300) || status === 304; // default
        }
    }).then((response) => {
        cb(true);
    }).catch((e) => {
        cb(false);
    })
    return true;
};