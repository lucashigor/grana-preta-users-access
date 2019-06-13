import { Document } from 'mongoose'

export interface WriteInterface<T> {
    create: (item: T) => Promise<Document>;
    update: (id: string, item: T) => Promise<Document | null>;
    delete: (id: string) => Promise<boolean>;

}
