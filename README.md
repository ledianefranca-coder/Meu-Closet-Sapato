# Meu Closet de Sapatos

Aplicação responsiva para cadastrar e organizar sapatos, com autenticação e dados privados no Supabase.

## Funcionalidades

- Cadastro e login por e-mail e senha
- Rota protegida em `/colecao`
- Cadastro, edição e exclusão de sapatos
- Fotos privadas (JPG, PNG ou WEBP, até 5 MB)
- Favoritos, busca, filtros e indicadores
- Row Level Security: cada conta acessa somente os próprios dados

## Rodar

1. Execute `npm install`
2. Copie `.env.example` para `.env.local` e informe os dados do Supabase
3. Execute `npm run dev`

A chave publicável pode ser usada no navegador; a proteção dos dados é garantida pelas políticas RLS.

## Tecnologias

React, TypeScript, Vite, React Router e Supabase.

## Publicação

O workflow `Publicar aplicação` gera e publica automaticamente a versão pronta no GitHub Pages após cada atualização da branch `main`.
