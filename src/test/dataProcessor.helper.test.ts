import { DictionaryManager } from '../app/helpers/dataProcessor.helper';
import { riverMembersTeam, teamsDictionary } from './mocks';

describe('DictionaryManager', () => {
  // Caso de test para una funcionalidad específica
  it('should return the array of the five most common name', () => {
    // Act
    const result = DictionaryManager.getMostCommonFiveNames(riverMembersTeam);

    // Assert
    expect(result).toEqual([ 'Mat�as', 'Mauro', 'Mart�n', 'Federico', 'Mariano' ]);
  });

  // Caso de test para una funcionalidad específica
  it('should return the teams sorted by member teams amount', () => {
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
});
