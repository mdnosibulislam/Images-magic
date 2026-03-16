function decode(){

const encodedFile = document.getElementById("encoded").files[0]
const pass = document.getElementById("decodePass").value

if(!encodedFile){
alert("Upload encoded image")
return
}

if(pass === ""){
alert("Enter passcode")
return
}

const reader = new FileReader()

reader.onload = function(){

const data = new Uint8Array(reader.result)

const marker = new TextEncoder().encode("STEGO_"+pass+"_")

let index = -1

for(let i=0;i<data.length-marker.length;i++){

let found = true

for(let j=0;j<marker.length;j++){

if(data[i+j] !== marker[j]){
found = false
break
}

}

if(found){
index = i + marker.length
break
}

}

if(index === -1){
alert("Wrong passcode or no hidden file")
return
}

const hiddenData = data.slice(index)

const blob = new Blob([hiddenData],{type:"application/zip"})

const link = document.createElement("a")
link.href = URL.createObjectURL(blob)
link.download = "hidden.zip"
link.click()

document.getElementById("decodeStatus").innerText =
"Hidden file extracted"

}

reader.readAsArrayBuffer(encodedFile)

}
