// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContactStatus = {
  "DRAFT": "DRAFT",
  "PUBLISHED": "PUBLISHED"
};

const { Contact } = initSchema(schema);

export {
  Contact,
  ContactStatus
};