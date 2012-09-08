window.Banjo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {


      $.ajax({
          type: "GET",
          url: '/search'
      }).done( function(response){
              popular = response["data"];

              var html = "";
              popular.forEach(function(index){
                 if(index%4 == 0)
                 {
                   html += "<"
                 }
              });
              var imageurl = popular[0]["images"]["low_resolution"]["url"];
              $('div#instagram').html('').html("<img id='imageid' src ='" + imageurl + "'/>");
      });

//      $.ajax({
//          type: "GET",
//          dataType: "jsonp",
//          cache: false,
//          url: "https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e",
//          success: function(json){
//              popular = json["data"];
//
//              var imageurl = popular[0]["images"]["low_resolution"]["url"];
//              //$('p').html('').html('Survivor ===> ' + count);
//              $('div#instagram').html('').html("<img id='imageid' src ='" + imageurl + "'/>");
//          }
//      });
  }
};

$(document).ready(function(){
  Banjo.init();
});