const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const URL = "https://eloquentjavascript.net/14_dom.html"
const CSS_SELECTOR = ".h_ident"


let headers = {
    "Accept": "text/html",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36"
}

fetch(URL, {
    method: "GET",
    headers: headers
})
    .then((resp) => resp.text())
    .catch(e => console.log(e))
    .then((body) => {
        const dom = new JSDOM(`${body}`);
        const domList = dom.window.document.querySelectorAll(CSS_SELECTOR);
        const texts = [];
        domList.forEach((e) => {
        texts.push(e.parentNode.textContent);
        });
        console.log(texts);
    })