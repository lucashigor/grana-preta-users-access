import * as mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import { UserInterface } from '../intefaces/UserInterface'

const UserSchema = new mongoose.Schema({
  IdFinancialPosition: { type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  Email: { type: String,
    required: true,
    maxlength: 100
  },
  FirstName: { type: String,
    required: true,
    maxlength: 100
  },
  LastName: { type: String,
    required: true,
    maxlength: 100
  }
}, {
  timestamps: true
})

UserSchema.plugin(mongoosePaginate)

var schema = mongoose.model<UserInterface>('User', UserSchema)
export = schema;
