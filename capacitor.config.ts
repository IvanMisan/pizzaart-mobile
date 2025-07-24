import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'PizzaArt',
  webDir: 'www',
  server: {
    cleartext: true
  },
  cordova: {
    preferences: {
      SplashScreen: 'screen',
      SplashScreenDelay: '3000',
      FadeSplashScreenDuration: '500',
      ShowSplashScreenSpinner: 'false',
      SplashMaintainAspectRatio: 'true',
      SplashScreenBackgroundColor: '#C32121'
    }
  }
};

export default config;
