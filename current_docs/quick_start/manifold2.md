---
id: manifold2

---

# manifold 2-G

## 安装系统镜像

### 进入恢复模式

1. 连接开关控制扩展单元至 Manifold 2-G。

2. 连接 Manifold 2-G 的 USB 3.0 接口(Micro-B)至主机，并且连接电源。

3. 按住开关控制扩展单元的 RCV 按键,再按住 RST 按键,2 秒后同时松开两个按键。

4. 在主机的终端界面中输入 $ lsusb,若显示有 NVIDIA 设备,则成功进入恢复模式。若未显示 NVIDIA 设备,则检查连线及进入方式是否正确,然后重试。

### 系统还原

#### 使用 DJI 官方镜像

1. 进入恢复模式。

2. 在主机的终端界面,进入镜像文件所在目录,然后输入以下命令,以解压官方镜像压缩包。

```
sudo tar -zxvf manifold2G_image_V0.4.4.0.tar.gz
```

3、进入解压文件夹下的 Linux_for_Tegra 目录,然后输入以下命令进行还原。

```
sudo ./flash.sh jetson-tx2 mmcblk0p1
```

## 代码部署

### 配置工作空间文件层级

1. 在妙算创建一个工作空间，命名 rm_ws 。
2. 在 src 目录下创建名为 rm_software 的文件夹。

###  配置 CLion

配置好 CLion 之后将软件包 upload 到妙算对应的目录下。

### 配置妙算的环境
#### 升级 gcc 和 g++
1. 下载9.3.0以上的源码包并解压缩
```asm
wget http://ftp.gnu.org/gnu/gcc/gcc-11.2.0/gcc-11.2.0.tar.gz
tar -zxvf gcc-11.2.0.tar.gz
```
2. 下载依赖及配置文件
```asm
cd gcc-11.2.0
./contrib/download_prerequisites
```
3. 配置
```asm
mkdir build
cd build/
../configure -enable-checking=release -enable-languages=c,c++ -disable-multilib
```
### 编译工作空间
在工作空间根目录下执行
```asm
catkin build
```
### 安装依赖
在工作空间根目录下执行安装需要的依赖：
```asm
rosdep install --from-paths . --ignore-src
```
### 设置开机自启动脚本
1. 进入/etc/systemd/system目录下:
```asm
cd /etc/systemd/system
```
2. 创建服务
```asm
touch rm_auto_start.service
```
3. 编写服务，在开机的时候执行creat_auto_set_can.sh和creat_rm_start.sh脚本
```asm
sudo vim rm_auto_start.service
```

