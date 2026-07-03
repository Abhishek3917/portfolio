
export default function parseCommand(input:string){
    const args = input.trim().split(/\S+/);

    return {
        command: args[0].toLowerCase(),
        args: args.slice(1),
    }
}