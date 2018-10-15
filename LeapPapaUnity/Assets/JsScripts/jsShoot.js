#pragma strict

var ball : GameObject;
var power = 1000;


function Update() {
	if(Input.GetButtonDown("Fire1"))
		ball.GetComponent.<Rigidbody>().AddForce(Vector3.forward * power);

}


