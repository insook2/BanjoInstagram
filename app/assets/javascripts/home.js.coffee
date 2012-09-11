
class Home
  constructor: ->

  appendToInstagram = (popular, i) ->
    loaded = false
    imageUrl = popular['images']['low_resolution']['url']
    caption = ""
    if popular['caption']
      caption = popular['caption']['text']

    image_holder = $('.image_holder').size()

    if image_holder == 20
      loaded = true

    if loaded
      currentImage = $('img').eq(i)
      currentImage.fadeOut('slow', ->
          currentImage.attr "src", imageUrl
          )
      currentImage.fadeIn 'slow'
      $('span').eq(i).html(caption)

    else
      $("#instagram").append('<div class="image_holder"><img src="" alt=""><span></span></div>')
      $('img:last').attr "src", imageUrl
      $('span:last').html(caption)

  refreshImage: ->
    $.ajax 'https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e',
      type: "GET",
      dataType: "jsonp",
      success: (data, status, xhr) ->
        for popular in data["data"]
          appendToInstagram popular, _i

$(document).ready ->
  home = new Home()
  home.refreshImage()
  every = (ms, callback) -> setInterval callback, ms
  every(30000, home.refreshImage)

