#pragma strict

private var speed = 10;
private var ball : GameObject;


function Start() {
    ball = GameObject.Find("Ball");
}

function Update () {
	
}

function OnTriggerEnter(coll : Collider) {

    if(coll.gameObject.tag == "BALL") {
        coll.GetComponent.<Rigidbody>().AddForce(Vector3.forward * 50);
    }


}