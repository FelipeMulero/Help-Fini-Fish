import { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import * as SplashScreen from "expo-splash-screen";

export default function App() {

  const SplashScreenHide = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [])


  useEffect(() => {
    setTimeout(()=>{
      SplashScreenHide
    },300)
  }, [])

  return (
    <>
        <StatusBar style="auto" hidden/>
        <Home />
    </>
  );
}

