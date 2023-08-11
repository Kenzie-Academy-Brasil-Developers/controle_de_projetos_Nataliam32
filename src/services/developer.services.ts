import format from "pg-format";
import { Developer, DeveloperCreate, DeveloperResult, DeveloperUpdate } from "../interfaces";
import { client } from "../database";

const create = async (payload: DeveloperCreate): Promise<Developer> => {
    const queryFormat: string = format(
        'INSERT INTO developers (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    )
    
    const query: DeveloperResult = await client.query(queryFormat);
    return query.rows[0];
};

const retrieve = async (developerId: string): Promise<Developer> => {
    const queryFormat: string = format (
        `
        SELECT
        dev.id AS "developerId",
        dev.name AS "developerName",
        dev.email as "developerEmail",
        i."developerSince" AS "developerInfoDeveloperSince", 
        i."preferredOS" as "developerInfoPreferredOS"
        FROM 
        developers AS "dev"
        LEFT JOIN
        "developerInfos" as i ON i."developerId" = dev.id
        WHERE
        dev.id = $1
        `
    );

    const querResult: DeveloperResult = await client.query(queryFormat, [developerId])
    return querResult.rows[0];
};

const update = async (payload: DeveloperUpdate, developerId: string): Promise<Developer> => {
    const queryFormat: string = format(
        'UPDATE "developers" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );
    const query: DeveloperResult = await client.query(queryFormat, [developerId])
    return query.rows[0];
};

const destroy = async (developerId: string): Promise<void> => {
    await client.query('DELETE FROM "developers" WHERE "id" = $1;', [developerId]);
};
export default { create, retrieve, update, destroy };