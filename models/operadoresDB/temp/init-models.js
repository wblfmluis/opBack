var DataTypes = require("sequelize").DataTypes;
var _admUsuarios = require("./admUsuarios");
var _adminOperador = require("./adminOperador");
var _balanzaPrecios = require("./balanzaPrecios");
var _ciudad = require("./ciudad");
var _descuento = require("./descuento");
var _edadOperador = require("./edadOperador");
var _emailDestinatarios = require("./emailDestinatarios");
var _empresa = require("./empresa");
var _estado = require("./estado");
var _experienciaOperador = require("./experienciaOperador");
var _filtradoEdadOperador = require("./filtradoEdadOperador");
var _filtradoEmpresa = require("./filtradoEmpresa");
var _filtradoEstado = require("./filtradoEstado");
var _filtradoExperienciaOperador = require("./filtradoExperienciaOperador");
var _filtradoFormaPago = require("./filtradoFormaPago");
var _filtradoLicencia = require("./filtradoLicencia");
var _filtradoPrestacion = require("./filtradoPrestacion");
var _filtradoTipoOperacion = require("./filtradoTipoOperacion");
var _filtradoTipoServicio = require("./filtradoTipoServicio");
var _filtradoTipoUnidad = require("./filtradoTipoUnidad");
var _fomaPagoAdmin = require("./fomaPagoAdmin");
var _formaPago = require("./formaPago");
var _frases = require("./frases");
var _mailLog = require("./mailLog");
var _numeroEmpresasOperador = require("./numeroEmpresasOperador");
var _operador = require("./operador");
var _operadorEmpresaQuery = require("./operadorEmpresaQuery");
var _pagosEmpresa = require("./pagos_empresa");
var _permisoUsuario = require("./permiso_usuario");
var _plan = require("./plan");
var _planEmpresa = require("./plan_empresa");
var _preguntasCuestionario = require("./preguntasCuestionario");
var _prestaciones = require("./prestaciones");
var _prestacionesOperador = require("./prestaciones_Operador");
var _rangoUnidades = require("./rangoUnidades");
var _reciboEmpresa = require("./reciboEmpresa");
var _systemErrors = require("./systemErrors");
var _tamanoEmpresa = require("./tamanoEmpresa");
var _testOxxo = require("./testOxxo");
var _tiempoOperacion = require("./tiempoOperacion");
var _tipoLicencia = require("./tipoLicencia");
var _tipoLicenciaOperador = require("./tipoLicencia_Operador");
var _tipoOperacion = require("./tipoOperacion");
var _tipoOperacionEmpresa = require("./tipoOperacion_Empresa");
var _tipoOperacionOperador = require("./tipoOperacion_Operador");
var _tipoServicio = require("./tipoServicio");
var _tipoUnidad = require("./tipoUnidad");
var _vista = require("./vista");

function initModels(sequelize) {
  var admUsuarios = _admUsuarios(sequelize, DataTypes);
  var adminOperador = _adminOperador(sequelize, DataTypes);
  var balanzaPrecios = _balanzaPrecios(sequelize, DataTypes);
  var ciudad = _ciudad(sequelize, DataTypes);
  var descuento = _descuento(sequelize, DataTypes);
  var edadOperador = _edadOperador(sequelize, DataTypes);
  var emailDestinatarios = _emailDestinatarios(sequelize, DataTypes);
  var empresa = _empresa(sequelize, DataTypes);
  var estado = _estado(sequelize, DataTypes);
  var experienciaOperador = _experienciaOperador(sequelize, DataTypes);
  var filtradoEdadOperador = _filtradoEdadOperador(sequelize, DataTypes);
  var filtradoEmpresa = _filtradoEmpresa(sequelize, DataTypes);
  var filtradoEstado = _filtradoEstado(sequelize, DataTypes);
  var filtradoExperienciaOperador = _filtradoExperienciaOperador(sequelize, DataTypes);
  var filtradoFormaPago = _filtradoFormaPago(sequelize, DataTypes);
  var filtradoLicencia = _filtradoLicencia(sequelize, DataTypes);
  var filtradoPrestacion = _filtradoPrestacion(sequelize, DataTypes);
  var filtradoTipoOperacion = _filtradoTipoOperacion(sequelize, DataTypes);
  var filtradoTipoServicio = _filtradoTipoServicio(sequelize, DataTypes);
  var filtradoTipoUnidad = _filtradoTipoUnidad(sequelize, DataTypes);
  var fomaPagoAdmin = _fomaPagoAdmin(sequelize, DataTypes);
  var formaPago = _formaPago(sequelize, DataTypes);
  var frases = _frases(sequelize, DataTypes);
  var mailLog = _mailLog(sequelize, DataTypes);
  var numeroEmpresasOperador = _numeroEmpresasOperador(sequelize, DataTypes);
  var operador = _operador(sequelize, DataTypes);
  var operadorEmpresaQuery = _operadorEmpresaQuery(sequelize, DataTypes);
  var pagosEmpresa = _pagosEmpresa(sequelize, DataTypes);
  var permisoUsuario = _permisoUsuario(sequelize, DataTypes);
  var plan = _plan(sequelize, DataTypes);
  var planEmpresa = _planEmpresa(sequelize, DataTypes);
  var preguntasCuestionario = _preguntasCuestionario(sequelize, DataTypes);
  var prestaciones = _prestaciones(sequelize, DataTypes);
  var prestacionesOperador = _prestacionesOperador(sequelize, DataTypes);
  var rangoUnidades = _rangoUnidades(sequelize, DataTypes);
  var reciboEmpresa = _reciboEmpresa(sequelize, DataTypes);
  var systemErrors = _systemErrors(sequelize, DataTypes);
  var tamanoEmpresa = _tamanoEmpresa(sequelize, DataTypes);
  var testOxxo = _testOxxo(sequelize, DataTypes);
  var tiempoOperacion = _tiempoOperacion(sequelize, DataTypes);
  var tipoLicencia = _tipoLicencia(sequelize, DataTypes);
  var tipoLicenciaOperador = _tipoLicenciaOperador(sequelize, DataTypes);
  var tipoOperacion = _tipoOperacion(sequelize, DataTypes);
  var tipoOperacionEmpresa = _tipoOperacionEmpresa(sequelize, DataTypes);
  var tipoOperacionOperador = _tipoOperacionOperador(sequelize, DataTypes);
  var tipoServicio = _tipoServicio(sequelize, DataTypes);
  var tipoUnidad = _tipoUnidad(sequelize, DataTypes);
  var vista = _vista(sequelize, DataTypes);

  filtradoEdadOperador.belongsTo(edadOperador, { as: "idedadOperador_edadOperador", foreignKey: "idedadOperador"});
  edadOperador.hasMany(filtradoEdadOperador, { as: "filtradoEdadOperadors", foreignKey: "idedadOperador"});
  operador.belongsTo(edadOperador, { as: "idedadOperador_edadOperador", foreignKey: "idedadOperador"});
  edadOperador.hasMany(operador, { as: "operadors", foreignKey: "idedadOperador"});
  adminOperador.belongsTo(empresa, { as: "idempresa_empresa", foreignKey: "idempresa"});
  empresa.hasMany(adminOperador, { as: "adminOperadors", foreignKey: "idempresa"});
  filtradoEmpresa.belongsTo(empresa, { as: "idempresa_empresa", foreignKey: "idempresa"});
  empresa.hasMany(filtradoEmpresa, { as: "filtradoEmpresas", foreignKey: "idempresa"});
  operadorEmpresaQuery.belongsTo(empresa, { as: "idempresa_empresa", foreignKey: "idempresa"});
  empresa.hasMany(operadorEmpresaQuery, { as: "operadorEmpresaQueries", foreignKey: "idempresa"});
  planEmpresa.belongsTo(empresa, { as: "idempresa_empresa", foreignKey: "idempresa"});
  empresa.hasMany(planEmpresa, { as: "plan_empresas", foreignKey: "idempresa"});
  reciboEmpresa.belongsTo(empresa, { as: "idempresa_empresa", foreignKey: "idempresa"});
  empresa.hasMany(reciboEmpresa, { as: "reciboEmpresas", foreignKey: "idempresa"});
  ciudad.belongsTo(estado, { as: "idestado_estado", foreignKey: "idestado"});
  estado.hasMany(ciudad, { as: "ciudads", foreignKey: "idestado"});
  empresa.belongsTo(estado, { as: "idestado_estado", foreignKey: "idestado"});
  estado.hasMany(empresa, { as: "empresas", foreignKey: "idestado"});
  filtradoEstado.belongsTo(estado, { as: "idestado_estado", foreignKey: "idestado"});
  estado.hasMany(filtradoEstado, { as: "filtradoEstados", foreignKey: "idestado"});
  filtradoExperienciaOperador.belongsTo(experienciaOperador, { as: "idexperienciaOperador_experienciaOperador", foreignKey: "idexperienciaOperador"});
  experienciaOperador.hasMany(filtradoExperienciaOperador, { as: "filtradoExperienciaOperadors", foreignKey: "idexperienciaOperador"});
  operador.belongsTo(experienciaOperador, { as: "idexperienciaOperador_experienciaOperador", foreignKey: "idexperienciaOperador"});
  experienciaOperador.hasMany(operador, { as: "operadors", foreignKey: "idexperienciaOperador"});
  filtradoEdadOperador.belongsTo(filtradoEmpresa, { as: "idfiltrado_filtradoEmpresa", foreignKey: "idfiltrado"});
  filtradoEmpresa.hasMany(filtradoEdadOperador, { as: "filtradoEdadOperadors", foreignKey: "idfiltrado"});
  filtradoEstado.belongsTo(filtradoEmpresa, { as: "idfiltrado_filtradoEmpresa", foreignKey: "idfiltrado"});
  filtradoEmpresa.hasMany(filtradoEstado, { as: "filtradoEstados", foreignKey: "idfiltrado"});
  filtradoExperienciaOperador.belongsTo(filtradoEmpresa, { as: "idfiltrado_filtradoEmpresa", foreignKey: "idfiltrado"});
  filtradoEmpresa.hasMany(filtradoExperienciaOperador, { as: "filtradoExperienciaOperadors", foreignKey: "idfiltrado"});
  filtradoFormaPago.belongsTo(filtradoEmpresa, { as: "idfiltrado_filtradoEmpresa", foreignKey: "idfiltrado"});
  filtradoEmpresa.hasMany(filtradoFormaPago, { as: "filtradoFormaPagos", foreignKey: "idfiltrado"});
  filtradoLicencia.belongsTo(filtradoEmpresa, { as: "idfiltrado_filtradoEmpresa", foreignKey: "idfiltrado"});
  filtradoEmpresa.hasMany(filtradoLicencia, { as: "filtradoLicencia", foreignKey: "idfiltrado"});
  filtradoPrestacion.belongsTo(filtradoEmpresa, { as: "idfiltrado_filtradoEmpresa", foreignKey: "idfiltrado"});
  filtradoEmpresa.hasMany(filtradoPrestacion, { as: "filtradoPrestacions", foreignKey: "idfiltrado"});
  filtradoTipoServicio.belongsTo(filtradoEmpresa, { as: "idfiltrado_filtradoEmpresa", foreignKey: "idfiltrado"});
  filtradoEmpresa.hasMany(filtradoTipoServicio, { as: "filtradoTipoServicios", foreignKey: "idfiltrado"});
  filtradoTipoUnidad.belongsTo(filtradoEmpresa, { as: "idfiltrado_filtradoEmpresa", foreignKey: "idfiltrado"});
  filtradoEmpresa.hasMany(filtradoTipoUnidad, { as: "filtradoTipoUnidads", foreignKey: "idfiltrado"});
  filtradoFormaPago.belongsTo(formaPago, { as: "idformaPago_formaPago", foreignKey: "idformaPago"});
  formaPago.hasMany(filtradoFormaPago, { as: "filtradoFormaPagos", foreignKey: "idformaPago"});
  operador.belongsTo(formaPago, { as: "idformaPago_formaPago", foreignKey: "idformaPago"});
  formaPago.hasMany(operador, { as: "operadors", foreignKey: "idformaPago"});
  adminOperador.belongsTo(operador, { as: "idoperador_operador", foreignKey: "idoperador"});
  operador.hasMany(adminOperador, { as: "adminOperadors", foreignKey: "idoperador"});
  operadorEmpresaQuery.belongsTo(operador, { as: "idoperador_operador", foreignKey: "idoperador"});
  operador.hasMany(operadorEmpresaQuery, { as: "operadorEmpresaQueries", foreignKey: "idoperador"});
  prestacionesOperador.belongsTo(operador, { as: "idoperador_operador", foreignKey: "idoperador"});
  operador.hasMany(prestacionesOperador, { as: "prestaciones_Operadors", foreignKey: "idoperador"});
  tipoLicenciaOperador.belongsTo(operador, { as: "idoperador_operador", foreignKey: "idoperador"});
  operador.hasMany(tipoLicenciaOperador, { as: "tipoLicencia_Operadors", foreignKey: "idoperador"});
  tipoOperacionOperador.belongsTo(operador, { as: "idoperador_operador", foreignKey: "idoperador"});
  operador.hasMany(tipoOperacionOperador, { as: "tipoOperacion_Operadors", foreignKey: "idoperador"});
  planEmpresa.belongsTo(plan, { as: "idplan_plan", foreignKey: "idplan"});
  plan.hasMany(planEmpresa, { as: "plan_empresas", foreignKey: "idplan"});
  reciboEmpresa.belongsTo(planEmpresa, { as: "idplanEmpresa_plan_empresa", foreignKey: "idplanEmpresa"});
  planEmpresa.hasMany(reciboEmpresa, { as: "reciboEmpresas", foreignKey: "idplanEmpresa"});
  filtradoPrestacion.belongsTo(prestaciones, { as: "idprestacion_prestacione", foreignKey: "idprestacion"});
  prestaciones.hasMany(filtradoPrestacion, { as: "filtradoPrestacions", foreignKey: "idprestacion"});
  prestacionesOperador.belongsTo(prestaciones, { as: "idprestacion_prestacione", foreignKey: "idprestacion"});
  prestaciones.hasMany(prestacionesOperador, { as: "prestaciones_Operadors", foreignKey: "idprestacion"});
  filtradoLicencia.belongsTo(tipoLicencia, { as: "idtipoLicencia_tipoLicencium", foreignKey: "idtipoLicencia"});
  tipoLicencia.hasMany(filtradoLicencia, { as: "filtradoLicencia", foreignKey: "idtipoLicencia"});
  tipoLicenciaOperador.belongsTo(tipoLicencia, { as: "idtipoLicencia_tipoLicencium", foreignKey: "idtipoLicencia"});
  tipoLicencia.hasMany(tipoLicenciaOperador, { as: "tipoLicencia_Operadors", foreignKey: "idtipoLicencia"});
  tipoOperacionOperador.belongsTo(tipoOperacion, { as: "idtipoOperacion_tipoOperacion", foreignKey: "idtipoOperacion"});
  tipoOperacion.hasMany(tipoOperacionOperador, { as: "tipoOperacion_Operadors", foreignKey: "idtipoOperacion"});
  filtradoTipoServicio.belongsTo(tipoServicio, { as: "idtipoServicio_tipoServicio", foreignKey: "idtipoServicio"});
  tipoServicio.hasMany(filtradoTipoServicio, { as: "filtradoTipoServicios", foreignKey: "idtipoServicio"});
  operador.belongsTo(tipoServicio, { as: "idtipoServicio_tipoServicio", foreignKey: "idtipoServicio"});
  tipoServicio.hasMany(operador, { as: "operadors", foreignKey: "idtipoServicio"});
  filtradoTipoUnidad.belongsTo(tipoUnidad, { as: "idtipoUnidad_tipoUnidad", foreignKey: "idtipoUnidad"});
  tipoUnidad.hasMany(filtradoTipoUnidad, { as: "filtradoTipoUnidads", foreignKey: "idtipoUnidad"});
  operador.belongsTo(tipoUnidad, { as: "idtipoUnidad_tipoUnidad", foreignKey: "idtipoUnidad"});
  tipoUnidad.hasMany(operador, { as: "operadors", foreignKey: "idtipoUnidad"});

  return {
    admUsuarios,
    adminOperador,
    balanzaPrecios,
    ciudad,
    descuento,
    edadOperador,
    emailDestinatarios,
    empresa,
    estado,
    experienciaOperador,
    filtradoEdadOperador,
    filtradoEmpresa,
    filtradoEstado,
    filtradoExperienciaOperador,
    filtradoFormaPago,
    filtradoLicencia,
    filtradoPrestacion,
    filtradoTipoOperacion,
    filtradoTipoServicio,
    filtradoTipoUnidad,
    fomaPagoAdmin,
    formaPago,
    frases,
    mailLog,
    numeroEmpresasOperador,
    operador,
    operadorEmpresaQuery,
    pagosEmpresa,
    permisoUsuario,
    plan,
    planEmpresa,
    preguntasCuestionario,
    prestaciones,
    prestacionesOperador,
    rangoUnidades,
    reciboEmpresa,
    systemErrors,
    tamanoEmpresa,
    testOxxo,
    tiempoOperacion,
    tipoLicencia,
    tipoLicenciaOperador,
    tipoOperacion,
    tipoOperacionEmpresa,
    tipoOperacionOperador,
    tipoServicio,
    tipoUnidad,
    vista,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
