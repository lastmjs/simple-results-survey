import {Injectable} from 'angular2/core';

@Injectable()
export class SheetDataService {

    constructor() {
    }

    getAllValues(sheetUrl) {
        return new Promise(function(resolve, reject) {
            Tabletop.init({
                key: sheetUrl,
                callback: function(data, tableTop) {
                    resolve(data);
                },
                simpleSheet: true
            });
        });
    }

    getRowValues(values) {

    }
}
