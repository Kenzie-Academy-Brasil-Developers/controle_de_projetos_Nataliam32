import format from "pg-format";
import { ProjectCreate, ProjectResult, ProjectUpdate, Projects } from "../interfaces";
import { client } from "../database";

const create = async (payload: ProjectCreate): Promise<Projects> => {
    const queryFormat: string = format(
        'INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );
    const query: ProjectResult = await client.query(queryFormat);
    return query.rows[0];
};

const retrieve = async (projectId: string): Promise<Projects> => {
    const queryTemplate: string = `
        SELECT 
            "p"."id" AS "projectId",
            "p"."name" AS "projectName",
            "p"."description" AS "projectDescription",
            "p"."repository" AS "projectRepository", 
            "p"."startDate" AS "projectStartDate",
            "p"."endDate" AS "projectEndDate",
            "d"."name" AS "projectDeveloperName"
        FROM
            "projects" as "p"
        LEFT JOIN "developers" as "d"
            on "d"."id" = "p"."developerId"
        WHERE "p"."id" = $1
    `

    const query: ProjectResult = await client.query(queryTemplate, [projectId]);
    return query.rows[0];
};

const update = async (payload: ProjectUpdate, projectId: string): Promise<Projects> => {
    const queryFormat: string = format(
        `UPDATE projects SET (%I) = ROW (%L) WHERE "id" = $1 RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)
    )
    const query: ProjectResult = await client.query(queryFormat, [projectId]);
    return query.rows[0];
};

export default { create, retrieve, update };