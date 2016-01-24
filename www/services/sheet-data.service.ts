import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

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

    prepareValuesForUrl(value) {
        return Object.keys(value).map(function(title) {
            const encodedTitle = encodeTitle(title);

            return encodedTitle + ',' + encodeURIComponent(value[title]);

            function encodeTitle(title: string) {
                if (/\[.*\]/.test(title)) {
                    return encodeURIComponent(/\[(.*)\]/.exec(title)[1]);
                }

                return encodeURIComponent(title);
            }
        });
    }

    searchForInputString(inputString, values) {
        return Observable.create((observer) => {
            if (inputString === '') {
                observer.next(values);
            }

            values.reduce(function(prev, curr) {

                const searchMatch = Object.keys(curr).reduce(function(prev, key) {

                    if (curr[key].toLowerCase().indexOf(inputString.toLowerCase()) > -1) {
                        return true;
                    }

                    return prev;
                }, false);

                if (searchMatch) {
                    prev.push(curr);
                    observer.next(prev);
                }

                return prev;
            }, []);
        });
    }
}
