////Model
//window.Banjo = Backbone.Model.extend({
//    defaults: {
//        url:'',
//        caption: ''
//    }
//});
//
//window.BanjoCollection = Backbone.Collection.extend({
//    model:Banjo
//});
//
//window.BanjoView = Backbone.View.extend({
//      $el: $('div#main_container'),
//      tagName : 'div',
//      initialize: function(){
//          _.bindAll(this.render);
//          this.collection = new BanjoCollection();
//          this.collection.bind('reset', this.render, this);
//          this.resetCollection();
//      },
//
//    render:function(){
//        if( this.collection.length > 0)
//        {
//            var hi = this.collection.models[0].url;
//            $('div#instagram').append("<div class='image_holder '>"+hi+"</div>");
//        }
////        if( this.collection.length > 0)
////        {
////            $('div#instagram').html('');
////            for (var i=0; i < this.collection.length ; i++)
////            {
////                var imageurl = this.collection.models[i].attributes.images.low_resolution.url;
////                var caption = this.collection.models[i].attributes.caption;
////                var captionText = '';
////                if(caption){
////                   captionText = caption.text;
////                }
////                $('div#instagram').append("<div class='image_holder '><img src ='" + imageurl + "'/><span>"+captionText+"</span></div> ") ;
////            }
////        }
//    },
//
//    resetCollection: function(){
//        var responseData = [];
//
//        $.ajax({
//            type: "GET",
//            dataType: "jsonp",
//            cache: false,
//            url: "https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e",
//            success: function(data) {
//                for (var i = 0; i < 10; i++) {
//                    var imageurl = data.data[i].images.low_resolution.url;
//                    var newimage = new Banjo(imageurl, 'hi');
//                    responseData.push(newimage);
//                    //$("#instagram").append("<a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a>");
//                }
//            }
//        });
//
//        this.collection.reset(responseData);
//
////        $.ajax({
////            async: false,
////            type: "GET",
////            dataType: "jsonp",
////            url: "https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e" })
////            .done(function(response){
////                popular = response["data"];
////                popular = responseData;
////            });
////        this.collection.reset(responseData);
//    }
//
//});
//
//$(document).ready(function(){
////    $.ajax({
////        type: "GET",
////        dataType: "jsonp",
////        cache: false,
////        url: "https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e",
////        success: function(data) {
////            for (var i = 0; i < 10; i++) {
////                $("#instagram").append("<a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a>");
////            }
////        }
////    });
//
//
// var view = new BanjoView();
////    interval = window.setInterval(function(){
////        var view = new BanjoView();
////    }, 3000);
//
////    $('a').click(function(){
////           clearInterval(interval);
////        });
//});
//
//
////Model
//window.Banjo = Backbone.Model.extend({
//    defaults: {
//        url:'',
//        caption: ''
//    }
//});
//
//window.BanjoCollection = Backbone.Collection.extend({
//    model:Banjo
//});
//
//window.BanjoView = Backbone.View.extend({
//      $el: $('div#main_container'),
//      tagName : 'div',
//      initialize: function(){
//          _.bindAll(this.render);
//          this.collection = new BanjoCollection();
//          this.collection.bind('reset', this.render, this);
//          this.resetCollection();
//      },
//
//    render:function(){
//        if( this.collection.length > 0)
//        {
//            var hi = this.collection.models[0].url;
//            $('div#instagram').append("<div class='image_holder '>"+hi+"</div>");
//        }
////        if( this.collection.length > 0)
////        {
////            $('div#instagram').html('');
////            for (var i=0; i < this.collection.length ; i++)
////            {
////                var imageurl = this.collection.models[i].attributes.images.low_resolution.url;
////                var caption = this.collection.models[i].attributes.caption;
////                var captionText = '';
////                if(caption){
////                   captionText = caption.text;
////                }
////                $('div#instagram').append("<div class='image_holder '><img src ='" + imageurl + "'/><span>"+captionText+"</span></div> ") ;
////            }
////        }
//    },
//
//    resetCollection: function(){
//        var responseData = [];
//
//        $.ajax({
//            type: "GET",
//            dataType: "jsonp",
//            cache: false,
//            url: "https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e",
//            success: function(data) {
//                for (var i = 0; i < 10; i++) {
//                    var imageurl = data.data[i].images.low_resolution.url;
//                    var newimage = new Banjo(imageurl, 'hi');
//                    responseData.push(newimage);
//                    //$("#instagram").append("<a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a>");
//                }
//            }
//        });
//
//        this.collection.reset(responseData);
//
////        $.ajax({
////            async: false,
////            type: "GET",
////            dataType: "jsonp",
////            url: "https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e" })
////            .done(function(response){
////                popular = response["data"];
////                popular = responseData;
////            });
////        this.collection.reset(responseData);
//    }
//
//});
//
//$(document).ready(function(){
////    $.ajax({
////        type: "GET",
////        dataType: "jsonp",
////        cache: false,
////        url: "https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e",
////        success: function(data) {
////            for (var i = 0; i < 10; i++) {
////                $("#instagram").append("<a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a>");
////            }
////        }
////    });
//
//
// var view = new BanjoView();
////    interval = window.setInterval(function(){
////        var view = new BanjoView();
////    }, 3000);
//
////    $('a').click(function(){
////           clearInterval(interval);
////        });
//});
//
//
