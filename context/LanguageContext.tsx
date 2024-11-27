import React, { createContext, useContext, useState, ReactNode } from 'react';

// Définir les types du contexte
interface LanguageContextType {
    boolState: boolean;
    setBoolState: (value: boolean) => void;
}

// Créer le contexte avec une valeur par défaut
const BooleanContext = createContext<LanguageContextType | undefined>(undefined);

// Définir un type pour les props du provider
interface BooleanProviderProps {
    children: ReactNode;
}

// Créer le fournisseur pour le contexte
export const BooleanProvider: React.FC<BooleanProviderProps> = ({ children }) => {
    const [boolState, setBoolState] = useState<boolean>(false);

    return (
        <BooleanContext.Provider value={{ boolState, setBoolState }}>
            {children}
        </BooleanContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useBooleanContext = (): LanguageContextType => {
    const context = useContext(BooleanContext);
    if (!context) {
        throw new Error('useBooleanContext must be used within a BooleanProvider');
    }
    return context;
};
