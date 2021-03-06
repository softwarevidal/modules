export declare class Vidal {
    body: any;
    private toolbox;
    private rest;
    private contentType;
    configuration: {
        "baseUrl": string;
        "urlVigie": string;
        "drugInteractionClassWsdl": string;
        "apiDomain": string;
        "newsDomain": string;
        "pmsiDomain": string;
        "cim10": string;
        "allergies": string;
        "pathologies": string;
        "search": string;
        "searchAllergies": string;
        "searchPathologies": string;
        "alerts": string;
        "alertsFull": string;
        "alertsHtml": string;
        "reco": string;
        "version": string;
        "postComplement": string;
        "postControl": string;
        "indicationGroup": string;
        "prescriptionRecos": string;
        "adaptedDrugs": string;
        "sideEffectSort": string;
        "app_id": string;
        "app_key": string;
        "alertsStyle": boolean;
        "alertsHtmlStyle": string;
        "alertsHtmlStyleHideSidebar": string;
        "alertsHtmlStyleHideHeader": string;
    };
    private frequencyToUnitId;
    constructor(app_id?: string, app_key?: string);
    private setHeaders(contentType?);
    cleanId(id: any, type: string): string;
    private callback(callback, data, error);
    getApiBaseUrl(): string;
    getApiDomain(): string;
    getHtmlStyle(): boolean;
    getApp_key(): string;
    getApp_id(): string;
    getUrlCredentials(prefix: string, app_id?: string, app_key?: string): string;
    search(callback: Function, searchTerm: string): void;
    searchByCode(callback: Function, code: string): void;
    searchAllergies(callback: Function, params: string): void;
    getProducts(callback: Function, params: string, filter: string): void;
    getAllergies(callback: Function, params: string): void;
    getPathologies(callback: Function, params: string): void;
    searchPathologies(callback: Function, params: string): void;
    getFromId(callback: Function, type: string, id: string): void;
    getPrescriptionUnits(callback: Function, type: string, id: string): void;
    getPrescriptionRoutes(callback: Function, type: string, id: string): void;
    getIndications(callback: Function, type: string, id: string): void;
    private getPrescriptionLineXml(prescriptionLine);
    private getBasicPatientXml(patient);
    private getPatientXml(patient);
    private getPrescriptionXml(prescription);
    getAlerts(callback: Function, prescription: any, params: any, type: string): void;
    private getAlertColor(severity);
    private getRelevantAlerts(alert);
    assignAlertsToLines(prescription: any, xmlAlerts: any): void;
    addStyleToHtml(text: string, hideSidebar: boolean, hideHeader: boolean): string;
    getOptDocument(callback: Function, type: string, id: number): void;
    getDocuments(callback: Function, type: string, id: number, params: any): void;
    getATCClassFromProduct(callback: Function, type: string, id: number): void;
    getVIDALClassFromProduct(callback: Function, type: string, id: number): void;
    getInteractionClassFromProduct(callback: Function, type: string, id: number): void;
    getProduct(callback: Function, type: string, id: number): void;
    getVigieAlerts(callback: Function, prescription: any): void;
    getNewsFromProduct(callback: Function, type: string, id: number): void;
    private getPosologyXml(patient, routeIds, indicationIds);
    getPosologyFromProduct(callback: Function, type: string, id: number, patient: any, routeIds: number[], indicationIds: number[], params: any): void;
    getUnitIdFromFrequency(stringFrequency: string): number;
    getFrequencyFromUnitId(unitId: Number): string;
    private getPostComplementXml(drugs, icd10Codes, text, removeAlreadyCoded, drugCoefficient, textCoefficient);
    getPostComplement(callback: Function, drugs: string[], icd10Codes: string[], text: string, params: any, removeAlreadyCoded: boolean, drugCoefficient: number, textCoefficient: number): void;
    getPostControl(callback: Function, drugs: string[], icd10Codes: string[], text: string, params: any): void;
    getCim10FromIndicationGroupId(callback: Function, id: number): void;
    getRecosFromIndicationGroupId(callback: Function, id: number): void;
    getPrescriptionRecos(callback: Function, prescription: any, params: any): void;
    getRecoUrl(id: number): string;
    getReco(callback: Function, id: number): void;
    private getAdaptedDugsXml(vmpId, facets, page, pageSize);
    getAdaptedDrugs(callback: Function, vmpId: number, facets: any[], page: number, pageSize: number, params: any): void;
    private getSideEffectsXml(drugs, sideEffectId);
    getSideEffects(callback: Function, drugs: string[], sideEffectId: number, params: any): void;
    getVigieHtml(data: any, title: string): string;
    getVersion(callback: Function, params: any, credentials?: any): void;
    refactorAlerts(alerts: any, idPrescription: string): any[];
    checkCredentials(callback: Function, app_id: string, app_key: string): void;
}
