export interface ClubMember {
  name: string;
  edad: string;
  team: string;
  maritalStatus: string;
  educationalLevel: string;
}

export interface shortClubMember {
  name: string;
  edad: string;
  team: string;
}

export type Team = string;

export type MaritalStatus = string;

export type EducationStatus = string;

export type TeamsDictionary = {
  [team: string]: ClubMember[];
};
export type MemberList = ClubMember[];
