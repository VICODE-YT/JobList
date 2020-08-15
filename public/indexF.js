const btnsRequirements = document.getElementsByClassName("job-requirements__requirement");
const jobCards = document.getElementsByClassName("job-list__card-job");

/* All non repetible requirements existent. */
const listRequirements = {};

/* The cards will be filtered by this requirements to be 
filtered, if it's empty, then all cards will be shown.  */
const listForFiltering = {};



for (let requirement of btnsRequirements) {

    let text = requirement.innerHTML;
    listRequirements[text] = text;/* Creates a new property with the same value, if already existe, it's overited. */

    requirement.addEventListener("click", function () {

        let requirementClicked = this.innerHTML;
        listForFiltering[requirementClicked] = requirementClicked;
        filterCardsByRequirementsChoosed();

    }, false);

}

const filterCardsByRequirementsChoosed = function(){
    let numEntries = Object.entries(listForFiltering).length;
    if ( numEntries === 0){
        /* if there's no filter, then show all. */
        for(let card of jobCards){
            card.style.display = "flex";
        }
    }else{
        for(let card of jobCards){/* JobCards is a Collection, so it's iterable */
            card.style.display = cardHasRequirementsFilter(card)===true?"flex":"none";
        }
    }

};

const cardHasRequirementsFilter = function(card){

    let requirementsByCard = card.getElementsByClassName("job-requirements__requirement");

    for (let requirementInFilter in listForFiltering) {
        if(isFilterItemInCardRequirement(requirementInFilter,requirementsByCard)=== false){
            return false;
        }
    }
    
    return true;
}

const isFilterItemInCardRequirement = function (filterItem,cardRequirement) {

    for (let requirementInCard of cardRequirement) {
    
        if(filterItem === requirementInCard.innerHTML){
            /* if the coincidence exists, inmediatly return true */
            return true;
        }

    }
    /* If the filter item isn't among de cardRequirements */
    return false;

}


const isRequirementInFilter = function(req){
    for (let requirementInFilter in listForFiltering) {
        if (req.innerHTML === listForFiltering[requirementInFilter]) {
            return true;
        }
    }
    return false;
}