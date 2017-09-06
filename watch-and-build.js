#!/usr/bin/env node

const os = require('os');
const path = require('path');
const exec = require('child_process').exec;
const chokidar = require('chokidar');

const libreofficePath = `file://${path.join(os.tmpdir(), '.libreoffice')}/`;
const outputPath = path.join(__dirname, 'dist');


chokidar.watch('src/*.odt')
  .on('change', (path) => {
    exec(`libreoffice -env:UserInstallation="${libreofficePath}" --headless --convert-to pdf --outdir "${outputPath}" src/*.odt`, (err, stdout, stderr) => {
      if(err) {
        throw err;
      }
  
      console.info(new Date(), "Successfuly converted to pdf!")
    });  
});
