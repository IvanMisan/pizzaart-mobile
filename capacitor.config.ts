import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'PizzaArt',
  webDir: 'www',
  cordova: {
    preferences: {
      SplashScreen: 'screen',
      SplashScreenDelay: '3000', // время отображения (мс)
      FadeSplashScreenDuration: '500',
      ShowSplashScreenSpinner: 'false',
      SplashMaintainAspectRatio: 'true',
      SplashScreenBackgroundColor: '#C32121' // цвет фона, как на splash.png
    }
  }
};

export default config;
