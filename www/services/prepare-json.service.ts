import {Injectable} from 'angular2/core';

@Injectable()
export class PrepareJsonService {

    constructor() {

    }

    getRowTitlesAndValues(entries) {
        const rowTitles = entries.reduce((prev, curr) => {
            //TODO substring(1) assumes the columns will always be single alpha characters A-Z, if the user has more columns this function will break
            if (curr.title.$t.substring(1) === '1') {
                if (/\[.*\]/.test(curr.content.$t)) {
                    prev.push({
                        column: curr.title.$t.substring(0, 1),
                        content: /\[(.*)\]/.exec(curr.content.$t)[1]
                    });
                }
            }

            return prev;
        }, []);

        const rowValues = [];

        entries.reduce((prev, curr, index) => {

            if (prev.length === rowTitles.length) {
                rowValues.push(prev);
                prev = [];
            }

            const valueColumn = curr.title.$t.substring(0, 1);
            const valueRow = curr.title.$t.substring(1);
            const correspondingTitle = rowTitles.find((element) => {
                return valueRow !== '1' && element.column === valueColumn;
            });

            if (correspondingTitle) {
                prev.push(curr.content.$t);
            }

            return prev;
        }, []);

        return {
            rowTitles: rowTitles,
            rowValues: rowValues
        };
    }

    getAllTitles(entries) {
        return entries.reduce((prev, curr) => {
            //TODO substring(1) assumes the columns will always be single alpha characters A-Z, if the user has more columns this function will break
            if (curr.title.$t.substring(1) === '1') {
                prev.push(curr.content.$t)
                return prev;
            }

            return prev;
        }, []);
    }

    //TODO this whole function needs to be redone functionally and immutably and maybe recursively
    getAllValues(entries) {

        let values = [];

        let rowNumber = '1';
        let row = [];

        //TODO substring(1) assumes the columns will always be single alpha characters A-Z, if the user has more columns this function will break
        entries.forEach(function(element, index) {

            if (element.title.$t.substring(1) === rowNumber) {
                row.push(element.content.$t);
            }
            else {
                values.push(row);
                row = [];
                row.push(element.content.$t);
                rowNumber = (+rowNumber + 1).toString();
            }

            if (index === entries.length - 1) {
                values.push(row);
            }
        });

        return values.slice(1);
    }

}
