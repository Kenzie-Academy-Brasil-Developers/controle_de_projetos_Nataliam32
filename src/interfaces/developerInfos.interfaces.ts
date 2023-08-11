import { QueryResult } from "pg";

interface DeveloperInfos {
    id: number,
    developerSince: Date,
    preferredOS: "windows" | "linux" | "macos",
    developerId: number
};

type DeveloperInfosCreate = Omit<DeveloperInfos, "id">;
type DeveloperInfosResult = QueryResult<DeveloperInfos>;

export { DeveloperInfos, DeveloperInfosCreate, DeveloperInfosResult }