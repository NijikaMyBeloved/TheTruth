function runAnimations() {
  document.querySelector("#id-1413").addEventListener("click", func_1413_1429);

  function func_1413_1429() {
    document.querySelector("#id-142").classList.add("animationClass-142");
    document.querySelector("#id-1439").classList.add("animationClass-null1439");
    document
      .querySelector("#id-1439 > div:first-child")
      .classList.add("bgClass-1439");
    document.querySelector("#id-145").classList.add("animationClass-145");
    document.querySelector("#id-1447").classList.add("animationClass-1447");
    document.querySelector("#id-1413").classList.add("animationClass-1413");
    document.querySelector("#id-1427").classList.add("animationClass-1427");
    document.querySelector("#id-1428").classList.add("animationClass-1428");
    document
      .querySelector(".truth-untold-1-3832-0")
      .classList.add("animationClass-146-146-0");
    document.querySelector("#id-146").classList.add("animationClass-146");
    document.querySelector("#id-1417").classList.add("animationClass-1417");
    document
      .querySelector(".europa-the-last-1-1528-0")
      .classList.add("animationClass-1418-1418-0");
    document.querySelector("#id-1418").classList.add("animationClass-1418");
    document.querySelector("#id-1440").classList.add("animationClass-null1440");
    document
      .querySelector(".europa-the-last-1-2790-0")
      .classList.add("animationClass-1419-1419-0");
    document.querySelector("#id-1419").classList.add("animationClass-1419");
    document
      .querySelector("#id-1413")
      .removeEventListener("click", func_1413_1429);

    setTimeout(() => {
      document
        .querySelector("#id-1439")
        .addEventListener("click", func_1439_142);
    }, 100);
  }

  function func_1439_142() {
    document.querySelector("#id-142").classList.add("animationClass-1429");
    document.querySelector("#id-1439").classList.add("animationClass-1439");
    document.querySelector("#id-145").classList.add("animationClass-1430");
    document.querySelector("#id-1447").classList.add("animationClass-null1447");
    document.querySelector("#id-1413").classList.add("animationClass-1433");
    document.querySelector("#id-1427").classList.add("animationClass-null1427");
    document.querySelector("#id-1428").classList.add("animationClass-null1428");
    document
      .querySelector(".truth-untold-1-3832-0")
      .classList.add("animationClass-1432-1432-0");
    document.querySelector("#id-146").classList.add("animationClass-1432");
    document.querySelector("#id-1417").classList.add("animationClass-null1417");
    document
      .querySelector(".europa-the-last-1-1528-0")
      .classList.add("animationClass-1437-1437-0");
    document.querySelector("#id-1418").classList.add("animationClass-1437");
    document.querySelector("#id-1440").classList.add("animationClass-1440");
    document
      .querySelector(".europa-the-last-1-2790-0")
      .classList.add("animationClass-1438-1438-0");
    document.querySelector("#id-1419").classList.add("animationClass-1438");
    document
      .querySelector("#id-1439")
      .removeEventListener("click", func_1439_142);

    setTimeout(() => {
      //loop login
      document.querySelector("#id-142").classList.remove("animationClass-142");
      document
        .querySelector("#id-1439")
        .classList.remove("animationClass-null1439");
      document
        .querySelector("#id-1439 > div:first-child")
        .classList.remove("bgClass-1439");
      document.querySelector("#id-145").classList.remove("animationClass-145");
      document
        .querySelector("#id-1447")
        .classList.remove("animationClass-1447");
      document
        .querySelector("#id-1413")
        .classList.remove("animationClass-1413");
      document
        .querySelector("#id-1427")
        .classList.remove("animationClass-1427");
      document
        .querySelector("#id-1428")
        .classList.remove("animationClass-1428");
      document
        .querySelector(".truth-untold-1-3832-0")
        .classList.remove("animationClass-146-146-0");
      document.querySelector("#id-146").classList.remove("animationClass-146");
      document
        .querySelector("#id-1417")
        .classList.remove("animationClass-1417");
      document
        .querySelector(".europa-the-last-1-1528-0")
        .classList.remove("animationClass-1418-1418-0");
      document
        .querySelector("#id-1418")
        .classList.remove("animationClass-1418");
      document
        .querySelector("#id-1440")
        .classList.remove("animationClass-null1440");
      document
        .querySelector(".europa-the-last-1-2790-0")
        .classList.remove("animationClass-1419-1419-0");
      document
        .querySelector("#id-1419")
        .classList.remove("animationClass-1419");
      document.querySelector("#id-142").classList.remove("animationClass-1429");
      document
        .querySelector("#id-1439")
        .classList.remove("animationClass-1439");
      document.querySelector("#id-145").classList.remove("animationClass-1430");
      document
        .querySelector("#id-1447")
        .classList.remove("animationClass-null1447");
      document
        .querySelector("#id-1413")
        .classList.remove("animationClass-1433");
      document
        .querySelector("#id-1427")
        .classList.remove("animationClass-null1427");
      document
        .querySelector("#id-1428")
        .classList.remove("animationClass-null1428");
      document
        .querySelector(".truth-untold-1-3832-0")
        .classList.remove("animationClass-1432-1432-0");
      document.querySelector("#id-146").classList.remove("animationClass-1432");
      document
        .querySelector("#id-1417")
        .classList.remove("animationClass-null1417");
      document
        .querySelector(".europa-the-last-1-1528-0")
        .classList.remove("animationClass-1437-1437-0");
      document
        .querySelector("#id-1418")
        .classList.remove("animationClass-1437");
      document
        .querySelector("#id-1440")
        .classList.remove("animationClass-1440");
      document
        .querySelector(".europa-the-last-1-2790-0")
        .classList.remove("animationClass-1438-1438-0");
      document
        .querySelector("#id-1419")
        .classList.remove("animationClass-1438");
      runAnimations();
    }, 300.00001192092896);
  }
}
runAnimations();
