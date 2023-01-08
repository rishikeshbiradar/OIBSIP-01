// Function For Taking Input
function handleclick(value)
{
    document.getElementById("input").value += value;
}

// Function For Clearing Input Screen
function clrScr()
{
    document.getElementById("input").value = "";
}

// Function For Calculate The Operation
function calculate()
{
    var p=document.getElementById("input").value;
    var q = eval(p);
    document.getElementById("input").value = q;

}