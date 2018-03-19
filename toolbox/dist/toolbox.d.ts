export declare class Toolbox {
    formatDate(date: Date): string;
    dateToDbString(date: Date): string;
    isoDateToDbString(date: string): string;
    formatDateToLocal(date: Date, showTime?: boolean): any;
    CSVtoArray(text: string): string[];
    arrayToCSV(array: string[], separator?: string): string;
    levenshtein(a: string, b: string): number;
    arrayOfObjectsToString(array: any, fieldName: string, value: string, separator: string, prefix: string, suffix: string): string;
    urlParamsToObject(url: string): any;
    urlBase(url: string): string;
    filterArrayOfObjects(array: any[], keySearch: string, keyValue: any): any[];
    findIndexArrayOfObjects(array: any[], keySearch: string, keyValue: string): number;
    factorizeMasterSlave(data: any, masterIdFieldName: string, slaveIdFieldName: string, slaveName: string): any[];
    updateUrlParameter(url: string, parameter: string, value: string): string;
    updateUrlParameters(url: string, parameters: any[]): string;
    getUrlParams(url: string): any[];
    deleteEmptyParams(url: string): string;
    getKeyValue(obj: any): any[];
    deleteStringList(text: string, separator: string, textToDelete: string): string;
    pushArray(source: any[], destination: any[]): void;
    removeKeyFromArray(array: any[], key: string): boolean;
    isValidDate(date: any): boolean;
    dateDbToStringFr(date: string, separator?: string): string;
    dateWithoutTime(date: string): string;
    diffDateInDays(date1: Date, date2: Date): number;
    log(text: string, fileName?: string, logToConsole?: boolean): void;
    postElastic(elasticUrl: string, index: string, type: string, data: any, id?: string, extra?: string, headers?: any): void;
    loadFromJsonFile(fileName: string, encoding?: string): any;
    uniqueId(): any;
    beautifyXml(text: string): any;
    beautifyJson(text: string): any;
    writeToStorage(key: string, object: any, forever: boolean): void;
    parseJson(str: string): any;
    isJson(str: string): boolean;
    readFromStorage(key: string): any;
    removeFromStorage(key: string): void;
    xml2json(xml: string, callback?: Function): any;
    fillDocWithContent(doc: any, content: string): void;
    sortArrayOfObjects(arr: any[], sortProperty: string): any[];
    searchElementSpecial(list: any[], key: string, value: string): any;
    sES(list: any[], key: string, value: string): any;
    getValueSpecial(object: any, fieldName: string, subFieldName?: string): any;
    gVS(object: any, fieldName: string, subFieldName?: string): any;
    replaceAll(text: string, search: string, replacement: string): string;
    addMomentToDate(date: Date, unit: string, value: number): any;
    cloneObject(object: any): any;
    translateFromObject(jsonArray: any, text: string, language: string): string;
    translateFromFile(text: string, language: string, fileName?: string): string;
}
