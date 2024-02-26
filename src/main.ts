import * as core from '@actions/core'
import {run} from './handle'

async functon run(): Promise<void> {
    try {
        core.info('hello world')
        const username = core.getInput("user_name")
        core.info("hello ${user_name}")
        core.info('user_name === admin : ${user_name === "admin"}')
    } catch (error) {
     core.setFailed(error.message)
    }
}

run();
