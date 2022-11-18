ng new angulab15 --create-application=false
ng g app www --prefix=www --project-root=projects/apps --routing=false --style=css -s -t
ng g c app -c=OnPush --flat --project=www --standalone=true --selector=www-root --style=none -t
ng g lib home --prefix=home --project-root=projects/routes/home
ng g c home -c=OnPush --flat --project=home --skip-selector=true --standalone=true --style=none -t --type=page
npm run build home
npm start
