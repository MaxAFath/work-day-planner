var taskSave = {
};
var today = new Date();

// sets the date in the currentDay Id at top of page
function setDate() {
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var date = document.getElementById("currentDay");

    date.textContent = month + 1;
    date.textContent += '/';
    date.textContent += day;
    date.textContent += '/';
    date.textContent += year;
};

setDate();



function settingTime () {
        const workHour = document.querySelectorAll('.card');
        let theHour = today.getHours();
        //console.log(workHour);

        for(var i = 0; i < workHour.length;i++){
            console.log(workHour[i].dataset.time);
            if(workHour[i].dataset.time > theHour){
                workHour[i].classList.add('future');
            }
            else if (workHour[i].dataset.time == theHour){
                workHour[i].classList.add('present');
            }
            else{
                workHour[i].classList.add('past');
            }

        }
        
       
};

settingTime();

// task text was clicked
$(".card").on("click", ".description", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});


var loadTasks = function (){
    taskSave=JSON.parse(localStorage.getItem("taskSave"));

    if(!taskSave){
        taskSave = {
            hour:[],
            task:  []
        };
    }
    $.each(taskSave,function(taskSave, arr){
        arr.array.forEach(function(taskSave) {
            
        });
    });
};

$(".button").on("click", function () {
    
    localStorage.setItem("saveTask",JSON.stringify(saveTask));
});