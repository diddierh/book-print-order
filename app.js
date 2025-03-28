function getTotalPages(pages){
    if (pages % 4 != 0)
        pages += 4 - (pages%4)
    return pages;
}

function showPrintingOrder(pages){
    let totalPages = getTotalPages(pages);
    let sheets = totalPages/4;

    let ret = "";

    for(let i = 1; i <= totalPages/2; i++){
        let forward = -1;
        let backward = -1;

        if(i%2 != 0){
            forward = totalPages - i + 1;
            backward = i;
        }
        else{
            forward = i;
            backward = totalPages - i + 1;
        }    
        ret += `<tr class="row justify-content-center"><td class="col-6 col-md-3">${forward>pages?'blank':forward}</td><td class="col-6 col-md-3">${backward>pages?'blank':backward}</td></tr>`;
    }
    return ret;
}

