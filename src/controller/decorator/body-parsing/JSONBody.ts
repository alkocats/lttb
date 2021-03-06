import { Controller } from '../../Controller';
import { BodyParser } from '../../../body-parser/BodyParser';
import { JSONBodyParser } from '../../../body-parser/JSONBodyParser';

export function JSONBody(): Function {
    return function (target: Controller<any>, propertyKey: string, descriptor: PropertyDescriptor) {
        if (!target.dataPassing) {
            target.dataPassing = new Map<string, BodyParser>();
        }
        target.dataPassing.set(propertyKey, new JSONBodyParser());
    };
}
