
//window.Banjo = Backbone.Model.extend();
//
//window.BanjoCollection = Backbone.Collection.extend({
//    model:Banjo,
//    url:'/search'
//});
//
//window.BanjoView = Backbone.View.extend({
//      initialize: function(){
//          _.bindAll(this.render);
//          this.render();
//      },
//
//    render:function(){
//
//        console.log('did we get here');
//        this.$('body').html('<h1>Hi there </h1>');
//
//        return this;
//    }
//});
//
//var AppRouter = Backbone.Router.extend({
//
//    routes: {
//        "": "home"
//    },
//
//    home: function() {
//        console.log("default start");
//
//        this.banjoList = new BanjoCollection();
//        this.banjoListView = new BanjoView({model:this.banjoList});
//        this.banjoList.fetch();
//
//    }
//
//});
//
//var app = new AppRouter();
//Backbone.history.start();

////Model
//window.Banjo = Backbone.Model.extend();
//
//window.BanjoCollection = Backbone.Collection.extend({
//    model:Banjo,
//    url:'/search'
//});
//
//window.BanjoView = Backbone.View.extend({
//      el: $('#main_container #instagram'),
//      initialize: function(){
//          _.bindAll(this.render);
//
//          this.render();
//      },
//
//    render:function(){
//       $(this.el).html(this.model.toJSON());
//        return this;
//    }
//});
//
//var AppRouter = Backbone.Router.extend({
//    routes:{
//        "":"list"
//    },
//    list:function(){
//      this.banjoList = new BanjoCollection();
//      this.banjoListView = new BanjoListView({model:this.banjoList});
//      this.banjoList.fetch();
//
//    }
//});

//Model
window.Banjo = Backbone.Model.extend();

window.BanjoCollection = Backbone.Collection.extend({
    model:Banjo,
    url:'/search'
//    sync: function(options) {
//        $.ajax({
//            type: "GET",
//            url: '/search'
//        });
//    },
//    parse: function(response) {
//        return response.data;
//    }
});

window.BanjoView = Backbone.View.extend({
      $el: $('div#instagram'),
      initialize: function(){
          _.bindAll(this.render);
          this.collection = new BanjoCollection();
          this.collection.bind('reset', this.render, this);
          this.resetCollection();
//          this.model.fetch();
//          this.render();
      },

    render:function(){
//        $.ajax({
//            type: "GET",
//            url: '/search'
//        }).done( function(response){
//            popular = response["data"];
//            responseData = popular;
//            $('div#instagram').html('');
//            for (var i = 0; i < popular.length; i++)
//            {
//                var imageurl = popular[i]["images"]["low_resolution"]["url"];
//                $('div#instagram').append("<div class='image_holder '><img src ='" + imageurl + "'/></div> ") ;
//            }
//        });


        if( this.collection.length > 0)
        {
            $('div#instagram').html('');
            for (var i=0; i < this.collection.length ; i++)
            {
                var imageurl = this.collection.models[i].attributes.images.low_resolution.url;
                $('div#instagram').append("<div class='image_holder '><img src ='" + imageurl + "'/></div> ") ;
            }
        }

    },

    resetCollection: function(){
        var responseData = [];
        $.when($.ajax({async: false, type: "GET", url: '/search'}))
            .done( function(response){
                popular = response["data"];
                responseData = popular;
            });
        this.collection.reset(responseData);
    }

});

$(document).ready(function(){
   var view = new BanjoView();
});


//window.Banjo = {
//  Models: {},
//  Collections: {},
//  Views: {},
//  Routers: {},
//  init: function() {
//      this.render();
//  },
//
//  render: function(){
//
//      $.ajax({
//          type: "GET",
//          url: '/search'
//      }).done( function(response){
//              popular = response["data"];
//              $('div#instagram').html('');
//              for (var i = 0; i < popular.length; i++)
//              {
//                  var imageurl = popular[i]["images"]["low_resolution"]["url"];
//                  $('div#instagram').append("<div class='image_holder '><img src ='" + imageurl + "'/></div> ") ;
//              }
//          });
//  }
//};
//
//$(document).ready(function(){
//   Banjo.init();
//});