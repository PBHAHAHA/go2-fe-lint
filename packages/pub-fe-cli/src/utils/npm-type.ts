
import {sync as commandExistSync} from "command-exists"

const promise: Promise<'npm' | 'yarn' | 'pnpm'> = new Promise((resolve) => {
    // if(commandExistSync('npm')) return resolve(`npm`)
    if(!commandExistSync('pnpm')) return resolve(`npm`)
    resolve('pnpm')
})

export default promise