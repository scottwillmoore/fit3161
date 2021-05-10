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

import { validateId } from "@/models";

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
    if (!validateId(patientId)) {
        throw "Invalid patient identifier";
    }

    const path = getPatientPath(patientId);
    const document = doc(database, path);
    await deleteDoc(document);
}
