# 🚀 Guía de Publicación Segura — Arcadia

Esta guía te explica **paso a paso cómo subir actualizaciones sin romper nada** 💜  

---

## 🧹 1. Limpieza inicial
Antes de compilar, borra cualquier build viejo:

```bash
rmdir /s /q dist  2>nul
npm install
```

Esto asegura que todo esté limpio y actualizado.

---

## ⚙️ 2. Crear el nuevo build
Crea la versión optimizada para subir a Firebase:

```bash
npm run build
```

👉 Esto genera la carpeta **dist/**, donde quedan los archivos listos para producción.

---

## 🧪 3. Probar el build localmente
Prueba cómo se ve antes de subir:

```bash
npm run preview
```

Luego abre en tu navegador:
```
http://localhost:4173
```

Verifica que:
- No haya errores en consola.
- Se vean los textos, botones e imágenes correctas.

---

## 🚀 4. Subir a Firebase
Cuando todo esté bien, publica:

```bash
firebase deploy --only hosting
```

Después abre:
```
https://arcadiaapp-dev.web.app
```
y revisa que cargue correctamente.

---

## 📲 5. Probar en el teléfono
En tu celular Android:
1. Abre el sitio en modo incógnito.
2. Revisa que salga el botón **“Instalar app 📲”**.
3. Instálala y confirma que abre sin barra de navegador.

---

## 🧯 6. Si algo sale mal
Firebase guarda versiones anteriores.  
Para volver atrás:  
**Consola Firebase → Hosting → Releases → “Revertir versión”**

Así puedes regresar a la última versión estable sin perder nada.

---

## 💾 Recomendaciones
- Antes de publicar, guarda tus archivos (`App.tsx`, `index.html`, `manifest.webmanifest`).
- Siempre prueba con `npm run preview` antes de `firebase deploy`.
- No subas hasta que todo se vea correcto.

---

✨ Con cariño, esta guía fue creada para ti — *Eureka Labs & Marianita AI* 💜  
