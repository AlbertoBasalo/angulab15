# CLI journal

> A detailed [list of commands executed](./commands.sh) for recreate the scaffolding of this workspace.

## ✨ Create an empty workspace

```bash
ng new angulab15 --create-application=false
```

## ✨ Generate the main app called www

```bash
ng g app www --prefix=www --project-root=projects/apps --routing=false --style=css -s -t
# 🗑️ Remove all app folder files 😨

# ✨ Generate a new standalone root component
ng g c app -c=OnPush --flat --project=www --standalone=true --selector=www-root --style=none -t

# ✍🏼 Bootstrap application with the new component on main.js
# bootstrapApplication(AppComponent);
```

## ✨ Generate a library for home page component

```bash
ng g lib home --prefix=home --project-root=projects/routes/home
# 🗑️ Remove all lib files and clear al exports from entry point 😨

# ✨ Generate a page component
ng g c home -c=OnPush --flat --project=home --skip-selector=true --standalone=true --style=none -t --type=page
# 🚢 export the HomePage component on the entry public-api.ts file

# 🏭 Build the library to dist folder
npm run build home
```

## 🗺️ Add routing

```bash
# ➕ Create a routes.ts file on the main app with this config for empty path
# loadComponent: () => import('home').then((c) => c.HomePage),

# ✍🏼 Add routing providers to the bootstrap on main.ts file
# providers: [importProvidersFrom(RouterModule.forRoot(appRoutes))],

# ✍🏼 Add router outlet to the root component,
# 😏 remember to import RouterModule at component level
# imports: [CommonModule, RouterModule],

# 🚀 start
npm start
```
