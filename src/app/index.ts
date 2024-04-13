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

    console.log('numberOfRegisteredIndividuals', numberOfRegisteredIndividuals);
    console.log('racingAverageAge', racingAverageAge);
    console.log('professionalMarriedMemberList', professionalMarriedMemberList);
    console.log('fiveMostCommonRiverMemberNames', fiveMostCommonRiverMemberNames);
    console.log('sortedTeamsDictionary', sortedTeamsDictionary);
    
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Ejecutar el proceso
process();