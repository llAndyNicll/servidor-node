export * from 'colors';


export const listenServerLogger = ( port: string ) => {
  console.clear();
  console.log( `${ '[SERVER.LISTEN]'.bgGreen } Server listening on port: ${ port.green }` );
}

export const consoleErrorsHandler = ( error: any, fileName: string ) => {
  const words = fileName.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
  const type = words.pop()!.toUpperCase();
  const convention = words.map((word) => word.toUpperCase()).join('-');

  console.log( `${ `[${type}.${convention}]`.bgRed } ${ error }` );
}
