/// <reference types="meteor" />

declare module 'apatryda:meteor-rx-server' {
  import { Mongo } from 'meteor/mongo';
  import { Observable } from 'rxjs';

  export interface IMongoFindOptions {
    sort?: Mongo.SortSpecifier;
    skip?: number;
    limit?: number;
    fields?: Mongo.FieldSpecifier;
    reactive?: boolean;
    transform?: Function;
  }

  export class Cursor<T> {
    constructor(cursor: Mongo.Cursor<T>);
    count(): Observable<number>;
    readonly cursor: Mongo.Cursor<T>;
    fetch(): Observable<T>;
    observe(callbacks: Mongo.ObserveCallbacks): Observable<any>;
    observeChanges(callbacks: Mongo.ObserveChangesCallbacks): Observable<any>;
  }

  export class Collection<T> {
    constructor(collection: Mongo.Collection<T>);
    find(selector?: Mongo.Selector, options?: IMongoFindOptions): Observable<Cursor<T>>;
    readonly collection: Mongo.Collection<T>;
  }
}

