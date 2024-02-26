import * as core from '@actions/core'
import {run} from './handle'

async functon run(): Promise<void> {
    try {
        core.info('hello world')
    } catch (error) {
     core.setFailed(error.message)
    }
}

run();
