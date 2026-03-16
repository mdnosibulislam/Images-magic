<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Image Steganography Web Tool</title>

<style>

body{
font-family:Arial, sans-serif;
margin:0;
background:#f4f6f8;
color:#333;
line-height:1.6;
}

.container{
max-width:900px;
margin:auto;
padding:40px 20px;
}

h1{
text-align:center;
font-size:36px;
}

.subtitle{
text-align:center;
opacity:0.8;
margin-bottom:30px;
}

.center{
text-align:center;
}

button{
padding:12px 25px;
font-size:16px;
border:none;
border-radius:8px;
cursor:pointer;
margin:10px;
}

.live-btn{
background:#28a745;
color:white;
}

.linkedin{
background:#0077b5;
color:white;
}

.github{
background:#333;
color:white;
}

img{
max-width:100%;
border-radius:10px;
box-shadow:0 10px 20px rgba(0,0,0,0.15);
}

.section{
margin-top:50px;
}

pre{
background:#eee;
padding:20px;
border-radius:8px;
overflow:auto;
}

ul li{
margin:8px 0;
}

ol li{
margin:8px 0;
}

.footer{
margin-top:60px;
text-align:center;
opacity:0.8;
}

</style>

</head>

<body>

<div class="container">

<h1>🖼️ Image Steganography Web Tool</h1>

<p class="subtitle">
A simple browser-based tool that hides files inside an image and extracts them later using a passcode.
</p>


<div class="center">

<a href="https://mdnosibulislam.github.io/Images-magic/">
<button class="live-btn">
🚀 Open Live Website
</button>
</a>

</div>


<div class="section">

<h2>📸 Website Preview</h2>

<div class="center">

<img src="screenshot.png" alt="Website Preview">

<p>Add a screenshot of your website and name it <b>screenshot.png</b></p>

</div>

</div>


<div class="section">

<h2>✨ Features</h2>

<ul>
<li>Hide files inside an image</li>
<li>Extract hidden files using passcode</li>
<li>Automatic ZIP packaging</li>
<li>Simple browser interface</li>
<li>No server required</li>
<li>Works completely offline</li>
</ul>

</div>


<div class="section">

<h2>🛠 Technologies Used</h2>

<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>JSZip Library</li>
</ul>

</div>


<div class="section">

<h2>📂 Project Structure</h2>

<pre>
image-steganography-tool
│
├── index.html
├── css
│   └── style.css
├── js
│   ├── encode.js
│   ├── decode.js
│   └── main.js
└── README.md
</pre>

</div>


<div class="section">

<h2>⚙️ How To Use</h2>

<h3>Encode (Hide File)</h3>

<ol>
<li>Select a cover image</li>
<li>Select the file you want to hide</li>
<li>Enter a passcode</li>
<li>Click <b>Encode & Download</b></li>
<li>A new encoded image will download</li>
</ol>


<h3>Decode (Extract File)</h3>

<ol>
<li>Upload the encoded image</li>
<li>Enter the same passcode</li>
<li>Click <b>Decode & Extract</b></li>
<li>The hidden file downloads as a ZIP file</li>
</ol>

</div>


<div class="section">

<h2>🚀 Run Locally</h2>

<pre>
git clone https://github.com/mdnosibulislam/Images-magic.git
</pre>

<p>Open <b>index.html</b> in your browser.</p>

</div>


<div class="section">

<h2>⚠️ Note</h2>

<p>
This project demonstrates the basic concept of image steganography and is intended for learning purposes.
</p>

<p>
This project was created with the assistance of <b>ChatGPT</b> using a no-code guidance approach.
</p>

</div>


<div class="section">

<h2>👨‍💻 Author</h2>

<div class="center">

<a href="https://www.linkedin.com/in/md-nosibul-islam-connect">
<button class="linkedin">LinkedIn</button>
</a>

<a href="https://github.com/mdnosibulislam">
<button class="github">GitHub</button>
</a>

</div>

</div>


<div class="footer">

<p>⭐ If you like this project, consider giving it a star on GitHub.</p>

</div>

</div>

</body>
</html>
