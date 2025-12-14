import { TemaService } from './../services/tema.service';
import { Tema } from "../entities/tema.entity";
export declare class TemaController {
    private readonly temaService;
    constructor(temaService: TemaService);
    findAll(): Promise<Tema[]>;
    findById(id: number): Promise<Tema>;
    findByAllTitulo(descricao: string): Promise<Tema[]>;
    create(tema: Tema): Promise<Tema>;
    update(tema: Tema): Promise<Tema>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
