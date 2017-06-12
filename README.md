# dotfiles

My personal configuration files for MacOS

### Contents:

Includes files for configuring:
- Fish shell
- iTerm2
- Neovim
- Tmux
- Hyper.js Terminal

### Default config:

Contains plugins, dependencies and utilities to comfortably work with:
- Javascript
- Elixir
- Go
- Ruby
- HTML/css/scss/stylus

But you can always customize it to add or remove stuff as you like.

### Use it!

If you like this configuration just clone this repo:
```
$ git clone https://github.com/pggalaviz/dotfiles.git ~/.dotfiles
```
then run:
```
cd ~/.dotfiles && ./setup.sh
```
Running `./setup.sh` will install (or update if already installed) several utilities and dependencies, via **Homebrew** (will install it if not found) and other methods, including:
- Node.js
- Git
- Fish shell
- Neovim
- Golang
- Tmux
- Yarn
- Hyper.js
- Python3
- Rbenv
- Ruby-build
- gocode
- tree
- Ripgrep
- Universal ctags

And then symlink configuration to the respective paths. Follow the instructions at the end and you'll be all set.

### After installing:

`$GOPATH` will be set to `~/go`

For best UI use **iTerm2**, any 'True color' terminal emulator should work, including **Hyper.js**.
Main color theme is called **Oceanic Next** but configuration for **Nova** is also included, they are configured to work on terminal, tmux and Neovim, there are **iTerm2** color schemes on the **colors** folder that you can import.

In order to fully display UI symbols, you need a 'Powerline patched font', you can download them
from [https://github.com/powerline/fonts](https://github.com/powerline/fonts), I recomend using
**Source Code Pro Medium**

You can install **Elixir** via **Homebrew** or any other method: `brew install elixir`.

You can install almost any version of **Ruby** via **rbenv**: `rbenv install **Version**`.

### Other

I want to thank [Mark Hartington](https://github.com/mhartington) for his contributions that
helped as the base to this configuration.

If you have any questions or just want to chat you can find me on Twitter:
[@pggalaviz](http://twitter.com/pggalaviz)

