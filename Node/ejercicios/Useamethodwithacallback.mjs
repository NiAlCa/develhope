
import { writeFile } from 'node:fs';
import { Buffer} from 'node:buffer'

/*Use a method with a callback

Create a script that uses the Node.js core fs.writeFile() (callback API) method to write 
a text file. The documentation for this method is on the Node.js File system page:

 https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback*/


 const data = new Uint8Array(Buffer.from('Hello'));

 writeFile('message.txt', data, (error) => {
    if (error) throw error;
    console.log('The file has been saved!')

 });