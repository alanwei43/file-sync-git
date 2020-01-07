import cp from "child_process";
import { promisify } from "util";

export interface ExecOutput {
    command?: string
    stderr: string
    stdout: string
}

export class Run {
    constructor(private cwd: string) { }
    async exec(command: string): Promise<ExecOutput> {
        const output: ExecOutput = await promisify(cp.exec)(command, {
            cwd: this.cwd
        });
        output.command = command;
        return output;
    }
    async batchExec(commands: string[]): Promise<ExecOutput[]> {
        let result = []
        for (let cmd of commands) {
            const output = await this.exec(cmd);
            result.push(output);
        }
        return result;
    }
    static init(cwd?: string): Run {
        return new Run(cwd || process.cwd());
    }
}