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

# Add to
```
