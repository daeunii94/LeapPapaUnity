#pragma strict

function Update () {
	
}

function OnGUI() {
	var w = Screen.width;
	var h = Screen.height;
	//이미지  표시
	GUI.DrawTexture(Rect(0,0,w,h), Resources.Load("clear"));
}