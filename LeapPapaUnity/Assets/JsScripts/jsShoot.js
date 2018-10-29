#pragma strict

var ball : GameObject;
var power = 1;


function Update() {
    if (Input.GetButtonDown("Fire1")) {
        //Physics.gravity.z += 1;
        ball.GetComponent.<Rigidbody>().AddForce(Vector3.forward * power);
    }
}


