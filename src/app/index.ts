import { FilesService } from './services/files.service';
import { FileParser } from './helpers/parseFile.helper';
import { DictionaryManager } from './helpers/dataProcessor.helper';
import { FILE_NAME } from './constants';

async function process() {
  try {
    // Lee el contenido de un archivo
    const fileContent = await FilesService.readFile(FILE_NAME);
    const parsedFileContent = FileParser.parseContent(fileContent);
    const members = FileParser.contentFileToObject(parsedFileContent);

    const [
      numberOfRegisteredIndividuals,
      racingAverageAge,
      professionalMarriedMemberList,
      fiveMostCommonRiverMemberNames,
      sortedTeamsDictionary,
    ] = DictionaryManager.generateDictionary(members);

    console.log('1. Cantidad total de personas registradas:', numberOfRegisteredIndividuals);
    console.log('2. Promedio de edad de los socios de Racing:', racingAverageAge);
    console.log('3. Listado de las 100 primeras personas casadas con estudios universitarios, ordenadas por edad:');
    console.table(professionalMarriedMemberList);
    console.log('4. Listado de los 5 nombres más comunes entre los hinchas de River:', fiveMostCommonRiverMemberNames);
    console.log('5. Listado de equipos ordenados por cantidad de socios, con promedio de edad, edad mínima y edad máxima:');
    console.table(sortedTeamsDictionary);
    
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Ejecutar el proceso
process();