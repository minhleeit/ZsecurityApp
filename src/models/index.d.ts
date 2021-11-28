import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Contacts {
  readonly id: string;
  readonly name: string;
  readonly phone?: number;
  readonly email?: string;
  constructor(init: ModelInit<Contacts>);
  static copyOf(source: Contacts, mutator: (draft: MutableModel<Contacts>) => MutableModel<Contacts> | void): Contacts;
}