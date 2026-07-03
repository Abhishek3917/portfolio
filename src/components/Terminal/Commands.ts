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
        "Hi! I'm Abhishek S Kumar, a Full Stack Developer and Linux enthusiast.",

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