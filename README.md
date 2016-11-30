#Volkov A.A.

Stack:
 - Gulp 4.0
 
Getting started:

1. clone this repo
2. cd path/to/
3. npm install gulpjs/gulp-cli -g  // Install the latest Gulp CLI tools globally
4. npm install
6. run "gulp" command to start

>Первый таск - генерация спрайтов из графических файлов (png, gif).

1. Установил модуль gulp.spritesmith
2. Подключил в gulpfile.js
3. Добавил модуль sprite.png.js
4. В нем создал таск sprite:png
5. Подключил модуль в task.js
6. Добавил таск в gulpfile.j

>Второй таск - копирование файлов из папки с исходниками в папку для продакшена (картинки,шрифты)

1. Добавил модуль copy.fonts.js
2. В нем создал таск copy:fonts
3. Подключил модуль в task.js
4. Добавил таск в gulpfile.js


>Задачи из google dock
>> Удалил из сборки bower


>>>Не добавил задачу для eslint -> scsslint 