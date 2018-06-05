const loadDatabase = (localStorageKey) => {
    const databaseString = localStorage.getItem(localStorageKey)

    return JSON.parse(databaseString)
}

const homeDB = loadDatabase("HomeInventory");

//console.log(homeDB);

const docFrag = document.createDocumentFragment();

// for (let tableName in homeDB) {
//     const tableValue = homeDB[tableName];
//     const addSection = document.createElement("section");

//     tableValue.forEach(element => {
//         const addParagraph = document.createElement("p");
        
//         // for (prop in element) {
//         //     textToAdd = document.createTextNode(element[prop] + " 44 ");
//         //     addParagraph.appendChild(textToAdd);
//         // }

//         textToAdd = document.createTextNode(`The ${element["name"]} in the ${element["location"]} is ${element["description"]}`)

//         addParagraph.appendChild(textToAdd);
//         addSection.appendChild(addParagraph);
//     });

//     docFrag.appendChild(addSection);
// }

// document.querySelector("#myStuff").appendChild(docFrag);

const appendSection = (invArray) => {
    
    const tableValue = homeDB[invArray];
    const addSection = document.createElement("section");

    tableValue.forEach(element => {
        const addParagraph = document.createElement("p");
        
     
        textToAdd = document.createTextNode(`The ${element["name"]} in the ${element["location"]} is ${element["description"]}`)

        addParagraph.appendChild(textToAdd);
        addSection.appendChild(addParagraph);
    });

    docFrag.appendChild(addSection);
}

appendSection("furniture");
document.querySelector("#myStuff").appendChild(docFrag);