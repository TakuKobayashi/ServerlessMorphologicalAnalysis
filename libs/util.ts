import uuid from 'uuid/v4';

export function generateUuid(): string {
  const newUuid = uuid();
  console.log(newUuid);
  return newUuid;
}