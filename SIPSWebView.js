import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { Platform } from 'react-native';
import * as Permissions from 'expo-permissions';

const SIPSWebView = () => {
  useEffect(() => {
    const requestMicrophonePermission = async () => {
      try {
        const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING); // Request microphone permission
        if (status !== 'granted') {
          console.log('Microphone permission denied');
        }
      } catch (error) {
        console.error('Error requesting microphone permission:', error);
      }
    };

    requestMicrophonePermission(); // Request microphone permission when component mounts
  }, []);

  

  return (
    <WebView
      source={require('./sip-client.html')} // Path to the HTML file
      allowsBackForwardNavigationGestures={false}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      dev={true}
    />
  );
};

export default SIPSWebView;
