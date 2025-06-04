
# Instrucciones para crear la APK de Android

## Requisitos previos
1. Tener Android Studio instalado
2. Tener Node.js instalado
3. Git instalado

## Pasos para crear la APK:

### 1. Transferir el proyecto a GitHub
- Haz clic en el botón "Export to Github" en Lovable
- Clona el proyecto desde tu repositorio de GitHub a tu PC

### 2. Instalar dependencias
```bash
npm install
```

### 3. Agregar la plataforma Android
```bash
npx cap add android
```

### 4. Construir el proyecto
```bash
npm run build
```

### 5. Sincronizar con Capacitor
```bash
npx cap sync android
```

### 6. Abrir en Android Studio
```bash
npx cap open android
```

### 7. Crear la APK en Android Studio
1. En Android Studio, ve a Build > Build Bundle(s) / APK(s) > Build APK(s)
2. Espera a que termine la compilación
3. La APK se creará en: `android/app/build/outputs/apk/debug/app-debug.apk`

## Notas importantes:
- La primera vez puede tardar varios minutos en compilar
- Asegúrate de tener al menos 8GB de RAM libre
- Si tienes errores, revisa que Android Studio tenga los SDK necesarios instalados

## Para actualizaciones futuras:
Después de hacer cambios en Lovable:
1. Git pull desde tu repositorio
2. npm run build
3. npx cap sync android
4. Volver a compilar en Android Studio
