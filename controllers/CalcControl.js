const Calculation = require('../models/getCalc.js');
const calc = (req, res)=>{
   const {phepTinh, numA, numB} = req.params;
   const handleCalc = new Calculation(phepTinh, numA, numB);
   res.send(handleCalc.getResult());
};

module.exports = calc;