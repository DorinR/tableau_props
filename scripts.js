function compareCheckbox() {
  alert("checkbox clicked");
}

function toggleContent() {
  var item1 = "<p>Content A</p>";
  var item2 = "<p>Content B</p>";

  var containingDiv = document.getElementById("table_location");
  if (!containingDiv.hasChildNodes()) {
    containingDiv.innerHTML = item1;
  } else {
    if (containingDiv.innerHTML === item1) {
      containingDiv.innerHTML = item2;
    } else {
      containingDiv.innerHTML = item1;
    }
  }
}

var isBulkDetailsViewEnabled;

function toggleView() {
  var bulkDetailsView = generateDetails(genBulkDetails);
  var compareView = generateDetails(genCompare);

  var targetBody = document.getElementById("target_body");
  if (!targetBody.hasChildNodes()) {
    isBulkDetailsViewEnabled = true;
    targetBody.appendChild(bulkDetailsView);
  } else {
    if (isBulkDetailsViewEnabled) {
      targetBody.innerHTML = "";
      targetBody.appendChild(compareView);
      isBulkDetailsViewEnabled = false;
    } else {
      targetBody.innerHTML = "";
      targetBody.appendChild(bulkDetailsView);
      isBulkDetailsViewEnabled = true;
    }
  }
}

// function generateBulkDetailsView() {
//   var rootTr = document.createElement("tr");
//   var trChildren = [];
//   var firstTh = document.createElement("th");
//   firstTh.innerHTML = "Details de l'offre";
//   //   trChildren.push(firstTh);

//   var tds = generateTdsForBulkDetailsView();
//   tds.forEach((td) => trChildren.push(td));

//   trChildren.forEach((child) => rootTr.appendChild(child));
//   return [rootTr];
// }

function generateDetails(view) {
  var divDisplayBlock = document.createElement("div");
  divDisplayBlock.style.display = "block";
  var divRow = document.createElement("div");
  divDisplayBlock.appendChild(divRow);
  divRow.classList.add("row", "proposition");
  var divColXs12 = document.createElement("div");
  divRow.appendChild(divColXs12);
  divColXs12.classList.add("col-xs-12", "proposition-block");
  var divRow2 = document.createElement("div");
  divColXs12.appendChild(divRow2);
  divRow2.classList.add("row");
  var divRow2children = view();
  divRow2children.forEach((child) => divRow2.appendChild(child));
  return divDisplayBlock;
}

function genBulkDetails() {
  var children = [];
  data2.parties.forEach((party, i) => {
    var divCol6 = document.createElement("div");
    divCol6.classList.add("col-md-6");
    var ulElement = document.createElement("ul");
    divCol6.appendChild(ulElement);
    var liElements = getLiElements(i);
    liElements.forEach((element) => ulElement.appendChild(element));
    children.push(divCol6);
  });
  return children;
}

function genCompare() {
  var children = [];
  data2.parties.forEach((_, i) => {
    var divCol6 = document.createElement("div");
    divCol6.classList.add("col-md-6");
    var ulElement = document.createElement("ul");
    divCol6.appendChild(ulElement);
    var liElements = getLiElementsCompare(i);
    liElements.forEach((element) => ulElement.appendChild(element));
    children.push(divCol6);
  });
  return children;
}

function getLiElementsCompare(i) {
  var liElements = [];
  data2.options.forEach((option) => {
    var divPartyAnswer = getPartyAnswer(option.partyAnswer[i]);
    var li = document.createElement("li");
    li.appendChild(divPartyAnswer);
    liElements.push(li);
  });
  return liElements;
}

// function generateTdsForBulkDetailsView() {
//   // should return a list of TDs
//   var tds = [];

//   data2.parties.forEach((party, i) => {
//     var tdElement = document.createElement("td");
//     var ulElement = document.createElement("ul");
//     tdElement.appendChild(ulElement);
//     var liElements = getLiElements(i);

//     liElements.forEach((element) => ulElement.appendChild(element));

//     tds.push(tdElement);
//   });
//   return tds;
// }

function getLiElements(i) {
  var liElements = [];
  data2.options.forEach((option) => {
    if (option.partyAnswer[i].asAnswer) {
      var liElement = document.createElement("li");
      var liChildren = [];

      // create children
      var iElement = document.createElement("i");
      liChildren.push(iElement);
      var firstSpan = document.createElement("span");
      firstSpan.innerHTML = "✓ ";
      liChildren.push(firstSpan);
      var secondSpan = document.createElement("span");
      secondSpan.innerHTML = option.description;
      liChildren.push(secondSpan);

      if (option.complement) {
        var brElement = document.createElement("br");
        liChildren.push(brElement);
        var thirdSpan = document.createElement("span");
        thirdSpan.innerHTML = option.complement + ": ";
        liChildren.push(thirdSpan);
        var fourthSpan = document.createElement("span");
        fourthSpan.innerHTML = option.partyAnswer[i].answer;
        liChildren.push(fourthSpan);
      }
      liChildren.forEach((child) => liElement.appendChild(child));
      liElements.push(liElement);
    }
  });

  return liElements;
}

// function buildTable() {
//   console.log("building table ...");
//   var targetBody = document.getElementById("target_body");
//   //   targetBody.appendChild(generateBulkDetailsView()[0]);
//   var bulkDetailsView = generateBulkDetailsView();
//   var compareView = generateCompareView();
//   compareView.forEach((child) => targetBody.appendChild(child));
// }

// function generateCompareView() {
//   var rootColMd6s = [];
//   data2.options.forEach((option) => {
//     var trElement = document.createElement("tr");

//     rows = [];

//     // here we need to add the dynamically generated TDs
//     option.partyAnswer.forEach((x, i) => {
//       var divRowProposition = document.createElement("div");
//       divRowProposition.classList.add("row", "proposition");
//       var divColXs12 = document.createElement("div");
//       divColXs12.classList.add("col-xs-12", "proposition-block");
//       divRowProposition.appendChild(divColXs12);
//       var divRow = document.createElement("div");
//       divRow.classList.add("row");
//       divRow.appendChild(getPartyAnswer(x));
//       divColXs12.appendChild(divRow);
//       rows.push(divRowProposition);
//     });

//     rows.forEach((child) => trElement.appendChild(child));

//     rootColMd6s.push(trElement);
//   });

//   return rootColMd6s;
// }

function generateCompareView_() {}

function getThText(option) {
  var thText = "";
  thText += option.description;
  if (option.complement) {
    thText += `: ${option.complement}`;
  }
  return thText;
}

function getPartyAnswer(partyAnswer) {
  var parentDiv = document.createElement("div");
  var parentDivChildren = [];
  var i = document.createElement("i");
  parentDivChildren.push(i);
  var span = document.createElement("span");
  parentDivChildren.push(span);
  if (partyAnswer.asAnswer) {
    span.innerHTML = "✓ ";
    if (partyAnswer.answer) {
      var text = document.createTextNode(partyAnswer.answer);
      parentDivChildren.push(text);
    }
  } else {
    span.innerHTML = "X ";
  }
  parentDivChildren.forEach((child) => parentDiv.appendChild(child));
  return parentDiv;
}
