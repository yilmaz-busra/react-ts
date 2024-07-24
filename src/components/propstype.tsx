export type instructorListType = {
  instructorNameLastNameList: {
    firstName: string;
    lastName: string;
  }[];
};

export type HomeProps = {
  name: string;
  courseNumber: number;
  isNow: boolean;
};
