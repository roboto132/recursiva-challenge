import {
  ClubMember,
  Team,
  MaritalStatus,
  MemberList,
  TeamsDictionary,
  EducationStatus,
} from "../types";

import {
  RACING,
  RIVER,
  PROFESSIONAL,
  MARRIED
} from '../constants'

export class DictionaryManager {
  static generateDictionary(people: ClubMember[]): any {
    const teamsDictionary: TeamsDictionary = {};
    const professionalMarriedMemberList: MemberList = [];
    const racingMemberList: MemberList = [];
    const riverMemberList: MemberList = [];

    people.forEach((person) => {
      const team = this.getTeamFromPerson(person);
      const maritalStatus = this.getMaritalStatusFromPerson(person);
      const educationalLevel = this.getEducationlLevelFromPerson(person);
      //Create the racing member list
      if(team === RACING) {
        racingMemberList.push(person);
      }

      //Create the married and professional list
      if(maritalStatus === MARRIED && educationalLevel === PROFESSIONAL) {
        if(professionalMarriedMemberList.length <= 100) {
          professionalMarriedMemberList.push(person);
        }
      }

      //Create the river member list
      if(team === RIVER) {
        riverMemberList.push(person);
      }

      //Create the dictionary for teams
      if (!teamsDictionary[team]) {
        teamsDictionary[team] = [];
      }
      teamsDictionary[team].push(person);

    });

    const racingAverageAge = this.getAgeAverage(racingMemberList);
    const fiveMostCommonRiverMemberNames = this.getMostCommonFiveNames(riverMemberList);
    const professionalMarriedMemberListOrderByAge = this.sortByMembersByAge(professionalMarriedMemberList);
    const sortedTeamsDictionary = this.sortByMemberTeamsAmount(teamsDictionary);

    return [
      people.length,
      racingAverageAge,
      professionalMarriedMemberListOrderByAge,
      fiveMostCommonRiverMemberNames,
      sortedTeamsDictionary,
    ];
  }

  static getTeamFromPerson(person: ClubMember): Team {
    return person.team.trim();
  }
  static getMaritalStatusFromPerson(person: ClubMember): MaritalStatus {
    return person.maritalStatus.trim();
  }
  static getEducationlLevelFromPerson(person: ClubMember): EducationStatus {
    return person.educationalLevel.trim();
  }
  static getAgeAverage(members: MemberList): number {
    const ages = members.map(member => parseInt(member.edad));

    const membersAmount = members.length;
    const ageAverage = ages.reduce((acc, edad) => acc + edad, 0) / membersAmount;
    return ageAverage;
  }
  static getMostCommonFiveNames(teamMembers: MemberList): string[] {
    const counts = teamMembers.reduce<{ [name: string]: number }>((acc, obj) => {
      acc[obj.name] = (acc[obj.name] || 0) + 1;
      return acc;
    }, {});
    
    const sortedNames: string[] = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    
    const topNames: string[] = sortedNames.slice(0, 5);

    return topNames;
  }
  static sortByMembersByAge(teamMembers: MemberList): any {
    teamMembers.sort((a, b) => parseInt(a.edad) - parseInt(b.edad));

    // Filtrar para quedarse solo con el nombre, edad y equipo
    const memberListSortedByAge = teamMembers.map(({ name, edad, team }) => ({ name, edad, team }));

    return memberListSortedByAge;
  }
  static sortByMemberTeamsAmount(objectByTeams: TeamsDictionary): any {
    // Calcular la cantidad de socios para cada club
    const membersAmount: { [club: string]: number } = {};
    for (const club in objectByTeams) {
      membersAmount[club] = objectByTeams[club].length;
    }
    // Ordenar los clubes según la cantidad de socios en orden descendente
    const sortedTeams = Object.keys(membersAmount).sort((a, b) => membersAmount[b] - membersAmount[a]);
    // Lista final con la información requerida
    const finalList = sortedTeams.map(club => {
      const members = objectByTeams[club];
      const ages = members.map(member => parseInt(member.edad));
      const ageAverage = this.getAgeAverage(members);

      const membersAmount = members.length;
      const youngest = Math.min(...ages);
      const oldest = Math.max(...ages);

      return {
        club,
        membersAmount: membersAmount,
        ageAverage: ageAverage,
        youngest,
        oldest: oldest
      };
    });

    return finalList;
  }
}
