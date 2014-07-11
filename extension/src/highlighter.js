
var regexp = new RegExp(/(D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32})/gm);
var body_text = $('body').text();
var wallet_menu_html = '<span class="wallet-menu">$1</span>';

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
    $(node).replaceWith(node.nodeValue.replace(regexp, wallet_menu_html));
}

var $links = $('[href^=dogecoin]');
$links.each(function(i, el) {
    var $el = $(el),
        $children = $el.find('.wallet-menu');
    if (!$children.length) {
        $el.html($el.html().replace(/(.*)/, wallet_menu_html));
    }
})


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