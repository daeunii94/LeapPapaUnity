#pragma strict

static var speed = 5.5;



function OnTriggerEnter(coll: Collider) {
    var flag = true;

    if (coll.tag == "FENCE" || coll.tag == "CEILING") {

        CheckBounds(coll);


    } else if (coll.gameObject.tag == "BLOCK") {
        Bounce(coll);
        coll.gameObject.SendMessage("SetCollision", flag, SendMessageOptions.DontRequireReceiver);
    }
}


function OnCollisionEnter(coll: Collision) {
    var flag = true;

    if (coll.collider.gameObject.tag == "BLOCK") {
        coll.collider.gameObject.SendMessage("SetCollision", flag, SendMessageOptions.DontRequireReceiver);
        
    }

}

function Bounce(coll: Collider) {

}
function CheckBounds(coll: Collider) {
    if (coll.tag == "CEILING") {

        return;

    }
    else if (coll.tag == "FENCE") {

        return;
    }

    //블록 처리


}
