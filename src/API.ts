/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContactsInput = {
  id?: string | null,
  name: string,
  phone?: number | null,
  email?: string | null,
};

export type ModelContactsConditionInput = {
  name?: ModelStringInput | null,
  phone?: ModelIntInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelContactsConditionInput | null > | null,
  or?: Array< ModelContactsConditionInput | null > | null,
  not?: ModelContactsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Contacts = {
  __typename: "Contacts",
  id?: string,
  name?: string,
  phone?: number | null,
  email?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateContactsInput = {
  id: string,
  name?: string | null,
  phone?: number | null,
  email?: string | null,
};

export type DeleteContactsInput = {
  id: string,
};

export type ModelContactsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phone?: ModelIntInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelContactsFilterInput | null > | null,
  or?: Array< ModelContactsFilterInput | null > | null,
  not?: ModelContactsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelContactsConnection = {
  __typename: "ModelContactsConnection",
  items?:  Array<Contacts >,
  nextToken?: string | null,
};

export type CreateContactsMutationVariables = {
  input?: CreateContactsInput,
  condition?: ModelContactsConditionInput | null,
};

export type CreateContactsMutation = {
  createContacts?:  {
    __typename: "Contacts",
    id: string,
    name: string,
    phone?: number | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContactsMutationVariables = {
  input?: UpdateContactsInput,
  condition?: ModelContactsConditionInput | null,
};

export type UpdateContactsMutation = {
  updateContacts?:  {
    __typename: "Contacts",
    id: string,
    name: string,
    phone?: number | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactsMutationVariables = {
  input?: DeleteContactsInput,
  condition?: ModelContactsConditionInput | null,
};

export type DeleteContactsMutation = {
  deleteContacts?:  {
    __typename: "Contacts",
    id: string,
    name: string,
    phone?: number | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetContactsQueryVariables = {
  id?: string,
};

export type GetContactsQuery = {
  getContacts?:  {
    __typename: "Contacts",
    id: string,
    name: string,
    phone?: number | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContactssQueryVariables = {
  filter?: ModelContactsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactssQuery = {
  listContactss?:  {
    __typename: "ModelContactsConnection",
    items:  Array< {
      __typename: "Contacts",
      id: string,
      name: string,
      phone?: number | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContactsSubscription = {
  onCreateContacts?:  {
    __typename: "Contacts",
    id: string,
    name: string,
    phone?: number | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactsSubscription = {
  onUpdateContacts?:  {
    __typename: "Contacts",
    id: string,
    name: string,
    phone?: number | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactsSubscription = {
  onDeleteContacts?:  {
    __typename: "Contacts",
    id: string,
    name: string,
    phone?: number | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
