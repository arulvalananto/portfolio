export type SkillInfo = {
    src: string
    alt: string
    className: string
    imageClassName?: string
    yearofexperience: string
}

export type Skill = {
    [key:string]: SkillInfo[]
    primary: SkillInfo[]
    secondary: SkillInfo[]
}