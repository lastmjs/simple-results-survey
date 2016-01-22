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

    getAllTitlesAndValues(entries) {
        const rowTitles = entries.reduce((prev, curr) => {
            //TODO substring(1) assumes the columns will always be single alpha characters A-Z, if the user has more columns this function will break
            if (curr.title.$t.substring(1) === '1') {
                if (/\[.*\]/.test(curr.content.$t)) {
                    prev.push({
                        column: curr.title.$t.substring(0, 1),
                        content: /\[(.*)\]/.exec(curr.content.$t)[1]
                    });
                }
                else {
                    prev.push({
                        column: curr.title.$t.substring(0, 1),
                        content: curr.content.$t
                    });
                }
            }

            return prev;
        }, []);

        const titlesAndValues = [];

        entries.reduce((prev, curr) => {

            const valueColumn = curr.title.$t.substring(0, 1);
            const valueRow = curr.title.$t.substring(1);
            const correspondingTitle = rowTitles.find((element) => {
                return valueRow !== '1' && element.column === valueColumn;
            });

            if (correspondingTitle) {
                prev.push(correspondingTitle.content + ',' + curr.content.$t);
            }

            if (prev.length === rowTitles.length) {
                titlesAndValues.push(prev);
                prev = [];
            }

            return prev;
        }, []);

        return titlesAndValues;
    }

}
