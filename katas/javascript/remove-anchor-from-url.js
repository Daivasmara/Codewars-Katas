function removeUrlAnchor(url) {
  return url.match(/[^#]*/i)[0]
}

console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
