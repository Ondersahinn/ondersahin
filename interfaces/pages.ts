export interface IPages {
    home: Home
    since: Date
    about: About
}

export interface Home {
    title: string
    metakey: string
    metadescription: string
    content: string
    since: Date
}

export interface About {
    experiences: Experience[]
    education: Education[]
    skils: string[]
    hobbies: string[]
}

export interface Experience {
    id: number
    title: string
    description: string
    project: Project[]
    skils: string
}

export interface Project {
    id: number
    name: string
    link: string
}

export interface Education {
    id: string
    title: string
    description: string
}
