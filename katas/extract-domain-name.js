function domainName(url) {
  let cleanUrl = url;
  if (url.includes('//')) {
    cleanUrl = url.substr(url.indexOf('/') + 2)
  }
  if (url.includes('www.')) {
    cleanUrl = cleanUrl.substr(4)
  }
  return cleanUrl.substr(0, cleanUrl.indexOf('.'));
}


console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("https://www.youtube.com"), "youtube");