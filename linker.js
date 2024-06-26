const regex = /(?<=>|^|[\^\s("]+)Q\d+(?=[$\s\w)"]*<)/g;

document.body.innerHTML = document.body.innerHTML.replace(regex, (match) => {
  return `<a href="https://wikidata.org/entity/${match}" target="_blank">${match}</a>`;
});
