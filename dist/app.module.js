"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const postagem_module_1 = require("./postagem/postagem.module");
const tema_module_1 = require("./tema/tema.module");
const auth_module_1 = require("./auth/auth.module");
const usuario_module_1 = require("./usuarios/usuario.module");
const app_controller_1 = require("./app.controller");
const config_1 = require("@nestjs/config");
const prod_service_1 = require("./data/services/prod.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: prod_service_1.ProdService,
                imports: [config_1.ConfigModule],
            }),
            postagem_module_1.PostagemModule,
            tema_module_1.TemaModule,
            auth_module_1.AuthModule,
            usuario_module_1.UsuarioModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map