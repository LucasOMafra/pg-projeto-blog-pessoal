import { JwtService } from '@nestjs/jwt';
import { Bcrypt } from '../bcrypt/bcrypt';
import { UsuarioLogin } from '../entities/usuariologin.entity';
import { UsuarioService } from '../../usuarios/services/usuario.service';
export declare class AuthService {
    private usuarioService;
    private jwtService;
    private bcrypt;
    constructor(usuarioService: UsuarioService, jwtService: JwtService, bcrypt: Bcrypt);
    validateUser(username: string, password: string): Promise<any>;
    login(usuarioLogin: UsuarioLogin): Promise<{
        id: number | undefined;
        nome: string | undefined;
        usuario: string;
        senha: string;
        foto: string | undefined;
        token: string;
    }>;
}
