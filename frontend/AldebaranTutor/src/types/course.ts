
export interface Section {
    name: string;
    items: string[];
}

export interface Course {
    id: number;
    title: string;
    icon: any; 
    color: string;
    sections: Section[];
}

export interface SelectedContent {
    course: Course;
    section: Section;
}