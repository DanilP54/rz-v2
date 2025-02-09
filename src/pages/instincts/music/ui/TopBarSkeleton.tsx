import { FilterTogglesSkeleton } from "./FilterTogglesSkeleton"
import { SearchBarSkeleton } from "./SearchBarSkeleton"
import { TopBarLayout } from "./TopBarLayout"

export const TopBarSkeleton = () => {
    return (
        <>
            <TopBarLayout
                variant="instincts"
                filterToggles={<FilterTogglesSkeleton />}
                searchBar={<SearchBarSkeleton />}
            />
        </>
    )
}