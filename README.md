Demo Link: https://npalak.github.io/nehaPortfoliow/
How to deploy project:

<img width="937" alt="Screenshot 2025-02-07 at 9 34 28 PM" src="https://github.com/user-attachments/assets/58acbc25-8cc1-49b8-a01f-df7533bacc3a" />

add package.json
  "homepage": "https://npalak.github.io/nehaPortfoliow",

add script:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

then 
>npm run build
>npm run deploy
