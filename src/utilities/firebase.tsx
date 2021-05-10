import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
    FirebaseApp,
    FirebaseOptions,
    deleteApp,
    initializeApp,
} from "firebase/app";
import { FirebaseFirestore, getFirestore } from "firebase/firestore";

import { ChildrenProps } from "@/utilities";

export const FirebaseContext = createContext<FirebaseState>(
    {} as FirebaseState
);

export type FirebaseProviderProps = {
    options: FirebaseOptions;
} & ChildrenProps;

export type FirebaseState = {
    app: FirebaseApp;
    database: FirebaseFirestore;
};

export function FirebaseProvider({ options, children }: FirebaseProviderProps) {
    const [state, setState] = useState<FirebaseState>();

    useEffect(() => {
        const app = initializeApp(options);
        const database = getFirestore(app);

        setState({ app, database });

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
