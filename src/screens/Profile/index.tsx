import React from 'react';
import { WebView } from 'react-native-webview';

export function Profile({ route }) {
      const { githubUsername } = route.params;
console.log("/", githubUsername)
      return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${githubUsername}` }} />
}
