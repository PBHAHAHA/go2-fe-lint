/**
 * @description 控制包管理只能使用pnpm 和 npm 
 * @author pub
 * @time 2023-08-29 
 */
import {sync as commandExistSync} from "command-exists"

const promise: Promise<'npm' | 'pnpm'> = new Promise((resolve) => {
    if(!commandExistSync('pnpm')) return resolve(`npm`)
    resolve('pnpm')
})

export default promise