// Random Body Color Change
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
// Date Time
const today = new Date();
const dayResult = today.toLocaleDateString("en-US", { weekday: "short" });
const dateResult = today.toLocaleDateString("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});

const day = (document.getElementById("day").innerText = dayResult);
const date = (document.getElementById("date").innerText = dateResult);
// card Add
const btnCompletes = document.querySelectorAll(".btn-complete");

for (let i = 0; i < btnCompletes.length; i++) {
  let btnComplete = btnCompletes[i];

  btnComplete.addEventListener("click", function (event) {
    // Button Disable
    event.target.style.cssText =
      "background-color: rgba(55,82,253,0.2);pointer-events: none;";
    // alert
    alert("Board Updated Successfully");
    // Heading Text Fetch and Add
    const headingText =
      event.target.parentElement.parentElement.querySelector("h3").innerText;
    const todayTime = new Date();
    const time = todayTime.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const activityContent = document.getElementById("activity-content");
    const activityContentPara = document.createElement("p");
    activityContentPara.classList =
      "p-3 rounded-[8px] bg-[#F4F7FF] text-[rgba(0,0,0,0.7)] mt-6";
    activityContentPara.innerText = `You have Complete The Task ${headingText} at ${time}
    `;
    activityContent.appendChild(activityContentPara);
    // Task Assignment
    const taskAssigned = parseFloat(
      document.getElementById("task-assigned").innerText
    );
    const sum = (taskAssigned - 1).toString().padStart(2, "0");
    const taskAssignedResult = (document.getElementById(
      "task-assigned"
    ).innerText = sum);
    // Task Assignment Menu
    const menuTask = parseFloat(document.getElementById("menu-task").innerText);
    const sumMenuTask = (menuTask + 1).toString().padStart(2, "0");
    const menuTaskResult = (document.getElementById("menu-task").innerText =
      sumMenuTask);
    // All Complete
    if (taskAssigned == 1) {
      alert("Congrates!!! You have completed all the current task");
    }
    console.log(taskAssigned);
  });
}

// All Activity Clear

document.getElementById("btn-clear").addEventListener("click", function () {
  document.getElementById("activity-content").innerHTML = "";
});

// Go to Blog
const discoverSomething = document.getElementById("discover-something");
console.log(discoverSomething);
discoverSomething.addEventListener("click", function () {
  window.location.href = "blog.html";
});
