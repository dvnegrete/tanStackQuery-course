import { useQuery } from "@tanstack/react-query"
import { getLabels } from "../actions"

export const useLabels = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60, // 1 hora de stale time
        placeholderData: [
            {
                id: 945148471,
                node_id: "MDU6TGFiZWw5NDUxNDg0NzE=",
                url: "https://api.github.com/repos/facebook/react/labels/Component:%20ReactIs",
                name: "Component: ReactIs",
                color: "1d76db",
                default: false,
            },
            {
                id: 1109407645,
                node_id: "MDU6TGFiZWwxMTA5NDA3NjQ1",
                url: "https://api.github.com/repos/facebook/react/labels/Component:%20Suspense",
                name: "Component: Suspense",
                color: "8ffcd6",
                default: false
            }
        ]
        // initialData:  [
        //     {
        //         id: 945148471,
        //         node_id: "MDU6TGFiZWw5NDUxNDg0NzE=",
        //         url: "https://api.github.com/repos/facebook/react/labels/Component:%20ReactIs",
        //         name: "Component: ReactIs",
        //         color: "1d76db",
        //         default: false,
        //     },
        //     {
        //         id: 1109407645,
        //         node_id: "MDU6TGFiZWwxMTA5NDA3NjQ1",
        //         url: "https://api.github.com/repos/facebook/react/labels/Component:%20Suspense",
        //         name: "Component: Suspense",
        //         color: "8ffcd6",
        //         default: false
        //     },         
        // ]
    })
    return { labelsQuery }
}