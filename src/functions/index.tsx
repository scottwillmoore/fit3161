import {
    FirebaseFirestore,
    Timestamp,
    doc,
    getDoc,
    serverTimestamp,
    setDoc,
    updateDoc,
} from "firebase/firestore";

export { v4 as generateId, validate as validateId } from "uuid";

export type PatientData = {
    createdOn: Timestamp;
    lastAccessedOn: Timestamp;
};

function getPatientPath(patientId: string) {
    return `patients/${patientId}`;
}

export async function addPatient(
    database: FirebaseFirestore,
    patientId: string
) {
    const path = getPatientPath(patientId);
    const document = doc(database, path);
    await setDoc<PatientData>(document, {
        createdOn: serverTimestamp() as Timestamp,
        lastAccessedOn: serverTimestamp() as Timestamp,
    });
}

export async function getPatient(
    database: FirebaseFirestore,
    patientId: string
): Promise<PatientData | undefined> {
    const path = getPatientPath(patientId);
    const document = doc(database, path);
    const snapshot = await getDoc<PatientData>(document);

    if (snapshot.exists()) {
        return snapshot.data();
    }
}

export async function updatePatient(
    database: FirebaseFirestore,
    patientId: string,
    patientData: PatientData
) {
    const path = getPatientPath(patientId);
    const document = doc(database, path);
    await updateDoc(document, patientData);
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
