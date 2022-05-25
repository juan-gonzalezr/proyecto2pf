import React from 'react';

function lectura() {
    const serialPort =require('serialPort');

    const port =new serialPort('COM3',{baudRate:9600});

    const parser=new serialPort.parser.Readline();
    port.pipe(parser);
    parser.on('data',(line)=>{
    console.log(line);
    port.write()
});

}

export default lectura;