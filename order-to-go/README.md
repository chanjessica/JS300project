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
npm run deploy

?? === got an error:  missing script: deploy
