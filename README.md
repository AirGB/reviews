Project Name:
AirGB

Overview:

curl -X GET http://localhost:3002/api/listing/:listingid/overview
{"total":94,"accuracy":1.5,"communication":2,"cleanliness":3,"location":2.5,"check_in":3.5,"_value":3,"avg":2.5}

curl -X POST http://localhost:3002/api/listing/:listingid/overview

curl -X DELETE http://localhost:3002/api/listing/:listingid/overview

curl -X PUT http://localhost:3002/api/listing/:listingid/overview

Reviews:

curl -X GET http://localhost:3002/api/listing/:listingid/reviews

curl -X POST http://localhost:3002/api/listing/:listingid/reviews

curl -X DELETE http://localhost:3002/api/listing/:listingid/reviews

curl -X PUT http://localhost:3002/api/listing/:listingid/reviews
