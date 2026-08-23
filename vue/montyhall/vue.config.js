const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false // Isso desativa os erros do ESLint ao salvar o arquivo
})