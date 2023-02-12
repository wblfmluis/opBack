const DataTypes = require("sequelize").DataTypes;
const _admUsuarios = require("./tables/admUsuarios");
const _adminOperador = require("./tables/adminOperador");
const _balanzaPrecios = require("./tables/balanzaPrecios");
const _ciudad = require("./tables/ciudad");
const _descuento = require("./tables/descuento");
const _edadOperador = require("./tables/edadOperador");
const _emailDestinatarios = require("./tables/emailDestinatarios");
const _empresa = require("./tables/empresa");
const _estado = require("./tables/estado");
const _experienciaOperador = require("./tables/experienciaOperador");
const _filtradoEdadOperador = require("./tables/filtradoEdadOperador");
const _filtradoEmpresa = require("./tables/filtradoEmpresa");
const _filtradoEstado = require("./tables/filtradoEstado");
const _filtradoExperienciaOperador = require("./tables/filtradoExperienciaOperador");
const _filtradoFormaPago = require("./tables/filtradoFormaPago");
const _filtradoLicencia = require("./tables/filtradoLicencia");
const _filtradoPrestacion = require("./tables/filtradoPrestacion");
const _filtradoTipoOperacion = require("./tables/filtradoTipoOperacion");
const _filtradoTipoServicio = require("./tables/filtradoTipoServicio");
const _filtradoTipoUnidad = require("./tables/filtradoTipoUnidad");
const _fomaPagoAdmin = require("./tables/fomaPagoAdmin");
const _formaPago = require("./tables/formaPago");
const _frases = require("./tables/frases");
const _mailLog = require("./tables/mailLog");
const _numeroEmpresasOperador = require("./tables/numeroEmpresasOperador");
const _operador = require("./tables/operador");
const _operadorEmpresaQuery = require("./tables/operadorEmpresaQuery");
const _pagosEmpresa = require("./tables/pagos_empresa");
const _permisoUsuario = require("./tables/permiso_usuario");
const _plan = require("./tables/plan");
const _planEmpresa = require("./tables/plan_empresa");
const _preguntasCuestionario = require("./tables/preguntasCuestionario");
const _prestaciones = require("./tables/prestaciones");
const _prestacionesOperador = require("./tables/prestaciones_Operador");
const _rangoUnidades = require("./tables/rangoUnidades");
const _reciboEmpresa = require("./tables/reciboEmpresa");
const _tamanoEmpresa = require("./tables/tamanoEmpresa");
const _testOxxo = require("./tables/testOxxo");
const _tiempoOperacion = require("./tables/tiempoOperacion");
const _tipoLicencia = require("./tables/tipoLicencia");
const _tipoLicenciaOperador = require("./tables/tipoLicencia_Operador");
const _tipoOperacion = require("./tables/tipoOperacion");
const _tipoOperacionEmpresa = require("./tables/tipoOperacion_Empresa");
const _tipoOperacionOperador = require("./tables/tipoOperacion_Operador");
const _tipoServicio = require("./tables/tipoServicio");
const _tipoUnidad = require("./tables/tipoUnidad");
const _vista = require("./tables/vista");
const _systemErrors = require("./tables/systemErrors");
const _vistas = require("./tables/vistas");
const _funciones = require("./tables/funciones");

function initModels(sequelize) {
    const admUsuarios = _admUsuarios(sequelize, DataTypes);
    const adminOperador = _adminOperador(sequelize, DataTypes);
    const balanzaPrecios = _balanzaPrecios(sequelize, DataTypes);
    const ciudad = _ciudad(sequelize, DataTypes);
    const descuento = _descuento(sequelize, DataTypes);
    const edadOperador = _edadOperador(sequelize, DataTypes);
    const emailDestinatarios = _emailDestinatarios(sequelize, DataTypes);
    const empresa = _empresa(sequelize, DataTypes);
    const estado = _estado(sequelize, DataTypes);
    const experienciaOperador = _experienciaOperador(sequelize, DataTypes);
    const filtradoEdadOperador = _filtradoEdadOperador(sequelize, DataTypes);
    const filtradoEmpresa = _filtradoEmpresa(sequelize, DataTypes);
    const filtradoEstado = _filtradoEstado(sequelize, DataTypes);
    const filtradoExperienciaOperador = _filtradoExperienciaOperador(
        sequelize,
        DataTypes
    );
    const filtradoFormaPago = _filtradoFormaPago(sequelize, DataTypes);
    const filtradoLicencia = _filtradoLicencia(sequelize, DataTypes);
    const filtradoPrestacion = _filtradoPrestacion(sequelize, DataTypes);
    const filtradoTipoOperacion = _filtradoTipoOperacion(sequelize, DataTypes);
    const filtradoTipoServicio = _filtradoTipoServicio(sequelize, DataTypes);
    const filtradoTipoUnidad = _filtradoTipoUnidad(sequelize, DataTypes);
    const fomaPagoAdmin = _fomaPagoAdmin(sequelize, DataTypes);
    const formaPago = _formaPago(sequelize, DataTypes);
    const frases = _frases(sequelize, DataTypes);
    const mailLog = _mailLog(sequelize, DataTypes);
    const numeroEmpresasOperador = _numeroEmpresasOperador(sequelize, DataTypes);
    const operador = _operador(sequelize, DataTypes);
    const operadorEmpresaQuery = _operadorEmpresaQuery(sequelize, DataTypes);
    const pagosEmpresa = _pagosEmpresa(sequelize, DataTypes);
    const permisoUsuario = _permisoUsuario(sequelize, DataTypes);
    const plan = _plan(sequelize, DataTypes);
    const planEmpresa = _planEmpresa(sequelize, DataTypes);
    const preguntasCuestionario = _preguntasCuestionario(sequelize, DataTypes);
    const prestaciones = _prestaciones(sequelize, DataTypes);
    const prestacionesOperador = _prestacionesOperador(sequelize, DataTypes);
    const rangoUnidades = _rangoUnidades(sequelize, DataTypes);
    const reciboEmpresa = _reciboEmpresa(sequelize, DataTypes);
    const tamanoEmpresa = _tamanoEmpresa(sequelize, DataTypes);
    const testOxxo = _testOxxo(sequelize, DataTypes);
    const tiempoOperacion = _tiempoOperacion(sequelize, DataTypes);
    const tipoLicencia = _tipoLicencia(sequelize, DataTypes);
    const tipoLicenciaOperador = _tipoLicenciaOperador(sequelize, DataTypes);
    const tipoOperacion = _tipoOperacion(sequelize, DataTypes);
    const tipoOperacionEmpresa = _tipoOperacionEmpresa(sequelize, DataTypes);
    const tipoOperacionOperador = _tipoOperacionOperador(sequelize, DataTypes);
    const tipoServicio = _tipoServicio(sequelize, DataTypes);
    const tipoUnidad = _tipoUnidad(sequelize, DataTypes);
    const vista = _vista(sequelize, DataTypes);
    const systemErrors = _systemErrors(sequelize);
    const vistas = _vistas(sequelize);
    const funciones = _funciones(sequelize);

    filtradoEdadOperador.belongsTo(edadOperador, {
        as: "idedadOperador_edadOperador",
        foreignKey: "idedadOperador",
    });
    edadOperador.hasMany(filtradoEdadOperador, {
        as: "filtradoEdadOperadors",
        foreignKey: "idedadOperador",
    });
    operador.belongsTo(edadOperador, {
        as: "edadOperador",
        foreignKey: "idedadOperador",
    });
    operador.belongsTo(estado, {
        as: "estadoOperador",
        foreignKey: "idestado"
    });
    operador.belongsTo(ciudad, {
       as: "ciudadOperador",
       foreignKey: "idciudad"
    });
    edadOperador.hasMany(operador, {
        as: "operadors",
        foreignKey: "idedadOperador",
    });
    estado.hasMany(operador, {
        as: "operadorEstado",
        foreignKey: "idestado"
    });
    ciudad.hasMany(operador, {
        as: "operadorCiudad",
        foreignKey: "idciudad"
    });
    adminOperador.belongsTo(empresa, {
        as: "idempresa_empresa",
        foreignKey: "idempresa",
    });
    empresa.hasMany(adminOperador, {
        as: "adminOperadors",
        foreignKey: "idempresa",
    });
    filtradoEmpresa.belongsTo(empresa, {
        as: "idempresa_empresa",
        foreignKey: "idempresa",
    });
    empresa.hasMany(filtradoEmpresa, {
        as: "filtradoEmpresas",
        foreignKey: "idempresa",
    });
    operadorEmpresaQuery.belongsTo(empresa, {
        as: "idempresa_empresa",
        foreignKey: "idempresa",
    });
    empresa.hasMany(operadorEmpresaQuery, {
        as: "operadorEmpresaQueries",
        foreignKey: "idempresa",
    });
    planEmpresa.belongsTo(empresa, {
        as: "idempresa_empresa",
        foreignKey: "idempresa",
    });
    empresa.hasMany(planEmpresa, {
        as: "plan_empresas",
        foreignKey: "idempresa",
    });
    reciboEmpresa.belongsTo(empresa, {
        as: "idempresa_empresa",
        foreignKey: "idempresa",
    });
    empresa.hasMany(reciboEmpresa, {
        as: "reciboEmpresas",
        foreignKey: "idempresa",
    });
    ciudad.belongsTo(estado, {as: "idestado_estado", foreignKey: "idestado"});
    estado.hasMany(ciudad, {as: "ciudads", foreignKey: "idestado"});
    funciones.belongsTo(vistas, {as: "idvista_vista", foreignKey: "idvista"});
    vistas.hasMany(funciones, {as: "funciones", foreignKey: "idvista"});
    empresa.belongsTo(estado, {as: "idestado_estado", foreignKey: "idestado"});
    estado.hasMany(empresa, {as: "empresas", foreignKey: "idestado"});
    filtradoEstado.belongsTo(estado, {
        as: "idestado_estado",
        foreignKey: "idestado",
    });
    estado.hasMany(filtradoEstado, {
        as: "filtradoEstados",
        foreignKey: "idestado",
    });
    filtradoExperienciaOperador.belongsTo(experienciaOperador, {
        as: "idexperienciaOperador_experienciaOperador",
        foreignKey: "idexperienciaOperador",
    });
    experienciaOperador.hasMany(filtradoExperienciaOperador, {
        as: "filtradoExperienciaOperadors",
        foreignKey: "idexperienciaOperador",
    });
    operador.belongsTo(experienciaOperador, {
        as: "experienciaOperador",
        foreignKey: "idexperienciaOperador",
    });
    experienciaOperador.hasMany(operador, {
        as: "operadors",
        foreignKey: "idexperienciaOperador",
    });
    filtradoEdadOperador.belongsTo(filtradoEmpresa, {
        as: "idfiltrado_filtradoEmpresa",
        foreignKey: "idfiltrado",
    });
    filtradoEmpresa.hasMany(filtradoEdadOperador, {
        as: "filtradoEdadOperadors",
        foreignKey: "idfiltrado",
    });
    filtradoEstado.belongsTo(filtradoEmpresa, {
        as: "idfiltrado_filtradoEmpresa",
        foreignKey: "idfiltrado",
    });
    filtradoEmpresa.hasMany(filtradoEstado, {
        as: "filtradoEstados",
        foreignKey: "idfiltrado",
    });
    filtradoExperienciaOperador.belongsTo(filtradoEmpresa, {
        as: "idfiltrado_filtradoEmpresa",
        foreignKey: "idfiltrado",
    });
    filtradoEmpresa.hasMany(filtradoExperienciaOperador, {
        as: "filtradoExperienciaOperadors",
        foreignKey: "idfiltrado",
    });
    filtradoFormaPago.belongsTo(filtradoEmpresa, {
        as: "idfiltrado_filtradoEmpresa",
        foreignKey: "idfiltrado",
    });
    filtradoEmpresa.hasMany(filtradoFormaPago, {
        as: "filtradoFormaPagos",
        foreignKey: "idfiltrado",
    });
    filtradoLicencia.belongsTo(filtradoEmpresa, {
        as: "idfiltrado_filtradoEmpresa",
        foreignKey: "idfiltrado",
    });
    filtradoEmpresa.hasMany(filtradoLicencia, {
        as: "filtradoLicencia",
        foreignKey: "idfiltrado",
    });
    filtradoPrestacion.belongsTo(filtradoEmpresa, {
        as: "idfiltrado_filtradoEmpresa",
        foreignKey: "idfiltrado",
    });
    filtradoEmpresa.hasMany(filtradoPrestacion, {
        as: "filtradoPrestacions",
        foreignKey: "idfiltrado",
    });
    filtradoTipoServicio.belongsTo(filtradoEmpresa, {
        as: "idfiltrado_filtradoEmpresa",
        foreignKey: "idfiltrado",
    });
    filtradoEmpresa.hasMany(filtradoTipoServicio, {
        as: "filtradoTipoServicios",
        foreignKey: "idfiltrado",
    });
    filtradoTipoUnidad.belongsTo(filtradoEmpresa, {
        as: "idfiltrado_filtradoEmpresa",
        foreignKey: "idfiltrado",
    });
    filtradoEmpresa.hasMany(filtradoTipoUnidad, {
        as: "filtradoTipoUnidads",
        foreignKey: "idfiltrado",
    });
    filtradoFormaPago.belongsTo(formaPago, {
        as: "idformaPago_formaPago",
        foreignKey: "idformaPago",
    });
    formaPago.hasMany(filtradoFormaPago, {
        as: "filtradoFormaPagos",
        foreignKey: "idformaPago",
    });
    operador.belongsTo(formaPago, {
        as: "formaPagoOperador",
        foreignKey: "idformaPago",
    });
    formaPago.hasMany(operador, {as: "operadors", foreignKey: "idformaPago"});
    adminOperador.belongsTo(operador, {
        as: "idoperador_operador",
        foreignKey: "idoperador",
    });
    operador.hasMany(adminOperador, {
        as: "adminOperadors",
        foreignKey: "idoperador",
    });
    operadorEmpresaQuery.belongsTo(operador, {
        as: "idoperador_operador",
        foreignKey: "idoperador",
    });
    operador.hasMany(operadorEmpresaQuery, {
        as: "operadorEmpresaQueries",
        foreignKey: "idoperador",
    });
    prestacionesOperador.belongsTo(operador, {
        as: "idoperador_operador",
        foreignKey: "idoperador",
    });
    operador.hasMany(prestacionesOperador, {
        as: "prestaciones_Operadors",
        foreignKey: "idoperador",
    });
    tipoLicenciaOperador.belongsTo(operador, {
        as: "idoperador_operador",
        foreignKey: "idoperador",
    });
    operador.hasMany(tipoLicenciaOperador, {
        as: "tipoLicencia_Operadors",
        foreignKey: "idoperador",
    });
    tipoOperacionOperador.belongsTo(operador, {
        as: "idoperador_operador",
        foreignKey: "idoperador",
    });
    operador.hasMany(tipoOperacionOperador, {
        as: "tipoOperacion_Operadors",
        foreignKey: "idoperador",
    });
    planEmpresa.belongsTo(plan, {as: "idplan_plan", foreignKey: "idplan"});
    plan.hasMany(planEmpresa, {as: "plan_empresas", foreignKey: "idplan"});
    reciboEmpresa.belongsTo(planEmpresa, {
        as: "idplanEmpresa_plan_empresa",
        foreignKey: "idplanEmpresa",
    });
    planEmpresa.hasMany(reciboEmpresa, {
        as: "reciboEmpresas",
        foreignKey: "idplanEmpresa",
    });
    filtradoPrestacion.belongsTo(prestaciones, {
        as: "idprestacion_prestacione",
        foreignKey: "idprestacion",
    });
    prestaciones.hasMany(filtradoPrestacion, {
        as: "filtradoPrestacions",
        foreignKey: "idprestacion",
    });
    prestacionesOperador.belongsTo(prestaciones, {
        as: "idprestacion_prestacione",
        foreignKey: "idprestacion",
    });
    prestaciones.hasMany(prestacionesOperador, {
        as: "prestaciones_Operadors",
        foreignKey: "idprestacion",
    });
    filtradoLicencia.belongsTo(tipoLicencia, {
        as: "idtipoLicencia_tipoLicencium",
        foreignKey: "idtipoLicencia",
    });
    tipoLicencia.hasMany(filtradoLicencia, {
        as: "filtradoLicencia",
        foreignKey: "idtipoLicencia",
    });
    tipoLicenciaOperador.belongsTo(tipoLicencia, {
        as: "idtipoLicencia_tipoLicencium",
        foreignKey: "idtipoLicencia",
    });
    tipoLicencia.hasMany(tipoLicenciaOperador, {
        as: "tipoLicencia_Operadors",
        foreignKey: "idtipoLicencia",
    });
    tipoOperacionOperador.belongsTo(tipoOperacion, {
        as: "idtipoOperacion_tipoOperacion",
        foreignKey: "idtipoOperacion",
    });
    tipoOperacion.hasMany(tipoOperacionOperador, {
        as: "tipoOperacion_Operadors",
        foreignKey: "idtipoOperacion",
    });
    filtradoTipoServicio.belongsTo(tipoServicio, {
        as: "idtipoServicio_tipoServicio",
        foreignKey: "idtipoServicio",
    });
    tipoServicio.hasMany(filtradoTipoServicio, {
        as: "filtradoTipoServicios",
        foreignKey: "idtipoServicio",
    });
    operador.belongsTo(tipoServicio, {
        as: "tipoServicioOperador",
        foreignKey: "idtipoServicio",
    });
    tipoServicio.hasMany(operador, {
        as: "operadors",
        foreignKey: "idtipoServicio",
    });
    filtradoTipoUnidad.belongsTo(tipoUnidad, {
        as: "idtipoUnidad_tipoUnidad",
        foreignKey: "idtipoUnidad",
    });
    tipoUnidad.hasMany(filtradoTipoUnidad, {
        as: "filtradoTipoUnidads",
        foreignKey: "idtipoUnidad",
    });
    operador.belongsTo(tipoUnidad, {
        as: "tipoUnidadOperador",
        foreignKey: "idtipoUnidad",
    });
    tipoUnidad.hasMany(operador, {as: "operadors", foreignKey: "idtipoUnidad"});

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
        systemErrors,
        vistas,
        funciones,
    };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
