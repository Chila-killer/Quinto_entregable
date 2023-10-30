
const paginateData = (items, currentPage, itemsPerBlock, pagesPerBlock) => {
    
    const ITEMS_PER_PAGE = parseInt(itemsPerBlock)

    // itemsDeLaPaginaActual
    const sliceEnd = ITEMS_PER_PAGE * currentPage

    const sliceStart = sliceEnd - ITEMS_PER_PAGE

    const itemsInCurrentPage = items.slice(sliceStart, sliceEnd)

    // cantidadDePaginas
    const lastPage = Math.ceil(items.length / ITEMS_PER_PAGE)

    // pagesBlock
    const PAGES_PER_BLOCK = pagesPerBlock
    
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)

    // paginasDelBloqueActual
    const pagesInCurrentBlock = []

    const maxPage = actualBlock * PAGES_PER_BLOCK
    const minPage = (maxPage + 1) - PAGES_PER_BLOCK

    for (let i = minPage; i <= maxPage; i++) {
        if (i <= lastPage) {
            pagesInCurrentBlock.push(i)
        }
        
    }

    return {
        itemsInCurrentPage,
        pagesInCurrentBlock,
        lastPage,
        PAGES_PER_BLOCK,
        minPage,
        maxPage,
    }
}

export {
    paginateData,
}