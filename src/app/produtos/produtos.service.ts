import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Produto } from './produto';
import { Observable } from 'rxjs';


@Injectable()
export class ProdutoService {

constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = "http://localhost:3000/";

// Método que realiza GET dos produtos no Fake Back-End através do meu produto.json
    obterProdutos() : Observable<Produto[]> {
        return this.http
        .get<Produto[]>(this.UrlServiceV1 + "produtos");
    }
}