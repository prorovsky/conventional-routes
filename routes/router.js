import fs from 'fs';
import path from 'path';
import express from 'express';

class Router{
    constructor(){
        this.startFolder = null;
    }

    load(app, folderName){
        if(!this.startFolder) this.startFolder = path.basename(folderName);
        fs.readdirSync(folderName).forEach((file) => {
            
        })
    }
}