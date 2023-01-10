import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export function Profile({ route }) {
      const { githubUsername } = route.params;
console.log("/", githubUsername)
      return (
            <View
                  style={{
                        flex: 1,
                        paddingTop: '10%',
                        backgroundColor: 'black'
                  }}
            >
                  <WebView
                        style={{
                        }} 
                        source={{ uri: `https://github.com/${githubUsername}` }}
                  />
            </View>
      )
}
