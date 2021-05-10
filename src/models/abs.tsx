import { FirebaseFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { validateId } from "@/models";

export type AbsChoice = 1 | 2 | 3 | 4;

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
    answers: AbsChoice[];
};

const initialAbsData: AbsData = {
    answers: [],
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

function getAbsPath(patientId: string, testId: string) {
    return `patients/${patientId}/abs/${testId}`;
}

export async function newAbs(
    database: FirebaseFirestore,
    patientId: string,
    testId: string,
    absData: Partial<AbsData>
) {
    if (!validateId(patientId)) {
        throw "Invalid patient identifier";
    }

    const path = getAbsPath(patientId, testId);
    const document = doc(database, path);
    await setDoc<AbsData>(document, {
        ...initialAbsData,
        ...absData,
    });
}
