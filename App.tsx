/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  AccessContext,
  Paywall,
  RestrictedContent,
  Snippet,
} from '@poool/react-native-access-webview';
import { useEffect } from 'react';
import {
  Appearance,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';

function App(): React.JSX.Element {
  useEffect(() => {
    Appearance.setColorScheme('light');
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <AccessContext
          appId="155PF-L7Q6Q-EB2GG-04TF8"
          config={{ cookies_enabled: true, debug: true }}
        >
          <Snippet><Text>Snippet</Text></Snippet>
          <RestrictedContent><Text>Full content</Text></RestrictedContent>
          <Paywall />
        </AccessContext>
      </SafeAreaView>
    </ScrollView>
  );
}

export default App;
