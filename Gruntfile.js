module.exports = function (grunt) {

    //��initConfig�����г�ʼ�� configuration ����
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
                //����һ�����ڲ���ϲ�����ļ�֮����ַ�
                separator: ';'
            },
            dist: {
                // ��Ҫ���ϲ����ļ�
                src: ['src/**/*.js'],
                //�ϲ����ŵ�λ��
                dest: 'concat/<%= pkg.name %>.js'
            }
        },
        qunit: {
            //�ṩ���ڲ������е��ļ���λ��
            files: ['test/*.html']
        },


        clean: {
            src: ['concat','uglify']
        }
    });

    //��������Ҫ�Ĳ����Ӧ���Ѿ���npmȫ����װ����
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // ֻ����������������"grunt"���ͻ�ִ��default task
    grunt.registerTask('default', ['uglify', 'concat']);
};








