# GPG as SSH Key 配置指南

## 概述
本文档记录了如何使用 GPG key 作为 SSH key 进行 Git 操作。

## 关键流程

### 1. 生成 GPG Key（如果还没有）
```bash
gpg --full-generate-key
```
选择：
- Key type: (9) ECC and ECC
- Curve: (1) Curve 25519
- 确保添加 `[A]` (Authentication) 用途的子密钥

### 2. 配置 SSH 使用 GPG Agent

#### 编辑 `~/.ssh/config`
```
# SSH Config - Use GPG Agent for key management
Host *
    IdentityAgent /c/Users/sakura/.gnupg/S.gpg-agent.ssh

Host github.com
    HostName ssh.github.com
    Port 443
    User git
    IdentityAgent /c/Users/sakura/.gnupg/S.gpg-agent.ssh
```

**注意**：使用端口 443 是因为某些网络环境会阻止 22 端口。

#### 添加 GitHub 主机密钥
```bash
ssh-keyscan -t ed25519 -p 443 ssh.github.com >> ~/.ssh/known_hosts
```

### 3. 启动 GPG Agent
```bash
gpg-agent --daemon --enable-ssh-support
```

### 4. 设置环境变量
```bash
export SSH_AUTH_SOCK=/c/Users/sakura/.gnupg/S.gpg-agent.ssh
```

### 5. 验证配置
```bash
# 查看已加载的 SSH keys
ssh-add -l

# 测试 GitHub 连接
ssh -T git@github.com
```

### 6. 使用 Git
```bash
git push origin master
```

## 环境变量持久化

### Git Bash
添加到 `~/.bash_profile`：
```bash
echo 'export SSH_AUTH_SOCK=/c/Users/sakura/.gnupg/S.gpg-agent.ssh' >> ~/.bash_profile
```

### PowerShell
```powershell
[Environment]::SetEnvironmentVariable("SSH_AUTH_SOCK", "C:\Users\sakura\.gnupg\S.gpg-agent.ssh", "User")
```

### CMD
```cmd
setx SSH_AUTH_SOCK "C:\Users\sakura\.gnupg\S.gpg-agent.ssh"
```

## 常见问题

### 问题：Connection closed by remote host
**解决方案**：使用端口 443 代替 22，某些防火墙会阻止 22 端口。

### 问题：Host key verification failed
**解决方案**：添加 ssh.github.com 到 known_hosts：
```bash
ssh-keyscan -t ed25519 -p 443 ssh.github.com >> ~/.ssh/known_hosts
```

### 问题：Permission denied (publickey)
**解决方案**：
1. 确保 GPG agent 正在运行
2. 确保环境变量已设置
3. 确保 GPG key 有 `[A]` (Authentication) 用途

## 导出 GPG SSH Public Key
```bash
gpg --export-ssh-key <KEY_ID>
```

将输出的公钥添加到 GitHub 账户的 SSH keys 中。
