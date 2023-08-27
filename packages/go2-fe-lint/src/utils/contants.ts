import path from "path"
import fs from 'fs-extra'

const pkg: Record<string, any> = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf-8')
)

export const PKG_NAME:string = pkg.name
export const PKG_VERSION: string = pkg.version