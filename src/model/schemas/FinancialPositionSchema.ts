import * as mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import { FinancialPositionInterface } from '../intefaces/FinancialPositionInterface'

const FinancialPositionSchema = new mongoose.Schema({
  Name: { type: String,
    required: true
  },
  Users: [{
    type: mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true
})

FinancialPositionSchema.plugin(mongoosePaginate)

var schema = mongoose.model<FinancialPositionInterface>('FinancialPosition', FinancialPositionSchema)
export = schema;
