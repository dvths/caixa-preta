"""" https://github.com/esm7/obsidian-vimrc-support#some-help-with-binding-space-chords-doom-and-spacemacs-fans
"""" Basico
unmap <Space>
imap kj <Esc>
vunmap kj <Esc>

set clipboard=unnamed

exmap close obcommand workspace:close
nmap <Space>q :close


"""" Comandos do editro
exmap openGraph obcommand graph:open
nmap <Space>og :openGraph


"""" Navegação entre editores
exmap focusRight obcommand editor:focus-right
nmap <Space>l :focusRight

exmap focusLeft obcommand editor:focus-left
nmap <Space>h :focusLeft

exmap focusTop obcommand editor:focus-top
nmap <Space>k :focusTop

exmap focusBottom obcommand editor:focus-bottom
nmap <Space>j :focusBottom

exmap splitVertical obcommand workspace:split-vertical
nmap <Space>v :splitVertical

exmap splitHorizontal obcommand workspace:split-horizontal
nmap <Space>s :splitHorizontal


exmap toggleLeftSidebar obcommand app:toggle-left-sidebar
nmap <Space>e :toggleLeftSidebar

exmap toggleRightSidebar obcommand app:toggle-right-sidebar
nmap <Space>E :toggleRightSidebar

exmap openSearch obcommand editor:open-search
nmap <Space>f :openSearch

exmap openSearchReplace obcommand editor:open-search-replace
nmap <Space>fs :openSearch

exmap darkTheme obcommand theme:use-dark
nmap <Space>gd :darkTheme

exmap lightTheme obcommand theme:use-light
nmap <Space>gl :lightTheme

"""" Navegação entre abas
" exmap tabnext obcommand cycle-through-panes:cycle-through-panes
" nmap  :tabnext
"
" exmap tabprev obcommand cycle-through-panes:cycle-through-panes-reverse
" nmap gT :tabprev
