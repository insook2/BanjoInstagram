//Model
window.Banjo = Backbone.Model.extend();

window.BanjoCollection = Backbone.Collection.extend({
    model:Banjo,
    url:'/search'
});

window.BanjoView = Backbone.View.extend({
      $el: $('div#instagram'),
      initialize: function(){
          _.bindAll(this.render);
          this.collection = new BanjoCollection();
          this.collection.bind('reset', this.render, this);
          this.resetCollection();
      },

    render:function(){
        if( this.collection.length > 0)
        {
            $('div#instagram').html('');
            for (var i=0; i < this.collection.length ; i++)
            {
                var imageurl = this.collection.models[i].attributes.images.low_resolution.url;
                var caption = this.collection.models[i].attributes.caption;
                var captionText = '';
                if(caption){
                   captionText = caption.text;
                }
                $('div#instagram').append("<div class='image_holder '><img src ='" + imageurl + "'/><span>"+captionText+"</span></div> ") ;
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
    interval = window.setInterval(function(){
        var view = new BanjoView();
    }, 30000);

//    $('a').click(function(){
//           clearInterval(interval);
//        });
});
