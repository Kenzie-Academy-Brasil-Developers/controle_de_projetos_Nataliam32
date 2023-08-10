import format from "pg-format";
import { Developer, DeveloperCreate, DeveloperResult } from "../interfaces";
import { client } from "../database";

const create = async (payload: DeveloperCreate): Promise<Developer> => {
    const queryFormat: string = format(
        'INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    )
    
    const query: DeveloperResult = await client.query(queryFormat);
    return query.rows[0];
};

export default { create }