require 'spec_helper'

describe SearchController do

  describe '#show' do
     context 'When there is a valid request' do
       it 'should get valid json object as response' do
         mock(Typhoeus::Request).get(anything).returns('')

          #mock(Typhoeus::Request).get(anything).returns(mock(Object.new).body.returns'
          #{"meta":{"code":200},
          #"data":[
          #        {"attribution":null,
          #         "tags":["dariszcahyadi","syndicate15","photooftheday","padepokankalisurut","ig_nesia"],
          #         "location":null,
          #         "images":{"low_resolution":{"url":"http:\/\/distilleryimage2.s3.amazonaws.com\/708a32f0fa1311e199e022000a1e8ac3_6.jpg","width":306,"height":306},
          #                  "thumbnail":{"url":"http:\/\/distilleryimage2.s3.amazonaws.com\/708a32f0fa1311e199e022000a1e8ac3_5.jpg","width":150,"height":150},
          #                  "standard_resolution":{"url":"http:\/\/distilleryimage2.s3.amazonaws.com\/708a32f0fa1311e199e022000a1e8ac3_7.jpg","width":612,"height":612}},
          #                  "caption":{"created_time":"1347149728",
          #                             "text":"#dariszcahyadi #padepokankalisurut #syndicate15 #ig_nesia #photooftheday",
          #                             "from":{"username":"dariszcahyadi","profile_picture":"http:\/\/images.instagram.com\/profiles\/profile_58658_75sq_1346939923.jpg","id":"58658","full_name":"DarisZ Cahyadi"},
          #                            "id":"276234404848282980"},
          #                  "type":"image",
          #                  "id":"276234328243515170_58658",
          #                  "user":{"username":"dariszcahyadi","website":"","bio":"HDR Conspiracy Indonesia\r\n","profile_picture":"http:\/\/images.instagram.com\/profiles\/profile_58658_75sq_1346939923.jpg","full_name":"DarisZ Cahyadi","id":"58658"}}
          #      ]
          #}')


         #puts result["data"]
       end
     end
  end

end