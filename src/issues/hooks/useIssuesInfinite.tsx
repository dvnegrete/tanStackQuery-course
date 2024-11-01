import { useInfiniteQuery } from "@tanstack/react-query"
import { State } from "../interfaces"
import { getIssues } from "../actions";

interface Props {
    state: State;
    selectedLabels: string[];
}
export const useIssuesInfinite = ({ state, selectedLabels }: Props) => {
    const issuesQuery = useInfiniteQuery({
        queryKey: ["issues", 'infinte', { state, selectedLabels }],
        queryFn: ({ pageParam, queryKey }) => {
            const [,,args] = queryKey
            // DOC: queryKey = [ "issues", "infinte", { "state": "closed", "selectedLabels": [] } ]
            const { state, selectedLabels} = args as Props
            return getIssues(state, selectedLabels, pageParam)
        },
        staleTime: 1000 * 60 * 60,
        initialPageParam: 0,
        
        // pages: GithubIssue[][]
        // [ [issue1, issue2, issue3, issue4], [issue5, issue6, issue7, issue8], ... ]
        //cada array interno representa la pagina que contiene un numero determinado de issues
        getNextPageParam: (lastPage, pages) => lastPage.length > 0 ? pages.length + 1 : undefined,
        //  lastPage.length > 0 ? pages.length + 1 : undefined,
        //  trae el siguiente numero de pagina en la API usando  pages.length + 1
    })
    return {
        issuesQuery
    }
}