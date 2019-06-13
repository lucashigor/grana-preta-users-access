import * as mongoose from 'mongoose'

export interface UserInterface extends mongoose.Document {
Email: string;
FirstName: string;
LastName: string;
FinancialPosition: mongoose.Schema.Types.ObjectId;
}
