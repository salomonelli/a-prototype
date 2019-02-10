const userSchema = {
  title: 'user schema',
  description: 'describes a simple user',
  version: 0,
  type: 'object',
  properties: {
    pseudonym: {
      type: 'string',
      primary: true
    },
    color: {
      type: 'string'
    },
    position: {
      type: 'object',
      properties: {
        longitude: {
          type: 'number'
        },
        latitude: {
          type: 'number'
        }
      }
    },
    checkinCity: {
      type: 'string'
    },
    locationEnabled: {
      type: 'boolean',
      default: false
    }
  },
  required: ['color', 'pseudonym']
};

export default userSchema;
