// /generators/app/index.js

// 创建 yeoman generator 的核心功能模块.
const Generator = require('yeoman-generator');

// 文件读写模块.
const fs = require('fs');
// 路径模块
const path = require('path');

// PS: fs 和 path 是 NodeJS 的核心模块，无需安装.

/**
 * Base generator.
 */
module.exports = class extends Generator {

  /** 构造函数 */
  constructor(args, opts) {
    // 继承必须.
    super(args, opts);

    // 获取 AppName，使用路径尾.
    this.appName = path.basename(process.cwd());
    // 设置 Author.
    this.appAuthor = "Eded.Wang";
  }

  /**
   * 初始化方法.
   */
  initializing() {
    this.log("开始构建项目...");
  }

  /**
   * 写入配置
   */
  configuring() {

    // 获取 package 配置模板.
    let defaultSettings = this.fs.readJSON( this.templatePath('package.json') );
    // 做新 package 配置文件.
    let packageSettings = {
      name: this.appName,
      private: true,
      version: '0.0.1',
      description: `${this.appName} - Generated by generator-vue-pro`,
      main: 'index.js',
      scripts: defaultSettings.scripts,
      repository: defaultSettings.repository,
      keywords: [],
      author: this.appAuthor,
      devDependencies: defaultSettings.devDependencies,
      dependencies: defaultSettings.dependencies,
      browserslist: defaultSettings.browserslist,
      engines: defaultSettings.engines,
    };

    // 写入 package.json.
    this.fs.writeJSON(this.destinationPath('package.json'), packageSettings);
  }

  /**
   * 写入文件
   */
  writing() {

    // 创建 dist 空目录.
    fs.mkdirSync('dist');

    /* 拷贝所需的文件. */

    this.fs.copy(
      this.templatePath("build"),
      this.destinationPath("build")
    );
    this.fs.copy(
      this.templatePath("config"),
      this.destinationPath("config")
    );
    this.fs.copy(
      this.templatePath("dist"),
      this.destinationPath("dist")
    );
    this.fs.copy(
      this.templatePath("src"),
      this.destinationPath("src")
    );
    this.fs.copy(
      this.templatePath("static"),
      this.destinationPath("static")
    );

    this.fs.copy(
      this.templatePath("temp_babelrc"),
      this.destinationPath(".babelrc")
    );

    this.fs.copy(
      this.templatePath("temp_editorconfig"),
      this.destinationPath(".editorconfig")
    );

    this.fs.copy(
      this.templatePath("temp_eslintignore"),
      this.destinationPath(".eslintignore")
    );

    this.fs.copy(
      this.templatePath("temp_eslintrc.js"),
      this.destinationPath(".eslintrc.js")
    );

    this.fs.copy(
      this.templatePath("static"),
      this.destinationPath("static")
    );

    this.fs.copy(
      this.templatePath("temp_gitignore"),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath("temp_postcssrc.js"),
      this.destinationPath(".postcssrc.js")
    );

    this.fs.copy(
      this.templatePath("npm-shrinkwrap.json"),
      this.destinationPath("npm-shrinkwrap.json")
    );

    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );

    this.fs.copy(
      this.templatePath("README.md"),
      this.destinationPath("README.md")
    );

    this.fs.copy(
      this.templatePath("yarn.lock"),
      this.destinationPath("yarn.lock")
    );

    this.fs.copy(
      this.templatePath("前端规范文档.docx"),
      this.destinationPath("前端规范文档.docx")
    );

    this.fs.copy(
      this.templatePath("平台开发.txt"),
      this.destinationPath("平台开发.txt")
    );

    // 拷贝入口页.
    // copyTpl 允许使用 EJS 模板引擎替换内容
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      { title: 'Templating with Yeoman' }
    );

  }

  /**
   * 安装方法
   */
  install() {
    // 安装 package 安装.
    this.installDependencies({ bower: false });
  }

};
