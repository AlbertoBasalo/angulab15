# CLI journal

> A detailed [list of commands executed](./commands.sh) for recreate the scaffolding of this workspace.

## β¨ Create an empty workspace

```bash
ng new angulab15 --create-application=false
```

## β¨ Generate the main app called www

```bash
ng g app www --prefix=www --project-root=projects/apps --routing=false --style=css -s -t
# ποΈ Remove all app folder files π¨

# β¨ Generate a new standalone root component
ng g c app -c=OnPush --flat --project=www --standalone=true --selector=www-root --style=none -t

# βπΌ Bootstrap application with the new component on main.js
# bootstrapApplication(AppComponent);
```

## β¨ Generate a library for home page component

```bash
ng g lib home --prefix=home --project-root=projects/routes/home
# ποΈ Remove all lib files and clear al exports from entry point π¨

# β¨ Generate a page component
ng g c home -c=OnPush --flat --project=home --skip-selector=true --standalone=true --style=none -t --type=page
# π’ export the HomePage component on the entry public-api.ts file

# π­ Build the library to dist folder
npm run build home
```

## πΊοΈ Add routing

```bash
# β Create a routes.ts file on the main app with this config for empty path
# loadComponent: () => import('home').then((c) => c.HomePage),

# βπΌ Add routing providers to the bootstrap on main.ts file
# providers: [importProvidersFrom(RouterModule.forRoot(appRoutes))],

# βπΌ Add router outlet to the root component,
# π remember to import RouterModule at component level
# imports: [CommonModule, RouterModule],

# π start
npm start
```
