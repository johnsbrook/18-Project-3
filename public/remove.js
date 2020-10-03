const createNode = (elem) => {
    return document.createElement(elem);
  };
  const appendNode = (parent, elem) => {
    // console.log(elem)
    parent.appendChild(elem);
  };
  
var idNo = 0;
  
  records();
  
  
  function records() {
    // Appending promo items with fetch and map
    const records = document.querySelector(".records");
    const recordsu = "api/products/";
    fetch(recordsu)
      .then((res) => res.json(recordsu))
      .then((data) => {
        data
          .map((d) => {
            let li = createNode("li");
            btn = createNode("button");
            (spanH = createNode("label"));
            span = createNode("span");
            p = createNode("div");
            image = createNode("img");
  
            spanH.innerText = d.product;
            spanH.setAttribute("id", d._id);  
            (btn.innerText = "Remove"), 
            btn.setAttribute("id", product._id);
            btn.setAttribute("class", "delete mb-4");
            
            appendNode(li, spanH);
            appendNode(li, btn);
            appendNode(records, li);
          })
          .catch((err) => {
            console.error("Error: ", err);
          });
      });
    }