var window = new Window("palette", "4K - Split comp in three", undefined);
var startButton = window.add("button", undefined, "Run script");

window.show();

startButton.onClick = function() {
  var mainComp = app.project.activeItem;

  if (mainComp instanceof CompItem) {
    app.project.items.addComp("ScreenA", 1080, 1920, 1, mainComp.duration, mainComp.frameRate);
    var screenA = app.project.item(app.project.items.length);
    screenA.layers.add(mainComp, mainComp.duration);
    screenA.layer(1).property("Anchor Point").setValue([0, 0]);
    screenA.layer(1).property("position").setValue([-2160, 0]);

    app.project.items.addComp("ScreenB", 1080, 1920, 1, mainComp.duration, mainComp.frameRate);
    var screenB = app.project.item(app.project.items.length);
    screenB.layers.add(mainComp, mainComp.duration);
    screenB.layer(1).property("Anchor Point").setValue([0, 0]);
    screenB.layer(1).property("position").setValue([-1080, 0]);
    
    app.project.items.addComp("ScreenC", 1080, 1920, 1, mainComp.duration, mainComp.frameRate);
    var screenC = app.project.item(app.project.items.length);
    screenC.layers.add(mainComp, mainComp.duration);
    screenC.layer(1).property("Anchor Point").setValue([0, 0]);
    screenC.layer(1).property("position").setValue([0, 0]);

  }else{
    alert("No comp selected - Select main comp");
  }
}