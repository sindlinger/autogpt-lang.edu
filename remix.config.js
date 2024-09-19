/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  future: {
    v2_errorBoundary: true,  // Ativa a nova API de gerenciamento de erros
    v2_meta: true,           // Ativa o novo formato para meta tags
    v2_normalizeFormMethod: true,  // Padroniza os métodos de formulário para letras maiúsculas
    v2_routeConvention: true,  // Usa a nova convenção de rotas
    v2_headers: true,  // Ativa o novo comportamento de cabeçalhos nas rotas
  },
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  serverDependenciesToBundle: ["normalize-url"],
  serverModuleFormat: 'esm',  // Muda o formato do módulo do servidor para ESM
};
