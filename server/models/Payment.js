const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
    amount: Number,
    due_date: Date,
    tenant: { type: Schema.Types.ObjectId, ref: 'tenant' }
  });
  
  const Payment = mongoose.model('Payment', paymentSchema);
  module.exports = Payment;