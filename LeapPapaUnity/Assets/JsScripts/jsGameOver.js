#pragma strict

var txtResult: GUIText;


function Update () {

}
	

function OnGUI(){
	var w = Screen.width;
	var h = Screen.height;

	//GUI.DrawTexture(Rect(0,0,w,h), Resources.Load("end"));
	jsGameManager.showScore();		
}