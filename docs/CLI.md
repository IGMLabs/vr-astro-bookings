CLI journal 
ng new angular-intro --routing true --style css

npm install @picocss/pico

1. Templates

2. Modules
ng g m core
ng g c core/header --export
ng g c core/title

ng g c core/footer --export

ng g m shared
ng g c shared/reloading --export

3. Router
ng g m about --route=about --module=app
ng g m contact --route=contact --module=app
ng g c contact --type=page
