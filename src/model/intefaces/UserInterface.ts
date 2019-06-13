import * as mongoose from 'mongoose'

export interface UserInterface extends mongoose.Document {
Email: string;
FirstName: string;
LastName: string;
IdFinancialPosition: mongoose.Schema.Types.ObjectId;
}
