var links = $('[href^=dogecoin]');

links.each(function(i, el) {
  $(el).wrap('<span style="background-color:red"></span>');
})