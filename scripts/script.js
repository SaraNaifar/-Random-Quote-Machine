const $ = window.$

var quoteList = [{
  quote: 'May the Force be with you.',
  author: 'Star Wars'
}, {
  quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
  author: 'Thomas Edison'
}, {
  quote: 'Knowledge is power.',
  author: 'Sir Francis Bacon'
}, {
  quote: 'Nothing is certain except for death and taxes.',
  author: 'Benjamin Franklin'
}, {
  quote: 'To thine own self, be true.',
  author: 'William Shakespeare'
}, {
  quote: 'You must be the change you wish to see in the world.',
  author: 'Mahatma Ghandi'
}]
// var authorList = ["author1", " author2", "author3"];

function randomQuote () {
  let index = Math.floor(Math.random() * quoteList.length)
  return index
}
$(document).ready(function () {
  var randomIndex

  function init () {
    randomIndex = 0
    $('.display-quote').html(quoteList[0].quote)
    $('.display-author').html('-' + quoteList[0].author + '-')
  }

  init()

  $('.mybutton').click(function () {
    randomIndex = randomQuote()
    $('.display-quote').html(quoteList[randomIndex].quote)
    $('.display-author').html('-' + quoteList[randomIndex].author + '-')
  })

  $('.twitter-share-button').on('click', function () {
    $('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?text=' + quoteList[randomIndex].quote + ' ' + quoteList[randomIndex].author)
  })
})
