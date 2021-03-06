export declare class VidalService {
    body: any;
    private toolbox;
    private rest;
    private contentType;
    configuration: {
        "baseUrl": string;
        "urlVigie": string;
        "apiDomain0": string;
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
    constructor();
    private setHeaders(contentType?);
    cleanId(id: any, type: string): string;
    private callback(callback, data, error);
    getApiBaseUrl(): string;
    getHtmlStyle(): boolean;
    getApp_key(): string;
    getApp_id(): string;
    getUrlCredentials(prefix: string): string;
    search(callback: Function, params: string): void;
    searchAllergies(callback: Function, params: string): void;
    getProducts(params: string, filter: string): void;
    getAllergies(params: string): void;
    getPathologies(params: string): void;
    searchPathologies(callbackSuccess: Function, callbackFailure: Function, params: string): void;
    getFromId(callbackSuccess: Function, callbackFailure: Function, type: string, id: string): void;
    getPrescriptionUnits(callbackSuccess: Function, callbackFailure: Function, type: string, id: string): void;
    getPrescriptionRoutes(callbackSuccess: Function, callbackFailure: Function, type: string, id: string): void;
    getIndications(callbackSuccess: Function, callbackFailure: Function, type: string, id: string): void;
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
    getProduct(callback: Function, type: string, id: number): void;
    getVigieAlerts(callback: Function, prescription: any): void;
    getNewsFromProduct(callback: Function, type: string, id: number): void;
    private getPosologyXml(patient, routeIds, indicationIds);
    getPosologyFromProduct(callback: Function, type: string, id: number, patient: any, routeIds: number[], indicationIds: number[], params: any): void;
    getUnitIdFromFrequency(stringFrequency: string): number;
    getFrequencyFromUnitId(unitId: Number): string;
    private getPostComplementXml(drugs, icd10Codes, text);
    getPostComplement(callback: Function, drugs: string[], icd10Codes: string[], text: string, params: any): void;
    getCim10FromIndicationGroupId(callback: Function, id: number): void;
    getRecosFromIndicationGroupId(callback: Function, id: number): void;
    getPrescriptionRecos(callback: Function, prescription: any, params: any): void;
    getRecoUrl(id: number): string;
    getReco(callback: Function, id: number): void;
    private getAdaptedDugsXml(vmpId, facets, page, pageSize);
    getAdaptedDrugs(callback: Function, vmpId: number, facets: any[], page: number, pageSize: number, params: any): void;
    private getSideEffectsXml(drugs, sideEffectId);
    getSideEffects(callback: Function, drugs: string[], sideEffectId: number, params: any): void;
    getVigieHtml(data: any, title: string): string | undefined;
    getVersion(callback: Function, params: any, credentials?: any): void;
    flattenObject(object: any): any;
}
