import newTranslator from "short-uuid";
import { v4 as generateUuid, validate as validateUuid } from "uuid";

const translator = newTranslator();

/**
 * Function to generate new a UUID
 * @returns a new user unique identifier (short)
 */
export function generateId() {
    const uuid = generateUuid();
    return translator.fromUUID(uuid);
}

/**
 * Function to test the validity of UUIDs
 * @param id The unique user identification to be checked
 * @returns returns true/false depending on if the id is valid
 */
export function validateId(id: string) {
    //return true;
    const uuid = translator.toUUID(id);
    return validateUuid(uuid);
}
