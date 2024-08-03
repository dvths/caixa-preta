---
alias: Configuração Jupyter Notebook
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#jupyter_notebook #ferramentas 

----
# Configuração Jupyter Notebook

## Atalho do shell:

```shell
# .zshrc

alias jn='jupyter-notebook'
```

## Extensões

Para habilitar as extensões do Jupyter:

1. instalar o pacote nbextensions

```shell
$ pip install jupyter_contrib_nbextensions
```

2. instalar os arquivos js e css necessários para interface gráfica onde é apresentada a aba de extensões:

```shell
$ jupyter contrib nbextension install --user
```

3. instalar as extensões:

```shell
$ jupyter nbextension disable <nbextension require path>
```

Onde `<nbextension require path>`  é o caminho para extensão específica que será instalada. Uma lista de extensões pode ser encontrada na [página da documentação](https://jupyter-contrib-nbextensions.readthedocs.io/en/latest/nbextensions.html)

## Extensões que eu uso

Vim Bidings: Habilita os atalhos de teclado do vim para Jupyter.

Para instalar essa extensão:

1. Fazer o download e habilitar a extensão:

```shell
mkdir -p $(jupyter --data-dir)/nbextensions
cd $(jupyter --data-dir)/nbextensions
git clone https://github.com/lambdalisue/jupyter-vim-binding vim_binding
jupyter nbextension enable vim_binding/vim_binding
```

Isso cria um diretório `vim_bindings` para a extensão em `~/.local/share/jupyter/nbextensions` 

2. Customização dos atalhos:
	1. No diretório `~/.jupyter`, criar um arquivo no caminho `custom/custom.js` (se não existir, criar) e adicionar a seguinte configuração:
	```js
	require([
	  'nbextensions/vim_binding/vim_binding',   
	], function() {
	  CodeMirror.Vim.map("kj", "<Esc>", "insert");
	  CodeMirror.Vim.map("j", "<Plug>(vim-binding-gj)", "normal");
	  CodeMirror.Vim.map("k", "<Plug>(vim-binding-gk)", "normal");
	  CodeMirror.Vim.map("gj", "<Plug>(vim-binding-j)", "normal");
	  CodeMirror.Vim.map("gk", "<Plug>(vim-binding-k)", "normal");
	});

	// Habilita ctrl-2 para alterar a célula para markdown
	require([
	  'nbextensions/vim_binding/vim_binding',
	  'base/js/namespace',
	], function(vim_binding, ns) {
	  vim_binding.on_ready_callbacks.push(function(){
	    var km = ns.keyboard_manager;
	    km.edit_shortcuts.add_shortcut('ctrl-2', 'vim-binding:change-cell-to-markdown', true);
	    // Update Help
	    km.edit_shortcuts.events.trigger('rebuild.QuickHelp');
	  });
	});

	// / para comentar uma linha
	require(['nbextensions/vim_binding/vim_binding'], function() {
	    CodeMirror.Vim.defineOperator("comment_op", function(cm) {
	        cm.toggleComment();
	    });
	    CodeMirror.Vim.mapCommand("/", "operator", "comment_op", {});
	});

	// ctrl para entrar no jupyter mode
	require([
	  'nbextensions/vim_binding/vim_binding',
	  'base/js/namespace',
	], function(vim_binding, ns) {
	  // Add post callback
	  vim_binding.on_ready_callbacks.push(function(){
	    var km = ns.keyboard_manager;
	    km.edit_shortcuts.add_shortcut('ctrl-[', CodeMirror.prototype.leaveNormalMode, true);
	    km.edit_shortcuts.events.trigger('rebuild.QuickHelp');
	  });
	});
	``` 

## Outras extensões importantes

- nbTranslate - tradutor embutido no jupyter
- tableOfContent2 - cria um índice do documento para melhor navegação
- tree_filter - habilita um filtro para busca de arquivos
- hinterland - habilita auto completar 

____
## Referencias

>[!note] [Link para a documetação do nbextensions](https://jupyter-contrib-nbextensions.readthedocs.io/en/latest/index.html)

>[!note] [Link para documentação da extensão](https://github.com/lambdalisue/jupyter-vim-binding)

>[!note] [Link para os exemplos de customização](https://github.com/lambdalisue/jupyter-vim-binding/wiki/Customization)







