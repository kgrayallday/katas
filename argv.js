// process.argv is used for captuing command line input
// we use slice to remove the first two elemts returned node and your script path

const myArgv = process.argv.slice(2);
console.log('myArgv:', myArgv);

