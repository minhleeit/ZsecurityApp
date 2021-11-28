import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ContactStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED"
}



export declare class Contact {
  readonly id: string;
  readonly name: string;
  readonly phone?: number;
  readonly email?: string;
  constructor(init: ModelInit<Contact>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact>) => MutableModel<Contact> | void): Contact;
}