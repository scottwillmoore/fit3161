import {
    FirebaseFirestore,
    Timestamp,
    doc,
    getDoc,
    serverTimestamp,
    setDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";

import { v4 as generateId, validate as validateId } from "uuid";

export type PatientData = {
    createdOn: Timestamp;
    lastAccessedOn: Timestamp;
};

function getPatientPath(patientId: string) {
    return `patients/${patientId}`;
}

export async function newPatient(
    database: FirebaseFirestore,
    patientId: string
) {
    if (!validateId(patientId)) {
        throw "Invalid patient identifier";
    }

    const path = getPatientPath(patientId);
    const document = doc(database, path);
    await setDoc<PatientData>(document, {
        createdOn: serverTimestamp() as Timestamp,
        lastAccessedOn: serverTimestamp() as Timestamp,
    });
}

export async function getPatient(
    database: FirebaseFirestore,
    patientId: string,
    updateAccess = true
) {
    if (!validateId(patientId)) {
        throw "Invalid patient identifier";
    }

    const path = getPatientPath(patientId);
    const document = doc(database, path);
    const snapshot = await getDoc<PatientData>(document);

    if (snapshot.exists()) {
        if (updateAccess) {
            await updatePatient(database, patientId, {
                lastAccessedOn: serverTimestamp() as Timestamp,
            });
        }
        return snapshot.data();
    }
}

export async function updatePatient(
    database: FirebaseFirestore,
    patientId: string,
    patientData: Partial<PatientData>
) {
    if (!validateId(patientId)) {
        throw "Invalid patient identifier";
    }

    const path = getPatientPath(patientId);
    const document = doc(database, path);
    await updateDoc(document, patientData);
}

export async function deletePatient(
    database: FirebaseFirestore,
    patientId: string
) {
    const path = getPatientPath(patientId);
    const document = doc(database, path);
    await deleteDoc(document);
}

export type AbsData = {};

function getAbsPath(patientId: string, testId: string) {
    return `patients/${patientId}/abs/${testId}`;
}

// async function getAbs(database: Database, patientId: string, testId: string) {
//     const path = getAbsPath(patientId, testId);
//     const document = doc(database, path);
//     await setDoc<AbsData>(document, {});
// }

// OLD

export type Patient = {
    createdOn: string;
    lastAccessedOn: string;
};

export enum AbsResponse {
    Absent = 1,
    Slight = 2,
    Moderate = 3,
    Extreme = 4,
}

export type AbsTest = {
    environment: string;

    period: {
        from: Timestamp;
        to: Timestamp;
    };

    responses: AbsResponse[];

    score: {
        disinhibition: number;
        aggression: number;
        lability: number;
    };
};

export enum WptasResponse {
    Correct = 1,
    Incorrect = 2,
    CorrectPrompted = 3,
}

export type WptasTest = {
    responses: WptasResponse[];
};
