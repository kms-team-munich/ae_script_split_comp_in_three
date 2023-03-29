var window = new Window("palette", "Split comp in three", undefined);
var text = window.add("statictext", undefined, "Select composition resolution");
var dropdown = window.add("dropdownlist", undefined, ["3240 x 1920", "6480 x 3840"]);
var startButton = window.add("button", undefined, "Run script");

window.show();

var width = 3240;
var height = 1920;

startButton.onClick = function() {
  
  if(dropdown.selection.text){

    if(dropdown.selection.text == "3240 x 1920"){
        width = 3240;
        height = 1920;
    }else if(dropdown.selection.text == "6480 x 3840"){
        width = 6480;
        height = 3840;
    }

    var mainComp = app.project.activeItem;

    if (mainComp instanceof CompItem) {
    app.project.items.addComp("ScreenA", width/3, height, 1, mainComp.duration, mainComp.frameRate);
    var screenA = app.project.item(app.project.items.length);
    screenA.layers.add(mainComp, mainComp.duration);
    screenA.layer(1).property("Anchor Point").setValue([0, 0]);
    screenA.layer(1).property("position").setValue([-width/3 * 2, 0]);

    app.project.items.addComp("ScreenB", width/3, height, 1, mainComp.duration, mainComp.frameRate);
    var screenB = app.project.item(app.project.items.length);
    screenB.layers.add(mainComp, mainComp.duration);
    screenB.layer(1).property("Anchor Point").setValue([0, 0]);
    screenB.layer(1).property("position").setValue([-width/3, 0]);
    
    app.project.items.addComp("ScreenC", width/3, height, 1, mainComp.duration, mainComp.frameRate);
    var screenC = app.project.item(app.project.items.length);
    screenC.layers.add(mainComp, mainComp.duration);
    screenC.layer(1).property("Anchor Point").setValue([0, 0]);
    screenC.layer(1).property("position").setValue([0, 0]);

    }else{
      alert("No comp selected - Select main comp");
    }


  }else{
    alert("No component resolution - use dropdown menu");
  }

  
}