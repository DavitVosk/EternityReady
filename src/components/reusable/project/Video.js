import React from 'react';
import { Text, View, WebView, } from 'react-native';
import WebViewBridge from 'react-native-webview-bridge';
import darkenComponent from  '../../../hoc/darken_component'
import extract_video_uri from '../../../utils/extract_video_uri';

const injectScript = `
  (function () {
    if (WebViewBridge) {

      WebViewBridge.onMessage = function (message) {
        if (message === "hello from react-native") {
          WebViewBridge.send("got the message inside webview");
        }
      };

      WebViewBridge.send("hello from webview");
    }
  }());
`;

const Video = (props) => {
    const { activeChannel, embedCode } = props;
    const uri = extract_video_uri(embedCode);


    // const uri = extractSrc('"http://www.cbsnews.com/live/compact/"');
    let content = (
        <WebViewBridge
            javaScriptEnabled={true}
            injectedJavaScript={injectScript}
            source={{ uri }} />
    );

    if (! activeChannel || uri === false) {

        content = (
            <WebViewBridge
                javaScriptEnabled={true}
                injectedJavaScript={injectScript}
                source={require('./not_found.html')}
                style={styles.playerStyles}
            />
        );
    }

    // const darkenedContent = darkenComponent(content);
    return (
        <View style={styles.container}>
            {content}
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'black',
        // height: 300,
    },
    playerStyles: {
        backgroundColor: 'black',
    },
};

export default Video;
