import { Postagem } from './../entities/postagem.entity';
import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';
import { TemaService } from '../../tema/services/tema.service';
export declare class PostagemService {
    private postagemRepository;
    private temaService;
    constructor(postagemRepository: Repository<Postagem>, temaService: TemaService);
    findAll(): Promise<Postagem[]>;
    findById(id: number): Promise<Postagem>;
    findAllByTitulo(titulo: string): Promise<Postagem[]>;
    create(postagem: Postagem): Promise<Postagem>;
    update(postagem: Postagem): Promise<Postagem>;
    delete(id: number): Promise<DeleteResult>;
}
