import 'reflect-metadata';

export function fn() {
  return function(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<Function>) {
    console.log('FN: enter');
  };
}

export function param() {
  return function(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log('PARAM: enter');
    const paramTypes = Reflect.getMetadata("design:paramtypes", target, propertyKey);
    console.log('PARAM: paramTypes:', paramTypes); // paramTypes is not supposed to be undefined
  };
}
