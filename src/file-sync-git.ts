import cp from "child_process";
import { promisify } from "util";
import { Run } from "./lib/Run";

async function updateGitConfig(dest: string, name: string, email: string) {
    Run.init(dest).batchExec([
        `git config --local user.name "${name}"`,
        `git config --local user.email "${email}"`
    ]);
}

(async () => {
    updateGitConfig("", "Alan Wei", "hello@gmail.com");
})();

