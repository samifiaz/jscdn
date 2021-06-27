const core = require('@actions/core');
const github = require('@actions/github');

async function run () {
    console.log('Hello cdn!');
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const npm_build_command = core.getInput('npm_build_command');
    const github_repo_url = core.getInput('github_repo_url');


    console.log(npm_build_command);
    console.log(github_repo_url);
}

run();