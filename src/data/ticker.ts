/**
 * Faixa animada .ticker. Bloco que so existe na referencia (linha 438).
 * `destaque` marca o trecho que a referencia poe em <b> (cor ambar); itens sem
 * `destaque` usam `texto` (texto plano, sem negrito), reproduzindo a alternancia
 * negrito/normal da referencia. Lista filtrada: a referencia inclui "Habilitacao C"
 * e "Habilitacao E", mas o site so oferece A, B, AB, D (ver src/data/categorias.ts),
 * entao C e E foram removidos.
 */
export const TICKER: { destaque?: string; texto?: string }[] = [
  { destaque: 'Habilitação A' },
  { texto: 'Habilitação B' },
  { destaque: 'Habilitação AB' },
  { destaque: 'Habilitação D' },
  { destaque: 'CNH Brasil' },
  { texto: 'Reciclagem' },
  { destaque: 'Alto Índice de Aprovação' },
  { texto: 'Transporte ao exame' },
  { destaque: 'Credenciada DETRAN-MG' },
  { texto: 'Itabirito/MG' },
]
