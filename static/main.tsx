import * as React from "react";
import * as ReactDOM from "react-dom/client";
import * as _html2canvas from "html2canvas";
var currentState;
var skeletonColor:string = "#800080";
const html2canvas: any = _html2canvas;
const domContainer:any = document.querySelector('#plot-container');
var reactRoot = ReactDOM.createRoot(domContainer);
var viewportDimensions = getViewportDimensions();

/* ===== GETTING THE DATA ===== */
//var path = "C:/Users/PC/Desktop/krona/krona.tsv";
/*
loadDataFromTSV(path);
$(document).ajaxStop(function() {
    var taxName:string;
    for (taxName of Object.keys(allTaxa)) {
        var newTaxon:Taxon = new Taxon(taxName);
        taxonList.push(newTaxon);
        lineagesNamesOnlyArray.push(newTaxon.lineage.map(item => item[1]));
    }
    lineagesNamesOnlyArray.sort();
    console.log("taxNames: ", lineagesNamesOnlyArray);
    // var fullPlot:Plot = new Plot();
    // var mycosphaerellalesPlot:Plot = new Plot("Bacteria", 0, true, viewportDimensions);
    // var mycosphaerellalesPlot:Plot = new Plot("Leotiomycetes", 6, true, viewportDimensions);
    // var mycosphaerellalesPlot:Plot = new Plot("Mycosphaerellales", 8, false, viewportDimensions);
    // var mycosphaerellalesPlot:Plot = new Plot("Eurotiomycetes", 6, false);
    var mycosphaerellalesPlot:Plot = new Plot("Leotiomycetes", 6, false);
    addEventListener("resize", (event) => {
        console.log("resize event");
        viewportDimensions = getViewportDimensions();
        mycosphaerellalesPlot.updateviewportDimensions(viewportDimensions);
        mycosphaerellalesPlot.calculateSVGPaths();
        mycosphaerellalesPlot.getTaxonLabelSpecifics();
        mycosphaerellalesPlot.getTaxonShapeSpecifics();
        mycosphaerellalesPlot.draw();
    });
})
*/

var allTaxa:object = JSON.parse('{"Acephala macrosclerotiorum":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Mollisiaceae"],["genus","Acephala"],["species","Acephala macrosclerotiorum"]],"rank":"species","taxID":"886606","totalCount":4,"unassignedCount":4},"Acetobacteraceae bacterium":{"lineageNames":[["superkingdom","Bacteria"],["phylum","Proteobacteria"],["class","Alphaproteobacteria"],["order","Rhodospirillales"],["family","Acetobacteraceae"],["species","Acetobacteraceae bacterium"]],"rank":"species","taxID":"1909293","totalCount":1,"unassignedCount":1},"Acidobacteria bacterium":{"lineageNames":[["superkingdom","Bacteria"],["phylum","Acidobacteria"],["species","Acidobacteria bacterium"]],"rank":"species","taxID":"1978231","totalCount":4,"unassignedCount":4},"Agaricomycetes":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Basidiomycota"],["subphylum","Agaricomycotina"],["class","Agaricomycetes"]],"rank":"class","taxID":"155619","totalCount":12,"unassignedCount":2},"Ajellomycetaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Onygenales"],["family","Ajellomycetaceae"]],"rank":"family","taxID":"299071","totalCount":3,"unassignedCount":1},"Alectoria fallacina":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Lecanorales"],["suborder","Lecanorineae"],["family","Parmeliaceae"],["genus","Alectoria"],["species","Alectoria fallacina"]],"rank":"species","taxID":"1903189","totalCount":32,"unassignedCount":32},"Alphaproteobacteria":{"lineageNames":[["superkingdom","Bacteria"],["phylum","Proteobacteria"],["class","Alphaproteobacteria"]],"rank":"class","taxID":"28211","totalCount":3,"unassignedCount":1},"Alternaria":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["suborder","Pleosporineae"],["family","Pleosporaceae"],["genus","Alternaria"]],"rank":"genus","taxID":"5598","totalCount":3,"unassignedCount":1},"Alternaria alternata":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["suborder","Pleosporineae"],["family","Pleosporaceae"],["genus","Alternaria"],["section","Alternaria sect. Alternaria"],["species group","Alternaria alternata complex"],["species","Alternaria alternata"]],"rank":"species","taxID":"5599","totalCount":1,"unassignedCount":1},"Alternaria panax":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["suborder","Pleosporineae"],["family","Pleosporaceae"],["genus","Alternaria"],["section","Alternaria sect. Panax"],["species","Alternaria panax"]],"rank":"species","taxID":"48097","totalCount":1,"unassignedCount":1},"Amniculicola lignicola CBS 123094":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["family","Amniculicolaceae"],["genus","Amniculicola"],["species","Amniculicola lignicola"],["strain","Amniculicola lignicola CBS 123094"]],"rank":"strain","taxID":"1392246","totalCount":1,"unassignedCount":1},"Amorphotheca resinae ATCC 22711":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Amorphothecaceae"],["genus","Amorphotheca"],["species","Amorphotheca resinae"],["strain","Amorphotheca resinae ATCC 22711"]],"rank":"strain","taxID":"857342","totalCount":7,"unassignedCount":7},"Amylocarpus encephaloides":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["genus","Amylocarpus"],["species","Amylocarpus encephaloides"]],"rank":"species","taxID":"45428","totalCount":1,"unassignedCount":1},"Aplosporella prunicola CBS 121167":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["order","Botryosphaeriales"],["family","Aplosporellaceae"],["genus","Aplosporella"],["species","Aplosporella prunicola"],["strain","Aplosporella prunicola CBS 121167"]],"rank":"strain","taxID":"1176127","totalCount":1,"unassignedCount":1},"Armatimonadetes":{"lineageNames":[["superkingdom","Bacteria"],["clade","Terrabacteria group"],["phylum","Armatimonadetes"]],"rank":"phylum","taxID":"67819","totalCount":6,"unassignedCount":2},"Armatimonadetes bacterium":{"lineageNames":[["superkingdom","Bacteria"],["clade","Terrabacteria group"],["phylum","Armatimonadetes"],["species","Armatimonadetes bacterium"]],"rank":"species","taxID":"2033014","totalCount":3,"unassignedCount":3},"Arthrodermataceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Onygenales"],["family","Arthrodermataceae"]],"rank":"family","taxID":"34384","totalCount":2,"unassignedCount":1},"Ascomycota":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"]],"rank":"phylum","taxID":"4890","totalCount":8364,"unassignedCount":7},"Ascosphaera apis ARSEF 7405":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Onygenales"],["family","Ascosphaeraceae"],["genus","Ascosphaera"],["species","Ascosphaera apis"],["strain","Ascosphaera apis ARSEF 7405"]],"rank":"strain","taxID":"392613","totalCount":1,"unassignedCount":1},"Aspergillaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Aspergillaceae"]],"rank":"family","taxID":"1131492","totalCount":15,"unassignedCount":5},"Aspergillus":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Aspergillaceae"],["genus","Aspergillus"]],"rank":"genus","taxID":"5052","totalCount":9,"unassignedCount":4},"Aspergillus ellipticus CBS 707.79":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Aspergillaceae"],["genus","Aspergillus"],["species","Aspergillus ellipticus"],["strain","Aspergillus ellipticus CBS 707.79"]],"rank":"strain","taxID":"1448320","totalCount":1,"unassignedCount":1},"Aspergillus fumigatus":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Aspergillaceae"],["genus","Aspergillus"],["subgenus","Aspergillus subgen. Fumigati"],["species","Aspergillus fumigatus"]],"rank":"species","taxID":"746128","totalCount":1,"unassignedCount":1},"Aspergillus thermomutatus":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Aspergillaceae"],["genus","Aspergillus"],["species","Aspergillus thermomutatus"]],"rank":"species","taxID":"41047","totalCount":1,"unassignedCount":1},"Aspergillus udagawae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Aspergillaceae"],["genus","Aspergillus"],["species","Aspergillus udagawae"]],"rank":"species","taxID":"91492","totalCount":2,"unassignedCount":2},"Atheliaceae":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Basidiomycota"],["subphylum","Agaricomycotina"],["class","Agaricomycetes"],["subclass","Agaricomycetidae"],["order","Atheliales"],["family","Atheliaceae"]],"rank":"family","taxID":"80628","totalCount":1,"unassignedCount":1},"Aureobasidium melanogenum":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"],["order","Dothideales"],["family","Saccotheciaceae"],["genus","Aureobasidium"],["species","Aureobasidium melanogenum"]],"rank":"species","taxID":"46634","totalCount":1,"unassignedCount":1},"Aureobasidium pullulans":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"],["order","Dothideales"],["family","Saccotheciaceae"],["genus","Aureobasidium"],["species","Aureobasidium pullulans"]],"rank":"species","taxID":"5580","totalCount":1,"unassignedCount":1},"Aureobasidium subglaciale EXF-2481":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"],["order","Dothideales"],["family","Saccotheciaceae"],["genus","Aureobasidium"],["species","Aureobasidium subglaciale"],["strain","Aureobasidium subglaciale EXF-2481"]],"rank":"strain","taxID":"1043005","totalCount":1,"unassignedCount":1},"Bacidia gigantensis":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Lecanorales"],["suborder","Lecanorineae"],["family","Ramalinaceae"],["genus","Bacidia"],["species","Bacidia gigantensis"]],"rank":"species","taxID":"2732470","totalCount":18,"unassignedCount":18},"Bacteria":{"lineageNames":[["superkingdom","Bacteria"]],"rank":"superkingdom","taxID":"2","totalCount":32,"unassignedCount":8},"Bisporella sp. PMI_857":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Helotiaceae"],["genus","Bisporella"],["species","Bisporella sp. PMI_857"]],"rank":"species","taxID":"1954211","totalCount":2,"unassignedCount":2},"Botryosphaeria dothidea":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["order","Botryosphaeriales"],["family","Botryosphaeriaceae"],["genus","Botryosphaeria"],["species","Botryosphaeria dothidea"]],"rank":"species","taxID":"55169","totalCount":2,"unassignedCount":2},"Botryosphaeriales":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["order","Botryosphaeriales"]],"rank":"order","taxID":"451869","totalCount":4,"unassignedCount":1},"Byssothecium circinans":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["suborder","Massarineae"],["family","Massarinaceae"],["genus","Byssothecium"],["species","Byssothecium circinans"]],"rank":"species","taxID":"147558","totalCount":1,"unassignedCount":1},"Cadophora malorum":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["genus","Cadophora"],["species","Cadophora malorum"]],"rank":"species","taxID":"108018","totalCount":1,"unassignedCount":1},"Cadophora sp. M221":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["genus","Cadophora"],["species","Cadophora sp. M221"]],"rank":"species","taxID":"2774352","totalCount":1,"unassignedCount":1},"Calycina marina":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Pezizellaceae"],["genus","Calycina"],["species","Calycina marina"]],"rank":"species","taxID":"1763456","totalCount":1,"unassignedCount":1},"Capronia":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"],["family","Herpotrichiellaceae"],["genus","Capronia"]],"rank":"genus","taxID":"43220","totalCount":1,"unassignedCount":1},"Cenococcum geophilum 1.58":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["family","Gloniaceae"],["genus","Cenococcum"],["species","Cenococcum geophilum"],["strain","Cenococcum geophilum 1.58"]],"rank":"strain","taxID":"794803","totalCount":4,"unassignedCount":4},"Chaetomium globosum CBS 148.51":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Sordariomycetidae"],["order","Sordariales"],["family","Chaetomiaceae"],["genus","Chaetomium"],["species","Chaetomium globosum"],["strain","Chaetomium globosum CBS 148.51"]],"rank":"strain","taxID":"306901","totalCount":1,"unassignedCount":1},"Chaetothyriales":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"]],"rank":"order","taxID":"34395","totalCount":18,"unassignedCount":1},"Chaetothyriales sp. CBS 132003":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"],["species","Chaetothyriales sp. CBS 132003"]],"rank":"species","taxID":"2249419","totalCount":2,"unassignedCount":2},"Chaetothyriomycetidae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"]],"rank":"subclass","taxID":"451870","totalCount":53,"unassignedCount":6},"Chalara longipes BDJ":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["genus","Chalara"],["species","Chalara longipes"],["strain","Chalara longipes BDJ"]],"rank":"strain","taxID":"1379296","totalCount":1,"unassignedCount":1},"Chlorociboria aeruginascens":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Chlorociboriaceae"],["genus","Chlorociboria"],["species","Chlorociboria aeruginascens"]],"rank":"species","taxID":"296797","totalCount":5,"unassignedCount":5},"Chloroflexi bacterium":{"lineageNames":[["superkingdom","Bacteria"],["clade","Terrabacteria group"],["phylum","Chloroflexi"],["species","Chloroflexi bacterium"]],"rank":"species","taxID":"2026724","totalCount":2,"unassignedCount":2},"Chthonomonadales bacterium":{"lineageNames":[["superkingdom","Bacteria"],["clade","Terrabacteria group"],["phylum","Armatimonadetes"],["class","Chthonomonadetes"],["order","Chthonomonadales"],["species","Chthonomonadales bacterium"]],"rank":"species","taxID":"2282151","totalCount":1,"unassignedCount":1},"Cladonia macilenta":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Lecanorales"],["suborder","Lecanorineae"],["family","Cladoniaceae"],["genus","Cladonia"],["species","Cladonia macilenta"]],"rank":"species","taxID":"196765","totalCount":2,"unassignedCount":2},"Cladonia uncialis subsp. uncialis":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Lecanorales"],["suborder","Lecanorineae"],["family","Cladoniaceae"],["genus","Cladonia"],["species","Cladonia uncialis"],["subspecies","Cladonia uncialis subsp. uncialis"]],"rank":"subspecies","taxID":"180999","totalCount":7,"unassignedCount":7},"Cladophialophora bantiana CBS 173.52":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"],["family","Herpotrichiellaceae"],["genus","Cladophialophora"],["species","Cladophialophora bantiana"],["strain","Cladophialophora bantiana CBS 173.52"]],"rank":"strain","taxID":"1442370","totalCount":1,"unassignedCount":1},"Cladophialophora immunda":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"],["family","Herpotrichiellaceae"],["genus","Cladophialophora"],["species","Cladophialophora immunda"]],"rank":"species","taxID":"569365","totalCount":1,"unassignedCount":1},"Clavicipitaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Hypocreomycetidae"],["order","Hypocreales"],["family","Clavicipitaceae"]],"rank":"family","taxID":"34397","totalCount":2,"unassignedCount":1},"Coccidioides":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Onygenales"],["family","Onygenaceae"],["genus","Coccidioides"]],"rank":"genus","taxID":"5500","totalCount":3,"unassignedCount":1},"Coccidioides immitis":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Onygenales"],["family","Onygenaceae"],["genus","Coccidioides"],["species","Coccidioides immitis"]],"rank":"species","taxID":"5501","totalCount":2,"unassignedCount":2},"Coleophoma":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Dermateaceae"],["genus","Coleophoma"]],"rank":"genus","taxID":"453209","totalCount":1,"unassignedCount":1},"Colletotrichum gloeosporioides species complex":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Hypocreomycetidae"],["order","Glomerellales"],["family","Glomerellaceae"],["genus","Colletotrichum"],["no rank","Colletotrichum gloeosporioides species complex"]],"rank":"no rank","taxID":"2707338","totalCount":1,"unassignedCount":1},"Colletotrichum spaethianum species complex":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Hypocreomycetidae"],["order","Glomerellales"],["family","Glomerellaceae"],["genus","Colletotrichum"],["no rank","Colletotrichum spaethianum species complex"]],"rank":"no rank","taxID":"2707349","totalCount":2,"unassignedCount":2},"Colletotrichum tanaceti":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Hypocreomycetidae"],["order","Glomerellales"],["family","Glomerellaceae"],["genus","Colletotrichum"],["species","Colletotrichum tanaceti"]],"rank":"species","taxID":"1306861","totalCount":1,"unassignedCount":1},"Coniosporium apollinis CBS 100218":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["genus","Coniosporium"],["species","Coniosporium apollinis"],["strain","Coniosporium apollinis CBS 100218"]],"rank":"strain","taxID":"1168221","totalCount":8,"unassignedCount":8},"Corynespora cassiicola Philippines":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["family","Corynesporascaceae"],["genus","Corynespora"],["species","Corynespora cassiicola"],["strain","Corynespora cassiicola Philippines"]],"rank":"strain","taxID":"1448308","totalCount":2,"unassignedCount":2},"Cryomyces minteri":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["genus","Cryomyces"],["species","Cryomyces minteri"]],"rank":"species","taxID":"331657","totalCount":10,"unassignedCount":10},"Cudoniella acicularis":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Tricladiaceae"],["genus","Cudoniella"],["species","Cudoniella acicularis"]],"rank":"species","taxID":"354080","totalCount":4,"unassignedCount":4},"Cyanobacteria":{"lineageNames":[["superkingdom","Bacteria"],["clade","Terrabacteria group"],["phylum","Cyanobacteria"]],"rank":"phylum","taxID":"1117","totalCount":1,"unassignedCount":1},"Delphinella strobiligena":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"],["order","Dothideales"],["family","Dothioraceae"],["genus","Delphinella"],["species","Delphinella strobiligena"]],"rank":"species","taxID":"147560","totalCount":1,"unassignedCount":1},"Didymosphaeria enalia":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["suborder","Massarineae"],["family","Didymosphaeriaceae"],["genus","Didymosphaeria"],["species","Didymosphaeria enalia"]],"rank":"species","taxID":"85948","totalCount":1,"unassignedCount":1},"Dikarya":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"],["kingdom","Fungi"],["subkingdom","Dikarya"]],"rank":"subkingdom","taxID":"451864","totalCount":8408,"unassignedCount":32},"Dioscorea alata":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Viridiplantae"],["phylum","Streptophyta"],["subphylum","Streptophytina"],["class","Magnoliopsida"],["clade","Embryophyta"],["subclass","Petrosaviidae"],["order","Dioscoreales"],["family","Dioscoreaceae"],["genus","Dioscorea"],["species","Dioscorea alata"]],"rank":"species","taxID":"55571","totalCount":1,"unassignedCount":1},"Diplocarpon rosae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Drepanopezizaceae"],["genus","Diplocarpon"],["species","Diplocarpon rosae"]],"rank":"species","taxID":"946125","totalCount":1,"unassignedCount":1},"Dissoconium aciculare CBS 342.82":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"],["order","Mycosphaerellales"],["family","Dissoconiaceae"],["genus","Dissoconium"],["species","Dissoconium aciculare"],["strain","Dissoconium aciculare CBS 342.82"]],"rank":"strain","taxID":"1314786","totalCount":2,"unassignedCount":2},"Dothideomycetes":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"]],"rank":"class","taxID":"147541","totalCount":210,"unassignedCount":67},"Dothideomycetes incertae sedis":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["no rank","Dothideomycetes incertae sedis"]],"rank":"no rank","taxID":"159987","totalCount":10,"unassignedCount":10},"Dothideomycetidae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"]],"rank":"subclass","taxID":"451867","totalCount":21,"unassignedCount":2},"Emmonsia crescens UAMH 3008":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Onygenales"],["family","Ajellomycetaceae"],["genus","Emmonsia"],["species","Emmonsia crescens"],["strain","Emmonsia crescens UAMH 3008"]],"rank":"strain","taxID":"1247875","totalCount":2,"unassignedCount":2},"Endocarpon pusillum":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Verrucariales"],["family","Verrucariaceae"],["genus","Endocarpon"],["species","Endocarpon pusillum"]],"rank":"species","taxID":"364733","totalCount":29,"unassignedCount":21},"Endocarpon pusillum Z07020":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Verrucariales"],["family","Verrucariaceae"],["genus","Endocarpon"],["species","Endocarpon pusillum"],["strain","Endocarpon pusillum Z07020"]],"rank":"strain","taxID":"1263415","totalCount":8,"unassignedCount":8},"Epicoccum nigrum":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["suborder","Pleosporineae"],["family","Didymellaceae"],["genus","Epicoccum"],["species","Epicoccum nigrum"]],"rank":"species","taxID":"105696","totalCount":1,"unassignedCount":1},"Erysiphaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Erysiphales"],["family","Erysiphaceae"]],"rank":"family","taxID":"34371","totalCount":5,"unassignedCount":2},"Eukaryota":{"lineageNames":[["superkingdom","Eukaryota"]],"rank":"superkingdom","taxID":"2759","totalCount":8621,"unassignedCount":47},"Eurotiales":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"]],"rank":"order","taxID":"5042","totalCount":29,"unassignedCount":6},"Eurotiomycetes":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"]],"rank":"class","taxID":"147545","totalCount":131,"unassignedCount":12},"Eurotiomycetidae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"]],"rank":"subclass","taxID":"451871","totalCount":66,"unassignedCount":21},"Exophiala":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"],["family","Herpotrichiellaceae"],["genus","Exophiala"]],"rank":"genus","taxID":"5583","totalCount":7,"unassignedCount":3},"Exophiala dermatitidis NIH/UT8656":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"],["family","Herpotrichiellaceae"],["genus","Exophiala"],["species","Exophiala dermatitidis"],["strain","Exophiala dermatitidis NIH/UT8656"]],"rank":"strain","taxID":"858893","totalCount":1,"unassignedCount":1},"Exophiala mesophila":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"],["family","Herpotrichiellaceae"],["genus","Exophiala"],["species","Exophiala mesophila"]],"rank":"species","taxID":"212818","totalCount":1,"unassignedCount":1},"Exophiala oligosperma":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"],["family","Herpotrichiellaceae"],["genus","Exophiala"],["species","Exophiala oligosperma"]],"rank":"species","taxID":"215243","totalCount":1,"unassignedCount":1},"Exophiala spinifera":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"],["family","Herpotrichiellaceae"],["genus","Exophiala"],["species","Exophiala spinifera"]],"rank":"species","taxID":"91928","totalCount":1,"unassignedCount":1},"Fonsecaea":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"],["family","Herpotrichiellaceae"],["genus","Fonsecaea"]],"rank":"genus","taxID":"40354","totalCount":2,"unassignedCount":2},"Fulvia fulva":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"],["order","Mycosphaerellales"],["family","Mycosphaerellaceae"],["genus","Fulvia"],["species","Fulvia fulva"]],"rank":"species","taxID":"5499","totalCount":1,"unassignedCount":1},"Fungi":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"],["kingdom","Fungi"]],"rank":"kingdom","taxID":"4751","totalCount":8414,"unassignedCount":6},"Fusarium":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Hypocreomycetidae"],["order","Hypocreales"],["family","Nectriaceae"],["genus","Fusarium"]],"rank":"genus","taxID":"5506","totalCount":4,"unassignedCount":2},"Fusarium oxysporum f. sp. radicis-lycopersici 26381":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Hypocreomycetidae"],["order","Hypocreales"],["family","Nectriaceae"],["genus","Fusarium"],["species group","Fusarium oxysporum species complex"],["species","Fusarium oxysporum"],["forma specialis","Fusarium oxysporum f. sp. radicis-lycopersici"],["strain","Fusarium oxysporum f. sp. radicis-lycopersici 26381"]],"rank":"strain","taxID":"1089448","totalCount":2,"unassignedCount":2},"Geoglossaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Geoglossomycetes"],["order","Geoglossales"],["family","Geoglossaceae"]],"rank":"family","taxID":"34368","totalCount":52,"unassignedCount":19},"Glonium stellatum":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["family","Gloniaceae"],["genus","Glonium"],["species","Glonium stellatum"]],"rank":"species","taxID":"574774","totalCount":8,"unassignedCount":8},"Glutinoglossum americanum":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Geoglossomycetes"],["order","Geoglossales"],["family","Geoglossaceae"],["genus","Glutinoglossum"],["species","Glutinoglossum americanum"]],"rank":"species","taxID":"1670608","totalCount":20,"unassignedCount":20},"Golovinomyces cichoracearum":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Erysiphales"],["family","Erysiphaceae"],["genus","Golovinomyces"],["species","Golovinomyces cichoracearum"]],"rank":"species","taxID":"62708","totalCount":2,"unassignedCount":2},"Golovinomyces magnicellulatus":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Erysiphales"],["family","Erysiphaceae"],["genus","Golovinomyces"],["species","Golovinomyces magnicellulatus"]],"rank":"species","taxID":"62714","totalCount":1,"unassignedCount":1},"Gomphillus americanus":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Ostropomycetidae"],["order","Ostropales"],["family","Graphidaceae"],["subfamily","Gomphilloideae"],["genus","Gomphillus"],["species","Gomphillus americanus"]],"rank":"species","taxID":"1940652","totalCount":10,"unassignedCount":10},"Helotiales":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"]],"rank":"order","taxID":"5178","totalCount":107,"unassignedCount":54},"Herpotrichiellaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"],["family","Herpotrichiellaceae"]],"rank":"family","taxID":"43219","totalCount":14,"unassignedCount":2},"Heterodermia speciosa":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Caliciales"],["family","Physciaceae"],["genus","Heterodermia"],["species","Heterodermia speciosa"]],"rank":"species","taxID":"116794","totalCount":80,"unassignedCount":80},"Hortaea werneckii":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"],["order","Mycosphaerellales"],["family","Teratosphaeriaceae"],["genus","Hortaea"],["species","Hortaea werneckii"]],"rank":"species","taxID":"91943","totalCount":1,"unassignedCount":1},"Hyaloscypha":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Hyaloscyphaceae"],["genus","Hyaloscypha"]],"rank":"genus","taxID":"47747","totalCount":7,"unassignedCount":3},"Hyaloscypha hepaticicola":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Hyaloscyphaceae"],["genus","Hyaloscypha"],["species","Hyaloscypha hepaticicola"]],"rank":"species","taxID":"2082293","totalCount":2,"unassignedCount":2},"Hyaloscypha sp. PMI_1271":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Hyaloscyphaceae"],["genus","Hyaloscypha"],["species","Hyaloscypha sp. PMI_1271"]],"rank":"species","taxID":"2614599","totalCount":1,"unassignedCount":1},"Hyaloscypha variabilis F":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Hyaloscyphaceae"],["genus","Hyaloscypha"],["species","Hyaloscypha variabilis"],["strain","Hyaloscypha variabilis F"]],"rank":"strain","taxID":"1149755","totalCount":1,"unassignedCount":1},"Hymenoscyphus varicosporioides":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Helotiaceae"],["genus","Hymenoscyphus"],["species","Hymenoscyphus varicosporioides"]],"rank":"species","taxID":"2075069","totalCount":2,"unassignedCount":2},"Hypocreales":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Hypocreomycetidae"],["order","Hypocreales"]],"rank":"order","taxID":"5125","totalCount":11,"unassignedCount":2},"Hypocreomycetidae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Hypocreomycetidae"]],"rank":"subclass","taxID":"222543","totalCount":17,"unassignedCount":2},"Hypoxylon sp. CI-4A":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Xylariomycetidae"],["order","Xylariales"],["family","Hypoxylaceae"],["genus","Hypoxylon"],["species","Hypoxylon sp. CI-4A"]],"rank":"species","taxID":"1001833","totalCount":1,"unassignedCount":1},"Imshaugia aleurites":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Lecanorales"],["suborder","Lecanorineae"],["family","Parmeliaceae"],["genus","Imshaugia"],["species","Imshaugia aleurites"]],"rank":"species","taxID":"172621","totalCount":32,"unassignedCount":32},"Infundibulicybe gibba":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Basidiomycota"],["subphylum","Agaricomycotina"],["class","Agaricomycetes"],["subclass","Agaricomycetidae"],["order","Agaricales"],["suborder","Tricholomatineae"],["genus","Infundibulicybe"],["species","Infundibulicybe gibba"]],"rank":"species","taxID":"378275","totalCount":1,"unassignedCount":1},"Lachnellula":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Lachnaceae"],["genus","Lachnellula"]],"rank":"genus","taxID":"47830","totalCount":2,"unassignedCount":1},"Lachnellula suecica":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Lachnaceae"],["genus","Lachnellula"],["species","Lachnellula suecica"]],"rank":"species","taxID":"602035","totalCount":1,"unassignedCount":1},"Lecanorineae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Lecanorales"],["suborder","Lecanorineae"]],"rank":"suborder","taxID":"157822","totalCount":732,"unassignedCount":30},"Lecanoromycetes":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Lecanoromycetes"]],"rank":"class","taxID":"147547","totalCount":4745,"unassignedCount":1},"Lecanoromycetidae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"]],"rank":"subclass","taxID":"388435","totalCount":1853,"unassignedCount":881},"Leotiomycetes":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"]],"rank":"class","taxID":"147548","totalCount":171,"unassignedCount":48},"Leotiomycetes incertae sedis":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["no rank","Leotiomycetes incertae sedis"]],"rank":"no rank","taxID":"221903","totalCount":2,"unassignedCount":2},"Leotiomycetes sp. MPI-SDFR-AT-0126":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["species","Leotiomycetes sp. MPI-SDFR-AT-0126"]],"rank":"species","taxID":"2138324","totalCount":1,"unassignedCount":1},"Lepidopterella palustris CBS 459.81":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Mytilinidiales"],["family","Argynnaceae"],["genus","Lepidopterella"],["species","Lepidopterella palustris"],["strain","Lepidopterella palustris CBS 459.81"]],"rank":"strain","taxID":"1314670","totalCount":14,"unassignedCount":14},"Leptosphaeriaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["suborder","Pleosporineae"],["family","Leptosphaeriaceae"]],"rank":"family","taxID":"34374","totalCount":1,"unassignedCount":1},"Letharia":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Lecanorales"],["suborder","Lecanorineae"],["family","Parmeliaceae"],["genus","Letharia"]],"rank":"genus","taxID":"112415","totalCount":104,"unassignedCount":49},"Letharia columbiana":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Lecanorales"],["suborder","Lecanorineae"],["family","Parmeliaceae"],["genus","Letharia"],["species","Letharia columbiana"]],"rank":"species","taxID":"112416","totalCount":40,"unassignedCount":40},"Letharia lupina":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Lecanorales"],["suborder","Lecanorineae"],["family","Parmeliaceae"],["genus","Letharia"],["species","Letharia lupina"]],"rank":"species","taxID":"560253","totalCount":15,"unassignedCount":15},"Lineolata rhizophorae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["order","Lineolatales"],["family","Lineolataceae"],["genus","Lineolata"],["species","Lineolata rhizophorae"]],"rank":"species","taxID":"578093","totalCount":1,"unassignedCount":1},"Lophiotrema nucula":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["family","Lophiotremataceae"],["genus","Lophiotrema"],["species","Lophiotrema nucula"]],"rank":"species","taxID":"690887","totalCount":2,"unassignedCount":2},"Lophium mytilinum":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Mytilinidiales"],["family","Mytilinidiaceae"],["genus","Lophium"],["species","Lophium mytilinum"]],"rank":"species","taxID":"390894","totalCount":2,"unassignedCount":2},"Massarina eburnea CBS 473.64":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["suborder","Massarineae"],["family","Massarinaceae"],["genus","Massarina"],["species","Massarina eburnea"],["strain","Massarina eburnea CBS 473.64"]],"rank":"strain","taxID":"1395130","totalCount":1,"unassignedCount":1},"Metarhizium":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Hypocreomycetidae"],["order","Hypocreales"],["family","Clavicipitaceae"],["genus","Metarhizium"]],"rank":"genus","taxID":"5529","totalCount":1,"unassignedCount":1},"Mollisiaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Mollisiaceae"]],"rank":"family","taxID":"2755564","totalCount":9,"unassignedCount":3},"Monilinia fructicola":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Sclerotiniaceae"],["genus","Monilinia"],["species","Monilinia fructicola"]],"rank":"species","taxID":"38448","totalCount":1,"unassignedCount":1},"Monosporascus sp. GIB2":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Xylariomycetidae"],["order","Xylariales"],["genus","Monosporascus"],["species","Monosporascus sp. GIB2"]],"rank":"species","taxID":"2211647","totalCount":1,"unassignedCount":1},"Morchella conica CCBAS932":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["clade","Opisthokonta"],["subphylum","Pezizomycotina"],["class","Pezizomycetes"],["order","Pezizales"],["family","Morchellaceae"],["genus","Morchella"],["species","Morchella conica"],["strain","Morchella conica CCBAS932"]],"rank":"strain","taxID":"1392247","totalCount":2,"unassignedCount":2},"Morchella sect. Distantes":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["clade","Opisthokonta"],["subphylum","Pezizomycotina"],["class","Pezizomycetes"],["order","Pezizales"],["family","Morchellaceae"],["genus","Morchella"],["section","Morchella sect. Distantes"]],"rank":"section","taxID":"1051054","totalCount":6,"unassignedCount":2},"Morchella sextelata":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["clade","Opisthokonta"],["subphylum","Pezizomycotina"],["class","Pezizomycetes"],["order","Pezizales"],["family","Morchellaceae"],["genus","Morchella"],["section","Morchella sect. Distantes"],["species","Morchella sextelata"]],"rank":"species","taxID":"1174677","totalCount":4,"unassignedCount":4},"Mycena":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Basidiomycota"],["subphylum","Agaricomycotina"],["class","Agaricomycetes"],["subclass","Agaricomycetidae"],["order","Agaricales"],["suborder","Marasmiineae"],["family","Mycenaceae"],["genus","Mycena"]],"rank":"genus","taxID":"41247","totalCount":2,"unassignedCount":1},"Mycena venus":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Basidiomycota"],["subphylum","Agaricomycotina"],["class","Agaricomycetes"],["subclass","Agaricomycetidae"],["order","Agaricales"],["suborder","Marasmiineae"],["family","Mycenaceae"],["genus","Mycena"],["species","Mycena venus"]],"rank":"species","taxID":"2733690","totalCount":1,"unassignedCount":1},"Mycosphaerellaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"],["order","Mycosphaerellales"],["family","Mycosphaerellaceae"]],"rank":"family","taxID":"93133","totalCount":6,"unassignedCount":4},"Mycosphaerellales":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"],["order","Mycosphaerellales"]],"rank":"order","taxID":"2726947","totalCount":13,"unassignedCount":4},"Mytilinidiales":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Mytilinidiales"]],"rank":"order","taxID":"603422","totalCount":17,"unassignedCount":1},"Nitrobacteraceae":{"lineageNames":[["superkingdom","Bacteria"],["phylum","Proteobacteria"],["class","Alphaproteobacteria"],["order","Hyphomicrobiales"],["family","Nitrobacteraceae"]],"rank":"family","taxID":"41294","totalCount":1,"unassignedCount":1},"Nitrospira sp.":{"lineageNames":[["superkingdom","Bacteria"],["phylum","Nitrospirae"],["class","Nitrospira"],["order","Nitrospirales"],["family","Nitrospiraceae"],["genus","Nitrospira"],["species","Nitrospira sp."]],"rank":"species","taxID":"70125","totalCount":1,"unassignedCount":1},"OSLEUM clade":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["clade","OSLEUM clade"]],"rank":"clade","taxID":"1520881","totalCount":2877,"unassignedCount":2877},"Oidiodendron maius Zn":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["family","Myxotrichaceae"],["genus","Oidiodendron"],["species","Oidiodendron maius"],["strain","Oidiodendron maius Zn"]],"rank":"strain","taxID":"913774","totalCount":1,"unassignedCount":1},"Onygenales":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Onygenales"]],"rank":"order","taxID":"33183","totalCount":16,"unassignedCount":5},"Opisthokonta":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"]],"rank":"clade","taxID":"33154","totalCount":8415,"unassignedCount":1},"Paecilomyces variotii":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Thermoascaceae"],["genus","Paecilomyces"],["species","Paecilomyces variotii"]],"rank":"species","taxID":"264951","totalCount":1,"unassignedCount":1},"Parmeliaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Lecanorales"],["suborder","Lecanorineae"],["family","Parmeliaceae"]],"rank":"family","taxID":"78060","totalCount":675,"unassignedCount":507},"Peltigera":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Peltigerales"],["suborder","Peltigerineae"],["family","Peltigeraceae"],["genus","Peltigera"]],"rank":"genus","taxID":"48861","totalCount":2,"unassignedCount":1},"Peltigera membranacea":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Peltigerales"],["suborder","Peltigerineae"],["family","Peltigeraceae"],["genus","Peltigera"],["species","Peltigera membranacea"]],"rank":"species","taxID":"161997","totalCount":1,"unassignedCount":1},"Penicillium steckii":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Aspergillaceae"],["genus","Penicillium"],["species","Penicillium steckii"]],"rank":"species","taxID":"303698","totalCount":1,"unassignedCount":1},"Pentapetalae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Viridiplantae"],["phylum","Streptophyta"],["subphylum","Streptophytina"],["class","Magnoliopsida"],["clade","Embryophyta"],["clade","Pentapetalae"]],"rank":"clade","taxID":"1437201","totalCount":1,"unassignedCount":1},"Periconia macrospinosa":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["suborder","Massarineae"],["family","Periconiaceae"],["genus","Periconia"],["species","Periconia macrospinosa"]],"rank":"species","taxID":"97972","totalCount":1,"unassignedCount":1},"Pezizaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["clade","Opisthokonta"],["subphylum","Pezizomycotina"],["class","Pezizomycetes"],["order","Pezizales"],["family","Pezizaceae"]],"rank":"family","taxID":"5186","totalCount":2,"unassignedCount":1},"Pezizales":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["clade","Opisthokonta"],["subphylum","Pezizomycotina"],["class","Pezizomycetes"],["order","Pezizales"]],"rank":"order","taxID":"5185","totalCount":18,"unassignedCount":5},"Pezizomycotina":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["clade","Opisthokonta"],["subphylum","Pezizomycotina"]],"rank":"subphylum","taxID":"147538","totalCount":8350,"unassignedCount":23},"Phaeosphaeria sp. MPI-PUGE-AT-0046c":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["suborder","Pleosporineae"],["family","Phaeosphaeriaceae"],["genus","Phaeosphaeria"],["species","Phaeosphaeria sp. MPI-PUGE-AT-0046c"]],"rank":"species","taxID":"2821754","totalCount":1,"unassignedCount":1},"Phialocephala subalpina":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Mollisiaceae"],["genus","Phialocephala"],["species","Phialocephala subalpina"]],"rank":"species","taxID":"576137","totalCount":2,"unassignedCount":2},"Physcia stellaris":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Caliciales"],["family","Physciaceae"],["genus","Physcia"],["species","Physcia stellaris"]],"rank":"species","taxID":"116821","totalCount":53,"unassignedCount":53},"Physciaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Lecanoromycetidae"],["order","Caliciales"],["family","Physciaceae"]],"rank":"family","taxID":"50934","totalCount":238,"unassignedCount":105},"Piedraia hortae CBS 480.64":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"],["order","Capnodiales"],["family","Piedraiaceae"],["genus","Piedraia"],["species","Piedraia hortae"],["strain","Piedraia hortae CBS 480.64"]],"rank":"strain","taxID":"1314780","totalCount":1,"unassignedCount":1},"Pleosporales":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"]],"rank":"order","taxID":"92860","totalCount":21,"unassignedCount":4},"Pleosporineae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["suborder","Pleosporineae"]],"rank":"suborder","taxID":"715340","totalCount":8,"unassignedCount":1},"Pleosporomycetidae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"]],"rank":"subclass","taxID":"451868","totalCount":81,"unassignedCount":25},"Polytolypa hystricis UAMH7299":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Onygenales"],["genus","Polytolypa"],["species","Polytolypa hystricis"],["strain","Polytolypa hystricis UAMH7299"]],"rank":"strain","taxID":"1447883","totalCount":2,"unassignedCount":2},"Porphyra umbilicalis":{"lineageNames":[["superkingdom","Eukaryota"],["phylum","Rhodophyta"],["class","Bangiophyceae"],["order","Bangiales"],["family","Bangiaceae"],["genus","Porphyra"],["species","Porphyra umbilicalis"]],"rank":"species","taxID":"2786","totalCount":1,"unassignedCount":1},"Proteobacteria bacterium":{"lineageNames":[["superkingdom","Bacteria"],["phylum","Proteobacteria"],["species","Proteobacteria bacterium"]],"rank":"species","taxID":"1977087","totalCount":1,"unassignedCount":1},"Pseudogymnoascus":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["family","Pseudeurotiaceae"],["genus","Pseudogymnoascus"]],"rank":"genus","taxID":"78156","totalCount":6,"unassignedCount":2},"Pseudogymnoascus sp. VKM F-4514 (FW-929)":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["family","Pseudeurotiaceae"],["genus","Pseudogymnoascus"],["species","Pseudogymnoascus sp. VKM F-4514 (FW-929)"]],"rank":"species","taxID":"1420908","totalCount":1,"unassignedCount":1},"Pseudogymnoascus sp. VKM F-4519 (FW-2642)":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["family","Pseudeurotiaceae"],["genus","Pseudogymnoascus"],["species","Pseudogymnoascus sp. VKM F-4519 (FW-2642)"]],"rank":"species","taxID":"1420914","totalCount":1,"unassignedCount":1},"Pseudovirgaria hyperparasitica":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["order","Acrospermales"],["family","Acrospermaceae"],["genus","Pseudovirgaria"],["species","Pseudovirgaria hyperparasitica"]],"rank":"species","taxID":"470096","totalCount":2,"unassignedCount":2},"Punctularia strigosozonata HHB-11173 SS5":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Basidiomycota"],["subphylum","Agaricomycotina"],["class","Agaricomycetes"],["order","Corticiales"],["family","Punctulariaceae"],["genus","Punctularia"],["species","Punctularia strigosozonata"],["strain","Punctularia strigosozonata HHB-11173 SS5"]],"rank":"strain","taxID":"741275","totalCount":1,"unassignedCount":1},"Pyrenophora tritici-repentis":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Pleosporales"],["suborder","Pleosporineae"],["family","Pleosporaceae"],["genus","Pyrenophora"],["species","Pyrenophora tritici-repentis"]],"rank":"species","taxID":"45151","totalCount":1,"unassignedCount":1},"Pyronemataceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["clade","Opisthokonta"],["subphylum","Pezizomycotina"],["class","Pezizomycetes"],["order","Pezizales"],["family","Pyronemataceae"]],"rank":"family","taxID":"110846","totalCount":3,"unassignedCount":2},"Rachicladosporium antarcticum":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"],["order","Cladosporiales"],["family","Cladosporiaceae"],["genus","Rachicladosporium"],["species","Rachicladosporium antarcticum"]],"rank":"species","taxID":"1507870","totalCount":1,"unassignedCount":1},"Rhizodiscina lignyota":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Aulographales"],["family","Rhizodiscinaceae"],["genus","Rhizodiscina"],["species","Rhizodiscina lignyota"]],"rank":"species","taxID":"1504668","totalCount":3,"unassignedCount":3},"Rickenella mellea":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Basidiomycota"],["subphylum","Agaricomycotina"],["class","Agaricomycetes"],["order","Hymenochaetales"],["family","Rickenellaceae"],["genus","Rickenella"],["species","Rickenella mellea"]],"rank":"species","taxID":"50990","totalCount":4,"unassignedCount":4},"Rosellinia necatrix":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Xylariomycetidae"],["order","Xylariales"],["family","Xylariaceae"],["genus","Rosellinia"],["species","Rosellinia necatrix"]],"rank":"species","taxID":"77044","totalCount":2,"unassignedCount":2},"Rutstroemia sp. NJR-2017a WRK4":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Rutstroemiaceae"],["genus","Rutstroemia"],["species","Rutstroemia sp. NJR-2017a WRK4"]],"rank":"species","taxID":"2070412","totalCount":1,"unassignedCount":1},"Saitoella complicata NRRL Y-17804":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Taphrinomycotina"],["genus","Saitoella"],["species","Saitoella complicata"],["strain","Saitoella complicata NRRL Y-17804"]],"rank":"strain","taxID":"698492","totalCount":1,"unassignedCount":1},"Sclerotiniaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Sclerotiniaceae"]],"rank":"family","taxID":"28983","totalCount":4,"unassignedCount":2},"Serpula lacrymans var. lacrymans":{"lineageNames":[["superkingdom","Eukaryota"],["clade","Opisthokonta"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Basidiomycota"],["subphylum","Agaricomycotina"],["class","Agaricomycetes"],["subclass","Agaricomycetidae"],["order","Boletales"],["suborder","Coniophorineae"],["family","Serpulaceae"],["genus","Serpula"],["species","Serpula lacrymans"],["varietas","Serpula lacrymans var. lacrymans"]],"rank":"varietas","taxID":"341189","totalCount":1,"unassignedCount":1},"Sordariomycetes":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"]],"rank":"class","taxID":"147550","totalCount":44,"unassignedCount":18},"Sphaerosporella brunnea":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["clade","Opisthokonta"],["subphylum","Pezizomycotina"],["class","Pezizomycetes"],["order","Pezizales"],["family","Pyronemataceae"],["genus","Sphaerosporella"],["species","Sphaerosporella brunnea"]],"rank":"species","taxID":"1250544","totalCount":1,"unassignedCount":1},"Stromatinia cepivora":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Sclerotiniaceae"],["genus","Stromatinia"],["species","Stromatinia cepivora"]],"rank":"species","taxID":"38492","totalCount":1,"unassignedCount":1},"Talaromyces":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Trichocomaceae"],["genus","Talaromyces"]],"rank":"genus","taxID":"5094","totalCount":7,"unassignedCount":3},"Talaromyces islandicus":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Trichocomaceae"],["genus","Talaromyces"],["section","Talaromyces sect. Islandici"],["species","Talaromyces islandicus"]],"rank":"species","taxID":"28573","totalCount":1,"unassignedCount":1},"Talaromyces pinophilus":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Trichocomaceae"],["genus","Talaromyces"],["section","Talaromyces sect. Talaromyces"],["species","Talaromyces pinophilus"]],"rank":"species","taxID":"1472165","totalCount":1,"unassignedCount":1},"Talaromyces sect. Talaromyces":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Trichocomaceae"],["genus","Talaromyces"],["section","Talaromyces sect. Talaromyces"]],"rank":"section","taxID":"2752537","totalCount":3,"unassignedCount":1},"Talaromyces stipitatus ATCC 10500":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Eurotiales"],["family","Trichocomaceae"],["genus","Talaromyces"],["section","Talaromyces sect. Talaromyces"],["species","Talaromyces stipitatus"],["strain","Talaromyces stipitatus ATCC 10500"]],"rank":"strain","taxID":"441959","totalCount":1,"unassignedCount":1},"Terfezia claveryi":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["clade","Opisthokonta"],["subphylum","Pezizomycotina"],["class","Pezizomycetes"],["order","Pezizales"],["family","Pezizaceae"],["genus","Terfezia"],["species","Terfezia claveryi"]],"rank":"species","taxID":"139407","totalCount":1,"unassignedCount":1},"Terrabacteria group":{"lineageNames":[["superkingdom","Bacteria"],["clade","Terrabacteria group"]],"rank":"clade","taxID":"1783272","totalCount":10,"unassignedCount":1},"Thelonectria olida":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Hypocreomycetidae"],["order","Hypocreales"],["family","Nectriaceae"],["genus","Thelonectria"],["species","Thelonectria olida"]],"rank":"species","taxID":"1576542","totalCount":2,"unassignedCount":2},"Tothia fuscella":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Venturiales"],["family","Cylindrosympodiaceae"],["genus","Tothia"],["species","Tothia fuscella"]],"rank":"species","taxID":"1048955","totalCount":1,"unassignedCount":1},"Trebouxia sp. A1-2":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Viridiplantae"],["phylum","Chlorophyta"],["clade","core chlorophytes"],["class","Trebouxiophyceae"],["order","Trebouxiales"],["family","Trebouxiaceae"],["genus","Trebouxia"],["species","Trebouxia sp. A1-2"]],"rank":"species","taxID":"2608996","totalCount":156,"unassignedCount":156},"Trichoderma gamsii":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Hypocreomycetidae"],["order","Hypocreales"],["family","Hypocreaceae"],["genus","Trichoderma"],["species","Trichoderma gamsii"]],"rank":"species","taxID":"398673","totalCount":1,"unassignedCount":1},"Trichoglossum hirsutum":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Geoglossomycetes"],["order","Geoglossales"],["family","Geoglossaceae"],["genus","Trichoglossum"],["species","Trichoglossum hirsutum"]],"rank":"species","taxID":"265104","totalCount":13,"unassignedCount":13},"Trichophyton":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Eurotiomycetidae"],["order","Onygenales"],["family","Arthrodermataceae"],["genus","Trichophyton"]],"rank":"genus","taxID":"5550","totalCount":1,"unassignedCount":1},"Umbilicaria":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Umbilicariomycetidae"],["order","Umbilicariales"],["family","Umbilicariaceae"],["genus","Umbilicaria"]],"rank":"genus","taxID":"87270","totalCount":3,"unassignedCount":1},"Umbilicaria muhlenbergii":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Umbilicariomycetidae"],["order","Umbilicariales"],["family","Umbilicariaceae"],["genus","Umbilicaria"],["species","Umbilicaria muhlenbergii"]],"rank":"species","taxID":"2738368","totalCount":2,"unassignedCount":2},"Umbilicariaceae":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["class","Lecanoromycetes"],["clade","Opisthokonta"],["subclass","Umbilicariomycetidae"],["order","Umbilicariales"],["family","Umbilicariaceae"]],"rank":"family","taxID":"87265","totalCount":4,"unassignedCount":1},"Venturia nashicola":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Venturiales"],["family","Venturiaceae"],["genus","Venturia"],["species","Venturia nashicola"]],"rank":"species","taxID":"86259","totalCount":1,"unassignedCount":1},"Venustampulla echinocandica":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["order","Helotiales"],["family","Pleuroascaceae"],["genus","Venustampulla"],["species","Venustampulla echinocandica"]],"rank":"species","taxID":"2656787","totalCount":3,"unassignedCount":3},"Verruconis gallopava":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Pleosporomycetidae"],["order","Venturiales"],["family","Sympoventuriaceae"],["genus","Verruconis"],["species","Verruconis gallopava"]],"rank":"species","taxID":"253628","totalCount":1,"unassignedCount":1},"Viridothelium virens":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["order","Trypetheliales"],["family","Trypetheliaceae"],["genus","Viridothelium"],["species","Viridothelium virens"]],"rank":"species","taxID":"1048519","totalCount":4,"unassignedCount":4},"Xylaria flabelliformis":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Xylariomycetidae"],["order","Xylariales"],["family","Xylariaceae"],["genus","Xylaria"],["species","Xylaria flabelliformis"]],"rank":"species","taxID":"2512241","totalCount":1,"unassignedCount":1},"Xylaria multiplex":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Xylariomycetidae"],["order","Xylariales"],["family","Xylariaceae"],["genus","Xylaria"],["species","Xylaria multiplex"]],"rank":"species","taxID":"323545","totalCount":1,"unassignedCount":1},"Xylariales":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Sordariomycetes"],["subclass","Xylariomycetidae"],["order","Xylariales"]],"rank":"order","taxID":"37989","totalCount":8,"unassignedCount":2},"Xylogone sp. PMI_703":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["genus","Xylogone"],["species","Xylogone sp. PMI_703"]],"rank":"species","taxID":"2614602","totalCount":1,"unassignedCount":1},"Xylona heveae TC161":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Xylonomycetes"],["order","Xylonales"],["family","Xylonaceae"],["genus","Xylona"],["species","Xylona heveae"],["strain","Xylona heveae TC161"]],"rank":"strain","taxID":"1328760","totalCount":40,"unassignedCount":40},"Zopfia rhizophila CBS 207.26":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["family","Zopfiaceae"],["genus","Zopfia"],["species","Zopfia rhizophila"],["strain","Zopfia rhizophila CBS 207.26"]],"rank":"strain","taxID":"1314779","totalCount":2,"unassignedCount":2},"Zymoseptoria tritici":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Dothideomycetes"],["subclass","Dothideomycetidae"],["order","Mycosphaerellales"],["family","Mycosphaerellaceae"],["genus","Zymoseptoria"],["species","Zymoseptoria tritici"]],"rank":"species","taxID":"1047171","totalCount":1,"unassignedCount":1},"cellular organisms":{"lineageNames":[["no rank","cellular organisms"]],"rank":"no rank","taxID":"131567","totalCount":11,"unassignedCount":11},"leotiomyceta":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["clade","leotiomyceta"]],"rank":"clade","taxID":"716546","totalCount":2893,"unassignedCount":2893},"root":{"lineageNames":[["root", "root"]],"rank":"root","taxID":"NA","totalCount":1201,"unassignedCount":1201},"saccharomyceta":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["clade","Opisthokonta"],["clade","saccharomyceta"]],"rank":"clade","taxID":"716545","totalCount":6,"unassignedCount":6},"sordariomyceta":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["clade","sordariomyceta"]],"rank":"clade","taxID":"715989","totalCount":23,"unassignedCount":23},"unclassified Chaetothyriales":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Eurotiomycetes"],["subclass","Chaetothyriomycetidae"],["order","Chaetothyriales"],["no rank","unclassified Chaetothyriales"]],"rank":"no rank","taxID":"316340","totalCount":1,"unassignedCount":1},"unclassified Genomoviridae":{"lineageNames":[["superkingdom","Viruses"],["clade","Monodnaviria"],["kingdom","Shotokuvirae"],["phylum","Cressdnaviricota"],["class","Repensiviricetes"],["order","Geplafuvirales"],["family","Genomoviridae"],["no rank","unclassified Genomoviridae"]],"rank":"no rank","taxID":"1941235","totalCount":1,"unassignedCount":1},"unclassified Pseudogymnoascus":{"lineageNames":[["superkingdom","Eukaryota"],["kingdom","Fungi"],["subkingdom","Dikarya"],["phylum","Ascomycota"],["subphylum","Pezizomycotina"],["clade","Opisthokonta"],["class","Leotiomycetes"],["family","Pseudeurotiaceae"],["genus","Pseudogymnoascus"],["no rank","unclassified Pseudogymnoascus"]],"rank":"no rank","taxID":"2637121","totalCount":2,"unassignedCount":2},"uncultured Segetibacter sp.":{"lineageNames":[["superkingdom","Bacteria"],["clade","FCB group"],["phylum","Bacteroidota"],["class","Chitinophagia"],["order","Chitinophagales"],["family","Chitinophagaceae"],["genus","Segetibacter"],["species","uncultured Segetibacter sp."]],"rank":"species","taxID":"481133","totalCount":5,"unassignedCount":5}}');

/* ===== PREPROCESSING THE DATA ===== */
var rankPatternFull:string[] = ["root", "superkingdom", "kingdom", "subkingdom", "superphylum", "phylum", "subphylum", "superclass", "class", "subclass", "superorder", "order", "suborder", "superfamily", "family", "subfamily", "supergenus", "genus", "subgenus", "superspecies", "species"];

var allTaxaReduced:object = JSON.parse(JSON.stringify(allTaxa));
var reducibleTaxa:string[] = [];
var taxaWithReducibleLineages:string[] = [];

// Get the names of all taxa with reducible lineages:
for (let taxName of Object.keys(allTaxa)) {
    let lineage:string[][] = allTaxa[taxName].lineageNames;
    for (let i=0; i<lineage.length; i++) {
        if (rankPatternFull.indexOf(lineage[i][0]) === -1) {
            taxaWithReducibleLineages.push(taxName);
            break;
        }
    }
}

// Reduce and alter in allTaxaReduced:
for (let taxName of taxaWithReducibleLineages) {
    let lineage:string[][] = allTaxa[taxName].lineageNames;
    let reducedLineage: string[][] = lineage.map(item => item);
    for (let i=lineage.length-1; i>=0; i--) {
        if (rankPatternFull.indexOf(lineage[i][0]) === -1) {
            reducedLineage.splice(i,1);
        }
    }
    allTaxaReduced[taxName].lineageNames = reducedLineage;
}

// Find all reducible taxa.
for (let taxName of Object.keys(allTaxaReduced)) {
    let rank:string = allTaxaReduced[taxName].rank;
    let lineage:string[][] = allTaxaReduced[taxName].lineageNames;
    if (!lineage[lineage.length - 1] || rank !== lineage[lineage.length - 1][0]) {
        reducibleTaxa.push(taxName);
    }
}

// Set "root" as the first ancestor of every taxon.
for (let taxName of Object.keys(allTaxaReduced)) {
    if (taxName !== "root") {
        allTaxaReduced[taxName].lineageNames.unshift(allTaxaReduced["root"].lineageNames[0]);
    }
}

// Finally, reduce allTaxa, ridding it of all taxa with weird, hardly-placable ranks - but making sure no information is lost.
for (let taxName of reducibleTaxa) {
    let unassignedCount = allTaxa[taxName].unassignedCount;
    let lineage:string[][] = allTaxaReduced[taxName].lineageNames;
    let lastPredecessor = lineage[lineage.length-1][1];
    if (allTaxaReduced[lastPredecessor]) {
        allTaxaReduced[lastPredecessor]["unassignedCount"] += unassignedCount;
        delete allTaxaReduced[taxName];
    } else {
        let newRank = lineage[lineage.length-1][0];
        let totalCount = allTaxa[taxName].totalCount;
        allTaxaReduced[lastPredecessor] = {};
        allTaxaReduced[lastPredecessor]["lineageNames"] = lineage;
        allTaxaReduced[lastPredecessor]["rank"] = newRank;
        allTaxaReduced[lastPredecessor]["totalCount"] = totalCount;
        allTaxaReduced[lastPredecessor]["unassignedCount"] = unassignedCount;
        delete allTaxaReduced[taxName];
    }
}


// Add taxa with no unassignedCounts as objects in allTaxaReduced, accounting for the fact that there are different taxa with the same name.
var newlyAdded:string[] = [];
for (let taxName of Object.keys(allTaxaReduced)) {
    let unassignedCount = allTaxaReduced[taxName].unassignedCount;
    let lineage:string[][] = allTaxaReduced[taxName].lineageNames;
    for (let predecessor of lineage) {
        if (Object.keys(allTaxaReduced).filter(item => item.startsWith(predecessor[1])).length === 0) {
            newlyAdded.push(predecessor[1]);
            allTaxaReduced[predecessor[1]] = {};
            allTaxaReduced[predecessor[1]]["rank"] = predecessor[0];
            allTaxaReduced[predecessor[1]]["lineageNames"] = lineage.slice(0, lineage.indexOf(predecessor) + 1);
            allTaxaReduced[predecessor[1]]["totalCount"] = unassignedCount;
            allTaxaReduced[predecessor[1]]["unassignedCount"] = 0;
        }
        else {
            let falseNamesakes:string[] = Object.keys(allTaxaReduced).filter(item => item.startsWith(predecessor[1]) && allTaxaReduced[item]["rank"] === predecessor[0]);
            let trueNamesakes:string[] = Object.keys(allTaxaReduced).filter(item => item.startsWith(predecessor[1]) && allTaxaReduced[item]["rank"] !== predecessor[0]);


            if (falseNamesakes.length > 0) {
                if (newlyAdded.indexOf(falseNamesakes[0]) > -1) {
                    allTaxaReduced[falseNamesakes[0]]["totalCount"] += unassignedCount;
                }
            }
            if (trueNamesakes.length > 0)  {
                let newName:string = predecessor[1] + " " + predecessor[0];
                newlyAdded.push(newName);
                allTaxaReduced[newName] = {};
                allTaxaReduced[newName]["rank"] = predecessor[0];
                allTaxaReduced[newName]["lineageNames"] = lineage.slice(0, lineage.indexOf(predecessor) + 1);
                allTaxaReduced[newName]["totalCount"] = unassignedCount;
                allTaxaReduced[newName]["unassignedCount"] = 0;
            }
        }
    }
}

// Replace names in lineages with new names from previous step.
for (let taxName of Object.keys(allTaxaReduced)) {
    let lineage:string[][] = allTaxaReduced[taxName].lineageNames;
    for (let predecessor of lineage) {
        if (Object.keys(allTaxaReduced).filter(item => item.startsWith(predecessor[1])).length > 1) {
            let newName:string = Object.keys(allTaxaReduced).filter(item => item.startsWith(predecessor[1])).filter(item1 => allTaxaReduced[item1]["rank"] === predecessor[0])[0];
            predecessor[1] = newName;
        }
    }
}

// Do not consider taxa without unassigned counts in croppedLineages() later.
for (let taxName of Object.keys(allTaxaReduced)) {
    if (allTaxaReduced[taxName]["unassignedCount"] === 0){
        allTaxaReduced[taxName]["skip"] = true;
    }
}

// Sort before separating rank from taxon.
var lineagesFull:string[][] = [];
for (let taxName of Object.keys(allTaxaReduced).filter(item => !allTaxaReduced[item]["skip"])) {
    lineagesFull.push(allTaxaReduced[taxName].lineageNames.map(item => item[1] + "_*_" + item[0]))
}
lineagesFull.sort();

// Separate.
var lineagesNames:string[][] = [];
var lineagesRanks:string[][] = [];
for (let lineage of lineagesFull) {
    var lineageNames:string[] = lineage.map(item => item.split("_*_")[0]);
    var lineageRanks:string[] = lineage.map(item => item.split("_*_")[1]);
    lineagesNames.push(lineageNames);
    lineagesRanks.push(lineageRanks);
}

newlyAdded = newlyAdded.filter((v, i, a) => a.indexOf(v) === i);

var colors:string[] = [];
var colorOffset:number = Math.round(Math.random() * 100); //84, 98, 31, 20, 1, 2
for (let i=0; i<7; i++) {
    var r = Math.sin(0.3 * colorOffset + 4) * 55 + 200;
    var g = Math.sin(0.3 * colorOffset + 2) * 55 + 200;
    var b = Math.sin(0.3 * colorOffset) * 55 + 200;
    var newColor = `rgb(${round(r,0)}, ${round(g,0)}, ${round(b,0)})`;
    colors.push(newColor);
    colorOffset += 3;
}

/* ===== DEFINING THE REACT COMPONENT ===== */
class PlotDrawing extends React.Component<{lineages:string[][], ranks:string[][]}, {root:string, layer:number, collapse:boolean, horizontalShift:number, verticalShift:number, taxonSpecifics:object, croppedLineages:string[][], alignedCroppedLineages:string[][], croppedRanks:string[][], unassignedCounts:string[][], structureByDegrees:object, structureByTaxon: object, svgPaths:object, shapeComponents:object, shapeCenters:object, taxonLabels:object, taxonShapes:object, colors:string[], ancestors:string[], rankPattern:string[], alteration:string, totalUnassignedCount:number, numberOfLayers:number, layerWidth:number, count:number}> {
    constructor(props) {
        super(props);
        this.state = {
            root: "root",
            layer: 0,
            collapse: false,
            horizontalShift: viewportDimensions["cx"],
            verticalShift: viewportDimensions["cy"],
            taxonSpecifics: {},
            croppedLineages: [],
            alignedCroppedLineages: [],
            croppedRanks: [],
            unassignedCounts: [],
            structureByDegrees: {},
            structureByTaxon: {},
            svgPaths: {},
            shapeComponents: {},
            shapeCenters: {},
            taxonLabels: {},
            taxonShapes: {},
            colors: colors, //["d27979", "c0d279", "79d29c", "799cd2", "c079d2"],
            ancestors: ["root"],
            rankPattern: [],
            alteration: "allEqual",
            totalUnassignedCount: 0,
            numberOfLayers: -1,
            layerWidth: -1,
            count: 0
        }
    }

    componentDidMount() {
        this.cropLineages();
        addEventListener("resize", (event) => {
            var newViewportDimensions = getViewportDimensions();
            viewportDimensions = newViewportDimensions;
            this.setState({horizontalShift: newViewportDimensions["cx"], verticalShift: newViewportDimensions["cy"], alteration:this.state.alteration}, () => this.cropLineages());
        })
        document.getElementById("radio-input")!.addEventListener("change", () => {
            let alteration:any = document.querySelector('input[name="radio"]:checked')!.getAttribute("id");
            this.cropLineages(this.state.root, this.state.layer, alteration, this.state.collapse);
        })
        document.getElementById("checkbox-input")!.addEventListener("change", () => {
            let element:any =  document.getElementById("checkbox-input")!;
            let checked:boolean = element.checked;
            this.cropLineages(this.state.root, this.state.layer, this.state.alteration, checked);
        })
    }

    componentDidUpdate() {
        var abbreviatables:string[] = this.checkTaxonLabelWidth();
        if (abbreviatables.length > 0) {
            this.abbreviate(abbreviatables);
        } else if (abbreviatables.length === 0 && this.state.count === 0) {
            this.setState({count: 1});
        } 
    }

    // Leave only relevant lineages and crop them if necessary.
    cropLineages(root=this.state.root, layer=this.state.layer, alteration=this.state.alteration, collapse=this.state.collapse):void {

        // Get only relevant lineages.
        var croppedLineages:string[][] = [];
        var croppedRanks:string[][] = [];
        let rootTaxa:string[] = root.split(" & ");
        for (let i=0; i<this.props.lineages.length; i++) {
            if (rootTaxa.indexOf(this.props.lineages[i][layer]) > -1) {
                croppedLineages.push(this.props.lineages[i]);
                croppedRanks.push(this.props.ranks[i]);
            }
        }

        // Crop lineages so they start with clicked taxon.
        var ancestors:string[] = [""];
        if (croppedLineages[0]) {     
            ancestors = croppedLineages[0].slice(0, layer);
        }
        if (rootTaxa.length > 1) {
            croppedLineages = croppedLineages.map(item => item.slice(layer-1));
            croppedRanks = croppedRanks.map(item => item.slice(layer-1));
        }
        else {
            croppedLineages = croppedLineages.map(item => item.slice(layer));
            croppedRanks = croppedRanks.map(item => item.slice(layer));
        }

        // Get minimal rank pattern for this particular plot to prepare for alignment.
        var ranksUnique = croppedRanks.reduce((accumulator, value) => accumulator.concat(value), []);
        ranksUnique = ranksUnique.filter((value, index, self) => Boolean(value) && self.indexOf(value) === index);
        var rankPattern:string[] = rankPatternFull.filter(item => ranksUnique.indexOf(item) > -1);

        // Mary taxa if necessary.
        if (alteration.startsWith("marriedTaxa")) {
            let cropped = this.marryTaxa(croppedLineages, croppedRanks, alteration);
            croppedLineages = cropped[0];
            croppedRanks = cropped[1];
        }

        // Collapse lineages if necessary.
        if (collapse) {
            let arr:any = this.collapse(croppedLineages, croppedRanks);
            croppedLineages = arr[0];
            croppedRanks = arr[1];
        }
        
        // Align cropped lineages by adding null as placeholder for missing ranks.
        var alignedCropppedLineages:string[][] = [];
        var alignedCropppedRanks:string[][] = [];
        for (let i=0; i<croppedLineages.length; i++) {
            var alignedLineage:any = new Array(rankPattern.length).fill(null);
            var alignedRank:any = new Array(rankPattern.length).fill(null);
            for (let j=0; j<croppedRanks[i].length; j++) {
                var index = rankPattern.indexOf(croppedRanks[i][j]);
                if (index > -1) { 
                    alignedLineage.splice(index, 1, croppedLineages[i][j]);
                    alignedRank.splice(index, 1, croppedRanks[i][j]);
                }
            }
            alignedCropppedLineages.push(alignedLineage);
            alignedCropppedRanks.push(alignedRank);
        }

        // Save in state object taxonSpecifics.
        var taxonSpecifics:object = {};
        for (let i=0; i<croppedLineages.length; i++) {
            var taxName:string = croppedLineages[i][croppedLineages[i].length-1];
            if (taxName.includes("&")) {
                taxonSpecifics[taxName] = {};
                taxonSpecifics[taxName]["rank"] = croppedRanks[i][croppedRanks[i].length-1]
                taxonSpecifics[taxName]["croppedLineage"] = croppedLineages[i];
                taxonSpecifics[taxName]["alignedCroppedLineage"] = alignedCropppedLineages[i];
                let taxa:string[] = taxName.split(" & ");
                let unassignedCount:number = taxa.map(item => allTaxaReduced[item]["totalCount"]).reduce((accumulator, value) => accumulator + value, 0);
                taxonSpecifics[taxName]["unassignedCount"] = unassignedCount;
                taxonSpecifics[taxName]["totalCount"] = unassignedCount;
                taxonSpecifics[taxName]["firstLayerUnaligned"] = croppedLineages[i].length-1;
                taxonSpecifics[taxName]["firstLayerAligned"] = alignedCropppedLineages[i].indexOf(taxName);
            } else {
                taxonSpecifics[taxName] = {};
                taxonSpecifics[taxName]["rank"] = croppedRanks[i][croppedRanks[i].length-1]
                taxonSpecifics[taxName]["croppedLineage"] = croppedLineages[i];
                taxonSpecifics[taxName]["alignedCroppedLineage"] = alignedCropppedLineages[i];
                taxonSpecifics[taxName]["unassignedCount"] = allTaxaReduced[taxName].unassignedCount;
                taxonSpecifics[taxName]["totalCount"] = allTaxaReduced[taxName]["totalCount"];
                taxonSpecifics[taxName]["firstLayerUnaligned"] = croppedLineages[i].length-1;
                taxonSpecifics[taxName]["firstLayerAligned"] = alignedCropppedLineages[i].indexOf(taxName);
            }
        }
        let totalUnassignedCount:number = 0;
        for (let taxName of Object.keys(taxonSpecifics)) {
            totalUnassignedCount += taxonSpecifics[taxName]["unassignedCount"];
        }

        // Make all lineages take up the same amount of degrees in the plot if necessary.
        if (alteration === "allEqual") {
            for (let taxName of Object.keys(taxonSpecifics)) {
                taxonSpecifics[taxName]["unassignedCount"] = 1;
            }
        }
        for (let i=0; i<croppedLineages.length; i++) {
            for (let j=croppedLineages[i].length-2; j>=0; j--) {
                if (!taxonSpecifics[croppedLineages[i][j]]) {
                    taxonSpecifics[croppedLineages[i][j]] = {};
                    taxonSpecifics[croppedLineages[i][j]]["rank"] = croppedRanks[i][j];
                    taxonSpecifics[croppedLineages[i][j]]["croppedLineage"] = croppedLineages[i].slice(0, j+1);
                    var index = alignedCropppedLineages[i].indexOf(croppedLineages[i][j]);
                    taxonSpecifics[croppedLineages[i][j]]["alignedCroppedLineage"] = alignedCropppedLineages[i].slice(0, index+1);
                    taxonSpecifics[croppedLineages[i][j]]["unassignedCount"] = 0;
                    taxonSpecifics[croppedLineages[i][j]]["totalCount"] = allTaxaReduced[croppedLineages[i][j]]["totalCount"];
                    taxonSpecifics[croppedLineages[i][j]]["firstLayerUnaligned"] = j;
                    taxonSpecifics[croppedLineages[i][j]]["firstLayerAligned"] = index;
                }
            }
        }

        // Continue if more than one lineage fulfilling the criteria was found.
        if (croppedLineages.length > 1) {
            this.assignDegrees({"root": root, "layer": layer, "rankPattern": rankPattern, "taxonSpecifics": taxonSpecifics, "croppedLineages": croppedLineages, "alignedCroppedLineages": alignedCropppedLineages, "ancestors": ancestors, "alteration": alteration, "collapse": collapse, "totalUnassignedCount": totalUnassignedCount, count: 0});
        }
    }

    marryTaxa(croppedLineages:string[][], croppedRanks:string[][], alteration="marriedTaxaI") {
        var totalUnassignedCounts:number = 0;
        for (let lineage of croppedLineages) {
            totalUnassignedCounts += allTaxaReduced[lineage[lineage.length - 1]]["unassignedCount"];
        }
        var reducibleLineages:any = [];
        var threshold:number = 0.01;
        for (let lineage of croppedLineages) {
            if (allTaxaReduced[lineage[lineage.length - 1]]["totalCount"] / totalUnassignedCounts < threshold) {
                let lineageNumber:number = croppedLineages.indexOf(lineage);
                let lastWayTooThinLayer:number = lineage.length - 1;
                for (let i=lineage.length-2; i>=0; i--) {
                    if (allTaxaReduced[lineage[i]]["totalCount"] / totalUnassignedCounts >= threshold) {
                        lastWayTooThinLayer = i+1;
                        break;
                    }
                };
                let partialLineage:string[] = lineage.slice(0, lastWayTooThinLayer);
                reducibleLineages.push([lineageNumber, partialLineage])
            }
        }
        var reductionGroups:object = {};
        if (alteration === "marriedTaxaI") {
            for (let item of reducibleLineages) {
                if (!reductionGroups[item[1].join("")]) {
                    reductionGroups[item[1].join("")] = {};
                    reductionGroups[item[1].join("")]["spliceAt"] = item[1].length;
                    reductionGroups[item[1].join("")]["index"] = [item[0]];
                    reductionGroups[item[1].join("")]["commonName"] = croppedLineages[item[0]][item[1].length];
                } else {
                    reductionGroups[item[1].join("")]["index"].push(item[0]);
                    let taxa:string = reductionGroups[item[1].join("")]["commonName"].split(" & ");
                    if (taxa.indexOf(croppedLineages[item[0]][item[1].length]) === -1) {
                        reductionGroups[item[1].join("")]["commonName"] += ` & ${croppedLineages[item[0]][item[1].length]}`;
                    }
                }
            }
        }
        else {
            for (let item of reducibleLineages) {
                if (!reductionGroups[item[1].join("")]) {
                    reductionGroups[item[1].join("")] = {};
                    reductionGroups[item[1].join("")]["spliceAt"] = item[1].length;
                    reductionGroups[item[1].join("")]["index"] = [item[0]];
                } else {
                    reductionGroups[item[1].join("")]["index"].push(item[0]);
                }
            }

            // Sort indices of reduction groups in ascending order.
            for (let group of Object.keys(reductionGroups)) {
                let spliceAt:number = reductionGroups[group]["spliceAt"];
                reductionGroups[group]["index"].sort((index1, index2) => allTaxaReduced[croppedLineages[index1][spliceAt]]["totalCount"] - allTaxaReduced[croppedLineages[index2][spliceAt]]["totalCount"])
                let renameables:string[] = reductionGroups[group]["index"].map(item => croppedLineages[item][spliceAt]);
                let temporaryObject:object = {};
                for (let i=0; i<renameables.length; i++) {
                    let renameable:string = renameables[i];
                    if (!temporaryObject[renameable]) {
                        temporaryObject[renameable] = [reductionGroups[group]["index"][i]]
                    }
                    else {
                        temporaryObject[renameable].push(reductionGroups[group]["index"][i])
                    }
                }
                let permanentObject:object = {};
                for (let key of Object.keys(temporaryObject)) {
                    permanentObject[temporaryObject[key][0]] = temporaryObject[key];
                }
                reductionGroups[group]["references"] = permanentObject;
                reductionGroups[group]["minimalIndexArray"] = Object.keys(permanentObject).sort((index1, index2) => allTaxaReduced[croppedLineages[index1][spliceAt]]["totalCount"] - allTaxaReduced[croppedLineages[index2][spliceAt]]["totalCount"])
            }
            for (let group of Object.keys(reductionGroups)) {
                let minimalIndexArray:number[] = reductionGroups[group]["minimalIndexArray"].map(item => parseInt(item));
                let indexBeginning:number = 0;
                let indexEnd:number = minimalIndexArray.length - 1;
                let addNext:string = "indexBeginning";
                let sum:number = 0;
                let newIndexGroup:number[] = [];
                let newGroups:any = [];
                let iterations:number = minimalIndexArray.length % 2 === 0 ? minimalIndexArray.length / 2 : Math.floor(minimalIndexArray.length / 2) + 1;
                let spliceAt:number = reductionGroups[group]["spliceAt"];
                while ((minimalIndexArray.length % 2 === 0 && indexBeginning <= iterations && (minimalIndexArray.length - 1) - indexEnd < iterations) || (minimalIndexArray.length % 2 === 1 && indexBeginning !== iterations && (minimalIndexArray.length - 1) - indexEnd < iterations)) {

                    if (addNext === "indexBeginning") {
                        let newIndex:number = minimalIndexArray[indexBeginning];
                        newIndexGroup.push(newIndex);
                        let totalCount:number = allTaxaReduced[croppedLineages[newIndex][spliceAt]]["totalCount"];
                        let additive:number = totalCount / totalUnassignedCounts;
                        sum += additive;
                        addNext = "indexEnd";
                        indexBeginning++;
                    }
                    else {
                        let newIndex:number = minimalIndexArray[indexEnd];
                        newIndexGroup.push(newIndex);
                        let totalCount:number = allTaxaReduced[croppedLineages[newIndex][spliceAt]]["totalCount"];
                        let additive:number = totalCount / totalUnassignedCounts;
                        sum += additive;
                        addNext = "indexBeginning";
                        indexEnd--;
                    }

                    if (sum >= threshold) {
                        newGroups.push(newIndexGroup);
                        newIndexGroup = [];
                        sum = 0;
                    }
                }
                if (newIndexGroup.length !== 0) {
                    if (newGroups.length === 0) {
                        newGroups = [[]];
                    }
                    let lastGroup:number[] = newGroups[newGroups.length - 1];
                    lastGroup.splice(lastGroup.length, 0, ...newIndexGroup);
                    newGroups.push(newIndexGroup);
                }
                newGroups = newGroups.map(item => item.map(item1 => reductionGroups[group]["references"][item1]));
                newGroups = newGroups.map(item => item.reduce((accumulator, value) => accumulator.concat(value), []));
                reductionGroups[group]["newGroups"] = newGroups;
            }
            let newReductionGroups:object = {};
            for (let group of Object.keys(reductionGroups)) {
                for (let i=0; i<reductionGroups[group]["newGroups"].length; i++) {
                    newReductionGroups[`${group}-${i}`] = {};
                    newReductionGroups[`${group}-${i}`]["spliceAt"] = reductionGroups[group]["spliceAt"];
                    newReductionGroups[`${group}-${i}`]["index"] = reductionGroups[group]["newGroups"][i];
                    var names:string[] = reductionGroups[group]["newGroups"][i].map(item => croppedLineages[item][reductionGroups[group]["spliceAt"]]).filter((v, i, a) => a.indexOf(v) === i);
                    newReductionGroups[`${group}-${i}`]["commonName"] = names.join(" & ");
                }
            }
            reductionGroups = newReductionGroups;
        }

        for (let group of Object.keys(reductionGroups).filter(item => reductionGroups[item]["index"].length > 1)) {
            for (let index of reductionGroups[group]["index"]) {
                croppedLineages[index].splice(reductionGroups[group]["spliceAt"], croppedLineages[index].length - reductionGroups[group]["spliceAt"], reductionGroups[group]["commonName"]);
                croppedRanks[index].splice(reductionGroups[group]["spliceAt"] + 1);
            }
        }
        for (let i=croppedLineages.length-1; i>=0; i--) {
            let croppedLineageCopy = croppedLineages.map(item => JSON.stringify(item));
            let lineage:string = croppedLineageCopy[i];
            let lastIndex = i;
            let firstIndex = croppedLineageCopy.indexOf(lineage);
            if (firstIndex !== lastIndex) {
                croppedLineages.splice(lastIndex, 1);
                croppedRanks.splice(lastIndex, 1);
            }
        }
        return [croppedLineages, croppedRanks];
    }

    // Assign each cropped lineage a start and end degree.
    assignDegrees(newState:object):void {
        var alignedCroppedLineages = newState["alignedCroppedLineages"] ? newState["alignedCroppedLineages"] : this.state.alignedCroppedLineages;
        var croppedLineages = newState["croppedLineages"] ? newState["croppedLineages"] : this.state.taxonSpecifics;
        var taxonSpecifics = newState["taxonSpecifics"] ? newState["taxonSpecifics"] : this.state.taxonSpecifics;
        var totalUnassignedCounts:number = 0;
        for (let taxName of Object.keys(taxonSpecifics).filter(item => taxonSpecifics[item]["unassignedCount"] !== 0)) {
            totalUnassignedCounts += taxonSpecifics[taxName]["unassignedCount"];
        }

        let ranges:object = {};
        let startDeg:number = 0;
        for (let i=0; i<croppedLineages.length; i++) {
            for (let j=0; j<croppedLineages[i].length; j++) {
                let currentTaxon:string = croppedLineages[i][j];

                let alignedIndex:number = taxonSpecifics[currentTaxon]["firstLayerAligned"];
                if (!ranges[currentTaxon]) {
                    ranges[currentTaxon] = {};
                    let firstLayer:number = taxonSpecifics[currentTaxon]["firstLayerUnaligned"] === 1 ? 1 : alignedIndex;
                    ranges[currentTaxon]["layers"] = [firstLayer];
                    ranges[currentTaxon]["degrees"] = [startDeg];
                }

                let lastLayer:number;
                if (j === croppedLineages[i].length - 1) {
                    lastLayer = alignedCroppedLineages[0].length;
                } else {
                    lastLayer = alignedCroppedLineages[i].indexOf(croppedLineages[i][j+1]);
                }
                ranges[currentTaxon]["layers"].push(lastLayer);
                ranges[currentTaxon]["degrees"].push(startDeg + (taxonSpecifics[croppedLineages[i][croppedLineages[i].length-1]]["unassignedCount"] * 360) / totalUnassignedCounts);
            }
            startDeg += (taxonSpecifics[croppedLineages[i][croppedLineages[i].length-1]]["unassignedCount"] * 360) / totalUnassignedCounts;
        }

        for (let taxName of Object.keys(ranges)) {
            for (let i=ranges[taxName]["layers"].length-1; i>=1; i--) {
                if (ranges[taxName]["layers"][i] === ranges[taxName]["layers"][i-1]) {
                    let newValue:number = ranges[taxName]["degrees"][i];
                    
                    ranges[taxName]["degrees"][i-1] = newValue;
                    ranges[taxName]["layers"].splice(i,1);
                    ranges[taxName]["degrees"].splice(i,1);
                }
            }
        }

        for (let taxName of Object.keys(taxonSpecifics)) {
            taxonSpecifics[taxName]["layers"] = ranges[taxName]["layers"];
            taxonSpecifics[taxName]["degrees"] = ranges[taxName]["degrees"];
        }

        this.calculateSVGPaths(newState);
    }

    // If collapse=true, remove taxa that only come up in the lineage of one other taxon and have no unassigned counts of their own.
    collapse(croppedLineages:string[][], croppedRanks:string[][]):string[][][] {
        var lineagesCopy:string[][] = JSON.parse(JSON.stringify(croppedLineages));
        var ranksCopy:string[][] = JSON.parse(JSON.stringify(croppedRanks));
        var layers = getLayers(lineagesCopy);

        for (let i=0; i<layers.length-1; i++) {
            for (let j=0; j<layers[i].length; j++) {
                if (layers[i].filter(item => item === layers[i][j]).length === 1 && Boolean(layers[i+1][j])) {
                    lineagesCopy[j].splice(i,1, "toBeDeleted");
                    ranksCopy[j].splice(i,1, "toBeDeleted");
                }
            }
        }
        for (let i=0; i<lineagesCopy.length; i++) {
            lineagesCopy[i] = lineagesCopy[i].filter(item => item !== "toBeDeleted");
            ranksCopy[i] = ranksCopy[i].filter(item => item !== "toBeDeleted");
        }
        return [lineagesCopy, ranksCopy];
    }

    calculateArcEndpoints(layer:number, layerWidthInPx:number, deg1:number, deg2:number):object {
        var radius:number = layer * layerWidthInPx; // in px
        var x1:number = round(radius * cos(deg1) + this.state.horizontalShift);
        var y1:number = round(- radius * sin(deg1) + this.state.verticalShift);
        var x2:number = round(radius * cos(deg2) + this.state.horizontalShift);
        var y2:number = round(- radius * sin(deg2) + this.state.verticalShift);
    
        return {x1: x1, y1: y1, x2: x2, y2: y2, radius:round(radius)};
    }

    calculateSVGPaths(newState:object):void {
        var alignedCroppedLineages = newState["alignedCroppedLineages"] ? newState["alignedCroppedLineages"] : this.state.alignedCroppedLineages;
        var taxonSpecifics:object = newState["taxonSpecifics"] == undefined ? this.state.taxonSpecifics : newState["taxonSpecifics"];
        var dpmm:number = viewportDimensions["dpmm"];
        var numberOfLayers:number = alignedCroppedLineages[0].length;
        var smallerDimension:number = Math.min(this.state.horizontalShift, this.state.verticalShift);
        var layerWidth:number = Math.max((smallerDimension - dpmm * 10) / numberOfLayers, dpmm * 4);

        var firstLayer = (key) => {return taxonSpecifics[key]["layers"][0]};
        var secondLayer = (key) => {return taxonSpecifics[key]["layers"][1]};
        var startDeg = (key) => {return taxonSpecifics[key]["degrees"][0]};
        var endDeg = (key) => {return taxonSpecifics[key]["degrees"][taxonSpecifics[key]["degrees"].length-1]};
        

        for (var key of Object.keys(taxonSpecifics)) {
            if (taxonSpecifics[key]["layers"][0] === 0) {
                taxonSpecifics[key]["svgPath"] = `M ${this.state.horizontalShift}, ${this.state.verticalShift} m -${layerWidth}, 0 a ${layerWidth},${layerWidth} 0 1,0 ${(layerWidth)* 2},0 a ${layerWidth},${layerWidth} 0 1,0 -${(layerWidth)* 2},0`;
            } else {
                var subpaths:string[] = [];
                if (round(endDeg(key) - startDeg(key)) === 360) {
                    var innerArc:object = this.calculateArcEndpoints(firstLayer(key), layerWidth, startDeg(key), endDeg(key));
                    var innerArcPath:string = `M ${this.state.horizontalShift}, ${this.state.verticalShift} m -${firstLayer(key)*layerWidth}, 0 a ${firstLayer(key)*layerWidth},${firstLayer(key)*layerWidth} 0 1,0 ${(firstLayer(key)*layerWidth)* 2},0 a ${firstLayer(key)*layerWidth},${firstLayer(key)*layerWidth} 0 1,0 -${(firstLayer(key)*layerWidth)* 2},0`;
                    subpaths = [innerArcPath];

                    if (taxonSpecifics[key]["layers"].length === 2) {
                        var midArcPath:string = `M ${this.state.horizontalShift}, ${this.state.verticalShift} m -${secondLayer(key)*layerWidth}, 0 a ${secondLayer(key)*layerWidth},${secondLayer(key)*layerWidth} 0 1,0 ${(secondLayer(key)*layerWidth)* 2},0 a ${secondLayer(key)*layerWidth},${secondLayer(key)*layerWidth} 0 1,0 -${(secondLayer(key)*layerWidth)* 2},0`;
                        subpaths.push(midArcPath);
                    }
                    else {
                        var midArc:object = {};
                        for (let i=taxonSpecifics[key]["layers"].length-1; i>=1; i--) {
                            var curr = taxonSpecifics[key]["degrees"][i];
                            var prev = taxonSpecifics[key]["degrees"][i-1];
                            var startingLetter:string = i === taxonSpecifics[key]["layers"].length-1 ? "M" : "L";
                            midArc = this.calculateArcEndpoints(taxonSpecifics[key]["layers"][i], layerWidth, prev, curr);
                            var midArcPath:string = `${startingLetter} ${midArc["x2"]},${midArc["y2"]} A ${midArc["radius"]},${midArc["radius"]} 0 0 0 ${midArc["x1"]},${midArc["y1"]}`;
                            if (Math.abs(curr - prev) >= 180) {
                                var midArcPath:string = `${startingLetter} ${midArc["x2"]},${midArc["y2"]} A ${midArc["radius"]},${midArc["radius"]} 0 1 0 ${midArc["x1"]},${midArc["y1"]}`;  
                            };
                            subpaths.push(midArcPath);
                        }
                        
                        var lineInnertoOuter = `L ${midArc["x1"]},${midArc["y1"]} ${this.state.horizontalShift},${this.state.verticalShift + taxonSpecifics[key]["layers"][taxonSpecifics[key]["layers"].length-1]*layerWidth}`;
                        subpaths.push(lineInnertoOuter);
                    }
                    
                    var d:string = subpaths.join(" ");
                    taxonSpecifics[key]["svgPath"] = d;

                } else {
                    var innerArc:object = this.calculateArcEndpoints(firstLayer(key), layerWidth, startDeg(key), endDeg(key));
                    var innerArcPath:string = `M ${innerArc["x1"]},${innerArc["y1"]} A ${round(firstLayer(key)*layerWidth)},${round(firstLayer(key)*layerWidth)} 0 0 1 ${innerArc["x2"]},${innerArc["y2"]}`;
                    if (Math.abs(endDeg(key) - startDeg(key)) >= 180) {
                        var innerArcPath:string = `M ${innerArc["x1"]},${innerArc["y1"]} A ${innerArc["radius"]},${innerArc["radius"]} 0 1 1 ${innerArc["x2"]},${innerArc["y2"]}`;
                    };

                    var subpaths:string[] = [innerArcPath];
                    var midArc:object = {};
                    for (let i=taxonSpecifics[key]["layers"].length-1; i>=0; i--) {
                        var curr = taxonSpecifics[key]["degrees"][i];
                        var prev = i === 0 ? startDeg(key) : taxonSpecifics[key]["degrees"][i-1];
                        midArc = this.calculateArcEndpoints(taxonSpecifics[key]["layers"][i], layerWidth, prev, curr);
                        var midArcPath:string = `L ${midArc["x2"]},${midArc["y2"]} A ${midArc["radius"]},${midArc["radius"]} 0 0 0 ${midArc["x1"]},${midArc["y1"]}`;
                        if (Math.abs(curr - prev) >= 180) {
                            var midArcPath:string = `L ${midArc["x2"]},${midArc["y2"]} A ${midArc["radius"]},${midArc["radius"]} 0 1 0 ${midArc["x1"]},${midArc["y1"]}`;  
                        };
                        subpaths.push(midArcPath);
                    }
                    
                    var lineInnertoOuter = `L ${midArc["x1"]},${midArc["y1"]} ${innerArc["x1"]},${innerArc["y1"]}`;
                    subpaths.push(lineInnertoOuter);
                    var d:string = subpaths.join(" ");
                    taxonSpecifics[key]["svgPath"] = d;
                }
                
            }
        };
        newState["numberOfLayers"] = numberOfLayers;
        newState["layerWidth"] = layerWidth;
        this.calculateTaxonLabels(newState);
    }

    calculateTaxonLabels(newState:object):void {
        var alignedCroppedLineages = newState["alignedCroppedLineages"] ? newState["alignedCroppedLineages"] : this.state.alignedCroppedLineages;
        var totalUnassignedCount = newState["totalUnassignedCount"] ? newState["totalUnassignedCount"] : this.state.totalUnassignedCount;
        var root:string = newState["root"] ? newState["root"] : this.state.root;
        var taxonSpecifics = newState["taxonSpecifics"] == undefined ? this.state.taxonSpecifics : newState["taxonSpecifics"];
        var numberOfLayers:number = alignedCroppedLineages[0].length;
        var cx:number = this.state.horizontalShift;
        var cy:number = this.state.verticalShift;
        var layerWidthInPx:number = Math.max((Math.min(cx, cy) - viewportDimensions["dpmm"] * 10) / numberOfLayers , viewportDimensions["dpmm"] * 4);
        var startDeg = (key) => {return taxonSpecifics[key]["degrees"][0]};
        var endDeg = (key) => {return taxonSpecifics[key]["degrees"][taxonSpecifics[key]["degrees"].length-1]};

        for (var key of Object.keys(taxonSpecifics)) {
            let centerDegree, centerRadius;
            centerDegree = startDeg(key) + (endDeg(key) - startDeg(key))/2;
            centerRadius = taxonSpecifics[key]["firstLayerAligned"] + 0.333;
            let centerX = centerRadius * layerWidthInPx * cos(centerDegree);
            centerX = round(centerX) + cx;
            let centerY = - centerRadius * layerWidthInPx * sin(centerDegree);
            centerY = round(centerY) + cy;
            let center = [centerX, centerY, centerDegree];
            taxonSpecifics[key]["center"] = center;

            let alternativeCenterRadius = taxonSpecifics[key]["firstLayerAligned"] + 0.333;
            let alternativeCenterX = alternativeCenterRadius * layerWidthInPx * cos(centerDegree);
            alternativeCenterX = round(alternativeCenterX) + cx;
            let alternativeCenterY = - alternativeCenterRadius * layerWidthInPx * sin(centerDegree);
            alternativeCenterY = round(alternativeCenterY) + cy;
            let alternativeCenter = [alternativeCenterX, alternativeCenterY, centerDegree];
            taxonSpecifics[key]["alternativeCenter"] = alternativeCenter;
        };

        for (var key of Object.keys(taxonSpecifics)) {
            if (taxonSpecifics[key]["layers"][0] === 0 ) {
                taxonSpecifics[key]["label"] = {
                    "direction": "circumferential",
                    "left": this.state.horizontalShift,
                    "right": "unset",
                    "top": this.state.verticalShift,
                    "transform": "translate(-50%, -50%)",
                    "transformOrigin": "center center",
                    "opacity": "1",
                    "angle": 0,
                    "abbreviation": root,
                    "display": "unset",
                    "fullLabel": root
                }
            } else {
                let direction = (taxonSpecifics[key]["layers"].length === 2 && taxonSpecifics[key]["layers"][1] === numberOfLayers) ? "radial" : "circumferential";
                //let direction = (numberOfLayers - taxonSpecifics[key]["firstLayerAligned"] === 1) ? "radial" : "circumferential";
                let angle, left, right, top, transform, transformOrigin, alternativeAngle, alternativeLeft, alternativeRight, alternativeTransform, alternativeTransformOrigin, alternativeTop;
                if (direction === "radial") {
                    angle = taxonSpecifics[key]["center"][2] <= 180 ? - taxonSpecifics[key]["center"][2] : + taxonSpecifics[key]["center"][2];
                    left = angle > 0 ? taxonSpecifics[key]["alternativeCenter"][0] : "unset";
                    right = left === "unset" ? (document.documentElement.clientWidth - taxonSpecifics[key]["alternativeCenter"][0]) : "unset";
                    angle = left === "unset" ? 270 - angle : 360 - (270 - angle);
                    top = taxonSpecifics[key]["alternativeCenter"][1];
                    transform = `translate(0, -50%) rotate(${angle}deg)`;
                    transformOrigin = left === "unset" ? "center right" : "center left";
                } else {
                    angle = (((270 - taxonSpecifics[key]["center"][2]) + 360) % 360) > 180 && (((270 - taxonSpecifics[key]["center"][2]) + 360) % 360 <= 360) ? taxonSpecifics[key]["center"][2] % 360 : (taxonSpecifics[key]["center"][2] + 180) % 360;
                    left = taxonSpecifics[key]["center"][0];
                    right = "unset";
                    top = taxonSpecifics[key]["center"][1];
                    transform = `translate(-50%, -50%) rotate(${angle}deg)`;
                    transformOrigin = "center center";

                    alternativeAngle = taxonSpecifics[key]["alternativeCenter"][2] <= 180 ? - taxonSpecifics[key]["alternativeCenter"][2] : + taxonSpecifics[key]["alternativeCenter"][2];
                    alternativeLeft = alternativeAngle > 0 ? taxonSpecifics[key]["alternativeCenter"][0] : "unset";
                    alternativeRight = alternativeLeft === "unset" ? (document.documentElement.clientWidth - taxonSpecifics[key]["alternativeCenter"][0]) : "unset";
                    alternativeTop = taxonSpecifics[key]["alternativeCenter"][1];
                    alternativeAngle = alternativeLeft === "unset" ? 270 - alternativeAngle : 360 - (270 - alternativeAngle);
                    alternativeTransform = `translate(0, -50%) rotate(${alternativeAngle}deg)`;
                    alternativeTransformOrigin = alternativeLeft === "unset" ? "center right" : "center left";
                }
                let percentage:number = round((taxonSpecifics[key]["totalCount"] / totalUnassignedCount) * 100);
                let oldPercentage:number = round(((taxonSpecifics[key]["degrees"][taxonSpecifics[key]["degrees"].length-1] - taxonSpecifics[key]["degrees"][0]) / 360) * 100);
                taxonSpecifics[key]["label"] = {
                    "direction": direction,
                    "left": left,
                    "right": right,
                    "top": top,
                    "transform": transform,
                    "transformOrigin": transformOrigin,
                    "opacity": "1",
                    "angle": angle,
                    "abbreviation": key,
                    "display": "unset",
                    "fullLabel": key + ` ${percentage}%`,
                    "alternativeAngle": alternativeAngle,
                    "alternativeLeft": alternativeLeft,
                    "alternativeRight": alternativeRight,
                    "alternativeTransform": alternativeTransform,
                    "alternativeTransformOrigin": alternativeTransformOrigin,
                    "alternativeTop": alternativeTop
                }

                if (taxonSpecifics[key]["rank"] === "species") {
                    let abbr:string = taxonSpecifics[key]["label"]["abbreviation"];
                    if (abbr.split(" ").length >= 2 && !(abbr.split(" ")[1] === "sp.")) {
                        let newAbbr:string = abbr.split(" ")[0].slice(0, 1) + ". " + abbr.split(" ").slice(1, abbr.split(" ").length).join(" ");
                        taxonSpecifics[key]["label"]["abbreviation"] = newAbbr;
                    }
                    else if (abbr.split(" ").indexOf("sp.") !== -1) {
                        let newAbbr:string = abbr.split(" ").slice(0, abbr.split(" ").indexOf("sp.") + 1).join(" ");
                        taxonSpecifics[key]["label"]["abbreviation"] = newAbbr;
                    }
                }
            }
        };
        this.getTaxonShapes(newState);
    }

    getTaxonShapes(newState:object):void {
        // var colors:string[] = ["6CCFF6", "1B998B", "A1E887", "EA638C", "B33C86"];
        // var colors:string[] = ["1B998B", "A1E887", "1E96FC", "B33C86","003F91", ];
        //var colors:string[] = newState["colors"] ? newState["colors"].map(hexToRGB) : this.state.colors.map(hexToRGB);
        var croppedLineages:string[][] = newState["croppedLineages"] == undefined ? this.state.croppedLineages : newState["croppedLineages"];
        var croppedLineages:string[][] = JSON.parse(JSON.stringify(croppedLineages));
        var taxonSpecifics = newState["taxonSpecifics"] == undefined ? this.state.taxonSpecifics : newState["taxonSpecifics"];

        let strokes:string[] = [];
        let colorIndex:number = 0;
        for (let i=0; i<croppedLineages.length; i++) {
            if (croppedLineages[i].length > 1) {
                let firstAncestor:string = croppedLineages[i][1];
                if (strokes.indexOf(firstAncestor) === -1) {
                    taxonSpecifics[firstAncestor]["fill"] = colors[colorIndex % colors.length];
                    taxonSpecifics[firstAncestor]["stroke"] = skeletonColor;
                    strokes.push(firstAncestor);
                    colorIndex++;
                }

                for (let j=2; j<croppedLineages[i].length; j++) {
                    let ancestorColor = taxonSpecifics[croppedLineages[i][1]]["fill"];
                    let nextColorIndex = (colors.indexOf(ancestorColor) + 1) % colors.length;
                    let nextColor = colors[nextColorIndex];
                    let selfStartDeg:number = taxonSpecifics[croppedLineages[i][j]]["degrees"][0];
                    let ancestorStartDeg:number = taxonSpecifics[croppedLineages[i][1]]["degrees"][0];
                    let ancestorEndDeg:number = taxonSpecifics[croppedLineages[i][1]]["degrees"][taxonSpecifics[croppedLineages[i][1]]["degrees"].length-1];
                    let coef:number = (selfStartDeg - ancestorStartDeg) / (ancestorEndDeg - ancestorStartDeg);
                    let tintFactor:number = (taxonSpecifics[croppedLineages[i][j]]["firstLayerAligned"] - 1) / 10;
                    var hue = midColor(ancestorColor, nextColor, coef);
                    var tintifiedHue = tintify(hue, tintFactor);
                    taxonSpecifics[croppedLineages[i][j]]["fill"] = tintifiedHue;
                    taxonSpecifics[croppedLineages[i][j]]["stroke"] = skeletonColor;
                }
            }
        }
        taxonSpecifics[croppedLineages[0][0]]["fill"] = "white";
        taxonSpecifics[croppedLineages[0][0]]["stroke"] = skeletonColor;
        this.setState(newState);
    }

    changePalette() {
        var newPaletteInput:string = (document.getElementById("new-palette") as HTMLInputElement).value;
        var newPalette:string[] = Array.from(newPaletteInput.matchAll(/[0-9a-f]{6}/g)).map(String);
        this.getTaxonShapes({"colors": newPalette});
    }

    handleClick(shapeId):void {
        var taxon:string = shapeId.match(/.+?(?=_)/)[0];
        var currLayer:number = parseInt(shapeId.match(/-?\d+/)[0]);
        var nextLayer;
        if (this.state.root.includes("&")) {
            nextLayer = currLayer <= 0 ? this.state.layer + (currLayer-1) : (currLayer + this.state.layer) - 1;
        }
        else {
            nextLayer = currLayer <= 0 ? this.state.layer + (currLayer-1) : currLayer + this.state.layer;
        }
        this.cropLineages(taxon, nextLayer, this.state.alteration, this.state.collapse);
    }

    checkTaxonLabelWidth():string[] {
        var taxonSpecifics:object = this.state.taxonSpecifics;
        var tooWide:string[] = [];
        for (let key of Object.keys(taxonSpecifics)) {
            let height = document.getElementById(`${key}_-_${taxonSpecifics[key]["firstLayerUnaligned"]}-label`)!.offsetHeight;
            let width = document.getElementById(`${key}_-_${taxonSpecifics[key]["firstLayerUnaligned"]}-label`)!.offsetWidth;
            
            if (taxonSpecifics[key]["label"]["direction"] === "radial") {
                var topBeforeRotation = taxonSpecifics[key]["center"][1] - height/2;
                var bottomBeforeRotation = taxonSpecifics[key]["center"][1] + height/2;
                var leftBeforeRotation = taxonSpecifics[key]["center"][0];
                var rightBeforeRotation = taxonSpecifics[key]["center"][0] + width;
                var cx = taxonSpecifics[key]["center"][0];
                var cy = taxonSpecifics[key]["center"][1];
                var angle = taxonSpecifics[key]["label"]["angle"];
                var fourPoints = getFourCorners(topBeforeRotation, bottomBeforeRotation, leftBeforeRotation, rightBeforeRotation, cx, cy, angle);

                var shape:any = document.getElementById(`${key}_-_${taxonSpecifics[key]["firstLayerUnaligned"]}`)!;
                let bottomLeft = document.querySelector("svg")!.createSVGPoint();
                bottomLeft.x = fourPoints["bottomLeft"][0];
                bottomLeft.y = fourPoints["bottomLeft"][1];

                let bottomRight = document.querySelector("svg")!.createSVGPoint();
                bottomRight.x = fourPoints["bottomRight"][0];
                bottomRight.y = fourPoints["bottomRight"][1];

                let topLeft = document.querySelector("svg")!.createSVGPoint();
                topLeft.x = fourPoints["topLeft"][0];
                topLeft.y = fourPoints["topLeft"][1];

                let topRight = document.querySelector("svg")!.createSVGPoint();
                topRight.x = fourPoints["topRight"][0];
                topRight.y = fourPoints["topRight"][1];
                if (!((shape.isPointInFill(bottomLeft) && shape.isPointInFill(topLeft)) || (shape.isPointInFill(bottomRight) && shape.isPointInFill(topRight)))) {
                    tooWide.push(key);
                }
            } else {
                var shapeCenters0:number = taxonSpecifics[key]["center"][0];
                var shapeCenters1:number = taxonSpecifics[key]["center"][1];
                var topBeforeRotation = shapeCenters1 - height/2;
                var bottomBeforeRotation = shapeCenters1 + height/2;
                var leftBeforeRotation = shapeCenters0 - width/2;
                var rightBeforeRotation = shapeCenters0 + width/2;
                var cx = shapeCenters0;
                var cy = shapeCenters1;
                var angle = taxonSpecifics[key]["label"]["angle"];
                var fourPoints = getFourCorners(topBeforeRotation, bottomBeforeRotation, leftBeforeRotation, rightBeforeRotation, cx, cy, angle);

                var shape:any = document.getElementById(`${key}_-_${taxonSpecifics[key]["firstLayerUnaligned"]}`)!;
                let bottomLeft = document.querySelector("svg")!.createSVGPoint();
                bottomLeft.x = fourPoints["bottomLeft"][0];
                bottomLeft.y = fourPoints["bottomLeft"][1];

                let bottomRight = document.querySelector("svg")!.createSVGPoint();
                bottomRight.x = fourPoints["bottomRight"][0];
                bottomRight.y = fourPoints["bottomRight"][1];

                let topLeft = document.querySelector("svg")!.createSVGPoint();
                topLeft.x = fourPoints["topLeft"][0];
                topLeft.y = fourPoints["topLeft"][1];

                let topRight = document.querySelector("svg")!.createSVGPoint();
                topRight.x = fourPoints["topRight"][0];
                topRight.y = fourPoints["topRight"][1];

                // Calculate where alternative, radially positioned label would fit into the shape:
                var alternativeTopBeforeRotation = taxonSpecifics[key]["center"][1] - height/2;
                var alternativeBottomBeforeRotation = taxonSpecifics[key]["center"][1] + height/2;
                var alternativeLeftBeforeRotation = taxonSpecifics[key]["center"][0] > this.state.horizontalShift ? taxonSpecifics[key]["center"][0] : taxonSpecifics[key]["center"][0] - width;
                var alternativeRightBeforeRotation = taxonSpecifics[key]["center"][0] > this.state.horizontalShift ? taxonSpecifics[key]["center"][0] + width : taxonSpecifics[key]["center"][0];
                var alternativeAngle = taxonSpecifics[key]["label"]["alternativeAngle"];
                var alternativeFourPoints = getFourCorners(alternativeTopBeforeRotation, alternativeBottomBeforeRotation, alternativeLeftBeforeRotation, alternativeRightBeforeRotation, cx, cy, alternativeAngle);

                let alternativeBottomLeft = document.querySelector("svg")!.createSVGPoint();
                alternativeBottomLeft.x = alternativeFourPoints["bottomLeft"][0];
                alternativeBottomLeft.y = alternativeFourPoints["bottomLeft"][1];

                let alternativeBottomRight = document.querySelector("svg")!.createSVGPoint();
                alternativeBottomRight.x = alternativeFourPoints["bottomRight"][0];
                alternativeBottomRight.y = alternativeFourPoints["bottomRight"][1];

                let alternativeTopLeft = document.querySelector("svg")!.createSVGPoint();
                alternativeTopLeft.x = alternativeFourPoints["topLeft"][0];
                alternativeTopLeft.y = alternativeFourPoints["topLeft"][1];

                let alternativeTopRight = document.querySelector("svg")!.createSVGPoint();
                alternativeTopRight.x = alternativeFourPoints["topRight"][0];
                alternativeTopRight.y = alternativeFourPoints["topRight"][1];

                let alternativeMidLeft = document.querySelector("svg")!.createSVGPoint();
                alternativeMidLeft.x = alternativeFourPoints["topLeft"][0] / 2 + alternativeFourPoints["bottomLeft"][0] / 2;
                alternativeMidLeft.y = alternativeFourPoints["topLeft"][1] / 2 + alternativeFourPoints["bottomLeft"][1] / 2;

                if (!(shape.isPointInFill(bottomLeft) && shape.isPointInFill(bottomRight) && shape.isPointInFill(topLeft) && shape.isPointInFill(topRight)) && !(taxonSpecifics[key]["label"]["abbreviation"] === "") && !(shape.isPointInFill(alternativeBottomLeft) && shape.isPointInFill(alternativeBottomRight) && shape.isPointInFill(alternativeTopLeft) && shape.isPointInFill(alternativeTopRight) && shape.isPointInFill(alternativeMidLeft))) {
                    tooWide.push(key);
                } else {
                    if (shape.isPointInFill(alternativeBottomLeft) && shape.isPointInFill(alternativeBottomRight) && shape.isPointInFill(alternativeTopLeft) && shape.isPointInFill(alternativeTopRight) && shape.isPointInFill(alternativeMidLeft)) {
                        taxonSpecifics[key]["label"]["angle"] = taxonSpecifics[key]["label"]["alternativeAngle"];
                        taxonSpecifics[key]["label"]["left"] = taxonSpecifics[key]["label"]["alternativeLeft"];
                        taxonSpecifics[key]["label"]["right"] = taxonSpecifics[key]["label"]["alternativeRight"];
                        taxonSpecifics[key]["label"]["transform"] = taxonSpecifics[key]["label"]["alternativeTransform"];
                        taxonSpecifics[key]["label"]["transformOrigin"] = taxonSpecifics[key]["label"]["alternativeTransformOrigin"];
                        taxonSpecifics[key]["label"]["top"] = taxonSpecifics[key]["label"]["alternativeTop"];
                    }
                }
            }
        }
        return tooWide;
    }    

    abbreviate(abbreviatables:string[]) {
        let newTaxonSpecifics:object = JSON.parse(JSON.stringify(this.state.taxonSpecifics))
        for (let key of abbreviatables) {
            let newAbbreviation:string;
            if (newTaxonSpecifics[key]["label"]["abbreviation"].length > 25) {
                newAbbreviation = newTaxonSpecifics[key]["label"]["abbreviation"].slice(0, 24) + ".";
            } else {
                newAbbreviation = newTaxonSpecifics[key]["label"]["abbreviation"].slice(0, newTaxonSpecifics[key]["label"]["abbreviation"].length-2) + ".";
            }
            let dotIndex:number = newAbbreviation.indexOf(".");
            if (newTaxonSpecifics[key]["label"]["fullLabel"][dotIndex] === " ") {
                newAbbreviation = newAbbreviation.slice(0, newAbbreviation.length-1);
            }
            if (newTaxonSpecifics[key]["label"]["fullLabel"][dotIndex-1] === " ") {
                newAbbreviation = newAbbreviation.slice(0, newAbbreviation.length-2);
            }
            newAbbreviation = newAbbreviation.length < 4 ? "" : newAbbreviation;
            if (newAbbreviation.length === 0) {
                newTaxonSpecifics[key]["label"]["display"] = "none";
                newTaxonSpecifics[key]["label"]["direction"] = "circumferential";
            }
            newTaxonSpecifics[key]["label"]["abbreviation"] = newAbbreviation;
        }
        this.setState({taxonSpecifics: newTaxonSpecifics});
    }


    render() {
        currentState = this.state;
        var shapes:any = [];
        var labels:any = [];
        var clipPaths:any = [];
        let tS:object = this.state.taxonSpecifics;
        for (let item of Object.keys(tS)) {
            let id:string = `${item}_-_${tS[item]["firstLayerUnaligned"]}`;
            let redirectTo:string = tS[item]["layers"][0] === 0 ? `${this.state.ancestors[this.state.ancestors.length - 1]}_-_0` : id;
            shapes.push(<TaxonShape key={id} id={id} abbr={tS[item]["label"]["abbreviation"]} onClick={() => this.handleClick(redirectTo)} d={tS[item]["svgPath"]} strokeWidth={viewportDimensions["dpmm"] * 0.265} fillColor={tS[item]["fill"]} labelOpacity={tS[item]["label"]["opacity"]} display={tS[item]["label"]["display"]} fullLabel={tS[item]["label"]["fullLabel"]} stroke={tS[item]["stroke"]}/>);
            if (~item.indexOf("&")) {
                clipPaths.push(<path d={tS[item]["svgPath"]}/>)
            }
        }
        
        for (let item of Object.keys(tS)) {
            let id:string = `${item}_-_${tS[item]["firstLayerUnaligned"]}`;
            let redirectTo:string = tS[item]["layers"][0] === 0 ? `${this.state.ancestors[this.state.ancestors.length - 1]}_-_0` : id;
            let label = <TaxonLabel key={`${id}-label`} id={id} abbr={tS[item]["label"]["abbreviation"]} transform={tS[item]["label"]["transform"]} left={tS[item]["label"]["left"]} right={tS[item]["label"]["right"]} top={tS[item]["label"]["top"]} transformOrigin={tS[item]["label"]["transformOrigin"]} opacity={tS[item]["label"]["opacity"]} display={tS[item]["label"]["display"]} onClick={() => {this.handleClick(redirectTo)}} fullLabel={tS[item]["label"]["fullLabel"]}/>;
            labels.push(label);
        }

        for (let i=this.state.ancestors.length-1; i>=0; i--) {
            var ancestor = this.state.ancestors[i];
            var actualI = i - this.state.ancestors.length;
            labels.push(<AncestorLabel key={`${ancestor}_-_${actualI+1}`} id={`${ancestor}_-_${actualI+1}`} taxon={ancestor} top={`${10+2.5*(this.state.ancestors.length-i)}vmin`} onClick={() => {this.handleClick(`${this.state.ancestors[i]}_-_${(i-this.state.ancestors.length)+1}`)}}/>)
        }

        return [<svg style={{"height": "100%", "width": "100%", "margin": "0", "padding": "0", "boxSizing": "border-box", "border": "none"}} id="shapes">{shapes} <clipPath id="mask">{clipPaths}</clipPath></svg>,<div id="labels">{labels}</div>]
    }
}

/* ===== DRAWING THE PLOT ===== */
reactRoot.render(<PlotDrawing lineages={lineagesNames} ranks={lineagesRanks}/>);

/* ===== FUNCTION DEFINITIONS ===== */
function loadDataFromTSV(tsv_path) {
    $.ajax({
        type: "GET",
        url: "/load_tsv_data",
        data: {"tsv_path": tsv_path},
        success: function (response) {
            allTaxa = response["taxDict"];
            console.log("taxopy data as JSON object: ", JSON.stringify(allTaxa));
        },
        error: function (response) {
            console.log("ERROR", response);
        }
    });
}

function radians(degrees):number {
    degrees = 270 - degrees;
    var pi = Math.PI;
    return degrees * (pi/180);
}

function getViewportDimensions():object {
    var dpmm:number = document.getElementById('dpmm')!.offsetWidth; // returns the div's width in px, thereby telling us how many px equal 1mm for our particular screen
    var cx:number = window.innerWidth / 2;
    var cy:number = window.innerHeight / 2;
    return {
        "cx": cx,
        "cy": cy,
        "dpmm": dpmm
    }
}

function TaxonShape(props) {
    return <path id={props.id} d={props.d} onMouseOver={() => hoverHandler(props.id, props.fullLabel)} onMouseOut={() => onMouseOutHandler(props.id, props.labelOpacity, props.abbr, props.display)} onClick={props.onClick} style={{"stroke": props.stroke, "strokeWidth": "0.2vmin", "fill": props.fillColor}}/>;
}
function TaxonLabel(props) {
    return <p id={`${props.id}-label`} onMouseOver={() => hoverHandler(props.id, props.fullLabel)} onMouseOut={() => onMouseOutHandler(props.id, props.opacity, props.abbr, props.display)} onClick={props.onClick} style={{"margin": "0", "padding": "0", "lineHeight": "2vmin", "position": "absolute", "fontFamily": "calibri", "fontSize": "2vmin", "left": props.left, "right": props.right, "top": props.top, "transformOrigin": props.transformOrigin, "transform": props.transform, "color": "#800080", "opacity": props.opacity, "display": props.display}}>{props.abbr}</p>
}

function AncestorLabel(props) {
    return <p id={props.id} className="ancestor" style={{"margin": "0", "position": "fixed", "fontFamily": "calibri", "fontSize": "2vmin", "top": props.top, "left": "2vmin", "color": skeletonColor, "fontWeight": "bold"}} onClick={props.onClick}>{props.taxon}</p>
}

//addEventListener("mousemove", (event) => handleMouseMove(event));
function handleMouseMove(event):void {
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
    
    console.log("cursorX, cursorY: ", event.pageX, event.pageY);
}

function round(number, decimal=3):number {
    return (Math.round(number * Math.pow(10, decimal)) / Math.pow(10, decimal));
}

function cos(number):number {
    return Math.cos(radians(number));
}

function sin(number):number {
    return Math.sin(radians(number));
}

function hexToRGB(hex):string {
    var aRgbHex = hex.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return `rgb(${aRgb[0]}, ${aRgb[1]}, ${aRgb[2]})`;
}

function midColor(rgb1:string, rgb2:string, coef:number):string {
    var coef = coef / 2;
    var rgb1List:number[] = rgb1.match(/\d+/g)?.map(item => parseInt(item)) ?? [];
    var rgb2List:number[] = rgb2.match(/\d+/g)?.map(item => parseInt(item)) ?? [];
    var newRgb:number[] = [];
    for (let i = 0; i < 3; i++) {
        var newNum = rgb1List[i] < rgb2List[i] ? rgb1List[i] + (coef * (rgb2List[i] - rgb1List[i])) : rgb1List[i] - (coef * (rgb1List[i] - rgb2List[i]));
        newRgb.push(Math.round(newNum));
    }
    return `rgb(${newRgb[0]}, ${newRgb[1]}, ${newRgb[2]})`;
}

function tintify(rgb:string, tintFactor:number):string {
    var rgbList:number[] = rgb.match(/\d+/g)?.map(item => parseInt(item)) ?? [];
    var newRgb:number[] = [];
    for (let i = 0; i < 3; i++) {
        var newNum = rgbList[i] + ((255 - rgbList[i]) * tintFactor);
        newRgb.push(Math.round(newNum));
    }
    return `rgb(${newRgb[0]}, ${newRgb[1]}, ${newRgb[2]})`;
}

function hoverHandler(id:string, fullLabel:string):void {
    if (id.indexOf("-label") > -1) {
        var label = id;
        var shape = id.replace("-label", "");
    } else {
        var shape = id;
        var label = id + "-label";
    }

    document.getElementById(shape)!.style.strokeWidth = "0.4vmin";
    document.getElementById(label)!.style.fontWeight = "bold";
    document.getElementById(label)!.style.zIndex = "1000";
    document.getElementById(label)!.style.border = "0.4vmin solid #800080";
    document.getElementById(label)!.style.opacity = "1";
    document.getElementById(label)!.style.display = "unset";
    document.getElementById(label)!.style.backgroundColor = "white";
    document.getElementById(label)!.innerText = fullLabel;
}

function onMouseOutHandler(id:string, usualOpacity:string, abbreviation:string, display:string):void {
    if (id.indexOf("-label") > -1) {
        var label = id;
        var shape = id.replace("-label", "");
    } else {
        var shape = id;
        var label = id + "-label";
    }
    document.getElementById(shape)!.style.strokeWidth = "0.2vmin";
    document.getElementById(label)!.style.fontWeight = "normal";
    document.getElementById(label)!.style.zIndex = "unset";
    document.getElementById(label)!.style.border = "none";
    document.getElementById(label)!.style.backgroundColor = "unset";
    document.getElementById(label)!.style.opacity = usualOpacity;
    document.getElementById(label)!.innerText = abbreviation;
    document.getElementById(label)!.style.display = display;
}


// Returns a set of arrays, where each array contains all elements that will be on the same level in the plot.
function getLayers(lineagesCopy:string[][], unique:boolean=false):string[][] {
    var longestLineageLength:number = Math.max(...lineagesCopy.map(item => item.length)); // get the length of the longest lineage, i.e. how many layers the plot will have
    var layers:string[][] = [];
    for (let i=0; i<longestLineageLength; i++) {
        var layer:string[] = [];
        for (let j=0; j<lineagesCopy.length; j++) {
            layer.push(lineagesCopy[j][i]);
        }
        if (unique) { 
            layer = layer.filter((value, index, self) => Boolean(value) && self.indexOf(value) === index);
        }
        layers.push(layer);
    }
    return layers;
}

function getFourCorners(top:number, bottom:number, left:number, right:number, cx:number, cy:number, angle:number):object {
    var topLeft:number[] = [((left-cx)*Math.cos(angle* (Math.PI/180)) - (top-cy)*Math.sin(angle* (Math.PI/180))) + cx, ((left-cx)*Math.sin(angle* (Math.PI/180)) + (top-cy)*Math.cos(angle* (Math.PI/180))) + cy];
    var topRight:number[] = [((right-cx)*Math.cos(angle* (Math.PI/180)) - (top-cy)*Math.sin(angle* (Math.PI/180))) + cx, ((right-cx)*Math.sin(angle* (Math.PI/180)) + (top-cy)*Math.cos(angle* (Math.PI/180))) + cy];
    var bottomLeft:number[] = [((left-cx)*Math.cos(angle* (Math.PI/180)) - (bottom-cy)*Math.sin(angle* (Math.PI/180))) + cx, ((left-cx)*Math.sin(angle* (Math.PI/180)) + (bottom-cy)*Math.cos(angle* (Math.PI/180))) + cy];
    var bottomRight:number[] = [((right-cx)*Math.cos(angle* (Math.PI/180)) - (bottom-cy)*Math.sin(angle* (Math.PI/180))) + cx, ((right-cx)*Math.sin(angle* (Math.PI/180)) + (bottom-cy)*Math.cos(angle* (Math.PI/180))) + cy];
    return {topLeft: topLeft, topRight: topRight, bottomLeft: bottomLeft, bottomRight: bottomRight};
}

