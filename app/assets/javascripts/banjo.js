window.Banjo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
      $.ajax({
          type: "GET",
          dataType: "jsonp",
          cache: false,
          url: "https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e",
          success: function(json){
              popular = json["data"];

              var imageurl = popular[0]["images"]["low_resolution"]["url"];
              //$('p').html('').html('Survivor ===> ' + count);
              $('div#instagram').html('').html("<img id='imageid' src ='" + imageurl + "'/>");
          }
      });
  }
};

$(document).ready(function(){
  Banjo.init();
});