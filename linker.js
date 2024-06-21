const regex = /([\s"'])(Q\d+)/g;

document.body.innerHTML = document.body.innerHTML.replace(regex, (match) => {
  return '$1<a href="https://wikidata.org/entity/$2" target="_blank">$2</a>';
});
