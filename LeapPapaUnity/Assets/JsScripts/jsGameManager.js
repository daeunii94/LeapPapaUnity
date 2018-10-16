#pragma strict


//게임 오브젝트
var ball: Transform;


//점수 처리
var txtScore: GUIText;
var txtStage: GUIText;
var txtTryAgain: GUIText;

//게임에 필요한 변수
static var ballCnt = 3;

private var stageCnt = 5;
private var stageNum = 1;
private var score = 0;

//외부 모듈과 공용 변수
enum STATE { STAGE, RESET, HIT, DESTROY, OUT, IDLE, READY, DEMO };

static var state: STATE = STATE.STAGE;
static blockNum: int;
static blockPos: Vector3;


//------------------------
//순환루프
//------------------------

function Update() {

}

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

//------------------------
//ball 초기화
//------------------------

function ResetPosition() {

}

//------------------------
//ball out 처리
//------------------------

function SetOut() {

}

//------------------------
//점수처리- 블록 남아 있음
//------------------------

function SetHit() {


}

//------------------------
//블록 파괴함
//------------------------
function SetDestroy() {

}

//------------------------
//남은 블록 수 계산
//------------------------

function GetBlockCount() {

}

//------------------------
//Clear Stage
//------------------------

function ClearStage() {

}

//------------------------
//스코어 등 화면 표시
//------------------------

function OnGUI() {

}

//------------------------
//try again?
//------------------------
function ShowMessage() {

}