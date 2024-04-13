import { DictionaryManager } from '../app/helpers/dataProcessor.helper';
import { riverMembersTeam, teamsDictionary } from './mocks';

describe('DictionaryManager', () => {

  // beforeEach(() => {
  //   // Inicializar una nueva instancia de DictionaryManager antes de cada test
  //   dictionaryManager = new DictionaryManager();
  // });

  // Caso de test para una funcionalidad específica
  it('should return the array of the five most common name', () => {
    // Act
    const result = DictionaryManager.getMostCommonFiveNames(riverMembersTeam);

    // Assert
    expect(result).toEqual([ 'Mat�as', 'Mauro', 'Mart�n', 'Federico', 'Mariano' ]);
  });

  // Caso de test para una funcionalidad específica
  it('should return ', () => {
    const newellsExpectedStatistics = {
      club: 'Newells',
      membersAmount: 52,
      ageAverage: 44.23076923076923,
      youngest: 19,
      oldest: 70
    };

    const riverExpectedStatistics = {
      club: 'River',
      membersAmount: 31,
      ageAverage: 44.903225806451616,
      youngest: 19,
      oldest: 69
    };

    const racingExpectedStatistics = {
      club: 'Racing',
      membersAmount: 16,
      ageAverage: 36.125,
      youngest: 19,
      oldest: 64
    };
    
    // Act
    const result = DictionaryManager.sortByMemberTeamsAmount(teamsDictionary);

    // Assert
    expect(result[0]).toEqual(newellsExpectedStatistics);
    expect(result[1]).toEqual(riverExpectedStatistics);
    expect(result[3]).toEqual(racingExpectedStatistics);
  });
  // // Otro caso de test para otra funcionalidad
  // it('should remove an entry from the dictionary', () => {
  //   // Arrange
  //   dictionaryManager.addEntry('key', 'value');

  //   // Act
  //   dictionaryManager.removeEntry('key');

  //   // Assert
  //   expect(dictionaryManager.getEntry('key')).toBeUndefined();
  // });

  // // Caso de test para un escenario específico
  // it('should return undefined if entry does not exist', () => {
  //   // Act
  //   const result = dictionaryManager.getEntry('nonexistentKey');

  //   // Assert
  //   expect(result).toBeUndefined();
  // });
});
