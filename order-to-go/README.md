*** steps to create this repo ***
1 === create a repo "JS300project" in github
git clone this repo to laptop
2 ==== create a react project name "order-to-go"
create-react-app order-to-go
--- cd into order-to-go and start the page
cd order-to-go
--- should see folders & files under this folder: node_modules, public, src, .gitignore, package.json, yarn.lock  

3 === install react-router & prop-types
npm install --save react-router-dom prop-types

4 === install firebase firestore
npm install --save react-firebaseui 
npm install --save firebase

5 ==== create GitHub page
npm install --save-dev gh-pages


?? === got an error:  missing script: deploy
make sure edit the package.json to include delpoyment info
 and github page "homepage": "https://chanjessica.github.io/JS300project/"

=== make sure to rename .env.development.local to .env.local
=== make sure to add api-key file in .gitignore

=== npm run deploy == create
> order-to-go@0.1.0 deploy C:\_UWclass\JS300\JS300project\order-to-go
> gh-pages -d build
Published

check: https://chanjessica.github.io/JS300project/