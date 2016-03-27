module.exports = function (grunt) {

    //在initConfig函数中初始化 configuration 对象
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'src/js/<%= pkg.name %>.js',
                dest: 'uglify/<%= pkg.name %>.min.js'
            }
        },
        concat: {
            options: {
                //定义一个用于插入合并输出文件之间的字符
                separator: ';'
            },
            dist: {
                // 将要被合并的文件
                src: ['src/**/*.js'],
                //合并后存放的位置
                dest: 'concat/<%= pkg.name %>.js'
            }
        },
        qunit: {
            //提供用于测试运行的文件的位置
            files: ['test/*.html']
        },


        clean: {
            src: ['concat','uglify']
        }
    });

    //加载所需要的插件，应该已经被npm全部安装好了
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // 只需在命令行上输入"grunt"，就会执行default task
    grunt.registerTask('default', ['uglify', 'concat']);
};








