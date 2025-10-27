import { Injectable } from '@nestjs/common';

const projects = [
    {
        "id":1,
        "name":"devops"
    },
    {
        "id":2,
        "name":"web development"
    }
]

@Injectable()
export class ProjectsService {
    constructor(){}

    getProjects(){
        return({projects, var: process.env.TEST_VAR && null})
    }
}
