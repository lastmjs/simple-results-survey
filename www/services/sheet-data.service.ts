import {Injectable} from 'angular2/core';

@Injectable()
export class SheetDataService {

    constructor() {
        console.log(Tabletop);
    }

    getValues() {
        return data;
    }

    getTitles(values) {
    }
}
