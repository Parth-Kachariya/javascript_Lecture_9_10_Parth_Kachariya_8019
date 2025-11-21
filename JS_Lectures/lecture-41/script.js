//  jQuery HTML Method 

// 

// html()
// val()
// text()

// GET METHOD

// $('#html').click(function(){
//   alert('Html Element : ' + $('#heading').html())
// })


// $('#html').click(function(){
//   alert('Html Element : ' + $('#box').html())
// })


// $('#html').click(function(){
//   alert('Html Element : ' + $('#inputfield').val())
// })

// SET METHOD

$('#html').click(function(){
  $('.box').html('<p>This is P tag</p>')
})


$('#html').click(function(){
  $('.box').text('<p>This is P tag</p>')
})

$('#html').click(function(){
  $('#inputfield').val('<p>This is P tag</p>')
})

$('#btn').click(function(){
  $('#main').addClass('bg-red-400')
})

$('#remove').click(function(){
  $('#main').removeClass('rounded-xl')
})

$('#remove').click(function(){
  $('#main').toggleClass('box')
})


// jquery add / remove method 

$('#append').click(function(){
  $('#pre').append("Hello JQuery!")
})

$('#prepend').click(function(){
  $('#pre').prepend("Hello JQuery!")
})

$('#after').click(function(){
  $('#pre').after("Hello JQuery!")
})

$('#before').click(function(){
  $('#pre').before("Hello JQuery!")
})
