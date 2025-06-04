
import { CapacitorConfig } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'app.lovable.b373a5264f18466d9d040697897d63dd',
  appName: 'Calculadora de Tasas',
  webDir: 'dist',
  server: {
    url: 'https://b373a526-4f18-466d-9d04-0697897d63dd.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
