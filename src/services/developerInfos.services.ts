import format from "pg-format";
import { client } from "../database";
import { DeveloperCreate, DeveloperInfos, DeveloperInfosResult } from "../interfaces";

const create = async (payload: DeveloperCreate): Promise<DeveloperInfos> => {
    const queryFormat: string = format(
        'INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: DeveloperInfosResult = await client.query(queryFormat);
    return query.rows[0]
};

export default { create };