import { Document } from 'mongoose'

export interface ReadInterface<T> {
    retrieve: (page : number, limit: number) => Promise<Document[]>;
    findById: (id: string) => Promise<Document | null>;
}
