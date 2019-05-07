let mongoose = require('mongoose');
let Valores = mongoose.Schema;

let ValoresSchema = Valores({
  nro_apt: String,
  mt2: String,
  valor_mt2: String
});

module.exports = mongoose.model('Valores',ValoresSchema);