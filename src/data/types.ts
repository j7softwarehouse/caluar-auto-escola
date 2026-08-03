export type IconName =
  | 'documento' | 'relogio' | 'pessoas' | 'carro' | 'cartao' | 'livro'
  | 'telefone' | 'whatsapp' | 'email' | 'local' | 'instagram' | 'facebook'
  | 'seta-esq' | 'seta-dir' | 'estrela' | 'mais' | 'fechar'

export interface Dor {
  icone: IconName
  titulo: string
  texto: string
}

export interface Categoria {
  /** Vai no .serv-cat da referencia: "A", "B", "AB", "D", "R", "S" */
  sigla: string
  titulo: string
  itens: string[]
}

export interface Etapa {
  numero: string
  titulo: string
  texto: string
}

export interface Depoimento {
  nome: string
  /** Ocupa o slot .rdate da referencia. Os depoimentos nao tem data. */
  papel: string
  texto: string
  /** Duas letras derivadas do nome, para o .rav da referencia */
  iniciais: string
  corAvatar: string
}

export interface Pergunta {
  pergunta: string
  resposta: string
}

export interface Foto {
  src: string
  legenda: string
}

export interface Stat {
  valor: string
  sufixo: string
  rotulo: string
}

export interface Pill {
  valor: string
  rotulo: string
}
