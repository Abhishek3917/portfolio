
export default function parseCommand(input:string){
    const tokens = input.trim().split(/\s+/);

    return {
        command: tokens[0].toLowerCase(),
        args: tokens.slice(1),
    }
}