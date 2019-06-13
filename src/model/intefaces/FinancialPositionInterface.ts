import * as mongoose from 'mongoose'

export interface FinancialPositionInterface extends mongoose.Document {
Name: string;
Users: mongoose.Schema.Types.ObjectId[];
}
