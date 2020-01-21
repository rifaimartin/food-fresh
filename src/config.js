import dotenv from 'dotenv'
import {resolve, dirname, join} from 'path'
import {existsSync, mkdirSync} from 'fs'
export default function configure() {

    if (process.env.NODE_ENV === 'test') {
        dotenv.config({path: resolve('test.env')})
    } else {
        dotenv.config()
    }

    if (!process.env.APP_NAME) {
        console.error(`Environment file (.env) cannot be found in the root folder, copy .env.example file to .env.`);
        process.exit(1);
    }

    process.env.BASE_PATH = dirname(resolve('index.js'));

    const uploadPath = join(process.env.BASE_PATH, process.env.FILE_UPLOAD_PATH);
    if (!existsSync(uploadPath))
        mkdirSync(uploadPath, {recursive: true});
}
