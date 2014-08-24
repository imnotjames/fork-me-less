module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		clean: {
			dist: 'dist'
		},

		less: {
			dist: {
				options: {
					strictMath: true,
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapURL: 'fork-me.css.map',
					sourceMapFilename: 'dist/fork-me.css.map'
				},
				src: 'src/fork-me.less',
				dest: 'dist/fork-me.css'
			}
		},

		cssmin: {
			options: {
				compatibility: 'ie8',
				keepSpecialComments: '*',
				noAdvanced: true
			},
			dist: {
				src: 'dist/fork-me.css',
				dest: 'dist/fork-me.min.css'
			}
		},

		autoprefixer: {
			options: {
				browsers: [
					'Android >= 4',
					'Chrome >= 20',
					'Firefox >= 24', // Firefox 24 is the latest ESR
					'Explorer >= 8',
					'iOS >= 6',
					'Opera >= 12',
					'Safari >= 6'
				]
			},
			dist: {
				options: {
					map: true
				},

				src: 'dist/fork-me.css'
			}
		}
	});

	require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

	grunt.registerTask('dist', ['clean:dist', 'less:dist', 'autoprefixer:dist', 'cssmin:dist']);
};
