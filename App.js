/**
 * <div id = "parent">
 *  <div id = "child1">
 *      <h1> Hi mowa </h1>
 *      <h1> Ela unnav </h1>
 *  </div>
 *  <div id = "child2">
 *      <h1> Hi mowa </h1>
 *      <h1> Ela unnav </h1>
 *  </div>
 * </div>
 * 
 * 
 * 
 * 
 */





heading = React.createElement("div",{id : "parent"},
                                [
                                    React.createElement("div",{id: "child" },
                                    [React.createElement("h1",{},"Hi Mowa"),
                                    React.createElement("h1",{},"Ela unnav")
                                ]),

                                    React.createElement("div",{id: "child2" },
                                    [React.createElement("h1",{},"Hi Mowa"),
                                    React.createElement("h1",{},"Ela unnav")
                                ]),
                            ]);

root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);