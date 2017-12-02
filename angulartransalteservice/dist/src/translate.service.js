import { Injectable } from '@angular/core';
import { DatabaseService } from 'bdt105angulardatabaseservice';
import { ConnexionService } from 'bdt105angularconnexionservice';
import { Toolbox } from 'bdt105toolbox/dist';
var TranslateService = /** @class */ (function () {
    function TranslateService(databaseService, connexionService) {
        this.databaseService = databaseService;
        this.connexionService = connexionService;
        this.configuration = { "translateTags": true };
        this.toolbox = new Toolbox();
        this.translation = this.toolbox.readFromStorage("translation");
        if (!this.translation) {
            var callback = function () {
            };
            this.loadFromDatabase(callback, callback);
        }
    }
    TranslateService.prototype.setDatabaseBaseUrl = function (baseUrl) {
        this.databaseService.configuration.baseUrl = baseUrl;
    };
    TranslateService.prototype.translate = function (text) {
        if (this.translation) {
            for (var i = 0; i < this.translation.length; i++) {
                if (this.translation[i].name == text) {
                    return this.translation[i].label;
                }
            }
        }
        return text;
    };
    TranslateService.prototype.t = function (text) {
        return this.translate(text);
    };
    TranslateService.prototype.loadFromDatabase = function (callBackSuccess, callBackFailure) {
        var _this = this;
        var conn = this.connexionService.getConnexion();
        if (conn) {
            this.databaseService.connect(conn.currentUser.login, conn.currentUser.password);
            var sql = "SELECT * FROM label where user = 'everyone' and domain = 'rest' and lang = '" + conn.currentUser.lang + "'";
            this.databaseService.sql(function (data) { return _this.success(callBackSuccess, data); }, function (data) { return _this.failure(callBackFailure, data); }, sql);
        }
    };
    TranslateService.prototype.success = function (callBackSuccess, data) {
        this.translation = data.json.results;
        this.toolbox.writeToStorage("translation", this.translation, false);
        if (callBackSuccess) {
            callBackSuccess(data);
        }
    };
    ;
    TranslateService.prototype.failure = function (callBackFailure, data) {
        if (callBackFailure) {
            callBackFailure(data);
        }
    };
    ;
    TranslateService.prototype.getTranslateTag = function () {
        var setting = this.toolbox.readFromStorage("setting");
        var translateTags = this.configuration.translateTags;
        if (setting && setting.translateTags) {
            translateTags = setting.translateTags;
        }
        return translateTags;
    };
    ;
    TranslateService.prototype.refresh = function (callBackSuccess, callBackFailure) {
        this.loadFromDatabase(callBackSuccess, callBackFailure);
    };
    TranslateService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: DatabaseService, },
        { type: ConnexionService, },
    ]; };
    return TranslateService;
}());
export { TranslateService };
//# sourceMappingURL=translate.service.js.map