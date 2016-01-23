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
        return values.map(function(element, index) {

            const newValue = Object.keys(element).reduce(function(prev, curr) {
                const origColumnName = curr;

                if (/\[.*\]/.test(origColumnName)) {
                    const normalColumnName = /\[(.*)\]/.exec(origColumnName)[1];
                    prev[normalColumnName] = element[origColumnName];
                }

                return prev;
            }, {});

            return newValue;
        });
    }
}
