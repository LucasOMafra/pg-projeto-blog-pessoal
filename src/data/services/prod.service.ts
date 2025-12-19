import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class ProdService implements TypeOrmOptionsFactory {

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      // Certifique-se de que o link abaixo está EXATAMENTE entre aspas simples
      url: 'postgresql://db_blogpessoal_1nw5_user:z659PN5EX1y2GJRvckRMy00ielaHBXjU@dpg-d52attnpm1nc73ek958g-a.oregon-postgres.render.com/db_blogpessoal_1nw5',
      logging: false,
      dropSchema: false,
      // Configuração obrigatória para o Render
      ssl: {
        rejectUnauthorized: false, 
      },
      synchronize: true,
      autoLoadEntities: true,
    };
  }
}