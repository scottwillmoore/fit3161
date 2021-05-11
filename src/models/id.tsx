import newTranslator from "short-uuid";
import { v4 as generateUuid, validate as validateUuid } from "uuid";

const translator = newTranslator();

export function generateId() {
    const uuid = generateUuid();
    return translator.fromUUID(uuid);
}

export function validateId(id: string) {
    return true;
    const uuid = translator.toUUID(id);
    // return validateUuid(uuid);
}
