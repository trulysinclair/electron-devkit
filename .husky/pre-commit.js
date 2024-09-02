import { execSync } from 'node:child_process'

// const pathsToCheck = [
//   'app',
//   'commands',
//   'config',
//   'database',
//   'inertia',
//   'resources',
//   'start',
//   'tests',
//   'types',
//   'util',
// ]
//
// const hasChangesInPaths = (changedFiles, paths) =>
//   paths.some((path) => changedFiles.some((file) => file.startsWith(path)))
//
// const unstagedFiles = execSync('git diff --name-only').toString().split('\n').filter(Boolean)
// const stagedFiles = execSync('git diff --cached --name-only').toString().split('\n').filter(Boolean)
// const allChangedFiles = [...new Set([...unstagedFiles, ...stagedFiles])]
// const shouldRunTests = hasChangesInPaths(allChangedFiles, pathsToCheck)
//
// if (shouldRunTests) {
//   console.log('Testing changed files')
//   execSync('yarn test', { stdio: 'inherit' })
// } else {
//   console.log('No files to test')
// }

execSync('yarn test', { stdio: 'inherit' })