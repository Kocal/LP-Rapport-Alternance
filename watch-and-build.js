#!/usr/bin/env node

const chokidar = require('chokidar');
const exec = require('child_process').exec;

chokidar.watch('*.odt')
  .on('change', (path) => {
    exec('libreoffice -env:UserInstallation=file:///home/kocal/.config/libreoffice-alt --headless --convert-to pdf *.odt', (err, stdout, stderr) => {
      if(err) {
        throw err;
      }
  
      console.info(new Date(), "Successfuly converted to pdf!")
    });  
});
