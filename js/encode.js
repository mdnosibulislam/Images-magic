async function encode(){

const cover = document.getElementById("cover").files[0]
const secret = document.getElementById("secret").files[0]
const pass = document.getElementById("pass").value

if(!cover || !secret){
alert("Please select both files")
return
}

if(pass === ""){
alert("Enter a passcode")
return
}

const zip = new JSZip()

zip.file(secret.name, secret)

const zipData = await zip.generateAsync({type:"uint8array"})

const reader = new FileReader()

reader.onload = function(){

const coverBytes = new Uint8Array(reader.result)

const marker = new TextEncoder().encode("STEGO_"+pass+"_")

const merged = new Uint8Array(
coverBytes.length + marker.length + zipData.length
)

merged.set(coverBytes,0)
merged.set(marker,coverBytes.length)
merged.set(zipData,coverBytes.length + marker.length)

const blob = new Blob([merged])

const link = document.createElement("a")
link.href = URL.createObjectURL(blob)
link.download = "encoded_image.png"
link.click()

document.getElementById("encodeStatus").innerText =
"File hidden successfully"

}

reader.readAsArrayBuffer(cover)

}
