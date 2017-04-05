 #- StartNgApp - Blank AngularJS Project
 ### Quick start for building your AngularJS app (5 fast steps)

##About
**StartNgApp** is all you need to begin a process of creating an *AngularJS App*.
The project folder has been created to sepeed up all configuration needed for working on the project.

##Description

**The project uses the following dependencies:**
- *Angular UI Router*
- *Angular Resource*
- *Bootstrap*
- *jQuery*

All of them will be installed using bower, I'll explain this below.

#####Let's take a look how the folder structure looks like:
**++StartNGApp++** // Name it as you want (this is your project name)
- **app**
 - ######assets // Contains your css, img and script files
   - **css**
     - *style.scss*
   - **img**
    - **js**
     -  *++api.endpoints.js++* // Variables with links to your api endpoints which will be used by $resource (i have created this just to have dynamic links, which means that if you want to change some endpoint, you'll just change a link in the mentioned file, not in the .services.js files)
     -  *++app.routes.js++* // Routes, handled by ui-router
 - ######components // Your App's components -> add new folders needed for your app
   - **home**
     -  *++home.controller.js++*
     -  *++home.service.js++*
     -  *++home.view.html++*
   - ==everything inside **components folder** with the .controller.js and
     .service.js extensions will be handled by grunt and exported into app/dist/js/scripts.min.js==
 - ######dist  // Automatically compiled and minified by Grunt - don't change anything here
   - **css**
     - *++style.min.css++*
     - *++style.min.css.map++*
   - **js**
     - *++scripts.annotated.js++* //Angular scripts, prepared by grunt's ngAnnotate, for minifying
     - *++scripts.js++*
     - *++scripts.min.js++*
 - ######shared // Shared components inside your app, like custom directives
 	- **custom-directives**
- *app.js*
- *bower.json*
- *Gruntfile.js*
- *index.html*
- *package.json*

- - -

The project is handled by [**Grunt**](https://gruntjs.com/), so everything from components, assets, and custom directives' folders will be compressed and compiled into the **dist** folder.

**Grunt will do the following tasks:**
 - [concat](https://github.com/gruntjs/grunt-contrib-concat) // merge files into one
 - [sass](https://github.com/gruntjs/grunt-contrib-sass)   // compile scss to css and .css.min (need ruby and sass gem, I will explain below)
 - [ngAnnotate](https://github.com/mgol/grunt-ng-annotate) // prepares angular files for minifcation
 - [uglify](https://github.com/gruntjs/grunt-contrib-uglify) // minifying js files
 - [watch](https://github.com/gruntjs/grunt-contrib-watch) // watching css, js files for changes and executing tasks on change

##How to

0. ####Download:
 Download the StartNgApp folder as is and save it somewhere on your disk :)

1. ####Install Node Package Manager (if you don't have it already installed):
   [Tutorial and links to npm](https://docs.npmjs.com/getting-started/installing-node)

2. ####Install Ruby and SASS (needed by Grunt's SASS compiler):
   [Tutorial and links to download ruby](https://www.ruby-lang.org/en/downloads/)
   During the installation, point the install to the project folder, to be able to install and use SASS compiler.
   1. Open Command Prompt on Windows /Terminal on OSX and navigate to StartNgApp folder
   2. Run the following command: ```ruby -v``` (to be sure that ruby is installed and running)
   3. Then run: ````gem install sass````

3. ### Install Bower
   If you are not familiar with Bower take a look [here](https://bower.io/).
   We are still working in CMD/Terminal :)
   1. Run: ```npm install -g bower``` - This will install Bower globally
   2. Navigate to the StartNgApp folder then run: ```bower install``` - the command will install all dependencies mentioned in bower.json

4. #### Install Grunt
In the CMD/Terminal when you're still in the StartNgApp folder run:
   ```npm install -g grunt-cli``` - This will install Grunt globally
   After that, run ```npm install``` - The following command will install all plugins/dependencies from the package.json file.
   (You have to navigate to StartNgApp folder before runinng the command, so it will know which dependencies to grab)
   Run: ```grunt``` command to run grunt tasks, and to start watching files for changes.
   [Tutorial here](https://gruntjs.com/getting-started)

++**In your browser:**++ navigate to localhost/StartNgApp and you will get your new start page.

Thanks for downloading and using the project structure!
**Happy coding!**



