class Calculation{
   constructor(phepTinh, numA, numB){
      this.phepTinh = phepTinh;
      this.numA = numA;
      this.numB = numB;
   };
   _getCalc(){
      const {phepTinh, numA, numB} = this;
      if(phepTinh === 'cong')
         return `${numA} + ${numB}`;
      if(phepTinh === 'tru')
         return `${numA} - ${numB}`;
      if(phepTinh === 'nhan')
         return `${numA} * ${numB}`;
      return `${numA} / ${numB}`;
   };
   getResult(){
      const result = this._getCalc();
      return `Result = ${eval(result)}`;
   }
}

module.exports = Calculation;
