# Nuxt Lynx

## Get Started

### Install

```bash
npm i --save https://github.com/Chris-Brighton/nuxt-lynx
```

### Scripts

Add the following scripts to you package.json for access to the file helper scripts

```json
"scripts" : {
  "init-nuxt-lynx": "node ./node_modules/nuxt-lynx/scripts/init.js",
  "add-service": "node ./node_modules/nuxt-lynx/scripts/service.js"
}
```

### Config

Update your nuxt.config.js

```javascript
  serverMiddleware: ['~/server/index.js'],
  watch: ['server'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/capitalize.js',
    '~/plugins/queryString.js',
    '~/plugins/groupBy.js',
    '~/plugins/service.js',
    '~/plugins/slug.js',
  ],
```

## Init

After adding the scripts run the init command to add a basic project template

```bash
npm run init-nuxt-lynx
```

---

## Add Service

```bash
npm run add-service <service-name>
```
