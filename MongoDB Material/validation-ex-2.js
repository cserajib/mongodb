db.createCollection('contacts3', {
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
  },
  validationAction: "warn"
});
