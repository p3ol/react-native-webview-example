/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Linking} from 'react-native';
import {WebView} from 'react-native-webview';

import paywallHtml from './paywall.html';

const App = () => {
  const debugging = `
    const consoleLog = (type, logs) => window.ReactNativeWebView.postMessage(JSON.stringify({type, logs}));
    console = {
        log: (...log) => consoleLog('log', log),
        debug: (...log) => consoleLog('debug', log),
        info: (...log) => consoleLog('info', log),
        warn: (...log) => consoleLog('warn', log),
        error: (...log) => consoleLog('error', log),
      };
  `;

  const onMessage = payload => {
    let dataPayload;

    try {
      dataPayload = JSON.parse(payload.nativeEvent.data);
    } catch (e) {}

    if (dataPayload) {
      switch (dataPayload.type) {
        case 'openUrl':
          Linking.openURL(dataPayload.url);
          break;
        default:
          console[dataPayload.type]?.(...dataPayload.logs);
      }
    }
  };

  return (
    <WebView
      onMessage={onMessage}
      injectedJavaScript={debugging}
      source={paywallHtml}
    />
  );
};

export default App;
