db.createCollection('contacts1', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'phone'],
      properties: {
        name: {
          bsonType: 'string',
          description: 'name must be a string and is required'
        },
        phone: {
          bsonType: 'string',
          description: 'phone must be a string and is required'
        }        
      }
    }
  }
});


db.createCollection( "contacts2",
   { validator: { $or:
      [
         { phone: { $type: "string" } },
         { email: { $regex: /@synechron\.com$/ } },
         { status: { $in: [ "Unknown", "Incomplete" ] } }
      ]
   }
} )









