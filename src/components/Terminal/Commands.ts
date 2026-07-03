import { profile } from "../../Data/projectdata";
export const commands = {
    help: () => `
                    Available commands:
                    
                    help
                    about
                    projects
                    skills
                    ls
                    cat
                    clear
                    `,
    about: () =>
        profile.about,

    projects: () =>
        "Arch Install\nZIPDF\nZXStream",

    skills: () =>
        "React, TypeScript, Flask, Linux, Docker",

    ls: () =>
        "about  projects  skills",

    clear: () => "",

    cat: (args: string[]) =>
        `Unknown file ${args.join(" ")}`,
};
