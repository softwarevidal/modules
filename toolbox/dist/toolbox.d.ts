export declare class Toolbox {
    formatDate: (date: Date) => string;
    dateToDbString(date: Date): string;
    isoDateToDbString(date: string): string;
    CSVtoArray(text: string): string[];
    arrayToCSV(array: string[]): string;
    Levenshtein(a: string, b: string): number;
    arrayOfObjectsToString(array: any, fieldName: string, search: string, separator: string, prefix: string, suffix: string): string;
    urlParamsToObject(url: string): any;
    urlBase(url: string): string;
    filterArrayOfObjects(array: any[], keySearch: string, keyValue: string): any[];
    findIndexArrayOfObjects(array: any[], keySearch: string, keyValue: string): number;
    factorizeMasterSlave(data: any, masterIdFieldName: string, slaveIdFieldName: string, slaveName: string): any[];
    updateUrlParameter(url: string, param: string, paramVal: string): string;
    updateUrlParameters(url: string, params: any[]): string;
    getUrlParams(url: string): any[];
    deleteEmptyParams(url: string): string;
    getUrlWithoutParameters(url: string): string;
    getKeyValue(obj: any): any[];
    deleteStringList(text: string, separator: string, textToDelete: string): string;
    pushArray(source: any[], destination: any[]): void;
    removeKeyFromArray(array: any[], key: string): boolean;
    isValidDate(date: string): boolean;
    dateDbToStringFr(date: string, separator?: string): string;
    dateWithoutTime(date: string): string;
    diffDateInDays(date1: Date, date2: Date): number;
    log(text: string, fileName?: string, logToConsole?: boolean): void;
    postElastic(elasticUrl: string, index: string, type: string, data: any, id?: string, extra?: string): void;
    loadFromJsonFile(fileName: string, encoding?: string): any;
    uniqueId(): any;
    beautifyXml(text: string): any;
    beautifyJson(text: string): any;
    writeToStorage(key: string, object: any, forever: boolean): void;
    parseJson(str: string): any;
    readFromStorage(key: string): any;
    removeFromStorage(key: string): void;
    xml2json(xml: string, callback?: Function): any;
    fillDocWithContent(doc: any, content: string): void;
}