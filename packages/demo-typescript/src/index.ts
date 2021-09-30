class SampleClass {
    files = {}
    public static get myField1() {
      return 1;
    }
  
    private get ['myField2']() {
        const x = { ...this.files } as T;
        if (false) {
            // @ts-ignore: Unreachable code error
            return 'hello world';
          } if(x){
              return x
          }else {
              return 'hello world'
          }
      
    }
  }
  


export class Foo{

public getSchemas() {
  // some logic here beforehand resulting in items and docs which are both string[]

  const schemas = Array.from(new Set(items));
  const docTypeBids = Array.from(new Set(docs));
  return {schemas, docTypeBids};
}
}
