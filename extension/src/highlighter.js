
var regexp = new RegExp(/(D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32})/gm);
var body_text = $('body').text();

function getNodes() {
    var walker = document.createTreeWalker(
        document.body, 
        NodeFilter.SHOW_TEXT, 
        null, 
        false
    );

    var node;
    var textNodes = [];

    while(node = walker.nextNode()) {
        textNodes.push(node);
    }
    return textNodes;
}

var nodes = getNodes();

for (var i = 0; i < nodes.length; i+=1) {
    var node = nodes[i];
    $(node).replaceWith(node.nodeValue.replace(regexp,'<span style="background-color:red">$1</span>'));
}


// var x = $('body').find("*").filter(function () {
//     var text = $(this).text();

//     // console.log(this, text, text.indexOf(regexp), regexp.test(text), text.search(regexp));
//     // console.log(this, (this.textContent || this.innerText).indexOf(regexp) === 0);
//     // debugger;
//     return (this.textContent || this.innerText).indexOf(regexp) === 0;
// })

// console.log(x);


// var addPopover = function() {

// }
// console.log(body_text.replace(regexp, '<span class="style="background-color:red">$1</span>'));


// var links = $('[href^=dogecoin]');
// links.each(function(i, el) {
//     var $el = $(el);
//     if (!regex.test($el.text())) {
//         $el.wrap('<span style="background-color:red"></span>');
//     }
// });