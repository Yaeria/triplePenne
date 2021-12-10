let HDF = document.getElementById('region-FR-HDF') // Fait
let COR = document.getElementById('region-FR-COR') // Fait
let OCC = document.getElementById('region-FR-OCC') // Fait
let BFC = document.getElementById('region-FR-BFC') // Fait
let BRE = document.getElementById('region-FR-BRE') // Fait

// Haut de France
if (window.i > 801) {
    HDF.addEventListener("mouseover", function (eventHDF) {
        const HDFText = document.getElementById('HDF')
        eventHDF.target.style.fill = "red"
        eventHDF.target.style.transition = "0.5s"
        HDFText.style.display = "block"
    })

    HDF.addEventListener("mouseout", function (eventHDF) {
        const HDFText = document.getElementById('HDF')
        eventHDF.target.style.transition = "0.5s"
        eventHDF.target.style.fill = ""
        HDFText.style.display = "none"
    })

    // Occitanie

    OCC.addEventListener("mouseover", function (eventOCC) {
        const OCCText = document.getElementById('OCC')
        eventOCC.target.style.fill = "red"
        eventOCC.target.style.transition = "0.5s"
        OCCText.style.display = "block"
    })

    OCC.addEventListener("mouseout", function (eventOCC) {
        const OCCText = document.getElementById('OCC')
        eventOCC.target.style.transition = "0.5s"
        eventOCC.target.style.fill = ""
        OCCText.style.display = "none"
    })

    // Bretagne

    BRE.addEventListener("mouseover", function (eventBRE) {
        const BREText = document.getElementById('BRE')
        eventBRE.target.style.fill = "red"
        eventBRE.target.style.transition = "0.5s"
        BREText.style.display = "block"
    })

    BRE.addEventListener("mouseout", function (eventBRE) {
        const BREText = document.getElementById('BRE')
        eventBRE.target.style.transition = "0.5s"
        eventBRE.target.style.fill = ""
        BREText.style.display = "none"
    })

    // Corse

    COR.addEventListener("mouseover", function (eventCOR) {
        const CORText = document.getElementById('COR')
        eventCOR.target.style.fill = "red"
        eventCOR.target.style.transition = "0.5s"
        CORText.style.display = "block"
    })

    COR.addEventListener("mouseout", function (eventCOR) {
        const CORText = document.getElementById('COR')
        eventCOR.target.style.transition = "0.5s"
        eventCOR.target.style.fill = ""
        CORText.style.display = "none"
    })

    // Bourgogne

    BFC.addEventListener("mouseover", function (eventBFC) {
        const BFCText = document.getElementById('BFC')
        eventBFC.target.style.fill = "red"
        eventBFC.target.style.transition = "0.5s"
        BFCText.style.display = "block"
    })

    BFC.addEventListener("mouseout", function (eventBFC) {
        const BFCText = document.getElementById('BFC')
        eventBFC.target.style.transition = "0.5s"
        eventBFC.target.style.fill = ""
        BFCText.style.display = "none"
    })


}       