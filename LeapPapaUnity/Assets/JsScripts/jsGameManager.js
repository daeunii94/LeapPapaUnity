#pragma strict

var stageNum = 1;

function Start() {
    MakeStage();
}


function MakeStage() {

	var px = -2.82;
    var py = 4.27;
    var pz = 4.35;
	var w = 1;
	var h = 1;


	var tmp = jsStage.Stage[stageNum - 1];

	for (var i = 0; i < 4; i++) {
		var s : String = tmp[i];
		var x = px;

		for (var j = 0; j < s.length; j++) {
			var ch = s.Substring(j, 1);
			if(ch =="." || ch == " ") {
				x += w;
				continue;
			}

			var block : GameObject = Instantiate(Resources.Load("Prefabs/pf_block" + ch, GameObject));

			block.transform.position = Vector3(x,py,pz);
			x += w;
		};

		py -= h;
	}


  
}



