 
<h1 style="color:white">Better-PSN</h1>

 <!-- view live site link -->
 <a href="https://ls2355.github.io/Better-PSN/">
  <!-- styleing is in the src url= https://custom-icon-badges.demolab.com/badge/ <text>-<color> ?style=<style> &logo=<logo>   -->
   <img align="right" alt="My portfolio" title="My portfolio" src="https://custom-icon-badges.demolab.com/badge/-View_Live_site-purple?style=for-the-badge&logoColor=white&logo=portfolioe"/>
 </a> 
<!-- for more info got to https://github.com/DenverCoder1/custom-icon-badges -->


<h2 style="color:#e3de40"> Purpose: </h2>
<h4> This project was created because Sony does not offer the ability to see your PlayStation network, friends status without using your consul, or their specific application.</h4>

<h2 style="color:#04857a"> Features </h2>
  <h4>List of Features in order</h4>
  <ul>
    <li>view PSN friends online status</li>
    <li>view friend personal info</li>
        if they share it with you
    <li>view friend current activity (games)</li>
    <li>view friend account trophie level</li>
    <li>view last online status</li>
  </ul>

#### 🗒️ NOTE <br />

<p> - if you add to your personal machine you can just add your NPSSO code directly in the API/playstions.js file, so you don't have to constantly retype it</p>

#### ⚠️Important Information⚠️
  <p style="background:#780a0A; padding: 5px 3px; width:80%; border-radius:5px;">server for fetching personal data is not Live. Page is only static for demonstrative purposes </p>

---
<h3>PSN Friends</h3>
  <img alt="image of PSN Friends" src="./ReadMe-imgs/friend-card.png" />
  <p>View - online status</p>
  <p>View - personal Info (if they share it)</p>
  <p>View - current activity (what they are playing)</p>
  <p>View - last time they've been active</p>

---
<h3>How it works</h3>
  <img alt="image of Personal login instructions" src="./ReadMe-imgs/personal-login-.png" />
  <p>All information is gathered from sony's public API</p>
  <p>your acount info is reached using a code you get from sony called NPSSO. (do not share this code it is the equivalent to your account password)</p>
  <p>all the information used is not stored. (I don't care about your info)</p>

---

<h2>Installation and Running on private machine 🌐</h2>
  <p>if you just want to see a demo click on the better-PSN site like at the top of the doc</p>
  <ol>
  <li>download Zip or clone</li>
  <li> travel to Client folder and install dependancies

    ``` 
    cd ./Client
    npm i
    ```

  </li>
  <li> travel to server folder and install dependancies

    ``` 
    cd ../API
    npm i
    ```

  </li>
  <li> 
  make sure to get your NPSSO code before hand. (walk through has been provided, it's on the Better-PSN site, just click PersonalAccount to see steps)
  </li>
  <li> Run Backend and front end 

    ``` 
    npm start
    cd ../Client
    npm run dev
    ```
  </li>

  </ol>


## Tech Stack:
<!-- to cange color to hex value put %23<value> after color -->
![CORS](https://img.shields.io/badge/CORS-%23C27d06.svg?style=for-the-badge&logo=CORS&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SCSS/SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![vite](https://custom-icon-badges.demolab.com/badge/-VITE-%23646CFF?style=for-the-badge&logoColor=%23fff712&logo=vite)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) 
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) 
![JSON](https://custom-icon-badges.demolab.com/badge/-JSON-grey?style=for-the-badge&logoColor=%23127808&logo=JSON)
![YAML](https://custom-icon-badges.demolab.com/badge/-YAML-black?style=for-the-badge&logoColor=%23CB171E&logo=YAML)
![REST API](https://custom-icon-badges.demolab.com/badge/-API-%235c0878?style=for-the-badge&logoColor=white&logo=api)
![Rollup js](https://custom-icon-badges.demolab.com/badge/-Rollup.js-%23E61414?style=for-the-badge&logoColor=%23EC4A3F&logo=rollup.js)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![git](https://custom-icon-badges.demolab.com/badge/-Git-%23575757?style=for-the-badge&logoColor=%23F05032&logo=git)
![Windows](https://custom-icon-badges.demolab.com/badge/-Windows-white?style=for-the-badge&logoColor=%230078D6&logo=windows)
![vs code](https://custom-icon-badges.demolab.com/badge/-VS_CODE-black?style=for-the-badge&logoColor=%23007ACC&logo=visual-studio-code)
<details><summary>Notes to self (just ignore this)</summary>
look at the rollup documentation so that i can properly configure the webpack. 
the main issue is that images are not appearing
also see if i can get the server to run using github actions as well

then run build again


</details>
