var text = "Lorem8 0  ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit hic exercitationem corporis explicabo mollitia iusto veritatis ab ullam fuga tempora, quam possimus, perspiciatis dolor debitis repellendus earum enim tenetur."
var result = text.search("Lorem");
console.log(result);

 result = text.replace("ipsum", "FIlan")
 console.log(result);

var regex = new RegExp ('dolor');

//  result = text.test("dolor");
result = regex.test(text)
console.log(result)

regex = /amet/g;
result = text.match(regex)
console.log(result)

regex = /i/g;
result = text.match(regex)
console.log(result)

regex = /[ai]/g;
result = text.match(regex)
console.log(result)

regex = /[0-9]/g;
result = text.match(regex)
console.log(result)

regex = /\d/g;
result = text.match(regex)
console.log(result)

regex = /(top|best|school)/g;
result = text.match(regex)
console.log(result)