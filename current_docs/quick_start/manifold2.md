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

#### 配置工作空间文件层级

1. 在妙算创建一个工作空间，命名 rm_ws 。
2. 在 src 目录下创建名为 rm_software 的文件夹。

####  配置 CLion

配置好 CLion 之后将软件包 upload 到妙算对应的目录下。

#### 编译工作空间
```
catkin build
```
#### 安装依赖
在工作空间目录下执行：
```
rosdep install --from-paths . --ignore-src
```
#### 设置开机自启动脚本
1. 进入/etc/systemd/system目录下:
```
cd /etc/systemd/system
```
2. 创建并编写服务
```
touch rm_auto_start.service
```

#### 遇到的问题以及解决

1. 升级 gcc 和 g++
2. 修改代码部分
