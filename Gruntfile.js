module.exports = function(grunt) {
 
 grunt.initConfig({
  // Spajanje fajlova u jedan -> Concat
	concat: {
		options: {
		  separator: ';\n',
		},
		js: {
		  src: ['app/components/**/*.js', 'app/componensts/shared/**/*.js', 'app/assets/js/*js'],
		  dest: 'app/dist/js/scripts.js',
		},
	},  // /concat

	// ngAnnotate => Priprema angular fajlova za minifikaciju
	ngAnnotate: {
        options: {
            singleQuotes: false,
        },
        app: {
            files: [
                {
                    expand: true,
                    src: ['app/dist/js/scripts.js'],
                    ext: '.annotated.js', // Dest filepaths will have this extension.
                    extDot: 'last',       // Extensions in filenames begin after the last dot
                },
            ],
        }
    },

    // SASS => Konvertovanje SCSS u css.min
    sass: {                              // Task
	    dist: {                            // Target
	      options: {                       // Target options
	        style: 'compressed',
	      },
	      files: {                         // Dictionary of files
	        'app/dist/css/style.min.css':'app/assets/css/style.scss',       // 'destination': 'source'
	      },
	    }
	  },

	// Minifikacija/Uglify JS fajlova

	uglify: {
	  my_target: {
	   files: {
	    'app/dist/js/scripts.min.js': ['app/dist/js/scripts.annotated.js']
	   }
	  }
	}, // /uglify

    // Pracenje izmjena na fajlovima -> watch
	watch: {
		// JS fajlovi .controller.js, .services.js.. u scripts.js
		js: {
			files: ['app/**/*.js', 'assets/js/*.js'],
			tasks: ['concat', 'ngAnnotate', 'uglify']
		},
		// SASS SCSS fajlovi u .min.css
		css: {
			files: ['app/assets/css/*.scss'],
			tasks: ['sass']
		},
	},

});
 
 // Spajanje fajlova u jedan
 grunt.loadNpmTasks('grunt-contrib-concat');
 // Pracenje izmjena na trazenim fajlovima i izvrsavanje automatske komande
 grunt.loadNpmTasks('grunt-contrib-watch');
 // Minifikacija/Uglify JS fajlova
 grunt.loadNpmTasks('grunt-contrib-uglify');
 // Priprema angular skripte za minifikaciju
 grunt.loadNpmTasks('grunt-ng-annotate');
 // SASS konvertovanje u css
 grunt.loadNpmTasks('grunt-contrib-sass');

 // Registracija default taska i pozivanje svih taskova
 grunt.registerTask('default', ['concat','sass', 'ngAnnotate', 'uglify', 'watch']);
};