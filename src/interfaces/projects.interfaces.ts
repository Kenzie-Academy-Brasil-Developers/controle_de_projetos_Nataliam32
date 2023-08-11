import { QueryResult } from "pg";

interface Projects {
    id: number,
    name: string,
    description: string | null | undefined, 
    repository: string,
    startDate: Date,
    endDate: Date | null | undefined,
    developerId: number
};

type ProjectCreate = Omit<Projects, "id">;
type ProjectUpdate = Partial<ProjectCreate>
type ProjectResult = QueryResult<Projects>;

export { Projects, ProjectCreate, ProjectUpdate, ProjectResult };