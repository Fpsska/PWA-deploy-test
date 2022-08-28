## _Necessary steps:_
1) check imports in index.js file

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // required
import reportWebVitals from './reportWebVitals';
```
2) register serviceWorkerRegistration in index.js file

```js
serviceWorkerRegistration.unregister() 
serviceWorkerRegistration.register()  // use this

```

3) check public folder structure:

![](https://github.com/Fpsska/PWA-deploy-test/blob/main/src/app/assets/images/publc-folder-structure.jpg)

4) configure manifest.json file

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192",
      "purpose": "any maskable" // recommended for best PWA-optimization
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

5) press F12 -> Lighthouse -> Generate report

![](https://github.com/Fpsska/PWA-deploy-test/blob/main/src/app/assets/images/navigation-to-lighthouse.jpg)

6) deploy build folder of your app to hosting

##

`watch demo` _[pwa-deploy-test](https://Fpsska.github.io/PWA-deploy-test)_


