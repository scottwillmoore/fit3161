import {
    FirebaseFirestore,
    doc,
    getDoc,
    setDoc,
    getDocs,
    collection,
    Timestamp,
    serverTimestamp,
} from "firebase/firestore";
import { validateId } from "@/models";

export type AbsAnswer = 1 | 2 | 3 | 4;

export type WithId<T> = {
    id: string;
} & T;

export type AbsData = {
    //     environment: string;
    //     period: {
    //         from: Timestamp;
    //         to: Timestamp;
    //     };

    //     responses: AbsResponse[];

    //     score: {
    //         disinhibition: number;
    //         aggression: number;
    //         lability: number;
    //     };
    takenOn: Timestamp;
    answers: AbsAnswer[];
    scores: {
        disinhibition: number;
        aggression: number;
        lability: number;
    };
};

const initialAbsData: AbsData = {
    takenOn: serverTimestamp() as Timestamp,
    answers: [],
    scores: {
        disinhibition: 0,
        aggression: 0,
        lability: 0,
    },
};

export const question = `Select the response which best describes this behaviour of the patient.`;

export const behaviours = [
    `Short attention span, easy distractibility, inability to concentrate.`,
    `Impulsive, impatient, low tolerance for pain or frustration.`,
    `Uncooperative, resistant to care, demanding.`,
    `Violent and or threatening violence toward people or property.`,
    `Explosive and/or unpredictable anger.`,
    `Rocking, rubbing, moaning or other self-stimulating behavior.`,
    `Pulling at tubes, restraints, etc.`,
    `Wandering from treatment areas.`,
    `Restlessness, pacing, excessive movement.`,
    `Repetitive behaviors, motor and/or verbal.`,
    `Rapid, loud or excessive talking.`,
    `Sudden changes of mood.`,
    `Easily initiated or excessive crying and/or laughter.`,
    `Self-abusiveness, physical and/or verbal.`,
];

export const choices = [
    {
        value: 1,
        title: `Absent`,
        description: `The behaviour is not present.`,
    },
    {
        value: 2,
        title: `Slight`,
        description: `The behavior is present, but does not prevent the conduct of other, contextually appropriate behavior.  The individual may redirect spontaneously, or the continuation of the agitated behavior does not disrupt appropriate behavior.`,
    },
    {
        value: 3,
        title: `Moderate`,
        description: `The individual needs to be redirected from an agitated to an appropriate behavior, but benefits from such cues.`,
    },
    {
        value: 4,
        title: `Extreme`,
        description: `The individual is not able to engage in appropriate behavior due to the interference of their agitated behavior, even when external cues or redirection is provided.`,
    },
];

function getAbsPath(patientId: string, testId?: string) {
    if (!validateId(patientId)) {
        throw "Invalid patient identifier";
    }

    if (!testId) {
        return `patients/${patientId}/abs`;
    }

    if (!validateId(testId)) {
        throw "Invalid test identifier";
    }

    return `patients/${patientId}/abs/${testId}`;
}

export async function newAbs(
    database: FirebaseFirestore,
    patientId: string,
    testId: string,
    absData: Partial<AbsData>
) {
    const path = getAbsPath(patientId, testId);
    const document = doc(database, path);
    await setDoc<AbsData>(document, {
        ...initialAbsData,
        ...absData,
    });
}

export async function getAbs(
    database: FirebaseFirestore,
    patientId: string,
    testId: string
) {
    const path = getAbsPath(patientId, testId);
    const reference = doc(database, path);
    const snapshot = await getDoc<AbsData>(reference);

    if (snapshot.exists()) {
        return snapshot.data();
    }
}

export async function getAllAbs(
    database: FirebaseFirestore,
    patientId: string
): Promise<WithId<AbsData>[]> {
    const path = getAbsPath(patientId);
    const reference = collection(database, path);
    const snapshots = await getDocs<AbsData>(reference);

    return snapshots.docs
        .filter((snapshot) => snapshot.exists())
        .map((snapshot) => ({
            id: snapshot.id,
            ...snapshot.data(),
        }));
}

const disinhibitionIndices = [1, 2, 3, 6, 7, 8, 9, 10];
const aggressionIndices = [3, 4, 5, 14];
const labilityIndices = [11, 12, 13];

export function calculateScores(answers: AbsAnswer[]) {
    const calculateScore = (indices: number[]) =>
        answers
            .filter((_, i) => indices.includes(i + 1))
            .reduce((previous, current) => previous + current, 0);

    return {
        aggression: calculateScore(aggressionIndices),
        disinhibition: calculateScore(disinhibitionIndices),
        lability: calculateScore(labilityIndices),
    };
}
