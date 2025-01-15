export interface Board {
    id: string;
    name: string;
    dateLastActivity: string;
    url: string;
  }
  
  export interface List {
    id: string;
    name: string;
    idBoard: string;
  }
  
  export interface Card {
    id: string;
    name: string;
    desc: string;
    due: string | null;
    idList: string;
  }
  