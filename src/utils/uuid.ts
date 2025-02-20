import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a new UUID for project code.
 * @returns {string} A new UUID string.
 */
export function generateUniqueCode(subString: string): string {
  return `${subString}-${uuidv4()}`;
}