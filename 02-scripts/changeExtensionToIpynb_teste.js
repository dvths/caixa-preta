function changeExtensionToIpynb_teste(filePath) {
  const path = require('path');
  const fs = require('fs').promises;
  const { exec } = require('child_process')

  // Obter o diretório e o nome do arquivo
  const dir = path.dirname(filePath);
  const file = path.basename(filePath, '.md');

  const title = file;

  const now = new Date();
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const formattedDateTime = day + month + year + hours + minutes + seconds;
  // Substitui os caracteres especiais e os espaços por um "-"
  const suffix = title.replace(/[^\w\^a-zA-ZÀ-ÖØ-öø-ÿÇç0-9-]/g, " ").replace(/\s+/g, "-").toLowerCase();

  // Novo nome do arquivo com a extensão modificada
  const newFile = formattedDateTime + '-' + suffix + '.ipynb';

  // Construir o novo caminho com o diretório e o novo nome do arquivo
  const newPath = path.join(dir, newFile);

  // return fs.rename(filePath, newPath)
  //   .then(() => {
  //     console.log('Extensão modificada com sucesso.');

  //     // Excluir o arquivo .md
  //     return fs.unlink(filePath)
  //       .then(() => {
  //         console.log('Arquivo .md excluído com sucesso.');
  //       })
  //       .catch((err) => {
  //         console.error('Erro ao excluir o arquivo .md:', err);
  //       });
  //   })
  //   .catch((err) => {
  //     console.error('Erro ao modificar a extensão do arquivo:', err);
  //   });
  return fs.rename(filePath, newPath)
    .then(() => {
      console.log('Extensão modificada com sucesso.');

      // Excluir o arquivo .md
      return fs.unlink(filePath)
        .then(() => {
          console.log('Arquivo .md excluído com sucesso.');

          // Executar o arquivo no VSCode
          exec(`code ${newPath}`, (err) => {
            if (err) {
              console.error('Erro ao executar o arquivo no VSCode:', err);
            } else {
              console.log('Arquivo executado no VSCode.');
            }
          });
        })
        .catch((err) => {
          console.error('Erro ao excluir o arquivo .md:', err);
        });
    })
    .catch((err) => {
      console.error('Erro ao modificar a extensão do arquivo:', err);
    });
}

module.exports = changeExtensionToIpynb_teste;
