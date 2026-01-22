import { Between, FindOperator, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

export class dateUtils {
    static getDateFindOperator(startDate?: Date, endDate?: Date): FindOperator<Date> | undefined {
        if(startDate == undefined && endDate == undefined)
            return undefined

        if (startDate != undefined && endDate != undefined)
            return Between(startDate, endDate)

        if(endDate != undefined)
            return LessThanOrEqual(endDate)

        if(startDate != undefined)
            return MoreThanOrEqual(startDate)
    }
}

