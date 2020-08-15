const btnsRequirements = document.getElementsByClassName("job-requirements__requirement");
const jobCards = document.getElementsByClassName("job-list__card-job");

const listRequirements = {};/* All non repetible requirements existent. */
const listForFiltering ={};

const jobCardsFiltered = {};


for(let requirement of btnsRequirements){
    
    let text = requirement.innerHTML;
    listRequirements[text] = text;/* Creates a new property with the same value, if already existe, it's overited. */

    requirement.addEventListener("click", function () {
        
        let requirementClicked = this.innerHTML;
        listForFiltering[requirementClicked] = requirementClicked;

        /* listRequirements[texto] = texto;
        
        alert(texto); */
        filterCardsByRequirementsChoosed();

    },false);

}

const filterCardsByRequirementsChoosed = function(){
    
    for(let card of jobCards){
        let requirementsByCard = card.getElementsByClassName("job-requirements__requirement");

        for(let requirement of requirementsByCard){
            if(isRequirementInFilter(requirement.innerHTML)){
                /* if the card has at least one of the requirements, 
                then add the card to the filter */
                jobCardsFiltered[card.id] = card;
                /*jobCardsFiltered.splice()*/             

                break;
            }
        }

    }
    /* Will display none the cards wich isn't in the filter cards. */
    for(let card of jobCards){
        if(isCardInFilter(card)===false){
            card.style.display="none";
        }
    }

}
const isCardInFilter = (card)=>{
    for (let cardInFilter in jobCardsFiltered){
        if (card === jobCardsFiltered[cardInFilter] ){
            return true;
           
        }
    }
    return false;
}
const isRequirementInFilter = (requirementToCheck)=>{
    for(let req in listForFiltering){
        if(requirementToCheck == req){
            return true;
        }
    }
    return false;
}


const filterRequirement = function(requirementName){
    for(let card of jobCards){
        
        let requirementsByCard = card.getElementsByClassName("job-requirements__requirement");
        for(let requirement of requirementsByCard){
            if(requirement.innerHTML == requirementName){
                listForFiltering[requirementName] = requirementName;
                break;
            }
        }

/*         card.style.display = "none";
 */    }
}