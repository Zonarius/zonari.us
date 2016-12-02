declare module "youtube-dl" {
    interface e extends NodeJS.ReadableStream {
        (url : string, ytdlArgs? : string[], execFileArgs?: string[]);
    }
    export = e;
}