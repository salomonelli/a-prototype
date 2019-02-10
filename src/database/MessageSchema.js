const messageSchema = {
  title: 'user schemachatSchema',
  description: 'describes a simple user',
  version: 0,
  type: 'object',
  properties: {
    sender: {
      type: 'string'
    },
    receiver: {
      type: 'string'
    },
    message: {
      type: 'string'
    },
    sent: {
      type: 'string'
    }
  },
  required: ['sender', 'receiver', 'message', 'sent']
};

export default messageSchema;
