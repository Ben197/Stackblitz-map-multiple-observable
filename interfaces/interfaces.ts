export interface UnitOfMeasurementType {
    teksten: {
        tekstcode: string;
        waarden: {code: string, omschrijving: string
        }[]
    }[];
}

export interface ComponentChangeType {
    components: {
        componentId: string;
        omschrijving: string;
        tarief: number;
        isActief: boolean;
    }[]
}

export interface ConditieType {
    contractId: number;
    conditieId: string; //key
    conditieOms?: string;  //let op uit component
    eenheidId: string;
    eenheidOms: string;
}

export interface ConditieTypeObject {
    condities: ConditieType[];
}