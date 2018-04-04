/// <reference types="meteor" />

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

export interface IMongoUpdateOptions {
  multi?: boolean;
  upsert?: boolean;
}

export interface IMongoUpsertOptions {
  multi?: boolean;
}

export interface IMongoUpsertResult {
  insertedId?: string;
  numberAffected?: number;
}

export type TMongoFindSelector = Mongo.Selector | Mongo.ObjectID | string;

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
  count(selector?: TMongoFindSelector, options?: IMongoFindOptions): Observable<number>;
  fetch(selector?: TMongoFindSelector, options?: IMongoFindOptions): Observable<T>;
  find(selector?: TMongoFindSelector, options?: IMongoFindOptions): Observable<Cursor<T>>;
  findOne(selector?: TMongoFindSelector, options?: IMongoFindOptions): Observable<T>;
  insert(document: T): Observable<number>;
  observe(callbacks: Mongo.ObserveCallbacks, selector?: TMongoFindSelector , options?: IMongoFindOptions): Observable<any>;
  observeChanges(callbacks: Mongo.ObserveChangesCallbacks, selector?: TMongoFindSelector , options?: IMongoFindOptions): Observable<any>;
  remove(selector: TMongoFindSelector): Observable<number>;
  update(selector: TMongoFindSelector, modifier: Mongo.Modifier, options?: IMongoUpdateOptions): Observable<number>;
  upsert(selector: TMongoFindSelector, modifier: Mongo.Modifier, options?: IMongoUpsertOptions): Observable<IMongoUpsertResult>;
  readonly collection: Mongo.Collection<T>;
}
