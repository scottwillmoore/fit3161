import { createContext, useContext, useEffect, useState } from "react";

import {
    FirebaseApp,
    FirebaseOptions,
    deleteApp,
    initializeApp,
} from "firebase/app";

import {
    DocumentData,
    FirebaseFirestore,
    doc,
    getDoc,
    getFirestore,
} from "firebase/firestore";

import { ChildrenProps } from "@/utilities";

export const FirebaseContext = createContext<FirebaseState>(
    {} as FirebaseState
);

export type FirebaseProviderProperties = {
    options: FirebaseOptions;
} & ChildrenProps;

export type FirebaseState = {
    app: FirebaseApp;
    store: FirebaseFirestore;
};

export function FirebaseProvider({
    options,
    children,
}: FirebaseProviderProperties) {
    const [state, setState] = useState<FirebaseState>();

    useEffect(() => {
        const app = initializeApp(options);
        const store = getFirestore(app);

        setState({ app, store });

        return () => {
            deleteApp(app);
        };
    }, [options]);

    if (!state) {
        return null;
    }

    return (
        <FirebaseContext.Provider value={state}>
            {children}
        </FirebaseContext.Provider>
    );
}

export function useFirebase() {
    return useContext(FirebaseContext);
}

export type Patient = {
    createdOn: string;
    lastAccessedOn: string;
};

export function usePatient(patientId: string) {
    const { store } = useFirebase();

    const [patient, setPatient] = useState<DocumentData | undefined>();

    useEffect(() => {
        (async () => {
            const reference = doc(store, "patients", patientId);
            const snapshot = await getDoc(reference);
            if (snapshot.exists()) {
                setPatient(snapshot.data());
            }
        })();
    }, [patientId]);

    return patient;
}
