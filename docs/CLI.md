# CLI journal

## Create empty workspace

```bash
ng new ng-ws-15 --create-application=false
```

## Create main app called www

```bash
ng g app www --prefix=www --project-root=projects/apps --routing=false --style=css -s -t
# Remove all app files 😨

# Generate new standalone root component
ng g c app -c=OnPush --flat --project=www --standalone=true --selector=www-root --style=none -t

# Add to main
```

## Create a library for home page

```bash
# generate a route library
ng g lib home --prefix=home --project-root=projects/routes/home
# Remove all lib files and clear al exports from entry point 😨

# generate a page component
ng g c home -c=OnPush --flat --project=home --skip-selector=true --standalone=true --style=none -t --type=page
# export the HomePage on entry point file
# build
ng build home
```
