const URL_API_REBRANDLY = "https://api.rebrandly.com/v1/links";
const url = `${window.location.href}`;

let linkRequest = {
  destination: url,
  domain: {
    fullName: "rebrand.ly"
  }
}

let requestHeaders = {
  "Content-Type": "application/json",
  "apikey": "0e6ebb40ba234fdda97eea98423a458d",
}

fetch(URL_API_REBRANDLY, {
    method: "POST",
    body: JSON.stringify(linkRequest),
    headers: requestHeaders,
  })
  .then(res => res.json())
  .then(data => {
    const { shortUrl } = data;
    const compartir = document.getElementById("whatsapp");
    compartir.setAttribute('href', `https://wa.me/?text=Aunque%20estemos%20lejos%2C%20una%20carta%20para%20ti%20mamá%20https://${shortUrl}`);
  })
  .catch(err => console.log(err))
