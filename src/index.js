if(document.readyState !== "loading") {
    console.log("Document is ready")
    initializeCode();
} else{
    document.addEventListener("DOMcontentLoaded", function(){
        console.log("Document is ready after waiting")
        initializeCode();
    })
}


async function initializeCode() {
    const url = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff"
    const dataPromise = await fetch(url);
    const dataJSON = await dataPromise.json()

    console.log(dataJSON);
   

}