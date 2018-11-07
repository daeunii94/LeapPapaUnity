#pragma strict

function OnGUI() {
    var w = Screen.width;
    var h = Screen.height;


    var w1 = w / 3;
    var h1 = h * 0.6;
    var bw = 400;
    var bh = 100;


    GUI.DrawTexture(Rect(0,0,w,h), Resources.Load("gameTitle"));

    var btn1 = GUI.Button(Rect(w1, h1-2*bh, bw - 10,bh), Resources.Load("btnp"));
    var btn2 = GUI.Button(Rect(w1, h1-bh, bw - 10,bh), Resources.Load("btnr"));
    var btn3 = GUI.Button(Rect(w1, h1, bw - 10,bh), Resources.Load("btnh"));
    var btn4 = GUI.Button(Rect(w1, h1+bh, bw - 10,bh), Resources.Load("btne"));



    if(btn4 == true) {
        Application.Quit();
    }

    if(btn1 == true) {

        jsGameManager.state = STATE.STAGE;

        Application.LoadLevel("mainScene");

    } else if(btn2 == true) {
        return;
    } else if(btn3 == true) {
        return;
    }

}