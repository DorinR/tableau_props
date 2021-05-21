// anything in here gets thrown into the global scope
var data2 = {
  parties: [
    {
      partyName: "P1",
      state: "waiting",
      date: new Date(),
      why: "raisons",
      other: "autres infos",
    },
    {
      partyName: "P2",
      state: "waiting",
      date: new Date(),
      why: "raisons",
      other: "autres infos",
    },
  ],
  options: [
    {
      description: "Option sans complement",
      partyAnswer: [{ asAnswer: true }, { asAnswer: false }],
    },
    {
      description: "Date limite",
      complement: "Date",
      partyAnswer: [
        { asAnswer: true, answer: "Thu Apr 22 2021" },
        { asAnswer: false },
      ],
    },
    {
      description: "Remboursement",
      complement: "Montant",
      partyAnswer: [
        { asAnswer: true, answer: "35 $" },
        { asAnswer: true, answer: "20 $" },
      ],
    },
  ],
};
