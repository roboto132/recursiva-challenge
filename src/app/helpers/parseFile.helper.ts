import { ClubMember } from '../types';

export class FileParser {
  static parseContent(fileContent: string): string[] {
    return fileContent.split("\n");
  }
  static contentFileToObject = (file: string[]) => {
    const totalClubMembers: ClubMember[] = [];
  
    for (const line of file) {    
      if (line.trim() === '') {
        continue;
      }
      const [name, edad, team, maritalStatus, educationalLevel] = line.split(";");

      const addressObject: ClubMember = {
        name,
        edad,
        team,
        maritalStatus,
        educationalLevel
      };
      totalClubMembers.push(addressObject);
    }
  
    return totalClubMembers;
  };
}
