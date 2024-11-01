import { useQuery } from "@tanstack/react-query"
import { getIssue, getIssueComments } from "../actions"

export const useIssue = (issueNumber: number) => {

    const issueQuery = useQuery({
        queryKey: ["issues", issueNumber],
        queryFn: () => getIssue(issueNumber),
        staleTime: 1000 * 60 * 60,
    })
    
    const commentsQuery = useQuery({
        queryKey: ["issues", issueQuery.data?.number, "comments"],
        queryFn: () => getIssueComments(issueQuery.data?.number || 0 ),
        staleTime: 1000 * 60 * 60,
        enabled: issueQuery.data !== undefined // Config para que dependa de la consulta de arriba y no este disponible si no se ha usado isssueQuery
    })
    // const commentsQuery = useQuery({
    //     queryKey: ["issues", issueNumber, "comments"],
    //     queryFn: () => getIssueComments(issueNumber),
    //     staleTime: 1000 * 60 * 60,
    // })

    return {
        issueQuery, 
        commentsQuery
    }
}