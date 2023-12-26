async function changeExtensionToIpynb(filePath) {
  const path = require('path');
  const fs = require('fs').promises;

  try {
    // Obter o diretório e o nome do arquivo
    const dir = path.dirname(filePath);
    const file = path.basename(filePath, '.md');

    // Novo nome do arquivo com a extensão modificada
    const newFile = file + '.ipynb';

    // Construir o novo caminho com o diretório e o novo nome do arquivo
    const newPath = path.join(dir, newFile);

    // Renomear o arquivo
    await fs.rename(filePath, newPath);
    console.log('Extensão modificada com sucesso.');

    // Excluir o arquivo .md
    await fs.unlink(filePath);
    console.log('Arquivo .md excluído com sucesso.');

  } catch (err) {
    console.error('Erro ao modificar a extensão do arquivo:', err);
  }
}

module.exports = changeExtensionToIpynb;
