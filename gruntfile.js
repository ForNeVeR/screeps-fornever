var grunt = require('grunt');

var credentials = require('./credentials.json');

grunt.loadNpmTasks('grunt-screeps');
grunt.loadNpmTasks('grunt-typescript');

grunt.initConfig({
    screeps: {
        options: {
            email: credentials.email,
            password: credentials.password,
            branch: 'default'
        },
        dist: {
            src: ['dist/*.js']
        }
    },
    typescript: {
        compile: {
          src: ['src/**/*.ts'],
          dest: 'dist',
          options: {
            module: 'commonjs',
            target: 'es5'
          }
        }
    }
});

grunt.registerTask('upload', ['typescript:compile', 'screeps']);
