import { ReadInterface } from '../interfaces/ReadInterface'
import { WriteInterface } from '../interfaces/WriteInterface'
import { Document } from 'mongoose'

import mongoose = require('mongoose');

class RepositoryBase<T extends mongoose.Document> implements ReadInterface<T>, WriteInterface<T> {
    private _model: mongoose.Model<mongoose.Document>;

    public constructor (schemaModel: mongoose.Model<mongoose.Document>) {
      this._model = schemaModel
    }

    public async create (item: T): Promise<Document> {
      const user = await this._model.create(item)

      return user
    }

    public async update (id: string, item: T): Promise<Document | null> {
      const user = await this._model.findByIdAndUpdate(id, item, { new: true })

      return user
    }

    public async delete (_id: string): Promise<boolean> {
      await this._model.findOneAndDelete(_id)

      return true
    }

    public async findById (id: string): Promise<Document | null> {
      const user = await this._model.findById(id)

      return user
    }

    public async retrieve (page : number, limit: number): Promise<Document[]> {
      if (limit > page) {
        console.log('b')
      }

      const users = await this._model.find({})
      return users
    }
}

export = RepositoryBase;
