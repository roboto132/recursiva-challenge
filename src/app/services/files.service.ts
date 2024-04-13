import * as fs from 'fs';

export class FilesService {
  static readFile(fileName: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(`./src/csv/${fileName}.csv`, 'utf8', (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
      });
    });
  }

  static async writeFile(data: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const outputPath = "./results.json";
      fs.writeFile(outputPath, data, (err) => {
        if (err) {
          console.error('Error writing file:', err);
          reject(err); // Llamar a reject() si hay un error
        } else {
          console.log('File written successfully');
          resolve(); // Llamar a resolve() si se escribe el archivo exitosamente
        }
      });
    });
  }
}