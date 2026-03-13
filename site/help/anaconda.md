---
sidebarShare: true
prev: false
next: false
---

# [Anaconda](/anaconda) Mirror

## Introduction

> [Anaconda](https://en.wikipedia.org/wiki/Anaconda_(Python_distribution)) is a free and open-source distribution of the Python and R programming languages for scientific computing (data science, machine learning applications, large-scale data processing, predictive analytics, etc.), that aims to simplify package management and deployment.

## Configuration

You can run the following commands in your terminal:

``` sh
conda config --add channels https://mirrors.sustech.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.sustech.edu.cn/anaconda/pkgs/main/
conda config --set show_channel_urls yes
```

Then a configuration file named `.condarc` will be created. And you can manually create the configuration file and edit it with your text editor:

``` toml
channels:
  - conda-forge
  - bioconda
  - pytorch
  - nvidia
  - nodefaults
show_channel_urls: true
default_channels:
  - https://mirrors.sustech.edu.cn/anaconda/pkgs/main
  - https://mirrors.sustech.edu.cn/anaconda/pkgs/free
  - https://mirrors.sustech.edu.cn/anaconda/pkgs/r
  - https://mirrors.sustech.edu.cn/anaconda/pkgs/pro
  - https://mirrors.sustech.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.sustech.edu.cn/anaconda/cloud
  msys2: https://mirrors.sustech.edu.cn/anaconda/cloud
  bioconda: https://mirrors.sustech.edu.cn/anaconda/cloud
  menpo: https://mirrors.sustech.edu.cn/anaconda/cloud
  pytorch: https://mirrors.sustech.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.sustech.edu.cn/anaconda/cloud
  nvidia: https://mirrors.sustech.edu.cn/anaconda-extra/cloud
```

Path of the per-user configuration file:
- Linux: `$HOME/.condarc`
- macOS: `$HOME/.condarc`
- Windows: `C:\Users\<YourUserName>\.condarc`

## Using Anaconda at SUSTech HPC Cluster

Please refer to this [link](https://hpc.sustech.edu.cn/ref/anaconda-install-by-user.html).
