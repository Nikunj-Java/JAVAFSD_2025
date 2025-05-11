import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";



@Pipe({name:'custDate'})
export class CustomDatePipe extends DatePipe implements PipeTransform{

    constructor(){
        super('en-US');   //loca; parameter requred for datepipe
    }

    override transform(value: any, format: string='MMM d, y'):any {
        return super.transform(value,format)
    }
}